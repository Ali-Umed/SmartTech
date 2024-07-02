/* eslint-disable react/prop-types */
import { FaTimes } from "react-icons/fa";

export default function Sidebar({ isSidebarOpen, closeSidebar }) {
  return (
    <div
      className={`fixed top-0 right-0 bg-white shadow-lg h-full w-full max-w-md transition-transform duration-300 ease-in-out overflow-y-auto ${
        isSidebarOpen ? "translate-x-0" : "translate-x-full"
      }`}
      style={{ zIndex: 60 }}
    >
      <div className="border-b mb-4">
        <h1 className="text-3xl p-4">Your cart</h1>
      </div>

      <div className="p-4 ">
        <span
          className="absolute top-0 right-0 p-4 cursor-pointer"
          onClick={closeSidebar}
        >
          <FaTimes className="text-2xl text-gray-700 hover:text-gray-900" />
        </span>

        <div className="text-3xl font-bold uppercase">
          Your cart has no products
        </div>
      </div>
    </div>
  );
}
