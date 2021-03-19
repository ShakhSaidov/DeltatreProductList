import { IProduct } from '../interfaces/product_interface'
const validateObject = (object: IProduct): boolean => {
    if (object.name === '' || object.description === '' || !(Number(object.quantity) >= 0)) {
        return false
    }

    return true
}

export default validateObject