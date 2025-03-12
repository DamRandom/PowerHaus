"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Función para manejar el menú móvil
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className="bg-gray-900 text-white py-3 px-6 shadow-lg w-full z-50 sticky top-0"
      style={{ zIndex: 1000, scrollBehavior: "smooth" }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo/logo.png"
            alt="PowerHaus Logo"
            width={250}
            height={150}
            className="cursor-pointer object-contain"
          />
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-orange-400 transition text-lg">
            Home
          </Link>
          <Link href="/about" className="hover:text-orange-400 transition text-lg">
            About Us
          </Link>
          <Link href="/shop" className="hover:text-orange-400 transition text-lg">
            Products
          </Link>
          <Link href="/services" className="hover:text-orange-400 transition text-lg">
            Services
          </Link>
          <Link href="/contact" className="hover:text-orange-400 transition text-lg">
            Contact
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/cart" className="text-xl hover:text-orange-400 transition">
            <FaShoppingCart />
          </Link>
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 text-center py-4 absolute w-full top-full left-0">
          <Link href="/" className="block py-2 hover:text-orange-400">
            Home
          </Link>
          <Link href="/about" className="block py-2 hover:text-orange-400">
            About Us
          </Link>
          <Link href="/shop" className="block py-2 hover:text-orange-400">
            Products
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
