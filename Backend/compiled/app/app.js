"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require('express-async-errors');
const database_1 = __importDefault(require("./database/database"));
const products_1 = __importDefault(require("./routes/products"));
const middleware_1 = __importDefault(require("./middleware/middleware"));
const testing_1 = __importDefault(require("./routes/testing"));
const app = express_1.default();
void database_1.default();
app.use(express_1.default.static('build'));
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(middleware_1.default.consoleLogger);
app.use('/products', products_1.default);
if (process.env.NODE_ENV === 'test') {
    app.use('/testing', testing_1.default);
}
app.set('etag', 'strong');
//Homepage
app.get('/', (_request, response) => {
    response.send("Deltatre Products List Assignment");
});
//Error handler
app.use(middleware_1.default.errorHandler);
exports.default = app;
