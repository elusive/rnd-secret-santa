<<<<<<< HEAD:src/api.ts
import db from './database';
=======
import db from '../database/_index';
>>>>>>> b72be5bb90ecce2f7314acd9fcf842bb1c5d5680:server/api/_index.ts

export const getAll = () => {
    db.get('/api/users', (req: Request, res: Response) => {
        let sql = 'select * from users';
        let params = [];
        db.all(sql, params, (err: Error, rows: any) => {
            if (err) {
                throw err;
            }
            return rows;
        });
    });
};

export const getByUsername = (uname: string) => {
    let sql = 'select * from users where uname = ?';
    var params = [uname];
    db.get(sql, params, (err: Error, row: any) => {
        if (err) {
            throw err;
        }
        return row;
    });
};
