import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
    judul: String,
    penerbit: String,
    tahunterbit: String,
    kategori: String,
    created: { type: Date, default: Date.now }
})