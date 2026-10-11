import express, { type Request, type Response } from "express";
import cors from "cors";
import { config } from "dotenv";
import connectDB from "./connectDB/connect";
import Product from "./models/Products";

config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/api/", (_req: Request, res: Response) => {
  res.send("Welcome to the Store API");
});

app.get("/api/products", async (_req: Request, res: Response) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error });
  }
});

app.get("/api/products/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Invalid product ID or server error", error });
  }
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_CONNECTION_STRING!);
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}...`);
    });
  } catch (error) {
    console.log("Failed to start server:", error);
    process.exit(1);
  }
};

start();