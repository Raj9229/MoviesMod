const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

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


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`);
    console.log(`API URL: http://localhost:${PORT}`);
});