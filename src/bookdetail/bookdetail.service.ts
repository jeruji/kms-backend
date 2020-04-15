import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Bookdetail } from './interfaces/bookdetail.interface';
import { CreateBookdetailDTO } from './dto/create-bookdetail.dto';

@Injectable()
export class BookdetailService {
    constructor(@InjectModel('Bookdetail') private readonly bookdetailModel: Model<Bookdetail>){}

    //get a single bookdetail
    async getBookdetail(bookdetailID): Promise<Bookdetail> {
        const bookdetail = await this.bookdetailModel.find(bookdetailID).exec();
        return bookdetail;
    }

    //post a single bookdetail
    async addBookdetail(createBookdetailDTO: CreateBookdetailDTO): Promise<Bookdetail> {
        const newBookdetail = await this.bookdetailModel(createBookdetailDTO);
        return newBookdetail.save();
    }

    //delete book detail
    async deleteBookdetail(bookID): Promise<any> {
        const deletedBookdetail = await this.bookdetailModel.find({bookId: bookID}).deleteMany();
        return deletedBookdetail;
    }
}
