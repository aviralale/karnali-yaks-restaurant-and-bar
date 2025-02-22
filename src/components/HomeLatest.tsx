import { Link } from "react-router-dom";
import Blob1Img from "../assets/images/blob1.png";
import ChowmeinImg from "../assets/images/chowmein.png";
import { MoveUpRight } from "lucide-react";

const HomeLatest = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 w-full">
      <h1 className="text-9xl font-bold flex flex-col">VIEW ALL LATEST</h1>

      <div className="flex justify-between items-center w-full">
        <div className="w-1/3 flex flex-col">
          <ul className="flex flex-col  gap-6">
            <p>
              Asian cuisine encompasses the diverse culinary traditions of
              countries like India, Nepal, and Bhutan. It is known for its bold
              flavors, vibrant spices, and variety of vegetarian and
              non-vegetarian dishes. The cuisine reflects the region's rich
              history, cultural diversity, and agricultural abundance.
            </p>
            <li className="text-xl border-b-2 border-b-black">
              <Link className="flex justify-between" to="/">
                Asian <MoveUpRight />
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-1/3">
          <div
            className="w-96 h-96 bg-no-repeat bg-cover bg-center flex justify-center items-center"
            style={{
              backgroundImage: `url(${Blob1Img})`,
            }}
          >
            <img src={ChowmeinImg} className="w-72 h-72" alt="" />
          </div>
        </div>
        <div className="w-1/3 flex flex-col">
          <ul className="flex flex-col  gap-6">
            <p>
              Mexican cuisine is a vibrant blend of indigenous Mesoamerican
              traditions and Spanish influences, resulting in a rich and
              flavorful culinary heritage. It is recognized by UNESCO as an
              Intangible Cultural Heritage of Humanity. Mexican food is known
              for its bold flavors, fresh ingredients, and communal dining
              style.
            </p>
            <li className="text-xl border-b-2 pb-2 border-b-black">
              <Link className="flex justify-between" to="/">
                Mexican <MoveUpRight />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeLatest;
