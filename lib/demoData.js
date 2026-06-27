// Sample data used by the in-memory demo backend (no database required).
// This mirrors prisma/seed.ts so the demo behaves like a freshly seeded DB.
// IDs are explicit so relations between records are easy to follow.

export const factions = [
  { id: 1, name: "Faction Balance", motto: "United in equilibrium" },
  { id: 2, name: "The Steel Alliance", motto: "Strength through unity" },
  { id: 3, name: "The Grand Coalition", motto: "Many houses, one destiny" },
];

export const houses = [
  {
    id: 1,
    name: "House of Boils",
    motto: "One's pus is another's salve",
    crestUrl: "https://upload.wikimedia.org/wikipedia/commons/9/96/Escut_dels_vescomtes_de_Cabrera.png",
    strength: "choleric",
    weakness: "melancholic",
    password: "boils123",
    factionId: 3,
  },
  {
    id: 2,
    name: "House of Miasma",
    motto: "From dust arise",
    crestUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Blason_Sceau_Raymond_B%C3%A9ranger_IV_Barcelone.svg/1280px-Blason_Sceau_Raymond_B%C3%A9ranger_IV_Barcelone.svg.png",
    strength: "choleric",
    weakness: "phlegmatic",
    password: "miasma123",
    factionId: 1,
  },
  {
    id: 3,
    name: "Plague Doctors",
    motto: "memento mori",
    crestUrl: "https://upload.wikimedia.org/wikipedia/commons/7/74/Coat_of_arms_of_the_Crusaders_with_the_Red_Star.svg",
    strength: "melancholic",
    weakness: "sanguine",
    password: "plague123",
    factionId: 1,
  },
  {
    id: 4,
    name: "House of Crimson Tides",
    motto: "Blood flows eternal",
    crestUrl: "https://upload.wikimedia.org/wikipedia/commons/2/28/Imperial_Coat_of_Arms_of_the_Empire_of_Austria.svg",
    strength: "sanguine",
    weakness: "phlegmatic",
    password: "crimson123",
    factionId: 3,
  },
  {
    id: 5,
    name: "House of Whispers",
    motto: "Silence speaks volumes",
    crestUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Coat_of_Arms_of_Blagodarny.png",
    strength: "phlegmatic",
    weakness: "choleric",
    password: "whispers123",
    factionId: 2,
  },
  {
    id: 6,
    name: "House of Iron Will",
    motto: "Unyielding as steel",
    crestUrl: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Coat_of_arms_of_Greenland.svg",
    strength: "choleric",
    weakness: "sanguine",
    password: "iron123",
    factionId: 2,
  },
  {
    id: 7,
    name: "House of Twilight",
    motto: "Between light and shadow",
    crestUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Coat_of_arms_of_Illyria_%28yellow_star%29.svg",
    strength: "melancholic",
    weakness: "choleric",
    password: "twilight123",
    factionId: 3,
  },
  {
    id: 8,
    name: "House of Golden Dawn",
    motto: "Rise with the sun",
    crestUrl: "https://upload.wikimedia.org/wikipedia/commons/1/12/Lesser_Coat_of_Arms_of_Yellow_Ukraine.svg",
    strength: "sanguine",
    weakness: "melancholic",
    password: "golden123",
    factionId: 3,
  },
  {
    id: 9,
    name: "House of Frost",
    motto: "Cold hearts, clear minds",
    crestUrl: "https://upload.wikimedia.org/wikipedia/commons/b/be/Coat_of_arms_of_Paul_Nguy%E1%BB%85n_Thanh_Hoan.svg",
    strength: "phlegmatic",
    weakness: "sanguine",
    password: "frost123",
    factionId: 3,
  },
  {
    id: 10,
    name: "House of Verdant Roots",
    motto: "From earth we grow",
    crestUrl: "https://upload.wikimedia.org/wikipedia/commons/5/56/Coat_of_Arms_of_Monza_%28ancient%29.svg",
    strength: "melancholic",
    weakness: "phlegmatic",
    password: "verdant123",
    factionId: 3,
  },
  {
    id: 11,
    name: "House of the Silver Moon",
    motto: "By moonlight we endure",
    crestUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Coat_of_Arms_of_the_Principality_of_Abkhazia.svg",
    strength: "phlegmatic",
    weakness: "choleric",
    password: "silver123",
    factionId: null,
  },
  {
    id: 12,
    name: "House of Ember",
    motto: "From ashes we rise",
    crestUrl: "https://upload.wikimedia.org/wikipedia/commons/0/05/Coat_of_arms_of_the_British_Virgin_Islands.svg",
    strength: "choleric",
    weakness: "phlegmatic",
    password: "ember123",
    factionId: null,
  },
  {
    id: 13,
    name: "House of Eternal Vigil",
    motto: "Ever watchful, never sleeping",
    crestUrl: "https://upload.wikimedia.org/wikipedia/commons/1/11/Coat_of_arms_of_Bosnia_and_Herzegovina_%281889%E2%80%931918%29.svg",
    strength: "melancholic",
    weakness: "sanguine",
    password: "vigil123",
    factionId: null,
  },
];

