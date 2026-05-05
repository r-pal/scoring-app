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

Create a `.env` file in the root directory:

```env
DATABASE_URL=postgresql://user:password@host:5432/postgres
ADMIN_PASSWORD=your-admin-password
ALLOWED_ORIGINS=http://localhost:5173,https://your-frontend-domain
PORT=3000
```

### Notes

- Use the Supabase Session Pooler URL when deployed (IPv4 compatible)  
- Never commit `ADMIN_PASSWORD`  
- `ALLOWED_ORIGINS` should be a comma-separated list  

---

## Running Locally

Clone the repository and install dependencies:

```bash
npm install
```

Set up the database:

```bash
npx prisma generate
npx prisma migrate dev
```

Start the development server:

```bash
npm run dev
```

The server will be available at: http://localhost:3000

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
