import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  HiOutlineHeart,
  HiOutlineShoppingBag,
  HiOutlineUser,
  HiOutlineMenu,
  HiOutlineX,
} from "react-icons/hi";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { navbar } from "../data/data";

export default function Header() {
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
        className={`  sticky top-0 z-50 shadow-lg transition-colors duration-300 ${
          sticky ? "bg-white" : ""
        }`}
      >
        <div className="container mx-auto py-4 flex justify-between items-center px-4 sm:px-0">
          <div className="font-bold text-2xl">SmartTech</div>

          <div className="block sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900 transition-colors"
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
            } absolute top-16  right-0  bg-white shadow-md sm:flex sm:items-center sm:space-x-5 sm:relative sm:top-0 sm:bg-transparent sm:shadow-none`}
          >
            {navbar.map((val, key) => (
              <Link
                onClick={toggleMenu}
                key={key}
                to={val.path}
                className="block text-gray-700 hover:text-blue-700  transition-colors p-4 sm:p-0"
              >
                {val.nav}
              </Link>
            ))}

            <Link
              to="/wishlist"
              className="block text-gray-700 hover:text-gray-900 transition-colors p-4 sm:p-0"
            >
              <HiOutlineHeart className="text-2xl" />
            </Link>

            <Link
              to="/profile"
              className="block text-gray-700 hover:text-gray-900 transition-colors p-4 sm:p-0"
            >
              <HiOutlineUser className="text-2xl" />
            </Link>

            <div
              onClick={toggleSidebar}
              className="relative cursor-pointer text-gray-700 hover:text-gray-900 transition-colors p-4 sm:p-0"
            >
              <HiOutlineShoppingBag className="text-2xl" />
              {totalItems > 0 && (
                <div className="absolute left-5 top-4 md:top-0 md:right-0 -mt-1 -mr-1 bg-red-500 rounded-full w-4 h-4 flex items-center justify-center text-white text-xs">
                  {totalItems}
                </div>
              )}
            </div>
          </nav>
        </div>
      </header>
      <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />
    </>
  );
}
