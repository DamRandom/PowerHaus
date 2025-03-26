"use client";
import React, { useMemo } from "react";
import { FiPlus, FiMinus, FiTrash } from "react-icons/fi";
import { useCart } from "../../context/CartContext";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import Image from "next/image";

const promoImage = "/images/sales.jpg";

const CartPage: React.FC = () => {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice } = useCart();
  const totalPrice = useMemo(() => getTotalPrice().toFixed(2), [getTotalPrice]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white/90 via-white/70 to-gray-200">
      <Navbar />
      <main className="flex-1 container mx-auto p-6">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Cart Items Section */}
          <div className="flex flex-col w-full md:w-2/3 gap-8">
            <div className="p-6 rounded-lg backdrop-blur-md bg-white/30 shadow-xl">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Shopping Cart</h2>

              {cartItems.length === 0 ? (
                <p className="text-center text-gray-600">Your cart is empty.</p>
              ) : (
                <div>
                  {cartItems.map(({ id, name, price, quantity }) => (
                    <div key={id} className="flex justify-between items-center p-4 mb-4 rounded-md">
                      <div className="flex-1">
                        <p className="text-lg font-semibold text-gray-900">{name}</p>
                        <p className="text-sm text-gray-600">
                          Price: ${price ? price.toFixed(2) : "N/A"}
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-4">
                        <button
                          className="p-2 rounded-full text-gray-600 border border-gray-400 hover:bg-gray-300 transition disabled:opacity-50"
                          onClick={() => updateQuantity(id, quantity - 1)}
                          disabled={quantity <= 1}
                        >
                          <FiMinus />
                        </button>
                        <span className="text-gray-700 font-medium">{quantity}</span>
                        <button
                          className="p-2 rounded-full text-gray-600 border border-gray-400 hover:bg-gray-300 transition"
                          onClick={() => updateQuantity(id, quantity + 1)}
                        >
                          <FiPlus />
                        </button>

                        {/* Remove Item Button */}
                        <button
                          className="p-2 text-orange-500 hover:text-orange-400 transition"
                          onClick={() => removeFromCart(id)}
                        >
                          <FiTrash size={20} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Order Summary */}
            <div className="p-6 rounded-lg backdrop-blur-md bg-white/30 shadow-xl">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>
              <div className="flex justify-between items-center mb-6">
                <p className="text-lg font-semibold text-gray-900">Total:</p>
                <p className="text-2xl font-semibold text-orange-600">${totalPrice}</p>
              </div>
              <button className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition">
                Proceed to Checkout
              </button>
            </div>
          </div>

          {/* Promotional Banner */}
          <Link href="/shop">
            <div className="flex w-full justify-center items-center min-h-[300px] md:min-h-[500px]">
              <div className="p-6 rounded-lg shadow-xl cursor-pointer flex flex-col items-center bg-white/30 backdrop-blur-md">
                <div className="relative w-full h-48">
                  <Image
                    src={promoImage}
                    alt="Weekly Deals"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Weekly Deals</h3>
                <p className="text-sm text-gray-600">
                  Best discounts on select products this week.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
