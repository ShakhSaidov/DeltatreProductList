"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-misused-promises */
const express_1 = require("express");
const product_1 = __importDefault(require("../models/product"));
const testHelper_1 = __importDefault(require("../utils/testHelper"));
const router = express_1.Router();
router.get('/', (_request, response) => {
    response.send("Testing Page");
});
router.post('/', (_request, response) => __awaiter(void 0, void 0, void 0, function* () {
    yield product_1.default.deleteMany({});
    yield product_1.default.insertMany(testHelper_1.default.testData);
    response.status(204).end();
}));
exports.default = router;
