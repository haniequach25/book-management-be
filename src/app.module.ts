import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryModule } from './modules/category/category.module';
import { AuthorModule } from './modules/author/author.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017', {
      dbName: 'bookManagementDB',
    }),
    CategoryModule,
    AuthorModule,
  ],
})
export class AppModule { }
