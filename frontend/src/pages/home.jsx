import { useEffect, useState } from "react";
import api from "../services/api";


function Home() {
  const [users, setusers] = useState([]);

  useEffect(() => {
      try {
        const response = api.get("/");
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

      

    </div>
  );
}

export default Home;