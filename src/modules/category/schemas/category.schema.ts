import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Schema()
export class Category {
    @Prop()
    name: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);