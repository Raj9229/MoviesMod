import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-red-500">
          CineGo
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="text-gray-300 transition hover:text-white"
          >
            Home
          </Link>

          <Link
            to="/movies"
            className="text-gray-300 transition hover:text-white"
          >
            Movies
          </Link>

          <Link
            to="/bookings"
            className="text-gray-300 transition hover:text-white"
          >
            My Bookings
          </Link>

          <Link
            to="/login"
            className="rounded-lg bg-red-600 px-5 py-2 font-semibold transition hover:bg-red-700"
          >
            Login
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;