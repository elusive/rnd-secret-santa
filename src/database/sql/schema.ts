export const CREATE_ELVES_TABLE = `CREATE TABLE elves (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            fname text,
            lname text,
            assignee text UNIQUE,
            email text UNIQUE,
            CONSTRAINT assignee_unique UNIQUE(assignee),
            CONSTRAINT email_unique UNIQUE(email)
        )`;

export const ELF_INSERT_SQL = `INSERT INTO elves (
        fname, 
        lname, 
        email
    ) VALUES(?, ?, ?)`;

