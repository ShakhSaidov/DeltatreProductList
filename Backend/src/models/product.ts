import { Model, model, Schema } from "mongoose"
import { IProduct } from '../../utils/types'

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
    transform: (_document: Document, returnedObject: IProduct) => {
        returnedObject.id = returnedObject._id?.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Product: Model<IProduct> = model<IProduct>('Product', productSchema)
export default Product