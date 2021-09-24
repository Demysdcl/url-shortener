"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const URLController_1 = __importDefault(require("./controller/URLController"));
const MongoConnection_1 = __importDefault(require("./database/MongoConnection"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
new MongoConnection_1.default().connect();
const urlController = new URLController_1.default();
app.post('/shorten', urlController.shorten);
app.get('/:hash', urlController.redirect);
app.listen(5000, () => console.log('Express listening in port 5000'));
//# sourceMappingURL=index.js.map