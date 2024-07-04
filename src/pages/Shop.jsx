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
    alert(productId);
    setIsModalOpen(productId);
  }

  function handleClose() {
    setIsModalOpen(null);
  }

  const [filters, setFilter] = useState({
    categories: [],
    brands: [],
    priceRange: [0, 1500],
  });

  const categoryList = Array.from(
    new Set(products.map((product) => product.category))
  );

  const brandList = Array.from(
    new Set(products.map((product) => product.brand))
  );

  const filterProducts = products.filter((product) => {
    if (
      filters.categories.length > 0 &&
      !filters.categories.includes(product.category)
    ) {
      return false;
    }

    if (filters.brands.length > 0 && !filters.brands.includes(product.brand)) {
      return false;
    }

    const price = parseFloat(product.price);

    if (price < filters.priceRange[0] || price > filters.priceRange[1]) {
      return false;
    }

    return true;
  });

  function handlePriceChange(value) {
    setFilter({ ...filters, priceRange: value });
  }

  function handleCheckboxChange(filterType, value) {
    const updateFilter = [...filters[filterType]];
    const index = updateFilter.indexOf(value);
    if (index === -1) {
      updateFilter.push(value);
    } else {
      updateFilter.splice(index, 1);
    }
    setFilter({ ...filters, [filterType]: updateFilter });
  }

  return (
    <div>
      <PageHeading home="Home" pageName="Shop" />
      <div className="flex w-10/12 m-auto items-start mt-8">
        <div className="w-1/4 bg-white shadow-lg p-4 rounded-lg">
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
                />
                <div className="flex justify-between mt-2 text-sm">
                  <span>Min Price: ${filters.priceRange[0]}</span>
                  <span>Max Price: ${filters.priceRange[1]}</span>
                </div>
              </div>
            </div>

            <div className="my-4">
              <h1 className="text-xl mb-3 font-semibold">By Category</h1>
              <div>
                {categoryList.map((cate, key) => (
                  <div key={key} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      checked={filters.categories.includes(cate)}
                      onChange={() => handleCheckboxChange("categories", cate)}
                      className="mr-2"
                    />
                    <span>{cate}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="py-4">
              <h1 className="mb-3 text-xl font-semibold">Brands</h1>
              <div>
                {brandList.map((brand, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      checked={filters.brands.includes(brand)}
                      onChange={() => handleCheckboxChange("brands", brand)}
                      className="mr-2"
                    />
                    <span>{brand}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-3/4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {filterProducts.map((item, key) => (
              <div key={key} className="mt-8 group">
                <div className="overflow-hidden relative rounded-xl shadow-lg">
                  <div className="relative">
                    <img
                      src={item.img}
                      alt="item"
                      className="w-full h-64 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-0 right-0 m-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col space-y-2">
                      <div className="bg-white p-2 rounded-full shadow-md">
                        <IoMdHeartEmpty className="text-xl" />
                      </div>
                      <div className="bg-white p-2 rounded-full shadow-md">
                        <IoMdSearch className="text-xl" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="bg-black text-white h-10 w-10 grid place-items-center rounded-full shadow-md">
                        <button
                          className="text-2xl"
                          onClick={() => handleOpen(item.id)}
                        >
                          <BiCart />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-2 text-center">
                  <p className="text-sm">{item.title}</p>
                  <p className="font-semibold">${item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Modal
        isModalOpen={isModalOpen}
        handleClose={handleClose}
        data={products.find((item) => item.id === isModalOpen)}
      />
    </div>
  );
}
