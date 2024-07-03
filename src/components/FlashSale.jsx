import { IoMdHeartEmpty, IoMdSearch } from "react-icons/io";
import Heading from "../common/Heading";
import { products } from "../data/data";
import { BiCart } from "react-icons/bi";
import { useState } from "react";
import Modal from "../common/Modal";
import "../index.css";

export default function FlashSale() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  function handleOpen(productId) {
    alert(productId);
    setIsModalOpen(productId);
  }
  function handleClose() {
    setIsModalOpen(null);
  }

  return (
    <div>
      <div className="w-10/12 m-auto">
        <Heading heading={"Product On Sale"} />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((item, key) => (
            <div key={key} className="mt-8 group">
              <div className="overflow-hidden relative rounded-3xl shadow-lg">
                <div className="relative">
                  <img
                    src={item.img}
                    alt="item"
                    className="w-full h-[300px] object-center rounded-3xl transition-transform duration-500 group-hover:scale-105"
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

              <div className="product-details mt-2">
                <p className="mb-2">{item.title}</p>
                <p>${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal
        isModalOpen={isModalOpen}
        handleClose={handleClose}
        data={products.find((item) => item.id)}
      />
    </div>
  );
}
