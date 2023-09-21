import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateAuthorDTO, UpdateAuthorDTO } from './dto/create-author.dto';
import { Author } from './schemas/author.schema';
import { SearchFilter } from 'src/common/dto/search-filter.dto';

@Injectable()
export class AuthorService {
  constructor(
    @InjectModel('Author') private readonly authorModel: Model<Author>,
  ) { }

  // fetch all
  async getAll(filter: SearchFilter): Promise<Author[]> {
    const query: any = { isResource: true };
    if (filter.fullTextSearch) {
      query.$text = { $search: filter.fullTextSearch };
    }
    const authors = await this.authorModel.find(query).exec();
    return authors;
  }

  // Get one
  async getDetail(id: string): Promise<Author> {
    const author = await this.authorModel.findById(id).exec();
    return author;
  }

  // post a single
  async add(createDTO: CreateAuthorDTO): Promise<Author> {
    const author = new this.authorModel(createDTO);
    return author.save();
  }

  // Edit details
  async update(id: string, createDTO: UpdateAuthorDTO): Promise<Author> {
    const updated = await this.authorModel.findByIdAndUpdate(id, createDTO, {
      new: true,
    });
    return updated;
  }

  // Delete one
  async delete(id: string): Promise<any> {
    const deleted = await this.authorModel.findByIdAndRemove(id);
    return deleted;
  }
}
