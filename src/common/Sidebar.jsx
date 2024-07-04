/* eslint-disable react/prop-types */
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal, removeItem } from "../redux/cartSlice";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Sidebar({ isSidebarOpen, closeSidebar }) {
  const dispatch = useDispatch();
  const { data: cartProducts, totalAmount } = useSelector(
    (state) => state.cart
  );

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch, cartProducts]);

  function removeFromCart(itemId) {
    dispatch(removeItem({ id: itemId }));
    dispatch(getCartTotal());
  }

  return (
    <div
      className={`fixed top-0 right-0 bg-white shadow-lg h-full w-full max-w-md transition-transform duration-300 ease-in-out overflow-y-auto ${
        isSidebarOpen ? "translate-x-0" : "translate-x-full"
      }`}
      style={{ zIndex: 60 }}
    >
      <div className="border-b mb-4 p-4 flex justify-between items-center">
        <h1 className="text-3xl">Your Cart</h1>
        <button
          onClick={closeSidebar}
          className="text-gray-700 hover:text-gray-900"
        >
          <FaTimes className="text-2xl" />
        </button>
      </div>

      {cartProducts.length === 0 ? (
        <div className="text-center p-4">
          <h2 className="text-3xl font-bold uppercase">
            Your cart has no products
          </h2>
        </div>
      ) : (
        <div className="p-4">
          {cartProducts.map((val, index) => (
            <div
              key={index}
              className="flex justify-between items-center mb-4 border-b pb-4"
            >
              <div className="flex items-center">
                <div className="relative">
                  <img
                    src={val.img}
                    alt="Product"
                    className="w-20 h-20 object-cover"
                  />
                  <button
                    onClick={() => removeFromCart(val.id)}
                    className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full p-1"
                  >
                    <FaTimes />
                  </button>
                </div>
                <div className="ml-4">
                  <p className="font-bold">{val.title}</p>
                  <p>${val.price}</p>
                  <p>Qty: {val.quantity}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center p-4 bg-gray-900 text-white font-bold">
            <h2>
              Sub Total: <span>${totalAmount}</span>
            </h2>
            <Link to="/cart" className="bg-white text-black px-4 py-2 rounded">
              View Cart
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
