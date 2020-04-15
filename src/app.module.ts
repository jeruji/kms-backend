import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BookController } from './book/book.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { BookModule } from './book/book.module';
import { BookdetailModule } from './bookdetail/bookdetail.module';
import { BookdetailController } from './bookdetail/bookdetail.controller';
import { BookService } from './book/book.service';
import { BookdetailService } from './bookdetail/bookdetail.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/historia-kms', { useNewUrlParser: true }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'files'),
    }),
    BookModule,
    BookdetailModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
