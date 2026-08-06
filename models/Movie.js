import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    moviesSubtitle: {
      type: String,
      required: true,
    },
    youtubeEmbed: {
      type: String,
      required: true,
    },
    synopsis: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Movie", movieSchema);
