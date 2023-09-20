import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Schema()
export class Publisher {
    @Prop()
    name: string;

    @Prop()
    address: string;

    @Prop()
    phoneNumber: string;

    @Prop()
    email: string;
}

export const PublisherSchema = SchemaFactory.createForClass(Publisher);