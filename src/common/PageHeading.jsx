/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import bgImgae from "../assets/banner/banner1.jpg";
export default function PageHeading({ pageName, home }) {
  return (
    <div className=" w-8/12 sm:w-8/12 md:w-7/12 lg:w-4/12 mx-auto my-8">
      <div
        className="relative py-36 px-4 bg-cover  rounded-lg shadow-md  transition-transform duration-500 hover:scale-105"
        style={{ backgroundImage: `url(${bgImgae})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold text-white">{pageName}</h1>
          <p className="text-lg text-gray-300 mt-2">
            <Link to="/" className="hover:text-yellow-500 capitalize">
              {home}
            </Link>{" "}
            / {pageName}
          </p>
        </div>
      </div>
    </div>
  );
}
