///<reference path="../typings/node/node.d.ts"/>
///<reference path="../typings/sequelize/sequelize.d.ts"/>
module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('User', {
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
        }
    }, (_a = {
            tableName: 'user',
            timestamps: false
        },
        _a['associate'] = function (models) {
        },
        _a
    ));
    return User;
    var _a;
};
//# sourceMappingURL=User.js.map