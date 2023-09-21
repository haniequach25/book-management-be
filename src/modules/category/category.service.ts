import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCategoryDTO, UpdateCategoryDTO } from './dto/create-category.dto';
import { Category } from './schemas/category.schema';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel('Category') private readonly categoryModel: Model<Category>,
  ) { }

  // fetch all
  async getAll(): Promise<Category[]> {
    const categories = await this.categoryModel.find().exec();
    return categories;
  }

  // Get one
  async getDetail(id: string): Promise<Category> {
    const category = await this.categoryModel.findById(id).exec();
    return category;
  }

  // post a single
  async add(createDTO: CreateCategoryDTO): Promise<Category> {
    const category = new this.categoryModel(createDTO);
    return category.save();
  }

  // Edit details
  async update(id: string, createDTO: UpdateCategoryDTO): Promise<Category> {
    const updated = await this.categoryModel.findByIdAndUpdate(id, createDTO, {
      new: true,
    });
    return updated;
  }

  // Delete one
  async delete(id: string): Promise<any> {
    const deleted = await this.categoryModel.findByIdAndRemove(id);
    return deleted;
  }
}
