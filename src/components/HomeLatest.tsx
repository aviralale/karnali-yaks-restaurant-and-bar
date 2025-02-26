import { Link } from "react-router-dom";
import Blob1Img from "../assets/images/blob1.png";
import ChowmeinImg from "../assets/images/chowmein.png";
import { MoveUpRight } from "lucide-react";

const HomeLatest = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 md:gap-8 w-full px-4 py-6 md:py-8">
      {/* Heading */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-center">
        VIEW ALL LATEST
      </h1>

      {/* Content Sections */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8 md:gap-4">
        {/* Asian Cuisine Section */}
        <div className="w-full md:w-1/3 flex flex-col">
          <ul className="flex flex-col gap-4 md:gap-6">
            <p className="text-sm md:text-base text-center md:text-left">
              Asian cuisine encompasses the diverse culinary traditions of
              countries like India, Nepal, and Bhutan. It is known for its bold
              flavors, vibrant spices, and variety of vegetarian and
              non-vegetarian dishes. The cuisine reflects the region's rich
              history, cultural diversity, and agricultural abundance.
            </p>
            <li className="text-lg md:text-xl border-b-2 border-b-black">
              <Link className="flex justify-between items-center" to="/menu">
                Asian <MoveUpRight size={18} />
              </Link>
            </li>
          </ul>
        </div>

        {/* Center Image */}
        <div className="w-full md:w-1/3 flex justify-center order-first md:order-none mb-6 md:mb-0">
          <div
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-88 md:h-88 lg:w-96 lg:h-96 bg-no-repeat bg-cover bg-center flex justify-center items-center"
            style={{
              backgroundImage: `url(${Blob1Img})`,
            }}
          >
            <img
              src={ChowmeinImg}
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72"
              alt="Chowmein"
            />
          </div>
        </div>

        {/* Mexican Cuisine Section */}
        <div className="w-full md:w-1/3 flex flex-col">
          <ul className="flex flex-col gap-4 md:gap-6">
            <p className="text-sm md:text-base text-center md:text-left">
              Mexican cuisine is a vibrant blend of indigenous Mesoamerican
              traditions and Spanish influences, resulting in a rich and
              flavorful culinary heritage. It is recognized by UNESCO as an
              Intangible Cultural Heritage of Humanity. Mexican food is known
              for its bold flavors, fresh ingredients, and communal dining
              style.
            </p>
            <li className="text-lg md:text-xl border-b-2 pb-2 border-b-black">
              <Link className="flex justify-between items-center" to="/menu">
                Mexican <MoveUpRight size={18} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeLatest;
