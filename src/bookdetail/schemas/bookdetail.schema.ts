import * as mongoose from 'mongoose';

export const BookdetailSchema = new mongoose.Schema({
    bookId: String,
    imageFile: String,
    textBook: String
})