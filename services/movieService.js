import Movie from "../models/Movie.js";

async function listMovies() {
  return await Movie.find();
}

async function getMovieBySlug(slug) {
  return await Movie.findOne({ slug });
}

async function createMovie(data) {
  return await Movie.create(data);
}

async function updateMovie(id, data) {
  return await Movie.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
}

async function deleteMovie(id) {
  return await Movie.findByIdAndDelete(id);
}

export default {
  listMovies,
  getMovieBySlug,
  createMovie,
  updateMovie,
  deleteMovie,
};
