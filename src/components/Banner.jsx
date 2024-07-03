import Slider from "react-slick";
import { banners } from "../data/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdOutlineWatch } from "react-icons/md";

export default function Banner() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <IoIosArrowRoundBack size={30} />,
    nextArrow: <IoIosArrowRoundForward size={30} />,
  };

  return (
    <div className="banner">
      <div className="w-10/12 m-auto">
        <div className="mb-10 text-center">
          <div className="header-text">
            <Link className="flex items-center justify-center mb-4 text-gray-700 hover:text-gray-900 transition-all duration-200">
              <div className="mr-4 text-4xl rounded-full h-12 w-12 grid place-items-center bg-gray-200 hover:bg-gray-300 transition-colors duration-200">
                <MdOutlineWatch />
              </div>
              <span className="text-3xl font-bold">Elevate Your LifeStyle</span>
            </Link>
            <p className="text-lg text-gray-600 mb-4">
              with Our Furniture Creations
            </p>
            <Link className="inline-block px-7 py-2 text-white text-xl bg-black rounded-full hover:bg-gray-800 transition-colors duration-200">
              Shop Now
            </Link>
          </div>
        </div>
        <div>
          <Slider {...settings}>
            {banners.map((val, i) => (
              <div key={i}>
                <img
                  className="w-full h-[750px] object-cover rounded-lg shadow-lg"
                  src={val.banner}
                  alt=""
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
