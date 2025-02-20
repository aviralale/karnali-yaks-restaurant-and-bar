import ChickenTandooriImg from "../assets/images/chicken-tandoori.png";
import BurritosImg from "../assets/images/burrito.png";
import Blob1Img from "../assets/images/blob1.png";
import Blob2Img from "../assets/images/blob2.png";
import ChowmeinImg from "../assets/images/chowmein.png";
import NachosImg from "../assets/images/nachos.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 w-full">
      <h1 className="text-9xl font-bold flex flex-col">
        <span className="flex gap-4 self-start">
          ASIAN
          <img
            src={ChickenTandooriImg}
            className="w-32"
            alt="Chicken Tandoori"
          />
          &
        </span>
        <span className="flex gap-4 self-end">
          MEXICAN
          <img src={BurritosImg} className="w-32" alt="Burritos" />
          CUISINES
        </span>
      </h1>

      <Link
        to="/"
        className="bg-black text-white w-32 h-32 rounded-full flex justify-center items-center text-center  hover:shadow-2xl"
      >
        Explore <br /> Dishes
      </Link>

      <div className="flex justify-between items-center">
        <div
          className="w-48 h-48 bg-no-repeat bg-cover bg-center flex justify-end items-center"
          style={{
            backgroundImage: `url(${Blob1Img})`,
          }}
        >
          <img src={ChowmeinImg} className="w-36 h-36" alt="" />
        </div>
        <div className="w-1/3">
          <p className="text-justify">
            Welcome to <strong>Karnali Yaks Restaurant & Bar</strong> in La Cala
            de Mijas 📍! Experience a unique fusion of flavors from Asia,
            Mexico, Nepal, and the Himalayas. Our dishes celebrate tradition and
            taste, served in a warm, cozy atmosphere. Join us for an
            unforgettable culinary journey—we can’t wait to welcome you!
          </p>
        </div>
        <div
          className="w-48 h-48 bg-no-repeat bg-cover bg-center flex items-center"
          style={{
            backgroundImage: `url(${Blob2Img})`,
          }}
        >
          <img src={NachosImg} className="w-42 h-42 -translate-x-4" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
