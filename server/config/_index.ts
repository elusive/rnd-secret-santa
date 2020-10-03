import dotenv from 'dotenv';

dotenv.config({ path: 'config/.env' });

const config = {
    development: {
        port: process.env.port,
        dialect: process.env.dialect,
        storage: process.env.storage,
    },
    test: {
        dialect: process.env.dialect,
        storage: process.env.storage,
    },
    production: {
        username: process.env.username,
        password: process.env.password,
        host: process.env.host,
        port: process.env.port,
        database: process.env.database,
        dialect: 'postgres',
    },
};

var currentConfig = config[process.env.NODE_ENV ?? 'development'];
console.log(currentConfig);
export default currentConfig;
