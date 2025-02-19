import { Link } from "react-router-dom";
import ChickenTandooriImg from "../assets/images/chicken-tandoori.png";
import FriedRiceImg from "../assets/images/fried-rice.png";
import MomoImg from "../assets/images/moom.png";
const HeroMenu = () => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col justify-center gap-5">
        <h1 className="text-9xl font-bold flex flex-col border-b-2 border-b-black">
          <span className="flex items-end gap-4">
            EXPERIENCE OF REAL RECIPES TASTE
            <img
              src={ChickenTandooriImg}
              className="w-32 h-32 -translate-x-96"
              alt="Chicken Tandoori"
            />
          </span>
        </h1>
        <div className="flex items-center justify-between">
          <img src={FriedRiceImg} alt="" className="w-32 h-32" />
          <span className="w-1/2">
            But our menu doesn’t stop there! We offer a wide range of cuisines,
            from Nepal and the Himalayas to Asia and Mexico, ensuring something
            for every palate. Explore global flavors with us!
          </span>
          <Link className="underline whitespace-nowrap font-semibold" to="/">
            VIEW ALL
          </Link>
        </div>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <img src={MomoImg} alt="" className="w-full aspect-square" />
      </div>
    </div>
  );
};

export default HeroMenu;
