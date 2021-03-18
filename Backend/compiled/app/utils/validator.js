"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateObject = (object) => {
    if (object.name === '' || object.description === '' || !(Number(object.quantity) >= 0)) {
        return false;
    }
    return true;
};
exports.default = validateObject;
