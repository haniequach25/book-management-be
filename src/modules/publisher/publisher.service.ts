import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreatePublisherDTO, UpdatePublisherDTO } from './dto/create-publisher.dto';
import { Publisher } from './schemas/publisher.schema';
import { SearchFilter } from 'src/common/dto/search-filter.dto';

@Injectable()
export class PublisherService {
  constructor(
    @InjectModel('Publisher') private readonly publisherModel: Model<Publisher>,
  ) { }

  // fetch all
  async getAll(filter: SearchFilter): Promise<Publisher[]> {
    const query: any = { isResource: true };
    if (filter.fullTextSearch) {
      query.$text = { $search: filter.fullTextSearch };
    }
    const publishers = await this.publisherModel.find().exec();
    return publishers;
  }

  // Get one
  async getDetail(id: string): Promise<Publisher> {
    const publisher = await this.publisherModel.findById(id).exec();
    return publisher;
  }

  // post a single
  async add(createDTO: CreatePublisherDTO): Promise<Publisher> {
    const publisher = new this.publisherModel(createDTO);
    return publisher.save();
  }

  // Edit details
  async update(id: string, createDTO: UpdatePublisherDTO): Promise<Publisher> {
    const updated = await this.publisherModel.findByIdAndUpdate(id, createDTO, {
      new: true,
    });
    return updated;
  }

  // Delete one
  async delete(id: string): Promise<any> {
    const deleted = await this.publisherModel.findByIdAndRemove(id);
    return deleted;
  }
}
