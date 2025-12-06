import db from './database';
import config from './config/index';

const ELF_INSERT_SQL = 'INSERT INTO elves (fname, lname, email) VALUES(?, ?, ?)';
const ELF_SELECT_SQL = 'SELECT * FROM elves';

export interface IUser {
    fname: string,
    lname: string,
    email: string,
    assignee: string | null;
};

export const getAll = async (): Promise<IUser[]> => {
    try {
        const rows = await db.all(ELF_SELECT_SQL);
        return rows as IUser[];
    } catch (err) {
        return Promise.reject(err);
    }
};

export const getUnsplashUrl = async (query: string, width: number, height: number): Promise<string> => { 
    const pictureQuery = "cozy-christmas";
    const accessKey = config.UNSPLASH_ACCESS_KEY;
    return await fetch(`https://api.unsplash.com/photos/random?query=${pictureQuery}&client_id=${accessKey}`)
    .then(response => response.json())
    .then(data => {
        console.log('Unsplash API response data:', data.urls.regular);
        return data?.urls?.regular;
    })
    .catch(error => {
        console.error('Error fetching image from Unsplash:', error);
        return '';
    });
}
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
    callback?: any): void => {
    db.run(ELF_INSERT_SQL, [fname, lname, email])
        .then((res: any) => {
            if (callback) callback(null, res);
        })
        .catch((err: Error) => {
            console.log(err);
            if (callback) callback(err);
        });
};
