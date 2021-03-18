"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        min: 0,
        required: true
    }
});
//Editting the way product data is presented
productSchema.set('toJSON', {
    transform: (_document, returnedObject) => {
        var _a;
        returnedObject.id = (_a = returnedObject._id) === null || _a === void 0 ? void 0 : _a.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});
const Product = mongoose_1.model('Product', productSchema);
exports.default = Product;
