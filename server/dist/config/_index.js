"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: 'config/.env' });
const config = {
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
var currentConfig = config[_a = process.env.NODE_ENV, (_a !== null && _a !== void 0 ? _a : 'development')];
console.log(currentConfig);
exports.default = currentConfig;
//# sourceMappingURL=_index.js.map