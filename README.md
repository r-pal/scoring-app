# Scoring App – Real-Time Event Scoring System (Backend API)

Built for a live event setting where multiple users submitted scores at the same time, this project focuses on reliability, clear data modelling, and predictable API behaviour under real usage.

The system manages Houses, Factions, and Games, aggregating scores across events and exposing them via a REST API for a frontend client.

---

## What it does

- Stores and aggregates scores across multiple games  
- Supports concurrent submissions during live use  
- Provides structured endpoints for frontend consumption  
- Handles validation, error cases, and data consistency  

---

## Tech Stack

- Node.js (ES Modules)  
- Express  
- PostgreSQL (Supabase)  
- Prisma ORM  
- Deployed on Render  

---

## Data Model (Simplified)

- **House** → core unit with scores, identity, and auth (password-protected edits)  
- **Faction** → groups houses under a shared identity  
- **Game** → represents a scoring round  
- **Score** → links houses to games with per-round scoring  

---

## API Overview

All endpoints are prefixed with `/api`.

### Example endpoints

- `GET /api/houses` → returns all houses with aggregated scores  
- `GET /api/houses/:id` → returns a single house  
- `POST /api/houses` → creates a house  
- `PATCH /api/houses/:id` → updates a house (password or admin protected)  
- `DELETE /api/houses/:id` → deletes a house (admin only)  

- `GET /api/factions` → returns all factions  
- `POST /api/factions` → creates a faction  
- `DELETE /api/factions/:id` → deletes a faction  

- `GET /api/games` → returns all games  
- `POST /api/games` → creates a game and assigns scores  
- `DELETE /api/games/:id` → deletes a game  

---

## Working with the Frontend

This API was built to support a live UI displaying scores in near real-time.

Part of the challenge was making sure responses were:

- Consistent  
- Fast enough for live updates  
- Easy to consume from the frontend  

---

## Environment Variables

Environment variables are **optional** — they're only needed when running against a real database (see "Running with a Real Database" below). Demo mode requires none.

To configure them, copy the example file:

```bash
cp .env.example .env
```

| Variable          | Description                                                      |
| ----------------- | --------------------------------------------------------------- |
| `DATABASE_URL`    | Postgres connection string (omit to run in demo mode)           |
| `ADMIN_PASSWORD`  | Password for admin-protected actions (`x-admin-password` header) |
| `ALLOWED_ORIGINS` | Comma-separated list of allowed frontend origins (CORS)         |
| `PORT`            | Port the API listens on (default `3000`)                        |

### Notes

- For a hosted database (e.g. Supabase), set `DATABASE_URL` to your own connection string — use the Supabase Session Pooler URL when deployed (IPv4 compatible).
- `.env` is gitignored; only `.env.example` is committed. Never commit real secrets.

---

## Quick Start (Demo Mode)

The fastest way to try the API. **No database, no Docker, no configuration** — it runs on in-memory sample data (the same Houses, Factions, and Games used in the seed).

All you need is [Node.js](https://nodejs.org/):

```bash
npm install
npm run demo
```

The server starts at http://localhost:3000 with the full sample dataset loaded. Try it:

```bash
curl http://localhost:3000/api/houses
curl http://localhost:3000/api/factions
curl http://localhost:3000/api/games
```

Notes on demo mode:

- Data lives in memory only — it resets every time the server restarts.
- Admin-protected actions use the password `admin` (sent via the `x-admin-password` header).
- Demo mode is selected automatically whenever no `DATABASE_URL` is set, or explicitly via the `npm run demo` script.

---

## Running with a Real Database

For persistent storage, point the app at a PostgreSQL database (local install or hosted, e.g. Supabase):

```bash
# 1. Install dependencies
npm install

# 2. Create your env file and set DATABASE_URL (and ADMIN_PASSWORD)
cp .env.example .env

# 3. Create the schema and load sample data
npm run db:migrate
npm run db:seed

# 4. Start the server
npm run dev
```

| Script               | What it does                          |
| -------------------- | ------------------------------------- |
| `npm run demo`       | Run with in-memory data (no database) |
| `npm run dev`        | Run against the configured database   |
| `npm run db:migrate` | Apply schema migrations (dev)         |
| `npm run db:seed`    | Seed the database with sample data    |
| `npm test`           | Run the test suite                    |

---

## Authentication (Temporary)

This project uses a simple admin password system for protected actions.

- Sent via the `x-admin-password` header  
- Stored securely in environment variables  

**Note:**  
This was a deliberate trade-off for speed during development.  
In a production system, this would be replaced with proper authentication (e.g. JWT, role-based access, Supabase Auth).

---

## Approach to Reliability & Debugging

Because this was used in a real event setting, the focus was on predictable behaviour and quick issue resolution:

- Consistent error handling across endpoints  
- Input validation to prevent bad data  
- Structured debugging approach (reproduce → trace → fix)  
- Tests covering both success and failure scenarios  

---

## Future Improvements

- Replace admin auth with proper authentication + roles  
- Add validation schemas  
- Introduce logging and monitoring  
- Add pagination and rate limiting  
- Add WebSocket support for real-time updates  

---

## License

Private project – for educational and internal use.
