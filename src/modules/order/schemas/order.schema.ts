import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Book } from 'src/modules/book/schemas/book.schema';

class Items {
    quantity: number;
    book: { type: mongoose.Types.ObjectId, ref: "Book" };
}

@Schema()
export class Order {

    @Prop()
    customerName: string;

    @Prop()
    customerPhoneNumber: string;

    @Prop(
        [{ quantity: Number, book: { type: mongoose.Types.ObjectId, ref: "Book" } }]
    )
    items: Items[];
};

export const OrderSchema = SchemaFactory.createForClass(Order);
