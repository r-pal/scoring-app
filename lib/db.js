import dotenv from 'dotenv';

dotenv.config();

// Demo mode runs against an in-memory data store with no database required.
// It activates when DEMO_MODE=true, or automatically when no DATABASE_URL is set.
const useDemo = process.env.DEMO_MODE === 'true' || !process.env.DATABASE_URL;

let prisma;

if (useDemo) {
  const { default: memoryDb } = await import('./memoryDb.js');
  // Ensure a known admin password exists so admin-protected routes work in the
  // demo (otherwise the check would compare undefined === undefined).
  if (!process.env.ADMIN_PASSWORD) process.env.ADMIN_PASSWORD = 'admin';
  console.log('Running in DEMO mode: using in-memory sample data (no database required).');
  console.log('Admin actions use the password:', process.env.ADMIN_PASSWORD);
  prisma = memoryDb;
} else {
  const { PrismaClient } = await import('@prisma/client');
  prisma = new PrismaClient();
}

export default prisma;
