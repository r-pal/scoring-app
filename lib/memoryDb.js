// A tiny in-memory stand-in for the Prisma client, used in demo mode so the
// app can run with no database. It implements only the subset of the Prisma
// API that the routes actually use, with identical call signatures, so the
// route handlers work unchanged.
//
// Data lives in memory only: it resets every time the server restarts.

import {
  factions as seedFactions,
  houses as seedHouses,
  games as seedGames,
  scores as seedScores,
} from './demoData.js';

const clone = (value) => JSON.parse(JSON.stringify(value));

// Fresh, mutable copies of the seed data.
const state = {
  faction: clone(seedFactions),
  house: clone(seedHouses),
  game: clone(seedGames),
  score: clone(seedScores),
};

// Track the next auto-increment id per model.
const nextId = {};
for (const model of Object.keys(state)) {
  const maxId = state[model].reduce((max, row) => Math.max(max, row.id), 0);
  nextId[model] = maxId + 1;
}

function matchesWhere(row, where = {}) {
  return Object.entries(where).every(([key, condition]) => {
    if (condition && typeof condition === 'object' && 'in' in condition) {
      return condition.in.includes(row[key]);
    }
    return row[key] === condition;
  });
}

function sortByIdAsc(rows) {
  return [...rows].sort((a, b) => a.id - b.id);
}

// Attaches requested relations to a row, mirroring Prisma's `include`.
function hydrate(model, row, include) {
  const result = clone(row);
  if (!include) return result;

  if (model === 'house') {
    if (include.scores) {
      result.scores = sortByIdAsc(state.score.filter((s) => s.houseId === row.id)).map(clone);
    }
    if (include.faction) {
      const faction = state.faction.find((f) => f.id === row.factionId);
      result.faction = faction ? clone(faction) : null;
    }
  }

  if (model === 'faction' && include.houses) {
    result.houses = sortByIdAsc(state.house.filter((h) => h.factionId === row.id)).map(clone);
  }

  if (model === 'game' && include.scores) {
    result.scores = sortByIdAsc(state.score.filter((s) => s.gameId === row.id)).map(clone);
  }

  return result;
}

function createModel(model) {
  const rows = () => state[model];

  return {
    async findMany({ where, include } = {}) {
      const matched = rows().filter((row) => matchesWhere(row, where));
      return sortByIdAsc(matched).map((row) => hydrate(model, row, include));
    },

    async findUnique({ where, include } = {}) {
      const row = rows().find((r) => matchesWhere(r, where));
      return row ? hydrate(model, row, include) : null;
    },

    async create({ data, include } = {}) {
      const row = { id: nextId[model]++, createdAt: new Date().toISOString(), ...data };
      rows().push(row);
      return hydrate(model, row, include);
    },

    async createMany({ data } = {}) {
      const items = Array.isArray(data) ? data : [data];
      for (const item of items) {
        rows().push({ id: nextId[model]++, createdAt: new Date().toISOString(), ...item });
      }
      return { count: items.length };
    },

    async update({ where, data, include } = {}) {
      const row = rows().find((r) => matchesWhere(r, where));
      if (!row) throw new Error(`${model} not found`);
      Object.assign(row, data);
      return hydrate(model, row, include);
    },

    async updateMany({ where, data } = {}) {
      const matched = rows().filter((row) => matchesWhere(row, where));
      for (const row of matched) Object.assign(row, data);
      return { count: matched.length };
    },

    async delete({ where } = {}) {
      const index = rows().findIndex((r) => matchesWhere(r, where));
      if (index === -1) throw new Error(`${model} not found`);
      const [removed] = rows().splice(index, 1);
      return clone(removed);
    },

    async deleteMany({ where } = {}) {
      const remaining = rows().filter((row) => !matchesWhere(row, where));
      const removedCount = rows().length - remaining.length;
      state[model] = remaining;
      return { count: removedCount };
    },
  };
}

const memoryDb = {
  faction: createModel('faction'),
  house: createModel('house'),
  game: createModel('game'),
  score: createModel('score'),
  async $disconnect() {},
};

export default memoryDb;
