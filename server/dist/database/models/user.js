"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _index_1 = __importDefault(require("./_index"));
class User extends sequelize_1.Model {
    static prepareInit(sequelize) {
        this.init({
            id: {
                type: sequelize_1.DataTypes.NUMBER,
                primaryKey: true,
            },
            fname: sequelize_1.DataTypes.STRING,
            lname: sequelize_1.DataTypes.STRING,
            email: sequelize_1.DataTypes.STRING,
            uname: sequelize_1.DataTypes.STRING,
            isAssigned: sequelize_1.DataTypes.BOOLEAN,
            assigneeId: sequelize_1.DataTypes.NUMBER,
        }, {
            sequelize: sequelize,
            tableName: this.TableName,
            name: {
                singular: this.ModelName,
                plural: this.ModelNamePlural,
            },
            comment: 'Model for an employee user',
        });
    }
}
exports.User = User;
User.ModelName = 'User';
User.ModelNamePlural = 'Users';
User.TableName = 'Users';
User.prepareInit(_index_1.default);
//# sourceMappingURL=user.js.map