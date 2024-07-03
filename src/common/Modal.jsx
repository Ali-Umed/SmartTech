import { FaTimes } from "react-icons/fa";
import { PiMinus, PiPlus } from "react-icons/pi";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function Modal({ isModalOpen, handleClose, data }) {
  function onAddItemToCart(product) {
    alert(product);
  }

  return (
    <div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white w-full sm:w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 max-h-full overflow-auto rounded-lg p-6 relative shadow-lg">
            <button
              className="absolute top-4 right-4 text-2xl text-gray-700 hover:text-gray-900 transition"
              onClick={handleClose}
            >
              <FaTimes />
            </button>
            <div className="flex flex-col sm:flex-row items-start">
              <div className="w-full sm:w-1/2 mb-4 sm:mb-0 sm:mr-6">
                <img
                  src={data.img}
                  alt=""
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="w-full sm:w-1/2 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-800">
                    {data.short_description}
                  </h2>
                  <p className="text-red-600 text-lg sm:text-xl mb-4">
                    {data.price}
                  </p>
                  <p className="mb-4 text-gray-700">{data.description}</p>

                  <div className="flex items-center mb-4">
                    <p className="font-semibold mr-2">Shades:</p>
                    <select
                      name="shades"
                      id="shades"
                      className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                    >
                      <option value="option">Choose An Option</option>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                      <option value="option4">Option 4</option>
                      <option value="option5">Option 5</option>
                      <option value="option6">Option 6</option>
                    </select>
                  </div>
                  <p className="text-green-700 mb-4">In Stock 400 Items</p>
                </div>

                <div className="flex items-center">
                  <div className="flex items-center mr-4">
                    <button className="border border-gray-300 p-2 sm:p-3 hover:bg-gray-100 transition">
                      <PiMinus />
                    </button>
                    <span className="border border-gray-300 p-2 sm:p-3">1</span>
                    <button className="border border-gray-300 p-2 sm:p-3 hover:bg-gray-100 transition">
                      <PiPlus />
                    </button>
                  </div>

                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                    <Link to="/cart">
                      <button className="bg-blue-500 text-white p-2 sm:p-3 rounded-md hover:bg-blue-600 transition">
                        View Cart
                      </button>
                    </Link>
                    <button
                      className="bg-green-500 text-white p-2 sm:p-3 rounded-md hover:bg-green-600 transition"
                      onClick={() => onAddItemToCart(data)}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
