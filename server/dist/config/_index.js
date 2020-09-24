"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = {
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
//# sourceMappingURL=_index.js.map