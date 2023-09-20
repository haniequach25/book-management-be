import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Author } from 'src/modules/author/schemas/author.schema';
import { Category } from 'src/modules/category/schemas/category.schema';
import { Publisher } from 'src/modules/publisher/schemas/publisher.schema';

@Schema()
export class Book {

    @Prop()
    title: string;

    @Prop()
    page_number: number;

    @Prop()
    price: number;

    @Prop({
        type: Date,
        default: Date.now()
    })
    published_date: Date;

    @Prop(
        { type: mongoose.Types.ObjectId, ref: "Author" }
    )
    author: Author;

    @Prop(
        { type: mongoose.Types.ObjectId, ref: "Category" }
    )
    category: Category;

    @Prop(
        { type: mongoose.Types.ObjectId, ref: "Publisher" }
    )
    publisher: Publisher;
};

export const BookSchema = SchemaFactory.createForClass(Book);
