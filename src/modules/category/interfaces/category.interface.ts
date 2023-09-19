import { Document } from 'mongoose';

export interface Category extends Document {
    readonly name: string;
    readonly created_at: Date;
}