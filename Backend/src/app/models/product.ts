import { Model, model, Schema } from "mongoose"
import { MongooseProduct } from '../utils/types'

const productSchema: Schema = new Schema({
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
})

//Editting the way product data is presented
productSchema.set('toJSON', {
    transform: (_document: Document, returnedObject: MongooseProduct) => {
        returnedObject.id = returnedObject._id?.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Product: Model<MongooseProduct> = model<MongooseProduct>('Product', productSchema)
export default Product