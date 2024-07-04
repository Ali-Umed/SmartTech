import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  HiOutlineHeart,
  HiOutlineShoppingBag,
  HiOutlineUser,
} from "react-icons/hi";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { navbar } from "../data/data";

export default function Header() {
  const [sticky, setSticky] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <div
        className={`sticky top-0 z-50 shadow-xl ${sticky ? "bg-white" : ""}`}
      >
        <div className="w-10/12 m-auto py-4 flex justify-between items-center">
          <div className="font-bold text-2xl">Logo</div>

          <nav className="flex items-center space-x-5">
            {navbar.map((val, key) => (
              <Link
                key={key}
                to={val.path}
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                {val.nav}
              </Link>
            ))}

            <Link
              to="/wishlist"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              <HiOutlineHeart className="text-2xl" />
            </Link>

            <Link
              to="/profile"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              <HiOutlineUser className="text-2xl" />
            </Link>

            <div
              onClick={toggleSidebar}
              className="relative cursor-pointer text-gray-700 hover:text-gray-900 transition-colors"
            >
              <HiOutlineShoppingBag className="text-2xl" />
              {totalItems > 0 && (
                <div className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 rounded-full w-4 h-4 flex items-center justify-center text-white text-xs">
                  {totalItems}
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>

      <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />
    </>
  );
}
