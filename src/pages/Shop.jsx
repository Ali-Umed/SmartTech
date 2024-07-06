import { IoMdHeartEmpty, IoMdSearch } from "react-icons/io";
import { products } from "../data/data";
import { BiCart } from "react-icons/bi";
import { useState } from "react";
import Modal from "../common/Modal";
import "../index.css";
import PageHeading from "../common/PageHeading";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export default function Shop() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpen(productId) {
    setIsModalOpen(productId);
  }

  function handleClose() {
    setIsModalOpen(false);
  }

  const [filters, setFilters] = useState({
    categories: "",
    brands: "",
    priceRange: [0, 1500],
  });

  const categoryList = Array.from(
    new Set(products.map((product) => product.category))
  );

  const brandList = Array.from(
    new Set(products.map((product) => product.brand))
  );

  const filteredProducts = products.filter((product) => {
    if (filters.categories && filters.categories !== product.category) {
      return false;
    }

    if (filters.brands && filters.brands !== product.brand) {
      return false;
    }

    const price = parseFloat(product.price);
    if (price < filters.priceRange[0] || price > filters.priceRange[1]) {
      return false;
    }

    return true;
  });

  function handlePriceChange(value) {
    setFilters({ ...filters, priceRange: value });
  }

  function handleSelectChange(event) {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });
  }

  return (
    <div className="w-full mb-5">
      <PageHeading home="Home" pageName="Shop" />
      <div className="sm:w-8/12 md:w-7/12 lg:w-4/12 w-11/12 mx-auto bg-white shadow-lg p-6 rounded-lg mb-8 md:mb-0">
        <div>
          <div className="my-4">
            <h1 className="text-2xl font-semibold">Filter</h1>
          </div>

          <div className="my-4">
            <h1 className="text-xl mb-3 font-semibold">Price</h1>
            <div>
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
          </div>

          <div className="my-4">
            <h1 className="text-xl mb-3 font-semibold">By Category</h1>
            <select
              name="categories"
              value={filters.categories}
              onChange={handleSelectChange}
              className="w-full p-2 border rounded"
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
            <h1 className="mb-3 text-xl font-semibold">Brands</h1>
            <select
              name="brands"
              value={filters.brands}
              onChange={handleSelectChange}
              className="w-full p-2 border rounded"
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
      <div className="flex flex-col md:flex-row w-11/12 m-auto items-start mt-8">
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <div key={index} className="mt-8 group">
                <div className="overflow-hidden relative rounded-xl shadow-lg">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-64 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col space-y-2">
                    <div className="bg-white p-2 rounded-full shadow-md">
                      <IoMdHeartEmpty className="text-xl text-gray-600" />
                    </div>
                    <div className="bg-white p-2 rounded-full shadow-md">
                      <IoMdSearch className="text-xl text-gray-600" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="bg-black text-white h-10 w-10 flex items-center justify-center rounded-full shadow-md">
                      <button
                        className="text-2xl"
                        onClick={() => handleOpen(product.id)}
                      >
                        <BiCart />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-2 text-center">
                  <p className="text-sm">{product.title}</p>
                  <p className="font-semibold">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Modal
        isModalOpen={isModalOpen}
        handleClose={handleClose}
        data={products.find((product) => product.id === isModalOpen)}
      />
    </div>
  );
}
