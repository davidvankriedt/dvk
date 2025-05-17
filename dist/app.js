"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const morgan_1 = __importDefault(require("morgan"));
const db_1 = require("./db");
const Subscriber_1 = require("./models/Subscriber");
// SETUP
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)());
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
// ROUTES
app.get('/', (req, res) => {
});
app.post('/subscribe', async (req, res) => {
    const newSub = await Subscriber_1.Subscriber.create({ email: req.body.email });
    const subscribers = await Subscriber_1.Subscriber.findAll();
    console.log('Subscribers: ', JSON.stringify(subscribers, null, 2));
});
async function start() {
    await (0, db_1.connectToDatabase)();
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
}
start();
