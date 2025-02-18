import { Menu } from "lucide-react";
import Logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <header>
      <nav className="fixed w-full">
        <div className="flex justify-between">
          <ul className="flex items-center justify-evenly flex-1">
            <li className="font-semibold">Asian | Mexican Fusion</li>
            <li className="font-semibold">Health & Wellness</li>
          </ul>
          <div className="flex-1 flex justify-center items-center">
            <img
              src={Logo}
              alt="Karnali Yaks Restaurant and Bar Logo"
              className="w-20"
            />
          </div>
          <ul className="flex-1 flex items-center justify-evenly">
            <li className="font-semibold">
              <a href="#">Offers</a>
            </li>
            <li className="font-semibold">
              <a href="#">Services</a>
            </li>
            <li className="font-semibold">
              <a href="#" className="flex items-center gap-2">
                Menu <Menu />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
