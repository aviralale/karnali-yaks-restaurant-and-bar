import { Menu, X } from "lucide-react";
import Logo from "../assets/images/logo.png";
import LogoMobile from "../../public/favicon.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative">
      <nav className="sticky w-full px-4 py-2 ">
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
          <img
            src={LogoMobile}
            alt="Karnali Yaks Restaurant and Bar Logo"
            className="w-16"
          />
          <p className="font-semibold">Asian | Mexican Fusion</p>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`
            md:hidden 
            absolute 
            top-full 
            left-0 
            right-0 
            shadow-lg
            z-50
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
          <ul className="flex flex-col py-6 px-8">
            <li className="py-3">
              <Link
                to="/gallery"
                className="font-semibold flex items-center justify-between hover:text-gray-600 transition-colors duration-200"
              >
                Gallery
              </Link>
            </li>
            <li className="py-3 border-t border-gray-100">
              <Link
                to="/our-story"
                className="font-semibold flex items-center justify-between hover:text-gray-600 transition-colors duration-200"
              >
                Our Story
              </Link>
            </li>
            <li className="py-3 border-t border-gray-100">
              <Link
                to="/menu"
                className="font-semibold flex items-center justify-between hover:text-gray-600 transition-colors duration-200"
              >
                Menu
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
