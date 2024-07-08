import mongoose from "mongoose";
const { Schema } = mongoose;

const productsSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: Number
})

export const productModel = mongoose.models?.products || mongoose.model('products', productsSchema)