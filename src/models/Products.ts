import { Schema, model, Document } from "mongoose";

export interface IProduct extends Document {
  name: string;
  price: number;
  image: string;
  company: string;
  description: string;
  category: "office" | "home" | "kitchen" | "bedroom" | "dining" | "living room" | "kids";
  colors: string[];
  shipping?: boolean;
  featured?: boolean;
}

const ProductSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    company: { type: String, required: true },
    description: { type: String, required: true },
    category: {
      type: String,
      required: true,
      enum: ["office", "home", "kitchen", "bedroom", "dining", "living room", "kids"],
    },
    colors: { type: [String], required: true },
    shipping: { type: Boolean, default: false },
    featured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default model<IProduct>("Product", ProductSchema);