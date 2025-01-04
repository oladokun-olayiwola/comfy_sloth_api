import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
    name: {
        type: String,
    },
    price: {
        type: Number,
    },
    image: {
        type: String,
    },
    company: {
        type: String,
    },
    description: {
        type: String,
    },
    category: {
        type: String,
        enum: ['office', 'home']
    },
    colors: {
        type: [String],
    },
    shipping: {
        type: Boolean,
    }
})

export default model("Products", ProductSchema)