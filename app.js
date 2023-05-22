import express, { json } from "express";
import morgan from "morgan";
import productRouter from "./routes/products.routes.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(productRouter);

export default app;
