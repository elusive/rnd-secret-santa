import { Model, Sequelize, DataTypes } from 'sequelize';
import sequelize from './_index';

export interface IUser {
    id?: number;
    fname: string;
    lname: string;
    email: string;
    password?: string;
    isAssigned: boolean;
    assigneeId?: number;
}

export class User extends Model implements IUser {
    public static readonly ModelName: string = 'User';
    public static readonly ModelNamePlural: string = 'Users';
    public static readonly TableName: string = 'Users';
    public static readonly DefaultScope: FindOptions = {};

    public id!: number;
    public fname!: string;
    public lname!: string;
    public email!: string;
    public password?: string;
    public isAssigned!: boolean;
    public assigneeId?: number;


    public static prepareInit(sequelize: Sequelize) {

        this.init(
            {
                id: { 
                    type: DataTypes.NUMBER,
                    primaryKey: true
                },
                fname: DataTypes.STRING(50),
                lname: DataTypes.STRING(50),
                email: DataTypes.STRING(50),
                password: DataTypes.STRING(50),
                isAssigned: DataTypes.BOOLEAN,
                assigneeId: DataTypes.NUMBER
            },
            {
                sequelize: sequelize,
                tableName: this.TableName,
                name: {
                    singular: this.ModelName,
                    plural: this.ModelNamePlural
                },
                defaultScope: this.DefaultScope
                comment: 'Model for an employee user',
            },
        );
    }
}
