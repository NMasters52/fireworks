import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-background text-text sticky top-0 z-50 shadow-md">
      {/* Container */}
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-3 sm:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide flex items-center gap-1"
        >
          Rasco<span className="text-pink">FX</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <FiX className="text-3xl text-text" />
          ) : (
            <FiMenu className="text-3xl text-text" />
          )}
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden sm:flex sm:items-center sm:gap-8">
          <Link
            to="/"
            className="hover:text-pink transition-colors duration-200 font-bold text-lg cursor-pointer hover:underline underline-offset-4 underline-pink "
          >
            Home
          </Link>
          <Link
            to="/products"
            className="hover:text-pink transition-colors duration-200 font-bold text-lg cursor-pointer hover:underline underline-offset-4 underline-pink "
          >
            Products
          </Link>
          <Link
            to="/contact"
            className="hover:text-pink transition-colors duration-200 font-bold text-lg cursor-pointer hover:underline underline-offset-4 underline-pink "
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="sm:hidden bg-background border-t border-pink/40">
          <div className="flex flex-col px-6 py-4 space-y-2">
            <Link
              onClick={() => setMenuOpen(false)}
              to="/"
              className="hover:text-pink transition-colors font-bold text-lg cursor-pointer hover:underline underline-offset-4 underline-pink "
            >
              Home
            </Link>
            <Link
              onClick={() => setMenuOpen(false)}
              to="/products"
              className="hover:text-pink transition-colors font-bold text-lg cursor-pointer hover:underline underline-offset-4 underline-pink"
            >
              Products
            </Link>
            <Link
              onClick={() => setMenuOpen(false)}
              to="/contact"
              className="hover:text-pink transition-colors font-bold text-lg cursor-pointer hover:underline underline-offset-4 underline-pink"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
