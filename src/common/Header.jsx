import { Link } from "react-router-dom";
import "../../src/index.css";
import { navbar } from "../data/data";
import { useEffect, useState } from "react";
import {
  HiOutlineHeart,
  HiOutlineShoppingBag,
  HiOutlineUser,
} from "react-icons/hi";
import Sidebar from "./Sidebar";

export default function Header() {
  const [sticky, setSticky] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
        className={`sticky header py-4 top-0 z-50 shadow-xl ${
          sticky ? "bg-white" : ""
        }`}
      >
        <div className="w-10/12 m-auto flex flex-wrap justify-between items-center">
          <div>
            <div className="logo font-bold text-2xl">Logo</div>
          </div>
          <div className="md:flex flex-wrap text-base py-3">
            {navbar.map((val, key) => (
              <div key={key} className="mr-5">
                <Link
                  className="active link-hover transition-all text-gray-700 hover:text-gray-900"
                  to={val.path}
                >
                  {val.nav}
                </Link>
              </div>
            ))}
          </div>
          <ul className="flex items-center space-x-5">
            <li>
              <Link className="text-2xl text-gray-700 hover:text-gray-900">
                <HiOutlineHeart />
              </Link>
            </li>
            <li>
              <Link className="text-2xl text-gray-700 hover:text-gray-900">
                <HiOutlineUser />
              </Link>
            </li>
            <li onClick={toggleSidebar} className="relative cursor-pointer">
              <Link className="text-2xl text-gray-700 hover:text-gray-900">
                <HiOutlineShoppingBag />
              </Link>
              <div className="items_count bg-red-500 rounded-full w-4 h-4 flex items-center justify-center text-white text-xs absolute top-0 right-0">
                0
              </div>
            </li>
          </ul>
        </div>
      </div>

      <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />
    </>
  );
}
