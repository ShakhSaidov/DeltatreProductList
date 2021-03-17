import {Document, ObjectId} from 'mongoose'

export interface IProduct extends Document{
    _id?: ObjectId,
    id?: string,
    name: string,
    description: string,
    quantity: number
}

export interface TestProduct{
    name: string,
    description: string,
    quantity: number
}