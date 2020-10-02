import sqlite3 from 'sqlite3';
import config from '../config/_index';

//const DB_SOURCE = ':inmemory';

const db = new sqlite3.Database(config.storage, (err) => {
    if (err) {
        // cannot open database
        console.error(err.message);
        throw err;
    } else {
        console.log('Connected to the SQLite database');
        db.run(
            `CREATE TABLE users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            fname text,
            lname text,
            uname text UNIQUE,
            email text UNIQUE,
            CONSTRAINT uname_unique UNIQUE(uname),
            CONSTRAINT email_unique UNIQUE(email)
        )`,
            (err) => {
                if (err) {
                    // table already exists do nothing
                } else {
                    // table just created, insert seed data
                    var insert =
                        'INSERT INTO users (fname, lname, uname, email) VALUES(?, ?, ?, ?)';
                    db.run(insert, [
                        'John',
                        'Gilliland',
                        'jgilliland',
                        'jgilliland@therndgroup.com',
                    ]);
                    db.run(insert, [
                        'Chris',
                        'Gray',
                        'cgray',
                        'cgray@therndgroup.com',
                    ]);
                }
            },
        );
    }
});

export default db;
