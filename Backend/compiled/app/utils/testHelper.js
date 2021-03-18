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
const product_1 = __importDefault(require("../models/product"));
const testData = [
    {
        name: 'Test Product 1',
        description: 'Generic description for first test product',
        quantity: 17
    },
    {
        name: 'Test Product 2',
        description: 'Generic description for second test product',
        quantity: 68
    },
    {
        name: 'Test Product 3',
        description: 'Generic description for third test product',
        quantity: 44
    },
    {
        name: 'Test Product 4',
        description: 'Generic description for fourth test product',
        quantity: 97
    },
    {
        name: 'Test Product 5',
        description: 'Generic description for fifth test product',
        quantity: 34
    }
];
const generateNonExistingId = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const product = new product_1.default({
        name: 'Temporary Product',
        description: 'Generic description for temporary product',
        quantity: 77
    });
    yield product.save();
    yield product.remove();
    return (_a = product._id) === null || _a === void 0 ? void 0 : _a.toString();
});
const getProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield product_1.default.find({});
    return products.map(product => product.toJSON());
});
exports.default = {
    testData,
    getProducts,
    generateNonExistingId
};
