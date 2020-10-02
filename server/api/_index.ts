import db from '../database';

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
