"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sqlite3_1 = __importDefault(require("sqlite3"));
const _index_1 = __importDefault(require("../config/_index"));
const db = new sqlite3_1.default.Database(_index_1.default.storage, (err) => {
    if (err) {
        console.error(err.message);
        throw err;
    }
    else {
        console.log('Connected to the SQLite database');
        db.run(`CREATE TABLE users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            fname text,
            lname text,
            uname text UNIQUE,
            email text UNIQUE,
            CONSTRAINT uname_unique UNIQUE(uname),
            CONSTRAINT email_unique UNIQUE(email)
        )`, (err) => {
            if (err) {
            }
            else {
                var insert = 'INSERT INTO users (fname, lname, uname, email) VALUES(?, ?, ?, ?)';
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
        });
    }
});
exports.default = db;
//# sourceMappingURL=_index.js.map