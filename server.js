import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDatabase from "./config/database.js";
import movieRoutes from "./routes/movieRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:3000",
      "https://demo-movies-three.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  }),
);

app.use(express.json());

app.use("/movies", movieRoutes);
app.use("/users", userRoutes);

connectDatabase();

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
