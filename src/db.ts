import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

import { DB_URL } from "./config";

export const sequelize = new Sequelize(DB_URL, {
    dialect: "postgres",
    logging: false,
    dialectOptions: {
    ssl: {
        require: true,
        rejectUnauthorized: false, // <== This is what fixes the self-signed error
    },
    },
});

export async function connectToDatabase() {
    try {
        await sequelize.authenticate();
        console.log("Database connected!");

        await sequelize.sync();
        console.log("Models synced");
    } catch (error) {
        console.log("Unable to connect to database...", error);
        process.exit(1);
    }
}