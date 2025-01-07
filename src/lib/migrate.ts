import { drizzle } from 'drizzle-orm/node-postgres';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { Pool } from 'pg';
import * as schema from './schema';

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: parseInt(process.env.DB_PORT || '5432'),
});

const db = drizzle(pool, { schema });

async function main() {
  console.log('Migration started');
  await migrate(db, { migrationsFolder: 'drizzle' });
  console.log('Migration completed');
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
}); 