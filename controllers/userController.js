import userService from "../services/userService.js";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);

    const { password, ...userWithoutPassword } = user.toObject();

    res.status(201).json(userWithoutPassword);
  } catch (err) {
    if (err.message === "E-mail já cadastrado.") {
      return res.status(409).json({
        message: err.message,
      });
    }

    res.status(500).json({
      message: err.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const user = await userService.login(req.body.email, req.body.password);

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      },
    );

    const { password, ...userWithoutPassword } = user.toObject();

    res.json({
      token,
      user: userWithoutPassword,
    });
  } catch (err) {
    res.status(401).json({
      message: err.message,
    });
  }
};

export default {
  register,
  login,
};
