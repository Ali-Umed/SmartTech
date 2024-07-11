/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  HiOutlineHeart,
  HiOutlineShoppingBag,
  HiOutlineUser,
  HiOutlineMenu,
  HiOutlineX,
} from "react-icons/hi";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import { navbar } from "../data/data";
import { GrTechnology } from "react-icons/gr";

export default function Header({ scrollToFooter }) {
  const [sticky, setSticky] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useSelector((state) => state.cart);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full shadow-lg ${
          sticky ? "bg-[#F3EEEA]" : ""
        }`}
      >
        <div className="mx-auto py-4 flex w-full justify-between items-center px-4 sm:px-4">
          <div className="ml-4 flex items-center">
            <GrTechnology className="text-4xl text-gray-700 hover:text-black transition-colors duration-200" />
            <span className="ml-2 text-2xl font-bold text-gray-700 hover:text-black transition-colors duration-200">
              kurdTech
            </span>
          </div>

          <div className="block md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-black transition-colors"
            >
              {isMenuOpen ? (
                <HiOutlineX className="text-2xl" />
              ) : (
                <HiOutlineMenu className="text-2xl" />
              )}
            </button>
          </div>

          <nav
            className={`${
              isMenuOpen ? "block" : "hidden"
            } absolute top-16 right-0 bg-white shadow-md  p-6 md:p-0 md:flex md:items-center md:space-x-5 md:relative md:top-0 flex flex-col text-center md:flex-row md:bg-transparent md:shadow-none`}
          >
            {navbar.map((val, key) => (
              <Link
                onClick={() => {
                  setIsMenuOpen(false);
                  if (val.nav === "About Us") {
                    scrollToFooter();
                  }
                }}
                key={key}
                to={val.path ? val.path : ""}
                className="block text-gray-700 hover:text-black text-lg transition-colors p-4 md:p-0"
              >
                {val.nav}
              </Link>
            ))}

            <Link
              to="/wishlist"
              className="block text-gray-700 self-center hover:text-black transition-colors p-3 md:p-0"
            >
              <HiOutlineHeart className="text-2xl" />
            </Link>

            <Link
              to="/profile"
              className="block text-gray-700 self-center hover:text-black transition-colors p-3 md:p-0"
            >
              <HiOutlineUser className="text-2xl" />
            </Link>

            <div
              onClick={toggleSidebar}
              className="relative cursor-pointer self-center text-gray-700 hover:text-black transition-colors p-3 md:p-0"
            >
              <HiOutlineShoppingBag className="text-2xl" />
              {totalItems > 0 && (
                <div className="absolute left-5 top-4 md:top-0 md:right-0 -mt-1 -mr-1 bg-red-500 rounded-full w-4 h-4 flex items-center justify-center text-white text-xs">
                  {totalItems}
                </div>
              )}
            </div>
            <Link
              to={"/shop"}
              className="inline-block md:hidden self-center mb-3 px-5 py-[6px] mt-4 text-white text-md bg-gray-800  rounded-3xl hover:bg-gray-950 transition-colors duration-200"
            >
              Shop
            </Link>
          </nav>
          <Link
            to={"/shop"}
            className="hidden md:inline-block px-3 py-1 text-white text-xl  rounded-full bg-gray-800 hover:bg-gray-950 transition-colors duration-200"
          >
            Shop Now
          </Link>
        </div>
      </header>
      <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />
    </>
  );
}
