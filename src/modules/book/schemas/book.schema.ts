import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
    title: String,
    page_number: Number,
    price: Number,
    published_date: { type: Date, default: Date.now },
    created_at: { type: Date, default: Date.now },
    author: {type: mongoose.Types.ObjectId, ref: "Author"},
    category: {type: mongoose.Types.ObjectId, ref: "Category"}
});
