import { Link } from "react-router-dom";
import NepalImg from "@/assets/images/nepal.png";
import YakImg from "@/assets/images/yak.png";
import LaliguransImg from "../assets/images/laligurans.png";
import MtEverestImg from "../assets/images/—Pngtree—everest mount nepal_14553171.png";

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
          <span className="flex  md:flex-row items-start md:items-end gap-4 relative">
            ABOUT KARNALI
            <img src={NepalImg} className="w-48 sm:w-48 md:w-96" alt="Nepal" />
          </span>
        </h1>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4">
          <div className="flex flex-row sm:flex-row md:flex-col items-center gap-2">
            <img
              src={YakImg}
              alt="Fried Rice"
              className="w-32 sm:w-28 md:w-32"
            />
            <img
              src={LaliguransImg}
              alt="Fried Rice"
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32"
            />
          </div>
          <span
            className="text-center sm:text-left sm:w-3/4 md:text-base"
            style={{
              fontSize: "1.3rem",
            }}
          >
            Karnali is a region in Nepal known for its rich natural beauty,
            diverse culture, and historical significance. It is both a province
            (Karnali Province) and the name of Nepal’s longest and largest
            river, the Karnali River.
            <br />
            <em className="text-emerald-800" style={{ margin: "1.2rem 0" }}>
              Karnali es una región de Nepal conocida por su rica belleza
              natural, su cultura diversa y su importancia histórica. Es a la
              vez una provincia (provincia de Karnali) y el nombre del río más
              largo y caudaloso de Nepal, el río Karnali.
            </em>
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
          src={MtEverestImg}
          alt="Laligurans"
          className="w-full max-w-md md:max-w-full aspect-square"
        />
      </div>
    </div>
  );
};

export default HeroMenu;
