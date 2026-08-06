import bcrypt from "bcrypt";
import User from "../models/User.js";

const createUser = async (userData) => {
  const existingUser = await User.findOne({ email: userData.email });

  if (existingUser) {
    throw new Error("E-mail já cadastrado.");
  }
  const hashedPassword = await bcrypt.hash(userData.password, 10);

  return await User.create({
    ...userData,
    password: hashedPassword,
  });
};

const login = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Usuário ou senha inválidos.");
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    throw new Error("Usuário ou senha inválidos.");
  }

  return user;
};

export default {
  createUser,
  login,
};
