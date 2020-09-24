import dotenv from 'dotenv';

dotenv.config();

export default {
    development: {
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
