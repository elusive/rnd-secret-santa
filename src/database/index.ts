import config from '../config/index';

export interface IDatabase {
    all(sql: string, params?: any[]): Promise<any[]>;
    get?(sql: string, params?: any[]): Promise<any>;
    run(sql: string, params?: any[]): Promise<any>;
    query?(sql: string, params?: any[]): Promise<any>;
    close?(): Promise<void>;
    raw?: any;
}

let dbClient: IDatabase;

if (config.DB_CLIENT === 'sqlite' || config.DB_CLIENT === 'sqlite3') {
    // sqlite module exports the Database instance from sqlite.ts
    // require used to avoid circular import issues with TS runtime ordering
    const sqliteDb: any = require('./sqlite').default;

    dbClient = {
        all: (sql: string, params: any[] = []) =>
            new Promise<any[]>((resolve, reject) => {
                sqliteDb.all(sql, params, (err: Error, rows: any[]) => {
                    if (err) return reject(err);
                    resolve(rows);
                });
            }),
        get: (sql: string, params: any[] = []) =>
            new Promise<any>((resolve, reject) => {
                sqliteDb.get(sql, params, (err: Error, row: any) => {
                    if (err) return reject(err);
                    resolve(row);
                });
            }),
        run: (sql: string, params: any[] = []) =>
            new Promise<any>((resolve, reject) => {
                sqliteDb.run(sql, params, function (this: any, err: Error) {
                    if (err) return reject(err);
                    // resolve with this (Statement) for lastID, changes
                    resolve(this);
                });
            }),
        query: (sql: string, params: any[] = []) =>
            new Promise<any>((resolve, reject) => {
                sqliteDb.all(sql, params, (err: Error, rows: any[]) => {
                    if (err) return reject(err);
                    resolve({ rows });
                });
            }),
        close: () =>
            new Promise<void>((resolve, reject) => {
                sqliteDb.close((err?: Error) => {
                    if (err) return reject(err);
                    resolve();
                });
            }),
        raw: sqliteDb,
    };
} else {
    // Use pg Pool for postgres connections
    const { Pool } = require('pg');
    const pool = new Pool({ connectionString: config.DATABASE_URL });
    pool.on('error', (err: Error) => {
        console.error('Unexpected error on idle pg client', err);
    });

    dbClient = {
        all: async (sql: string, params: any[] = []) => {
            const r = await pool.query(sql, params);
            return r.rows;
        },
        get: async (sql: string, params: any[] = []) => {
            const r = await pool.query(sql, params);
            return r.rows[0];
        },
        run: async (sql: string, params: any[] = []) => {
            return pool.query(sql, params);
        },
        query: async (sql: string, params: any[] = []) => pool.query(sql, params),
        close: async () => pool.end(),
        raw: pool,
    };
}

export default dbClient;
