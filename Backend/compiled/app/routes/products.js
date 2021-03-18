"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const mongoose_1 = __importDefault(require("mongoose"));
const product_1 = __importDefault(require("../models/product"));
const express_1 = require("express");
const validator_1 = __importDefault(require("../utils/validator"));
const router = express_1.Router();
let etag;
//HEAD request for the product list
router.head('/', (request, response) => {
    const receivedEtag = request.headers['if-none-match'];
    //console.log("Previous etag: ", etag)
    //console.log("If-none-match: ", receivedEtag)
    if (receivedEtag !== undefined && receivedEtag === etag) {
        response.set('Etag', receivedEtag);
        response.sendStatus(304);
        //console.log("No Change. Sending 304 status: ", response.statusCode, response.statusMessage)
    }
    else {
        response.sendStatus(200);
    }
});
//GET request for all products from product list
router.get('/', (_request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield product_1.default.find({}).then(products => products);
    //console.log("Retrieved products, length is", Object.keys(products).length)
    response.json(products.map(product => product.toJSON()));
    //console.log("Products sent back to frontend. Response status and message:", response.statusCode, response.statusMessage)
    etag = response.getHeader('Etag');
    //console.log("New etag: ", etag)
    //console.log("------------------------------")
    //console.log("------------------------------")
    //console.log("------------------------------")
}));
//GET request for a specific product
router.get('/:id', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = request.params.id;
    if (mongoose_1.default.isValidObjectId(id)) {
        const product = yield product_1.default.findById(request.params.id);
        if (product)
            response.json(product.toJSON());
        else
            response.status(404).send({ error: "invalid id" });
    }
    else
        response.status(404).send({ error: "invalid id" });
}));
//POST request to add a new product onto the product list
router.post('/', (_request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const object = _request.body;
    if (!validator_1.default(object)) {
        response.status(422).send({ error: "missing product information" });
    }
    else {
        const check = yield product_1.default.exists({ name: object.name });
        if (!check) {
            const newProduct = new product_1.default(Object.assign({}, object));
            yield newProduct.save();
        }
        const newProducts = yield product_1.default.find({}).then(products => products);
        response.json(newProducts.map(product => product.toJSON()));
    }
}));
//DELETE request to remove a product form product list
router.delete('/:id', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = request.params.id;
    if (mongoose_1.default.isValidObjectId(id)) {
        yield product_1.default.findByIdAndRemove(id);
        response.sendStatus(204);
    }
    else
        response.status(405).send({ error: "Can't perform deletion: invalid id" });
}));
exports.default = router;
