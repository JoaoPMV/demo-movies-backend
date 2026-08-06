import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// URL do MongoDB (local ou na nuvem)
const mongoURI = process.env.MONGO_URI;

// Função para conectar ao MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Conectado ao MongoDB com sucesso!");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error.message);
    process.exit(1); // Encerra o processo em caso de erro
  }
};

export default connectDB;
