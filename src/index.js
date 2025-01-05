import express from "express"
import cors from "cors"
import { config } from "dotenv";
import connectDB from "./connectDB/connect.js";

import { products } from "../products.js";
config()

const app = express();
const PORT = process.env.PORT;

//Enable cors
app.use(cors());

app.get("/api/products", (req, res) => {
    res.json(products);
  });
  
  app.get("/api/products/:id", (req, res) => {
    const product = products.find((p) => p.id === req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  });

  app.get("/", (req, res) => {
    res.send("Welcome")
  })

// Start the server
const start = async () => {
  await connectDB(process.env.MONGO_CONNECTION_STRING);
  try {
    app.listen(PORT, () => {
      console.log(`Listening to your server on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();