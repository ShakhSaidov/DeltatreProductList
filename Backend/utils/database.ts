import { ConnectionOptions, connect} from 'mongoose'
import variables from './variables'

const connectDB = async (): Promise<void> => {
    const mongoURI: string = variables.MONGODB!
    const options: ConnectionOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }
    await connect(mongoURI, options)
    console.log('connecting to', mongoURI)
}

export default connectDB