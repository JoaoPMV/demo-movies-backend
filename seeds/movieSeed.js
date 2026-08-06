import mongoose from "mongoose";
import dotenv from "dotenv";

import connectDatabase from "../config/database.js";
import Movie from "../models/Movie.js";

dotenv.config();

const movieData = {
  slug: "marriagestory",
  title: "Marriage Story",
  image:
    "https://res.cloudinary.com/di8ymyg1/image/upload/v1785438412/marriage_story.jpg",
  moviesSubtitle: `
What I {love} about Nicole, she is a {mother} who plays, {really} plays. What I {love} about Charlie. He loves being a {dad}. He loves all the {things} you're {supposed} to hate, like waking up at {night}. She knows when to {push} me and when to {leave} me {alone}. He never lets other people {keep} him from what he {wants} to do. Dad, you're too {far}. I know. It's not {easy} for her to {close} a cabinet. He's {incredibly} neat. She's {brave}. He's {brilliant}. He's very {competitive}. So I'll tell Charlie what's {happening}, and Cassie, you then {hand} him the envelope. I just get {nervous}. Can you {unserve}? What do you {mean}, like take it back? Charlie and I are getting a {divorce}, mom. You can't be {friends} with him {anymore}. G-ma. Charlie Bird. Mom. Mom. Mom. What? You know, most people in my {business}, you're just {transactions}. I like to think of you as people. Oh, okay, good. You {remind} me of myself on my second {marriage}. Part of what we're {going} to do {together} is tell your story. Did you {dye} your {hair} again? No, this is me. You {don't} like it? Is it {shorter}? I prefer it {longer}, but... How are you doing? I {realized} I never really come alive for {myself}. I was just feeding his {aliveness}. I'll never get to {really} be his parent again. He needs to know that I {fought} for him. It's not as simple as not being in love {anymore}. {Eventually}, there'll be the two of you having to {figure} this {out}. Together. If we start {from} a place of {reasonable} and they start {from} a place of {crazy}, when we settle, we'll be somewhere between {reasonable} and {crazy}.
`,
  youtubeEmbed: "https://www.youtube.com/embed/BHi-a1n8t7M",
  synopsis:
    "A stage director and his actor wife struggle through a grueling divorce that pushes them to their personal and creative extremes. Noah Baumbach's incisive and compassionate look at a marriage breaking up and a family staying together.",
};

async function seed() {
  try {
    await connectDatabase();

    const movie = await Movie.findOneAndUpdate(
      { slug: movieData.slug },
      movieData,
      {
        upsert: true,
        new: true,
        runValidators: true,
      },
    );

    console.log("Seed executado com sucesso:", movie.title);

    await mongoose.connection.close();
  } catch (error) {
    console.error("Erro ao executar seed:", error);
    await mongoose.connection.close();
  }
}

seed();
