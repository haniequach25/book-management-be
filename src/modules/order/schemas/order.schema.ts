import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

interface Items {
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
        [{ type: mongoose.Types.ObjectId, ref: "Book" }]
    )
    items: Items[];
};

export const OrderSchema = SchemaFactory.createForClass(Order);
