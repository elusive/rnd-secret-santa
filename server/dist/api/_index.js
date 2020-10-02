"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
exports.getAll = () => {
    database_1.default.get('/api/users', (req, res) => {
        let sql = 'select * from users';
        let params = [];
        database_1.default.all(sql, params, (err, rows) => {
            if (err) {
                throw err;
            }
            return rows;
        });
    });
};
exports.getByUsername = (uname) => {
    let sql = 'select * from users where uname = ?';
    var params = [uname];
    database_1.default.get(sql, params, (err, row) => {
        if (err) {
            throw err;
        }
        return row;
    });
};
//# sourceMappingURL=_index.js.map