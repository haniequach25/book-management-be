import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorSchema } from './schemas/author.schema';
import { AuthorService } from './author.service';
import { AuthorController } from './author.controller';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Author', schema: AuthorSchema }])
  ],
  controllers: [AuthorController],
  providers: [AuthorService]
})
export class AuthorModule { }
