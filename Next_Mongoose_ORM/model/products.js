import mongoose from 'mongoose';
import dbConnect from '../utils/db';

dbConnect();

const { Schema } = mongoose;

const productsSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, default: 0 }
}, { timestamps: true });

export const productModel = mongoose.models.Product || mongoose.model('Product', productsSchema);
