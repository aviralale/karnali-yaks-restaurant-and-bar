import BiryaniImg from "../assets/images/biryani.png";
import SagPaneerImg from "../assets/images/sag-paneer.png";
import Blob1Img from "../assets/images/blob1.png";
import Blob2Img from "../assets/images/blob2.png";
import { Link } from "react-router-dom";
import { MoveUpRight } from "lucide-react";

const HeroCategories = () => {
  return (
    <div className="flex flex-col gap-6 md:gap-8 justify-between w-full px-4 py-6 md:py-8">
      {/* Title Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-3 md:gap-5">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold whitespace-normal md:whitespace-nowrap">
          OUR CATEGORIES
        </h1>
        <p className="text-sm md:text-base lg:text-lg max-w-xs md:max-w-sm">
          All cooked to perfection over genuine taste and recipes.
        </p>
      </div>

      {/* Categories Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
        {/* Left Blob */}
        <div
          className="w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 bg-no-repeat bg-cover bg-center flex justify-end items-center"
          style={{
            backgroundImage: `url(${Blob1Img})`,
          }}
        >
          <img
            src={BiryaniImg}
            className="w-28 h-28 sm:w-32 sm:h-32 md:w-34 md:h-34 lg:w-36 lg:h-36"
            alt="Biryani"
          />
        </div>

        {/* Menu Categories */}
        <div className="w-full md:w-2/3 lg:w-1/3">
          <ul className="flex flex-col gap-3 md:gap-4 lg:gap-6">
            <li className="text-lg md:text-xl border-b-2 border-b-black">
              <Link className="flex justify-between items-center" to="/menu">
                Appetizer <MoveUpRight size={18} />
              </Link>
            </li>
            <li className="text-lg md:text-xl border-b-2 border-b-black">
              <Link className="flex justify-between items-center" to="/menu">
                Starters <MoveUpRight size={18} />
              </Link>
            </li>
            <li className="text-lg md:text-xl border-b-2 border-b-black">
              <Link className="flex justify-between items-center" to="/menu">
                Mexican Starters <MoveUpRight size={18} />
              </Link>
            </li>
            <li className="text-lg md:text-xl border-b-2 border-b-black">
              <Link className="flex justify-between items-center" to="/menu">
                Main Course <MoveUpRight size={18} />
              </Link>
            </li>
            <li className="text-lg md:text-xl border-b-2 border-b-black">
              <Link className="flex justify-between items-center" to="/menu">
                Grill Special <MoveUpRight size={18} />
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Blob */}
        <div
          className="w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 bg-no-repeat bg-cover bg-center flex items-center"
          style={{
            backgroundImage: `url(${Blob2Img})`,
          }}
        >
          <img
            src={SagPaneerImg}
            className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-42 lg:h-42 -translate-x-4"
            alt="Sag Paneer"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
        {/* Text */}
        <div className="w-full md:w-1/3 order-3 md:order-1">
          <p className="text-center md:text-left text-sm md:text-base">
            We understand that every event is unique, and we work closely with
            you to customize our catering menu to suit your specific needs.
          </p>
        </div>

        {/* Center Image */}
        <div className="w-full md:w-1/3 flex justify-center order-1 md:order-2">
          <div
            className="w-48 h-48 sm:w-52 sm:h-52 md:w-56 md:h-56 lg:w-60 lg:h-60 bg-no-repeat bg-cover bg-center flex justify-center items-center"
            style={{
              backgroundImage: `url(${Blob1Img})`,
            }}
          >
            <img
              src={BiryaniImg}
              className="w-48 h-48 sm:w-52 sm:h-52 md:w-56 md:h-56 lg:w-60 lg:h-60"
              alt="Biryani"
            />
          </div>
        </div>

        {/* Button */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-end order-2 md:order-3">
          <Link
            to="/menu"
            className="bg-black text-white w-24 h-24 sm:w-28 sm:h-28 md:w-30 md:h-30 lg:w-32 lg:h-32 rounded-full flex justify-center items-center text-center hover:shadow-2xl text-sm md:text-base"
          >
            Explore <br /> Dishes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroCategories;
