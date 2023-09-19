import { Document } from 'mongoose';

export interface Book extends Document {
    title: string;
    page_number: number;
    price: number;
    published_date: Date;
    created_at: Date;
}
