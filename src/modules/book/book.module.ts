import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookSchema } from './schemas/book.schema';
import { BookController } from './book.controller';
import { BookService } from './book.service';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Book', schema: BookSchema }])
  ],
  controllers: [BookController],
  providers: [BookService]
})
export class AuthorModule { }