export const games = [
  {
    id: 1,
    name: "The Great Tournament of 1453",
    description: "A grand tournament where houses competed in tests of strength, wisdom, and balance.",
  },
  {
    id: 2,
    name: "Battle of the Four Humours",
    description: "An epic confrontation testing mastery of all four humours in a single day.",
  },
  {
    id: 3,
    name: "The Equilibrium Challenge",
    description: null,
  },
  {
    id: 4,
    name: "The Moonlit Trials",
    description: "A nocturnal competition testing endurance and wisdom under the pale moon.",
  },
  {
    id: 5,
    name: "The Inferno Gauntlet",
    description: "A test of raw power and fiery determination through trials of flame.",
  },
  {
    id: 6,
    name: "The Vigil of Shadows",
    description: "An ancient rite where houses prove their worth through contemplation and vigilance.",
  },
];

export const scores = [
  // Game 1 — The Great Tournament of 1453
  { id: 1, gameId: 1, houseId: 1, choleric: 150, phlegmatic: 45, melancholic: 120, sanguine: 67 },
  { id: 2, gameId: 1, houseId: 4, choleric: 89, phlegmatic: 23, melancholic: 78, sanguine: 145 },
  { id: 3, gameId: 1, houseId: 7, choleric: 45, phlegmatic: 98, melancholic: 134, sanguine: 56 },

  // Game 2 — Battle of the Four Humours
  { id: 4, gameId: 2, houseId: 2, choleric: 200, phlegmatic: 12, melancholic: 45, sanguine: 89 },
  { id: 5, gameId: 2, houseId: 3, choleric: 34, phlegmatic: 11, melancholic: 156, sanguine: 78 },
  { id: 6, gameId: 2, houseId: 8, choleric: 67, phlegmatic: 123, melancholic: 45, sanguine: 234 },
  { id: 7, gameId: 2, houseId: 9, choleric: 56, phlegmatic: 189, melancholic: 78, sanguine: 34 },

  // Game 3 — The Equilibrium Challenge
  { id: 8, gameId: 3, houseId: 5, choleric: 78, phlegmatic: 167, melancholic: 56, sanguine: 89 },
  { id: 9, gameId: 3, houseId: 6, choleric: 234, phlegmatic: 45, melancholic: 89, sanguine: 34 },
  { id: 10, gameId: 3, houseId: 10, choleric: 112, phlegmatic: 67, melancholic: 178, sanguine: 89 },

  // Game 4 — The Moonlit Trials
  { id: 11, gameId: 4, houseId: 11, choleric: 67, phlegmatic: 234, melancholic: 123, sanguine: 89 },
  { id: 12, gameId: 4, houseId: 3, choleric: 52, phlegmatic: 12, melancholic: 78, sanguine: 156 },
  { id: 13, gameId: 4, houseId: 7, choleric: 122, phlegmatic: 200, melancholic: 311, sanguine: 133 },

  // Game 5 — The Inferno Gauntlet
  { id: 14, gameId: 5, houseId: 12, choleric: 378, phlegmatic: 56, melancholic: 89, sanguine: 167 },
  { id: 15, gameId: 5, houseId: 1, choleric: 450, phlegmatic: 178, melancholic: 414, sanguine: 167 },
  { id: 16, gameId: 5, houseId: 6, choleric: 444, phlegmatic: 89, melancholic: 156, sanguine: 27 },

  // Game 6 — The Vigil of Shadows
  { id: 17, gameId: 6, houseId: 13, choleric: 98, phlegmatic: 145, melancholic: 412, sanguine: 67 },
  { id: 18, gameId: 6, houseId: 5, choleric: 123, phlegmatic: 322, melancholic: 100, sanguine: 189 },
  { id: 19, gameId: 6, houseId: 10, choleric: 177, phlegmatic: 89, melancholic: 300, sanguine: 145 },
  { id: 20, gameId: 6, houseId: 8, choleric: 167, phlegmatic: 222, melancholic: 78, sanguine: 378 },
];
