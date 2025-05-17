"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscriber = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../db");
exports.Subscriber = db_1.sequelize.define('Subscriber', {
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
}, {
    timestamps: true,
});
