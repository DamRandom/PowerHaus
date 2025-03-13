"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "../context/CartContext"; 

const Navbar: React.FC = () => {
  const [location, setLocation] = useState<string>("Detecting...");
  const { cartCount } = useCart();

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        if (data.region && data.country_name) {
          setLocation(`${data.region}, ${data.country_name}`);
        } else {
          setLocation("Location unavailable");
        }
      } catch {
        setLocation("Location unavailable");
      }
    };

    fetchLocation();
  }, []);

  return (
    <nav className="bg-gray-900 text-white py-4 px-8 shadow-lg w-full z-50 sticky top-0 flex items-center">
      {/* Logo */}
      <div className="flex-1">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo/logo.png"
            alt="PowerHaus Logo"
            width={250}
            height={150}
            className="cursor-pointer object-contain"
          />
        </Link>
      </div>

      {/* Ubicación centrada */}
      <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-sm text-gray-400">Your Location</p>
        <p className="text-lg font-semibold">{location}</p>
      </div>

      {/* Carrito */}
      <div className="flex-1 flex justify-end relative">
        {/* Usamos el icono de carrito personalizado */}
        <Link href="/cart">
          <Image
            src="/icons/shopping-cart.png"
            alt="Shopping Cart"
            width={44}
            height={24}
            className="cursor-pointer hover:text-orange-500 transition"
          />
        </Link>
        <span className="absolute top-0 right-0 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {cartCount > 0 ? cartCount : 0} {/* Muestra 0 si el carrito está vacío */}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
