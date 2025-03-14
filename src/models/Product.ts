import { Schema, model } from 'mongoose';
import { IProduct } from '../interfaces/products';

const ProductSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true, trim: true },
    price: { type: Number, required: true, min: 0 },
    image: { type: String, required: true }, // Cloudinary URL
    company: { type: String, required: true },
    description: { type: String, required: true },
    category: {
      type: String,
      enum: ['office', 'home', 'kitchen', 'bedroom', 'outdoor', 'living_room'],
      required: true,
    },
    colors: { type: [String], required: true },
    shipping: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default model<IProduct>('Product', ProductSchema);
