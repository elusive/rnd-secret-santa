import { Sequelize } from 'sequelize';
import { Config } from '../../config/_index';

const dbConfig = Config[process.env.NODE_ENV];
const sequelize = new Sequelize(dbConfig['connection'], dbConfig);

export default sequelize;
