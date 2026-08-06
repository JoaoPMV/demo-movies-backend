import movieService from "../services/movieService.js";
import fs from "fs/promises";
import cloudinary from "../config/cloudinary.js";

async function listMovies(req, res) {
  try {
    const movies = await movieService.listMovies();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getMovieBySlug(req, res) {
  try {
    const movie = await movieService.getMovieBySlug(req.params.slug);

    if (!movie) {
      return res.status(404).json({ message: "Filme não encontrado." });
    }

    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function createMovie(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "Uma imagem é obrigatória.",
      });
    }

    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "movies-demo",
    });

    try {
      await fs.unlink(req.file.path);
    } catch (error) {
      console.log("Erro ao remover arquivo temporário:", error.message);
    }

    const movie = await movieService.createMovie({
      ...req.body,
      image: result.secure_url,
    });

    res.status(201).json(movie);
  } catch (error) {
    // Remove o arquivo temporário caso ocorra algum erro
    if (req.file) {
      try {
        await fs.unlink(req.file.path);
      } catch {}
    }

    res.status(500).json({
      message: error.message,
    });
  }
}

async function updateMovie(req, res) {
  try {
    const movie = await movieService.updateMovie(req.params.id, req.body);

    if (!movie) {
      return res.status(404).json({ message: "Filme não encontrado." });
    }

    res.status(200).json(movie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function deleteMovie(req, res) {
  try {
    const movie = await movieService.deleteMovie(req.params.id);

    if (!movie) {
      return res.status(404).json({ message: "Filme não encontrado." });
    }

    res.status(200).json({ message: "Filme removido com sucesso." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export default {
  listMovies,
  getMovieBySlug,
  createMovie,
  updateMovie,
  deleteMovie,
};
