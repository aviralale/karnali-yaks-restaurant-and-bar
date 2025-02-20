import BiryaniImg from "../assets/images/biryani.png";
import SagPaneerImg from "../assets/images/sag-paneer.png";
import Blob1Img from "../assets/images/blob1.png";
import Blob2Img from "../assets/images/blob2.png";
import { Link } from "react-router-dom";
import { MoveUpRight } from "lucide-react";
const HeroCategories = () => {
  return (
    <div className="flex flex-col gap-4 justify-between">
      <div className="flex items-center justify-between w-full gap-5">
        <h1 className="text-8xl font-bold whitespace-nowrap ">
          OUR CATEGORIES
        </h1>
        <p>All cooked to perfection over genuine taste and recipes.</p>
      </div>
      <div className="flex items-center justify-between">
        <div
          className="w-48 h-48 bg-no-repeat bg-cover bg-center flex justify-end items-center"
          style={{
            backgroundImage: `url(${Blob1Img})`,
          }}
        >
          <img src={BiryaniImg} className="w-36 h-36" alt="" />
        </div>
        <div className="w-1/3">
          <ul className="flex flex-col  gap-6">
            <li className="text-xl border-b-2  border-b-black">
              <Link className="flex justify-between" to="/">
                Fish Cake <MoveUpRight />
              </Link>
            </li>
            <li className="text-xl border-b-2 border-b-black">
              <Link className="flex justify-between" to="/">
                Sag Paneer <MoveUpRight />
              </Link>
            </li>
            <li className="text-xl border-b-2 border-b-black">
              <Link className="flex justify-between" to="/">
                Burritos <MoveUpRight />
              </Link>
            </li>
            <li className="text-xl border-b-2 border-b-black">
              <Link className="flex justify-between" to="/">
                Jalapeno Rojos Fritos <MoveUpRight />
              </Link>
            </li>
            <li className="text-xl border-b-2 border-b-black">
              <Link className="flex justify-between" to="/">
                Biryani <MoveUpRight />
              </Link>
            </li>
          </ul>
        </div>
        <div
          className="w-48 h-48 bg-no-repeat bg-cover bg-center flex items-center"
          style={{
            backgroundImage: `url(${Blob2Img})`,
          }}
        >
          <img src={SagPaneerImg} className="w-42 h-42 -translate-x-4" alt="" />
        </div>
      </div>
      <div className="w-full flex justify-between items-center">
        <div className="w-1/3">
          <p>
            We understand that every event is unique, and we work closely with
            you to customize our catering menu to suit your specific needs.
          </p>
        </div>
        <div className="w-1/3">
          <div
            className=" w-60 h-60 bg-no-repeat bg-cover bg-center flex justify-center items-center"
            style={{
              backgroundImage: `url(${Blob1Img})`,
            }}
          >
            <img src={BiryaniImg} className="w-60 h-60" alt="" />
          </div>
        </div>
        <div className="w-1/3">
          <Link
            to="/"
            className="bg-black text-white w-32 h-32 rounded-full flex justify-center items-center text-center hover:shadow-2xl"
          >
            Explore <br /> Dishes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroCategories;
