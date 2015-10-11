///<reference path="../typings/node/node.d.ts"/>
///<reference path="../typings/sequelize/sequelize.d.ts"/>

import {Sequelize} from "sequelize";
import {Model} from "sequelize";
import {IUserInstance} from "../typings/custom/models";
import IUser = goalazo.IUser;
import {Models} from "../typings/custom/models";

export = function (sequelize: Sequelize, DataTypes) {

    var User = sequelize.define<IUserInstance, IUser>('User', {

        name: {
            type: DataTypes.STRING,
            validate: {}
        },

        password: {
            type: DataTypes.STRING,
            validate: {}
        },

        token: {
            type: DataTypes.VIRTUAL
        },

        registrationDate: {
            field: 'registration_date',
            type: DataTypes.DATE,
            validate: {}
        },

        isAdmin: {
            field: 'is_admin',
            type: DataTypes.BOOLEAN,
            validate: {}
        },

        isAutoGenerated: {
            field: 'is_auto_generated',
            type: DataTypes.BOOLEAN,
            allowNull: false,
            validate: {}
        },

    }, {
        tableName: 'user',
        timestamps: false,
        ['associate'] (models: Models) {

        }
    });
    return User;
};
