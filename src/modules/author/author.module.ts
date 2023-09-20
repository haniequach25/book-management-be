import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorService } from './author.service';
import { AuthorController } from './author.controller';
import { AuthorSchema } from './schemas/author.schema';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Author', schema: AuthorSchema }])
  ],
  controllers: [AuthorController],
  providers: [AuthorService]
})
export class AuthorModule { }
