const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const UserModel = require("./model/usermodel");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Ticket Booking API is running",
  });
});

const movies = [
  {
    id: 1,
    title: "Avengers",
  },
  {
    id: 2,
    title: "Interstellar",
  },
  {
    id: 3,
    title: "Inception",
  },
];

app.get("/api/movies", (req, res) => {
  res.json(movies);
});

app.get('/create', async (req, res) => {
    let name = "rajaaaaaaaaaa";
    let email = "raj@example.com";
    let imgUrl = "https://example.com/raj.jpg";
    let createdUser = await UserModel.create({name, email, imgUrl});
    res.json({message: "User created successfully"});
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