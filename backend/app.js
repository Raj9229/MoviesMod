const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const UserModel = require("./model/usermodel");
const MovieModel = require("./model/moviemodel");

app.use(cors());
app.use(express.json());





app.get("/", (req, res) => {
  res.json({
    message: "Ticket Booking API is running",
  });
});




app.get("/createmovies", (req, res) => {

  let { title, description, language } = req.body;
  let newmovie =  MovieModel.create({
    title,
    description,
    language
  });
  
});

app.get("/movies", (req, res) => {
  res.json(movies);
});




app.get("/users", async (req, res) => {
  const users = await UserModel.find();

  res.json(users);
  console.log("Users fetched successfully");
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`);
    console.log(`API URL: http://localhost:${PORT}`);
});
