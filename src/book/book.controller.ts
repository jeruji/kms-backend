import { Controller, Get, Res, HttpStatus, Post, Body, Put, Query, UploadedFile, NotFoundException, Delete, Param, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { editFileName, imageFileFilter } from 'src/utils/file-uploading.utils';
import { diskStorage } from 'multer';
import { BookService } from './book.service';
import { CreateBookDTO } from './dto/create-book.dto';

@Controller('book')
export class BookController {

    constructor(private bookService: BookService) {}

    @Post('upload')
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './files',
            filename: editFileName
        }),
        fileFilter: imageFileFilter
    }))
    async uploadFile(@UploadedFile() file){
        const response = {
            originalname: file.originalname,
            filename: file.filename
        }
        return response
    }

    @Post('/create')
    async addBook(@Res() res, @Body() createBookDTO: CreateBookDTO) {
        const book = await this.bookService.addBook(createBookDTO);
        return res.status(HttpStatus.OK).json({
            message: "Book has been created successfully",
            book
        })
    }

    @Get('book/:bookID')
    async getBook(@Res() res, @Param('bookID') bookID){
        const book = await this.bookService.getBook(bookID);
        if(!book)
            throw new NotFoundException('Book does not exist!');
        
        return res.status(HttpStatus.OK).json(book);
    }

    // Delete a book
    @Delete('/delete')
    async deleteBook(@Res() res, @Query('bookID') bookID) {
        const book = await this.bookService.deleteBook(bookID);
        if (!book) throw new NotFoundException('Book does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'Book has been deleted',
            book
        })
    }
}
