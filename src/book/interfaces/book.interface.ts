import { Document } from 'mongoose';

export interface Book extends Document {
    readonly judul: string
    readonly penerbit: string
    readonly tahunterbit: string
    readonly kategori: string
    readonly created: Date
}