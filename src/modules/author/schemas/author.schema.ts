import * as mongoose from 'mongoose';

export const AuthorSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    dob: { type: Date, default: Date.now },
    created_at: { type: Date, default: Date.now },
});
