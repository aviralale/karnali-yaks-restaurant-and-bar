import ChickenTandooriImg from "../assets/images/chicken-tandoori.png";
import BurritosImg from "../assets/images/burrito.png";
import Blob1Img from "../assets/images/blob1.png";
import Blob2Img from "../assets/images/blob2.png";
import ChowmeinImg from "../assets/images/chowmein.png";
import NachosImg from "../assets/images/nachos.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 w-full px-4 py-8 md:py-12">
      <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold flex flex-col">
        <span className="flex gap-2 md:gap-4 self-start items-center">
          ASIAN
          <img
            src={ChickenTandooriImg}
            className="w-16 md:w-24 lg:w-32"
            alt="Chicken Tandoori"
          />
          &
        </span>
        <span className="flex gap-2 md:gap-4 self-end items-center">
          MEXICAN
          <img
            src={BurritosImg}
            className="w-16 md:w-24 lg:w-32"
            alt="Burritos"
          />
          CUISINES
        </span>
      </h1>

      <Link
        to="/menu"
        className="bg-black text-white w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full flex justify-center items-center text-center hover:shadow-2xl text-sm md:text-base"
      >
        Explore <br /> Dishes
      </Link>

      <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
        <div
          className="w-36 h-36 md:w-40 md:h-40 lg:w-56 lg:h-56 bg-no-repeat bg-cover bg-center flex justify-end items-center"
          style={{
            backgroundImage: `url(${Blob1Img})`,
          }}
        >
          <img
            src={ChowmeinImg}
            className="w-28 h-28 md:w-32 md:h-32 lg:w-48 lg:h-48"
            alt="Chowmein"
          />
        </div>

        <div className="w-full md:w-1/3 order-3 md:order-2">
          <p className="text-center md:text-justify text-sm md:text-base">
            Welcome to <strong>Karnali Yaks Restaurant & Bar</strong> in La Cala
            de Mijas 📍! Experience a unique fusion of flavors from Asia,
            Mexico, Nepal, and the Himalayas. Our dishes celebrate tradition and
            taste, served in a warm, cozy atmosphere. Join us for an
            unforgettable culinary journey—we can't wait to welcome you!
          </p>
        </div>

        <div
          className="w-36 h-36 md:w-40 md:h-40 lg:w-56 hidden lg:h-56 bg-no-repeat bg-cover bg-center md:flex items-center order-2 md:order-3"
          style={{
            backgroundImage: `url(${Blob2Img})`,
          }}
        >
          <img
            src={NachosImg}
            className="w-32 h-32 md:w-36 md:h-36 lg:w-48 lg:h-48 -translate-x-4"
            alt="Nachos"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
