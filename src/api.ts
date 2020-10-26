import db from './database/sqlite';

const ELF_INSERT_SQL = 'INSERT INTO elves (fname, lname, email) VALUES(?, ?, ?)';
const ELF_SELECT_SQL = 'SELECT * FROM elves';


export interface IUser {
    fname: string,
    lname: string,
    email: string,
    assignee: string | null;
}


export const getAll = (): Promise<IUser[]> => {
    return new Promise<IUser[]>((resolve, reject) => {
        db.all(ELF_SELECT_SQL, (err: Error, rows: IUser[]) => {
            if (err) {
                reject(err);
            }
            resolve(rows);
        });
    });
};


/*
 export const getByUsername = (uname: string) => {
    let sql = 'select * from elves where uname = ?';
    var params = [uname];
    db.get(sql, params, (err: Error, row: any) => {
        if (err) {
            throw err;
        }
        return row;
    });
};
*/


export const insert = (
    fname: string,
    lname: string,
    email: string,
    callback: any): void => {
    db.run(ELF_INSERT_SQL, [
        fname,
        lname,
        email
    ],
    (err: Error): void => {
        console.log(err);
    });
};
