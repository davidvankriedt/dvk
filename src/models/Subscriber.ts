import { DataTypes } from "sequelize";
import { sequelize } from "../db";

export const Subscriber = sequelize.define('Subscriber', {
    email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
    },
}, {
        timestamps: true,
});
