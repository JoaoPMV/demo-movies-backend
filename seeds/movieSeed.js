import mongoose from "mongoose";
import dotenv from "dotenv";

import connectDatabase from "../config/database.js";
import Movie from "../models/Movie.js";

dotenv.config();

const movieData = {
  slug: "vacation",
  title: "People on Vacation",
  image:
    "https://res.cloudinary.com/di8ymyg1/image/upload/v1786380985/vacation_ocoozt.jpg",
  moviesSubtitle: `
Alex, {come} here. Honey, Alex is here. Ta-da! Are those {condoms}? I just want you to be {safe}, that's all. How {many} times do I have to {tell} you? Alex and I are {just} {friends}, so we {don't} need condoms. And we {definitely} don't need 500. {Because} we're not an {army}. Please stop. Okay, Wanda! On {vacation}, you can be {anyone} you want. Who {wants} to go {skinny}-dipping? Alex {does} not. Maybe vacation, Alex does. That's why I want to {travel}. You can {actually} be who you want to be {instead} of who they say you are. How about {every} {summer}, {wherever} we are, we meet {somewhere} in the world for a {trip}. Deal. Beignets on the {house} to the lovebirds. Thank you. No. No. Hey! What a {coincidence}. We just got hitched too. So {sweet}. Congratulations you two. I told you. Come on {vacation}, Alex. Is that the best you got? Okay, you {asked} for this. Oh my god. I'm gonna {pick} you {up} on the {condition} that you don't call me Seabiscuit. How {did} you know that I {really} want to do that? {Because} I know you. Poppy, you take vacations for a {living}. Make me burn with {jealousy} for your {carefree}, jet-setting life. But I mean, don't you ever {find} travel a little {lonely}? I'm here. I'll {always} be here. Sorry. What was that? I'm just {confused}. What am I to you? You're my {friend}. I do not deserve you. I know. My best friend. Alex, I think it's {called} settling. You live in a {fantasy} {land}. Always {running} away to new places, new {connections}. Maybe the universe is {giving} me a sign. That's a {heck} of a girl. You.
`,
  youtubeEmbed: "https://www.youtube.com/embed/m1C9DTOUH5s",
  synopsis:
    "Free-spirited Poppy (Emily Bader) and routine-loving Alex (Tom Blyth) have been unlikely best friends for a decade, living in different cities but spending every summer vacation together. The careful balance of their friendship is put to the test when they begin to question what has been obvious to everyone else -- could they actually be the perfect romantic match?",
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
