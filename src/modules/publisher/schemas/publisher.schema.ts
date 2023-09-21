import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Schema()
export class Publisher {
    @Prop()
    name: String;

    @Prop()
    address: String;

    @Prop()
    phoneNumber: String;

    @Prop()
    email: String;
}

export const PublisherSchema = SchemaFactory.createForClass(Publisher);