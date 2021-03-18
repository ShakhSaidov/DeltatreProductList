import { IProduct } from './types'
const validateObject = (object: IProduct): boolean => {
    if (object.name === '' || object.description === '' || !(Number(object.quantity) >= 0)) {
        return false
    }

    return true
}

export default validateObject