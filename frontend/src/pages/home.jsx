import { useEffect, useState } from "react";
import api from "../services/api";
import axios from "axios";


function Home() {
  const [users, setusers] = useState([]);

  useEffect(async () => {
      try {
        const response = await axios.get("http://localhost:5000/users");
        setusers(response.data);
      } catch (error) {
        console.log("Error fetching users:", error);
      }

  }, []);

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero Section */}
      <section className="bg-black px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-5xl font-bold">
            Welcome to MoviesMod
          </h1>

          <p className="mt-4 text-lg text-gray-300">
            Discover. Book. Watch.
          </p>

          <button className="mt-6 rounded-lg bg-red-600 px-6 py-3 font-semibold hover:bg-red-700">
            Explore Movies
          </button>
        </div>
      </section>

      {/* Movies */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="mb-6 text-3xl font-bold">
          Now Showing
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {users.map((user) => (
            <MovieCard
              key={user._id}
              movie={user.name}
            />
          ))}
        </div>
      </section>

    </div>
  );
}

export default Home;