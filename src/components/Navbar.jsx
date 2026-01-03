import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const baseLinkStyles =
    "font-bold text-lg transition-colors duration-200 underline-offset-4";

  const activeLinkStyles = `${baseLinkStyles} text-pink underline`;

  const nonActiveLinkStyles = `${baseLinkStyles} text-text hover:text-pink hover:underline`;

  return (
    <nav className="sticky top-0 z-50 shadow-md bg-background text-text">
      {/* Container */}
      <div className="flex items-center justify-between max-w-screen-xl px-4 py-3 mx-auto sm:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-1 text-2xl font-bold tracking-wide"
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
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? activeLinkStyles : nonActiveLinkStyles
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? activeLinkStyles : nonActiveLinkStyles
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? activeLinkStyles : nonActiveLinkStyles
            }
          >
            Contact Us
          </NavLink>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="border-t sm:hidden bg-background border-pink/40">
          <div className="flex flex-col px-6 py-4 space-y-2">
            <NavLink
              onClick={() => setMenuOpen(false)}
              to="/"
              end
              className={({ isActive }) =>
                isActive ? activeLinkStyles : nonActiveLinkStyles
              }
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => setMenuOpen(false)}
              to="/products"
              className={({ isActive }) =>
                isActive ? activeLinkStyles : nonActiveLinkStyles
              }
            >
              Products
            </NavLink>
            <NavLink
              onClick={() => setMenuOpen(false)}
              to="/contact"
              className={({ isActive }) =>
                isActive ? activeLinkStyles : nonActiveLinkStyles
              }
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};
