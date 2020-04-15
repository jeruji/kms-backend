import { Controller, Get, Res, HttpStatus, Post, Body, Put, Query, UploadedFile, NotFoundException, Delete, Param, UseInterceptors  } from '@nestjs/common';
import { BookdetailService } from './bookdetail.service';
import { CreateBookdetailDTO } from './dto/create-bookdetail.dto';

@Controller('bookdetail')
export class BookdetailController {
    constructor(private bookdetailService: BookdetailService) {}

    @Post('/create')
    async addBookdetail(@Res() res, @Body() createBookdetailDTO: CreateBookdetailDTO){
        const bookdetail = await this.bookdetailService.addBookdetail(createBookdetailDTO);
        return res.status(HttpStatus.OK).json({
            message: "Book detail has been created successfully", bookdetail
        })
    }

    @Get('bookdetail/:bookdetailID')
    async getBookdetail(@Res() res, @Param('bookdetailID') bookdetailID){
        const bookdetail = await this.bookdetailService.getBookdetail(bookdetailID);
        if(!bookdetail)
            throw new NotFoundException('Book detail does not exist!');
        
        return res.status(HttpStatus.OK).json(bookdetail);
    }

    // Delete book detail
    @Delete('/delete')
    async deleteBookdetail(@Res() res, @Query('bookID') bookID) {
        const bookdetail = await this.bookdetailService.deleteBookdetail(bookID);
        if (!bookdetail) throw new NotFoundException('Book detail does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'Book detail has been deleted',
            bookdetail
        })
    }
}
