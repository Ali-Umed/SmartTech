/* eslint-disable react/prop-types */
import { FaTimes } from "react-icons/fa";

export default function Sidebar({ isSidebarOpen, closeSidebar }) {
  return (
    <div>
      <div>
        <div
          className="fixed top-0 right-0 bg-white shadow-lg h-full transition-transform duration-300 ease-in-out overflow-y-auto "
          style={{ transform: `translateX(${isSidebarOpen ? "0" : "100%"})` }}
        >
          <div className="border-b mb-4">
            <h1 className="text-3xl p-4">Your cart</h1>
          </div>

          <div className="p-4">
            <span className="absolute top-0 right-0 p-4" onClick={closeSidebar}>
              <FaTimes onClick={closeSidebar} />
            </span>

            <div className="text-3xl font-bold uppercase">
              Your cart Has No Product
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
