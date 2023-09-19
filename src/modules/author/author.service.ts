import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Author } from './interfaces/author.interface';
import { CreateAuthorDTO } from './dto/create-author.dto';

@Injectable()
export class AuthorService {
  constructor(
    @InjectModel('Author') private readonly authorModel: Model<Author>,
  ) {}

  // fetch all
  async getAll(): Promise<Author[]> {
    const authors = await this.authorModel.find().exec();
    return authors;
  }

  // Get one
  async getDetail(id: number): Promise<Author> {
    const author = await this.authorModel.findById(id).exec();
    return author;
  }

  // post a single
  async add(createDTO: CreateAuthorDTO): Promise<Author> {
    const author = new this.authorModel(createDTO);
    return author.save();
  }

  // Edit details
  async update(id: number, createDTO: CreateAuthorDTO): Promise<Author> {
    const updated = await this.authorModel.findByIdAndUpdate(id, createDTO, {
      new: true,
    });
    return updated;
  }

  // Delete one
  async delete(id: number): Promise<any> {
    const deleted = await this.authorModel.findByIdAndRemove(id);
    return deleted;
  }
}
