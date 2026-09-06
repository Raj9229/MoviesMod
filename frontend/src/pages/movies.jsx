import { useEffect, useState } from "react";
import api from "../services/api";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api.get("/movies").then((response) => {
      setMovies(response.data);
    });
  }, []);

  return (
    <div>
      <h1 >Movies</h1>

      {movies.map((movie) => (
        <p key={movie.id} className="text-lg bg-amber-800 text-white p-2 rounded-md mb-2">
          {movie.title}
        </p>
      ))}
    </div>
  );
}

export default Movies;