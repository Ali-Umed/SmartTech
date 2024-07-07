import { IoMdHeartEmpty, IoMdSearch } from "react-icons/io";
import { products } from "../data/data";
import { BiCart } from "react-icons/bi";
import { useState } from "react";
import Modal from "../common/Modal";
import "../index.css";
import PageHeading from "../common/PageHeading";
import FilterModal from "../common/FilterModal";

export default function Shop() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

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

  return (
    <div className="w-full mb-5">
      <PageHeading home="Home" pageName="Shop" />
      <div className="flex flex-col md:flex-row w-11/12 m-auto items-start mt-8">
        <div className="w-full">
          <button
            className="fixed bottom-4 right-4 z-10 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded shadow"
            onClick={() => setIsFilterModalOpen(true)}
          >
            Show Filter
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <div key={index} className="mt-8 group">
                <div className="overflow-hidden relative rounded-xl shadow-lg">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-64  rounded-xl transition-transform duration-500 scale-95 group-hover:scale-100"
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
      <FilterModal
        isModalOpen={isFilterModalOpen}
        handleClose={() => setIsFilterModalOpen(false)}
        setFilters={setFilters}
        filters={filters}
        products={products}
      />
      <Modal
        isModalOpen={isModalOpen}
        handleClose={handleClose}
        data={products.find((product) => product.id === isModalOpen)}
      />
    </div>
  );
}
