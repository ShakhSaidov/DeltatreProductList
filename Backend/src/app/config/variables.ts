import * as dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT
const MONGODB = (process.env.NODE_ENV === 'test')
    ? process.env.MONGODB_TEST
    : process.env.MONGODB

export default {
    MONGODB,
    PORT
}