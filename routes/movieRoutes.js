import express from "express";
import movieController from "../controllers/movieController.js";
import authMiddleware from "../middlewares/AuthMiddleware.js";

const router = express.Router();

router.get("/list", authMiddleware, movieController.listMovies);

// NOVA ROTA POR SLUG
router.get("/:slug", authMiddleware, movieController.getMovieBySlug);
router.post("/", movieController.createMovie);
router.put("/:id", authMiddleware, movieController.updateMovie);
router.delete("/:id", authMiddleware, movieController.deleteMovie);

export default router;
