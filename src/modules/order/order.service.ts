import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateOrderDTO, UpdateOrderDTO } from './dto/create-order.dto';
import { Order } from './schemas/order.schema';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel('Order') private readonly orderModel: Model<Order>,
  ) { }

  // fetch all
  async getAll(): Promise<Order[]> {
    const orders = await this.orderModel.find().populate([
      {
        path: 'items.book',
        select: 'title page_number price published_date'
      },
    ]).exec();
    return orders;
  }

  // Get one
  async getDetail(id: string): Promise<Order> {
    const order = await this.orderModel.findById(id).exec();
    return order;
  }

  // post a single
  async add(createDTO: CreateOrderDTO): Promise<Order> {
    const order = new this.orderModel(createDTO);
    return order.save();
  }

  // Edit details
  async update(id: string, createDTO: UpdateOrderDTO): Promise<Order> {
    const updated = await this.orderModel.findByIdAndUpdate(id, createDTO, {
      new: true,
    });
    return updated;
  }

  // Delete one
  async delete(id: string): Promise<any> {
    const deleted = await this.orderModel.findByIdAndRemove(id);
    return deleted;
  }
}
