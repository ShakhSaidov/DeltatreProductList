import {Document, ObjectId} from 'mongoose'

export interface MongooseProduct extends Document{
    _id?: ObjectId,
    id?: string,
    name: string,
    description: string,
    quantity: number
}

export interface IProduct{
    name: string,
    description: string,
    quantity: number
}