import dotenv from 'dotenv';
import path from 'path';

// Load dotenv if no external loader (dotenv-cli) provided.
const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development';
dotenv.config({ path: path.resolve(process.cwd(), envFile) });

const env = process.env;

const NODE_ENV = env.NODE_ENV || 'development';
const PORT = env.PORT || '3000';
const DB_CLIENT = env.DB_CLIENT || env.DIALECT || (NODE_ENV === 'development' ? 'sqlite' : 'pg');
const SQLITE_FILE = env.SQLITE_FILE || env.storage || './data/elves.sqlite3';
const DATABASE_URL = env.DATABASE_URL || (env.username && env.password && env.host && env.database ? `postgres://${env.username}:${env.password}@${env.host}:${env.port || 5432}/${env.database}` : undefined);
const SESSION_SECRET = env.SESSION_SECRET || 'dev-session-secret';
const UNSPLASH_ACCESS_KEY = env.UNSPLASH_ACCESS_KEY || '';

const currentConfig = {
    NODE_ENV,
    PORT,
    DB_CLIENT,
    SQLITE_FILE,
    DATABASE_URL,
    SESSION_SECRET,
    UNSPLASH_ACCESS_KEY,
};

console.log('Loaded config:', currentConfig);
export default currentConfig;
