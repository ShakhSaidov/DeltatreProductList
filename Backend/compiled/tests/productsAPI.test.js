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
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
const mongoose_1 = __importDefault(require("mongoose"));
const supertest_1 = __importDefault(require("supertest"));
const testHelper_1 = __importDefault(require("../app/utils/testHelper"));
const app_1 = __importDefault(require("../app/app"));
const product_1 = __importDefault(require("../app/models/product"));
let initialData;
describe('Testing the API', () => {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        initialData = testHelper_1.default.testData;
        yield product_1.default.deleteMany({});
        yield product_1.default.insertMany(initialData);
    }));
    //Testing the product list as a whole - GET
    describe('> Testing products list as a whole', () => {
        test('Products are returned in the proper format (json)', () => __awaiter(void 0, void 0, void 0, function* () {
            yield supertest_1.default(app_1.default)
                .get('/products')
                .expect(200)
                .expect('Content-Type', /application\/json/);
        }));
        test('All initial products are returned', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield supertest_1.default(app_1.default).get('/products');
            expect(response.body).toHaveLength(initialData.length);
        }));
        test('The first product "Test Product 1" is included in the returned products', () => {
            const productNames = initialData.map(product => product.name);
            expect(productNames).toContain('Test Product 1');
        });
    });
    //Testing a specific product - GET
    describe('> Testing a specific product', () => {
        test('Success when given a valid id', () => __awaiter(void 0, void 0, void 0, function* () {
            const products = yield testHelper_1.default.getProducts();
            const firstProduct = products[0];
            const returnedProduct = yield supertest_1.default(app_1.default)
                .get(`/products/${firstProduct.id}`)
                .expect(200)
                .expect('Content-Type', /application\/json/);
            expect(returnedProduct.body).toEqual(firstProduct);
        }));
        test('Failure when given a non-existing id', () => __awaiter(void 0, void 0, void 0, function* () {
            const nonExistingId = yield testHelper_1.default.generateNonExistingId();
            yield supertest_1.default(app_1.default)
                .get(`/products/${nonExistingId}`)
                .expect(404);
        }));
    });
    //Testing the addition of a new product - POST
    describe('> Adding a new product', () => {
        test('Success when given valid data', () => __awaiter(void 0, void 0, void 0, function* () {
            const newProduct = {
                name: "new test product",
                description: "generic description",
                quantity: 100
            };
            yield supertest_1.default(app_1.default)
                .post('/products')
                .send(newProduct)
                .expect(200)
                .expect('Content-Type', /application\/json/);
            const productsAfter = yield testHelper_1.default.getProducts();
            expect(productsAfter).toHaveLength(initialData.length + 1);
            const productNames = productsAfter.map(product => product.name);
            expect(productNames).toContain('new test product');
        }));
        describe('> Failure when given an invalid data', () => {
            test('Invalid when no name given', () => __awaiter(void 0, void 0, void 0, function* () {
                const newProduct = {
                    name: "",
                    description: "generic description",
                    quantity: 100
                };
                yield supertest_1.default(app_1.default)
                    .post('/products')
                    .send(newProduct)
                    .expect(422);
                const productsAfter = yield testHelper_1.default.getProducts();
                expect(productsAfter).toHaveLength(initialData.length);
            }));
            test('Invalid when no description given', () => __awaiter(void 0, void 0, void 0, function* () {
                const newProduct = {
                    name: "new testing product",
                    description: "",
                    quantity: 100
                };
                yield supertest_1.default(app_1.default)
                    .post('/products')
                    .send(newProduct)
                    .expect(422);
                const productsAfter = yield testHelper_1.default.getProducts();
                expect(productsAfter).toHaveLength(initialData.length);
            }));
            describe('> Quantity', () => {
                test('Invalid when no quantity', () => __awaiter(void 0, void 0, void 0, function* () {
                    const newProduct = {
                        name: "new testing product",
                        description: "generic description",
                        quantity: undefined
                    };
                    yield supertest_1.default(app_1.default)
                        .post('/products')
                        .send(newProduct)
                        .expect(422);
                    const productsAfter = yield testHelper_1.default.getProducts();
                    expect(productsAfter).toHaveLength(initialData.length);
                }));
                test('Invalid when quantity is negative', () => __awaiter(void 0, void 0, void 0, function* () {
                    const newProduct = {
                        name: "new testing product",
                        description: "generic description",
                        quantity: -55
                    };
                    yield supertest_1.default(app_1.default)
                        .post('/products')
                        .send(newProduct)
                        .expect(422);
                    const productsAfter = yield testHelper_1.default.getProducts();
                    expect(productsAfter).toHaveLength(initialData.length);
                }));
            });
        });
    });
    //Testing the deletion of a product - DELETE
    describe('> Deleting a product', () => {
        test('Success when deleting an existing product', () => __awaiter(void 0, void 0, void 0, function* () {
            const products = yield testHelper_1.default.getProducts();
            const productToDelete = products[0];
            yield supertest_1.default(app_1.default)
                .delete(`/products/${productToDelete.id}`)
                .expect(204);
            const productsAfter = yield testHelper_1.default.getProducts();
            expect(productsAfter).toHaveLength(initialData.length - 1);
            const productNames = productsAfter.map(product => product.name);
            expect(productNames).not.toContain(productToDelete.name);
        }));
        test('Failure when deleting a non existing product', () => __awaiter(void 0, void 0, void 0, function* () {
            const invalidId = -1;
            yield supertest_1.default(app_1.default)
                .delete(`/products/${invalidId}`)
                .expect(405);
            const productsAfter = yield testHelper_1.default.getProducts();
            expect(productsAfter).toHaveLength(initialData.length);
        }));
    });
});
afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoose_1.default.connection.close();
}));
