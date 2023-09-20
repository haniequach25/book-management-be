import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateBookDTO, UpdateBookDTO } from './dto/create-book.dto';
import { Book } from './schemas/book.schema';

@Injectable()
export class BookService {
  constructor(
    @InjectModel('Book') private readonly bookModel: Model<Book>,
  ) { }

  // fetch all
  async getAll(): Promise<Book[]> {
    const books = await this.bookModel.find().populate([
      {
        path: 'author',
        select: 'firstName lastName'
      },
      {
        path: 'category',
        select: 'name'
      },
      {
        path: 'publisher',
        select: 'name address phoneNumber email'
      },
    ]).exec();
    return books;
  }

  // Get one
  async getDetail(id: number): Promise<Book> {
    const book = await this.bookModel.findById(id).exec();
    return book;
  }

  // post a single
  async add(createDTO: CreateBookDTO): Promise<Book> {
    const book = new this.bookModel(createDTO);
    return book.save();
  }

  // Edit details
  async update(id: number, createDTO: UpdateBookDTO): Promise<Book> {
    const updated = await this.bookModel.findByIdAndUpdate(id, createDTO, {
      new: true,
    });
    return updated;
  }

  // Delete one
  async delete(id: number): Promise<any> {
    const deleted = await this.bookModel.findByIdAndRemove(id);
    return deleted;
  }
}
