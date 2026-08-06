import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDatabase from "./config/database.js";
import movieRoutes from "./routes/movieRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/movies", movieRoutes);
app.use("/users", userRoutes);

connectDatabase();

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
