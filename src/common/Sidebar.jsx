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

  const cartSelector = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cartSelector, dispatch]);

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
      </div>

      {cartProducts.length === 0 ? (
        <div className="text-3xl font-bold uppercase">
          Your cart has no products
        </div>
      ) : (
        <div>
          {cartProducts.map((val, index) => (
            <div key={index} className="flex justify-between mb-4">
              <div className="flex ">
                <div className="relative">
                  {" "}
                  <img src={val.img} alt="img" />
                  <span
                    className="absolute top-0 -mt-2 -ml-2 bg-red-500 text-white"
                    onClick={() => removeFromCart(val.id)}
                  >
                    <FaTimes />
                  </span>
                </div>

                <div>
                  <p>{val.titl}</p>
                </div>
              </div>

              <div>
                <p>{val.price}</p>
                <p>Qty: {val.quantity}</p>
              </div>
            </div>
          ))}
          <div className="flex p-6 items-center  bg-black text-white w-full font-bold">
            <h2>
              Sub Total: <span>${totalAmount}</span>
            </h2>
            <div className="ml-4 bg-rose-100 py-2 text-black px-4">
              <Link to={"cart"}> View Cart</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
