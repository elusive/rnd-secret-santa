"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _index_1 = __importDefault(require("../../config/_index"));
var currentEnv = process.env.NODE_ENV;
const dbConfig = _index_1.default[currentEnv];
let sequelize;
if (process.env.NODE_ENV === 'production') {
    let sequelize = new sequelize_1.Sequelize();
}
else {
    let sequelize = new sequelize_1.Sequelize('database', 'user', 'password', {
        dialect: 'sqlite',
        storage: '../database/santa.db',
    });
}
exports.default = sequelize;
//# sourceMappingURL=_index.js.map