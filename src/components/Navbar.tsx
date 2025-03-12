"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white py-4 px-8 shadow-lg w-full z-50 sticky top-0">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo/logo.png"
            alt="PowerHaus Logo"
            width={250}
            height={150}
            className="cursor-pointer object-contain"
          />
        </Link>

        {/* Menú Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="hover:text-orange-500 transition text-lg font-semibold">
            Home
          </Link>
          <Link href="/shop" className="hover:text-orange-500 transition text-lg font-semibold">
            Shop
          </Link>
          <Link href="/about" className="hover:text-orange-500 transition text-lg font-semibold">
            About Us
          </Link>
          <Link href="/services" className="hover:text-orange-500 transition text-lg font-semibold">
            Services
          </Link>
          <Link href="/contact" className="hover:text-orange-500 transition text-lg font-semibold">
            Contact
          </Link>
        </div>

        {/* Carrito y Menú Móvil */}
        <div className="flex items-center space-x-4">
          {/* Carrito */}
          <div className="relative">
            <FaShoppingCart className="text-2xl cursor-pointer hover:text-orange-500 transition" />
            {/* Contador de productos en el carrito */}
            <span className="absolute top-0 right-0 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </div>

          {/* Menú Móvil */}
          <button
            className="md:hidden text-3xl focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Menú móvil desplegado */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 text-center py-4 absolute w-full top-full left-0">
          <Link href="/" className="block py-2 hover:text-orange-400">
            Home
          </Link>
          <Link href="/shop" className="block py-2 hover:text-orange-400">
            Shop
          </Link>
          <Link href="/about" className="block py-2 hover:text-orange-400">
            About Us
          </Link>
          <Link href="/services" className="block py-2 hover:text-orange-400">
            Services
          </Link>
          <Link href="/contact" className="block py-2 hover:text-orange-400">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
