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
    customerName: String;

    @Prop()
    customerPhoneNumber: String;

    @Prop()
    totalPrice: Number;

    @Prop(
        [{ quantity: Number, book: { type: mongoose.Types.ObjectId, ref: "Book" } }]
    )
    items: Items[];
};

export const OrderSchema = SchemaFactory.createForClass(Order).index({'$**': 'text'});
