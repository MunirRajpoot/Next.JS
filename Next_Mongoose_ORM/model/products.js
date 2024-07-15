import mongoose from 'mongoose';
import dbConnect from '../utils/db';

dbConnect();

const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  // Add other fields as necessary
}, { timestamps: true }); // Add timestamps for createdAt and updatedAt

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

export default Product;
