import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

import { DB_NAME, DB_HOST, DB_PASS, DB_USER } from "./config";

export const sequelize = new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PASS,
    {
        host: DB_HOST,
        dialect: "postgres",
        logging: false,
    }
);

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