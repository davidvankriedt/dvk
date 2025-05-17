"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
exports.connectToDatabase = connectToDatabase;
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config_1 = require("./config");
exports.sequelize = new sequelize_1.Sequelize(config_1.DB_NAME, config_1.DB_USER, config_1.DB_PASS, {
    host: config_1.DB_HOST,
    dialect: "postgres",
    logging: false,
});
async function connectToDatabase() {
    try {
        await exports.sequelize.authenticate();
        console.log("Database connected!");
        await exports.sequelize.sync();
        console.log("Models synced");
    }
    catch (error) {
        console.log("Unable to connect to database...", error);
        process.exit(1);
    }
}
