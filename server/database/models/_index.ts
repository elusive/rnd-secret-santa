import { Sequelize } from 'sequelize';
import Config from '../../config/_index';

var currentEnv = process.env.NODE_ENV;
const dbConfig = Config[currentEnv];
let sequelize: Sequelize;

if (process.env.NODE_ENV === 'production') {
    let sequelize = new Sequelize(); //(dbConfig);
} else {
    let sequelize = new Sequelize('database', 'user', 'password', {
        dialect: 'sqlite',
        storage: '../database/santa.db',
    });
}

export default sequelize;
