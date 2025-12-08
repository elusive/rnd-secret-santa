import config from '../config/index'
import { Database } from 'sqlite3'
import * as schema from './sql/schema'; 

const dbPath = config.SQLITE_FILE || 'db.sqlite';

const db = new Database(dbPath, (err: Error) => {
    if (err) {
        console.error(err.message);
        throw err;
    } else {
        console.log('Connected to the SQLite database');
        db.run(
           schema.CREATE_ELVES_TABLE,
            (err: Error) => {
                if (!err) {
                    db.run(schema.ELF_INSERT_SQL, [
                        'John',
                        'Gilliland',
                        'johncgilliland@gmail.com',
                    ]);
                }
            },
        );
    }
});

export default db;
