import { Menu, X } from "lucide-react";
import Logo from "../assets/images/logo.png";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Close menu when escape key is pressed
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscKey);
    }
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isMenuOpen]);

  // Prevent body scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <header className="relative">
      <nav className="sticky w-full px-4 py-2 bg-white z-20">
        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-between items-center">
          <ul className="flex items-center justify-evenly flex-1">
            <li className="font-semibold">Asian | Mexican Fusion</li>
            <li className="font-semibold">Health & Wellness</li>
          </ul>
          <Link to="/" className="flex-1 flex justify-center items-center">
            <img
              src={Logo}
              alt="Karnali Yaks Restaurant and Bar Logo"
              className="w-20"
            />
          </Link>
          <ul className="flex-1 flex items-center justify-evenly">
            <li className="font-semibold">
              <Link to="/gallery">Gallery</Link>
            </li>
            <li className="font-semibold">
              <Link to="/our-story">Our Story</Link>
            </li>
            <li className="font-semibold">
              <Link to="/menu" className="flex items-center gap-2">
                Menu <Menu size={20} />
              </Link>
            </li>
          </ul>
        </div>
        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-between items-center">
          <Link to="/">
            <img
              src={Logo}
              alt="Karnali Yaks Restaurant and Bar Logo"
              className="w-16"
            />
          </Link>
          <p className="font-semibold">Asian | Mexican Fusion</p>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        ref={menuRef}
        className={`
          md:hidden
          fixed
          top-[58px]
          left-0
          right-0
          bottom-0
          bg-white
          shadow-lg
          z-10
          transform
          transition-all
          duration-300
          ease-in-out
          ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }
        `}
      >
        <div className="flex flex-col h-full">
          <ul
            className="flex-1 flex flex-col space-y-4"
            style={{
              padding: "1.5rem",
            }}
          >
            <li>
              <Link
                to="/gallery"
                className="block w-full text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                style={{
                  padding: "1rem",
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/our-story"
                className="block w-full text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                style={{
                  padding: "1rem",
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                Our Story
              </Link>
            </li>
            <li>
              <Link
                to="/menu"
                className="block w-full text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                style={{
                  padding: "1rem",
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="/health-wellness"
                className="block w-full text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                style={{
                  padding: "1rem",
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                Health & Wellness
              </Link>
            </li>
          </ul>

          <div
            className=" border-t border-gray-200"
            style={{
              marginTop: "auto",
              padding: "1.5rem",
            }}
          >
            <a
              href="tel:+123456789"
              className="block w-full text-center bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200"
              style={{
                padding: "0.75rem 0",
              }}
            >
              Call Us
            </a>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-0 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Navbar;
