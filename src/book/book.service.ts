import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './interfaces/book.interface';
import { CreateBookDTO } from './dto/create-book.dto';

@Injectable()
export class BookService {
    constructor(@InjectModel('Book') private readonly bookModel: Model<Book>){}

    //get a single book
    async getBook(bookID): Promise<Book> {
        const book = await this.bookModel.find(bookID).exec();
        return book;
    }

    //post a single book
    async addBook(createBookDTO: CreateBookDTO): Promise<Book> {
        const newBook = await this.bookModel(createBookDTO);
        return newBook.save();
    }

    //delete a single book
    async deleteBook(bookID): Promise<any> {
        const deletedBook = await this.bookModel.findByIdAndRemove(bookID);
        return deletedBook;
    }
}
