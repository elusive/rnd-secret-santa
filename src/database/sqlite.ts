import config from '../config/_index';
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database(config.storage, (err: Error) => {
    if (err) {
        console.error(err.message);
        throw err;
    } else {
        console.log('Connected to the SQLite database');
        db.run(
            `CREATE TABLE elves (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            fname text,
            lname text,
            assignee text UNIQUE,
            email text UNIQUE,
            CONSTRAINT assignee_unique UNIQUE(assignee),
            CONSTRAINT email_unique UNIQUE(email)
        )`,
            (err: Error) => {
                if (err) {
                    // table already exists do nothing
                } else {
                    // table just created, insert seed data
                    db.run('INSERT INTO elves (fname, lname, email) VALUES(?, ?, ?)', [
                        'John',
                        'Gilliland',
                        'jgilliland@therndgroup.com',
                    ]);
                }
            },
        );
    }
});

export default db;
