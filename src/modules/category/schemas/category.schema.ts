import * as mongoose from 'mongoose';

export const CategorySchema = new mongoose.Schema({
    name: String,
    created_at: { type: Date, default: Date.now }
})