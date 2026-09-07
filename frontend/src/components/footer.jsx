import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-10">

        <div className="grid gap-8 md:grid-cols-3">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-red-500">
              MoviesMod
            </h2>

            <p className="mt-3 max-w-sm text-sm text-gray-400">
              Discover your favorite movies, book your seats,
              and enjoy the show.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-white">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2 text-sm">
              <Link to="/" className="hover:text-white">
                Home
              </Link>

              <Link to="/movies" className="hover:text-white">
                Movies
              </Link>

              <Link to="/bookings" className="hover:text-white">
                My Bookings
              </Link>
            </div>
          </div>

          {/* Account */}
          <div>
            <h3 className="mb-4 font-semibold text-white">
              Account
            </h3>

            <div className="flex flex-col gap-2 text-sm">
              <Link to="/login" className="hover:text-white">
                Login
              </Link>

              <Link to="/register" className="hover:text-white">
                Register
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          © 2026 CineGo. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;