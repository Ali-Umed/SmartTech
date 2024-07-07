import { Link } from "react-router-dom";
import Slider from "react-slick";
import { banners } from "../data/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
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
    <div className="banner mt-3">
      <div className="w-10/12 mx-auto">
        <div className="mb-2 text-center">
          <div className="header-text">
            <Link
              to={"/"}
              className="flex items-center justify-center mb-3 text-gray-700 hover:text-gray-900 transition-all duration-200"
            >
              <div className="mr-4 text-4xl rounded-full h-12 w-12 grid place-items-center bg-gray-200 hover:bg-gray-300 transition-colors duration-200">
                <MdOutlineWatch />
              </div>
              <span className="text-3xl font-bold">Discover SmartTech</span>
            </Link>
            <p className="text-lg text-gray-600 mb-3">
              Elevate your lifestyle with our latest technology products.
            </p>
            {/* <Link
              to={"/shop"}
              className="inline-block px-8 py-3 text-white text-xl bg-gradient-to-r from-teal-400 to-green-600 rounded-full hover:from-teal-500 hover:to-green-700 transition-colors duration-200"
            >
              Shop Now
            </Link> */}
          </div>
        </div>
        <div className="scale-95">
          <Slider {...settings}>
            {banners.map((val, i) => (
              <div key={i}>
                <img
                  className="w-full h-[650px] object-cover rounded-lg scale-100 shadow-lg"
                  src={val.banner}
                  alt={`Banner ${i + 1}`}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
