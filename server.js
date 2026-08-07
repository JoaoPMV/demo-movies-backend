import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDatabase from "./config/database.js";
import movieRoutes from "./routes/movieRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: [
    "https://joaopmv-movies.vercel.app",
    "http://localhost:5173",
    "http://localhost:3000",
  ],
  credentials: true,
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE", "OPTIONS"],
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "Authorization",
    "Cache-Control",
  ],
};

app.use(cors(corsOptions));
app.options("/users/login", cors(corsOptions));
app.options("/users/register", cors(corsOptions));

app.use(express.json());

app.use("/movies", movieRoutes);
app.use("/users", userRoutes);

connectDatabase();

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
