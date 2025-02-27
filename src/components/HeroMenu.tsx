import { Link } from "react-router-dom";
import ChickenTandooriImg from "../assets/images/chicken-tandoori.png";
import FriedRiceImg from "../assets/images/fried-rice.png";
import MomoImg from "../assets/images/moom.png";

const HeroMenu = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-8 px-4 py-6 md:py-8">
      {/* Left Section */}
      <div className="flex flex-col justify-center gap-5 w-full md:w-1/2">
        <h1
          className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold flex flex-col border-b-2 border-b-black "
          style={{
            padding: "1rem",
          }}
        >
          <span className="flex flex-col md:flex-row items-start md:items-end gap-4 relative">
            EXPERIENCE OF REAL RECIPES TASTE
            <img
              src={ChickenTandooriImg}
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 self-end md:absolute md:-right-16 lg:-translate-x-24 xl:-translate-x-96"
              alt="Chicken Tandoori"
            />
          </span>
        </h1>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4">
          <img
            src={FriedRiceImg}
            alt="Fried Rice"
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32"
          />
          <span className="text-center sm:text-left sm:w-1/2 text-sm md:text-base">
            But our menu doesn't stop there! We offer a wide range of cuisines,
            from Nepal and the Himalayas to Asia and Mexico, ensuring something
            for every palate. Explore global flavors with us!
          </span>
          <Link
            className="underline whitespace-nowrap font-semibold text-sm md:text-base"
            to="/menu"
          >
            VIEW ALL
          </Link>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="w-full md:w-1/2 flex justify-center items-center mt-4 md:mt-0">
        <img
          src={MomoImg}
          alt="Momo"
          className="w-full max-w-md md:max-w-full aspect-square"
        />
      </div>
    </div>
  );
};

export default HeroMenu;
