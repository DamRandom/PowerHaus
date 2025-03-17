"use client";
import React from "react";
import { FiPlus, FiMinus, FiTrash } from "react-icons/fi";
import Image from "next/image";
import { useCart } from "../../context/CartContext";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

const promoImage = "/images/sales.jpg"; // Ruta de la imagen local

const CartPage: React.FC = () => {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice } = useCart();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white/90 via-white/70 to-gray-200">
      {/* Navbar (Reemplazado por el componente existente) */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 container mx-auto p-6">
        {/* Container for cart and summary */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Cart Items and Order Summary (Left section) */}
          <div className="flex flex-col w-full md:w-2/3 gap-8">
            {/* Cart Section */}
            <div className="p-6 rounded-lg backdrop-blur-md bg-white/30 shadow-2xl">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Shopping Cart</h2>

              {cartItems.length === 0 ? (
                <p className="text-center text-gray-600">Your cart is empty.</p>
              ) : (
                <div className="space-y-8 max-h-[500px] overflow-y-auto">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-4 bg-gray-100/50 shadow-2xl rounded-lg backdrop-blur-lg"
                    >
                      <div className="flex items-center gap-6">
                        <div className="relative w-24 h-24">
                          <Image
                            src={item.image}
                            alt={item.name}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-md"
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                          <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          className="bg-gray-300 text-gray-700 p-2 rounded-full hover:bg-gray-400 transition"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <FiMinus />
                        </button>
                        <span className="px-4 py-2 bg-gray-200 text-gray-900 font-medium">{item.quantity}</span>
                        <button
                          className="bg-gray-300 text-gray-700 p-2 rounded-full hover:bg-gray-400 transition"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <FiPlus />
                        </button>
                        <button
                          className="text-red-500 hover:text-red-700 transition"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <FiTrash size={20} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Cart Summary Section */}
            <div className="p-6 rounded-lg backdrop-blur-md bg-white/30 shadow-2xl">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>
              <div className="flex justify-between items-center mb-6">
                <p className="text-lg font-semibold text-gray-900">Total:</p>
                <p className="text-2xl font-semibold text-orange-600">${getTotalPrice().toFixed(2)}</p>
              </div>
              <button className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition">
                Proceed to Checkout
              </button>
            </div>
          </div>

          {/* Promotional Banner (Right section) */}
          <Link href="/shop" passHref>
            <div className="p-6 rounded-lg w-full shadow-2xl cursor-pointer">
              <div className="relative w-full h-48">
                <Image
                  src={promoImage}
                  alt="Weekly Deals"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg" // Aquí solo dejamos la clase rounded-lg para las esquinas redondeadas
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Weekly Deals</h3>
              <p className="text-sm text-gray-600">Best discounts on select products this week.</p>
            </div>
          </Link>
        </div>
      </main>

      {/* Footer (Reemplazado por el componente existente) */}
      <Footer />
    </div>
  );
};

export default CartPage;
