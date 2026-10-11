import { config } from "dotenv";
import connectDB from "./connectDB/connect";
import Products from "./models/Products";
import { products } from "./products";

config();

const populate = async () => {
  try {
    await connectDB(process.env.MONGO_CONNECTION_STRING!);
    
    await Products.deleteMany(); 
    
    await Products.create(products);
    
    console.log("Database successfully populated!");
    process.exit(0);
  } catch (error) {
    console.error("Failed to populate database:", error);
    process.exit(1);
  }
};

populate();