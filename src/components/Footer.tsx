import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-full gap-8 md:gap-12 px-4 py-8">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">
          CONNECT WITH US
        </h1>
      </div>
      <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 w-full max-w-6xl">
        {/* Logo Section */}
        <div className="flex flex-col justify-center items-center text-center">
          <img
            src={Logo}
            alt="Karnali Yaks Restaurant and Bar Logo"
            className="w-16 md:w-20"
          />
          <h1 className="text-sm md:text-md mt-2">
            Karnali Yaks Restaurant and Bar
          </h1>
        </div>
        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <ul className="space-y-2 flex flex-col text-center md:text-left">
            <li>
              <Link to="/our-story" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Dishes
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Legal */}
        <div className="flex flex-col items-center md:items-start">
          <ul className="space-y-2 text-center md:text-left">
            <li>
              <a href="#" className="hover:underline">
                Terms & conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <Link to="/our-story" className="hover:underline">
                Our Story
              </Link>
            </li>
          </ul>
        </div>
        {/* Social Links */}
        <div className="flex flex-col items-center md:items-start">
          <ul className="space-y-2 text-center md:text-left">
            <li>
              <a
                href="https://www.facebook.com/everestfusiones"
                className="hover:underline"
              >
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Twitter
              </a>
            </li>
          </ul>
        </div>
        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start">
          <ul className="space-y-2 text-center md:text-left">
            <li>
              <a href="#" className="hover:underline">
                La Cala de Mijas 📍
              </a>
            </li>
            <li>
              <a href="tel:+34-632989163" className="hover:underline">
                +34-632989163
              </a>
            </li>
            <li>
              <a
                href="mailto:karnaliyaksrestaurant@gmail.com"
                className="hover:underline"
              >
                karnaliyaksrestaurant@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="border border-white w-full" />
      <div className="py-4 text-center">
        <h1 className="text-xs md:text-sm">
          &copy;2025 Karnali Yaks Restaurant & Bar | All Rights Reserved
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
