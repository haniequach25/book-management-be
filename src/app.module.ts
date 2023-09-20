import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryModule } from './modules/category/category.module';
import { AuthorModule } from './modules/author/author.module';
import { BookModule } from './modules/book/book.module';
import { PublisherModule } from './modules/publisher/publisher.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017', {
      dbName: 'bookManagementDB',
    }),
    CategoryModule,
    AuthorModule,
    BookModule,
    PublisherModule,
  ],
})
export class AppModule { }
