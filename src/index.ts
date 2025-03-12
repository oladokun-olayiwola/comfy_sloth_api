import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./connectDB/connect";
import { products } from "./data/products";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Enable CORS
app.use(cors());

// Define API routes
app.get("/api/products", (req: Request, res: Response) => {
  res.json(products);
});

app.get("/api/products/:id", (req: Request, res: Response) => {
  const product = products.find((p) => p.id === req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

app.get("/api/", (req: Request, res: Response) => {
  res.send("Welcome");
});

// Start the server
const start = async () => {
  try {
    await connectDB(process.env.MONGO_CONNECTION_STRING as string);
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
};

start();
