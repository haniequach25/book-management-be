import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Schema()
export class Author {
    @Prop()
    firstName: string;

    @Prop()
    lastName: String;

    @Prop({
        type: Date,
        default: Date.now()
    })
    dob: Date;

    @Prop()
    description: String;
};

export const AuthorSchema = SchemaFactory.createForClass(Author);
