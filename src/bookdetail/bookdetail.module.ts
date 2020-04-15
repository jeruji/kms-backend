import { Module } from '@nestjs/common';
import { BookdetailService } from './bookdetail.service';
import { BookdetailController } from './bookdetail.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BookdetailSchema } from './schemas/bookdetail.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Bookdetail', schema:  BookdetailSchema}])
      ],
      providers: [BookdetailService],
      controllers: [BookdetailController]
})
export class BookdetailModule {}
