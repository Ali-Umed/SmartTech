/* eslint-disable react/prop-types */
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "../index.css";
import { FaTimes } from "react-icons/fa";

export default function FilterModal({
  isModalOpen,
  handleClose,
  setFilters,
  filters,
  products,
}) {
  const categoryList = Array.from(
    new Set(products.map((product) => product.category))
  );
  const brandList = Array.from(
    new Set(products.map((product) => product.brand))
  );

  function handlePriceChange(value) {
    setFilters({ ...filters, priceRange: value });
  }

  function handleSelectChange(event) {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });
  }

  return (
    <div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="sm:w-8/12 md:w-7/12 lg:w-4/12 w-11/12 mx-auto bg-white shadow-lg p-8 relative rounded-lg">
            <button
              className="absolute top-6 right-4 text-2xl text-gray-700 hover:text-red-900 transition"
              onClick={handleClose}
            >
              <FaTimes />
            </button>
            <div className="my-4">
              <h1 className="text-2xl font-semibold">Filter</h1>
            </div>
            <div className="my-4">
              <h1 className="text-xl mb-3 font-semibold">Price</h1>
              <Slider
                min={0}
                max={1500}
                range
                defaultValue={filters.priceRange}
                onChange={handlePriceChange}
                trackStyle={{ backgroundColor: "#4CAF50" }}
                handleStyle={{
                  borderColor: "#4CAF50",
                  backgroundColor: "#4CAF50",
                }}
              />
              <div className="flex justify-between mt-2 text-sm">
                <span>Min: ${filters.priceRange[0]}</span>
                <span>Max: ${filters.priceRange[1]}</span>
              </div>
            </div>
            <div className="my-4">
              <h1 className="text-xl mb-3 font-semibold">By Category</h1>
              <select
                name="categories"
                value={filters.categories}
                onChange={handleSelectChange}
                className="w-full p-2 border rounded-[7px] bg-transparent focus:border-[#4CAF50] hover:border-[#4CAF50] ring-[#4CAF50] focus:ring-0  focus:outline-none"
              >
                <option value="">All Categories</option>
                {categoryList.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div className="py-4">
              <h1 className="text-xl mb-3 font-semibold">By Brands</h1>
              <select
                name="brands"
                value={filters.brands}
                onChange={handleSelectChange}
                className="w-full p-2 border rounded-[7px] bg-transparent focus:border-[#4CAF50] hover:border-[#4CAF50] ring-[#4CAF50] focus:ring-0  focus:outline-none"
              >
                <option value="">All Brands</option>
                {brandList.map((brand, index) => (
                  <option key={index} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
