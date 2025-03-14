import { Document } from "mongoose";

export interface IProduct extends Document {
    name: string;
    price: number;
    image: string;
    company: string;
    description: string;
    category: "office" | "home" | "kitchen" | "bedroom" | "outdoor" | "living_room";
    colors: string[];
    shipping: boolean;
    createdAt?: Date;
    updatedAt?: Date;
  }