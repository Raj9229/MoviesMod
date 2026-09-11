import { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";

const movies = [
  {
    id: 1,
    title: "Interstellar",
    genre: "Sci-Fi • Drama",
    rating: "8.7",
    image:
      "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  },
  {
    id: 2,
    title: "The Dark Knight",
    genre: "Action • Crime",
    rating: "9.0",
    image:
      "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
  {
    id: 3,
    title: "Inception",
    genre: "Sci-Fi • Thriller",
    rating: "8.8",
    image:
      "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="mx-auto flex min-h-[600px] max-w-7xl items-center px-6 py-20 lg:px-8">

          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-red-500">
              Movie Ticket Booking
            </p>

            <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
              Your movie night
              <span className="block text-red-500">
                starts here.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
              Discover movies, choose your favourite seats and book your
              tickets in just a few clicks.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/movies"
                className="rounded-lg bg-red-600 px-6 py-3 font-semibold transition hover:bg-red-700"
              >
                Explore Movies
              </Link>

              <Link
                to="/movies"
                className="rounded-lg border border-slate-700 px-6 py-3 font-semibold transition hover:bg-slate-800"
              >
                View Now Showing
              </Link>
            </div>
          </div>

        </div>

        {/* Background decoration */}
        <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-red-600/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
      </section>

      {/* Now Showing */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm font-medium text-red-500">
              What's playing
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Now Showing
            </h2>
          </div>

          <Link
            to="/movies"
            className="hidden text-sm font-medium text-slate-400 transition hover:text-white sm:block"
          >
            View all →
          </Link>
        </div>

        {/* Movie Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {movies.map((movie) => (
            <div
              key={movie.id}
              className="group overflow-hidden rounded-xl border border-slate-800 bg-slate-900 transition hover:-translate-y-1 hover:border-slate-700"
            >

              {/* Poster */}
              <div className="aspect-[2/3] overflow-hidden">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Card Content */}
              <div className="p-5">

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">
                      {movie.title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-400">
                      {movie.genre}
                    </p>
                  </div>

                  <span className="rounded-md bg-slate-800 px-2 py-1 text-sm font-medium">
                    ★ {movie.rating}
                  </span>
                </div>

                <Link
                  to={`/movies/${movie.id}`}
                  className="mt-5 block rounded-lg bg-white px-4 py-2.5 text-center text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                >
                  View Details
                </Link>

              </div>
            </div>
          ))}

        </div>
      </section>

      {/* How It Works */}
      <section className="border-y border-slate-800 bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <div className="text-center">
            <p className="text-sm font-medium text-red-500">
              Simple process
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Book your tickets in 3 steps
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">

            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-600 font-bold">
                1
              </div>

              <h3 className="mt-5 text-lg font-semibold">
                Choose a Movie
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Browse the latest movies and select the one you want to watch.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-600 font-bold">
                2
              </div>

              <h3 className="mt-5 text-lg font-semibold">
                Select Seats
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Pick your preferred showtime and choose available seats.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-600 font-bold">
                3
              </div>

              <h3 className="mt-5 text-lg font-semibold">
                Confirm Booking
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Review your booking details and confirm your tickets.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;