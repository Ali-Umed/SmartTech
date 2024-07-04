/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import PageHeading from "../common/PageHeading";
import { getCartTotal, removeItem, updateQuantity } from "../redux/cartSlice";
import { FaTimes } from "react-icons/fa";
import { PiMinus, PiPlus } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function Cart() {
  const dispatch = useDispatch();
  const { data: cartProducts, totalAmount } = useSelector(
    (state) => state.cart
  );

  function removeFromCart(itemId) {
    dispatch(removeItem({ id: itemId }));
    dispatch(getCartTotal());
  }

  function increaseQuantity(itemId, currentQuantity) {
    dispatch(updateQuantity({ id: itemId, quantity: currentQuantity + 1 }));
    dispatch(getCartTotal());
  }

  function decreaseQuantity(itemId, currentQuantity) {
    if (currentQuantity > 1) {
      dispatch(updateQuantity({ id: itemId, quantity: currentQuantity - 1 }));
      dispatch(getCartTotal());
    }
  }

  return (
    <div>
      <PageHeading home={"Home"} pageName={"cart"} />

      <div className="container mx-auto px-4">
        <div className="mt-8">
          {cartProducts.length === 0 ? (
            <h1 className="text-center text-2xl font-semibold">
              Your Cart Has No Products
            </h1>
          ) : (
            <div>
              <div className="overflow-x-auto">
                <table className="min-w-full shadow-md rounded-lg">
                  <thead className="bg-blue-950 text-white">
                    <tr>
                      <th className="px-4 py-2"></th>
                      <th className="px-4 py-2">Product</th>
                      <th className="px-4 py-2">Price</th>
                      <th className="px-4 py-2">Quantity</th>
                      <th className="px-4 py-2">Sub Total</th>
                    </tr>
                  </thead>

                  <tbody className="bg-white">
                    {cartProducts.map((item, key) => (
                      <tr key={key} className="border-b">
                        <td className="text-center px-4 py-2">
                          <button
                            className="text-red-500 hover:text-red-700 transition duration-200"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <FaTimes />
                          </button>
                        </td>
                        <td className="px-4 py-2">
                          <div className="flex items-center">
                            <img
                              src={item.img}
                              alt="img"
                              className="h-16 w-16 object-contain mr-4"
                            />
                            <div>
                              <p className="font-semibold text-gray-800">
                                {item.title}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="text-center px-4 py-2 text-gray-800">
                          ${item.price}
                        </td>
                        <td className="text-center px-4 py-2">
                          <div className="flex items-center">
                            <button
                              className="border border-gray-300 rounded-l-md px-2 py-1 hover:bg-gray-100 transition duration-200"
                              onClick={() =>
                                decreaseQuantity(item.id, item.quantity)
                              }
                            >
                              <PiMinus />
                            </button>
                            <span className="border-t border-b border-gray-300 px-2 py-1">
                              {item.quantity}
                            </span>
                            <button
                              className="border border-gray-300 rounded-r-md px-2 py-1 hover:bg-gray-100 transition duration-200"
                              onClick={() =>
                                increaseQuantity(item.id, item.quantity)
                              }
                            >
                              <PiPlus />
                            </button>
                          </div>
                        </td>
                        <td className="text-center px-4 py-2 text-gray-800">
                          ${(item.price * item.quantity).toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-4 bg-white shadow-lg rounded-lg sm:w-2/5 md:w-1/2 mx-auto text-gray-800">
                <p className="text-xl text-center font-semibold mb-4">
                  Cart Total
                </p>

                <div className="flex justify-between mb-2">
                  <p>Subtotal:</p>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>

                <div className="flex justify-between mb-2">
                  <p>Shipping Charge:</p>
                  <span>$10.00</span>
                </div>
                <div className="flex justify-between font-semibold mb-4">
                  <p>Grand Total:</p>
                  <span>${(totalAmount + 10).toFixed(2)}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="inline-block text-center bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-500 transition duration-200 text-sm">
                    Proceed to Checkout
                  </div>
                  <Link
                    to={"/shop"}
                    className="inline-block text-center bg-blue-950 text-white py-2 px-4 rounded-lg hover:bg-blue-900 transition duration-200 text-sm"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
