import { Document } from 'mongoose';

export interface Bookdetail extends Document {
    readonly bookId: string
    readonly imageFile: string
    readonly textBook: string
}