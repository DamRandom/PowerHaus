"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white py-4 px-6 shadow-lg w-full z-50 relative">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-orange-500">
          PowerHaus
        </Link>

        <div className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-orange-400 transition">Home</Link>
          <Link href="/about" className="hover:text-orange-400 transition">About Us</Link>
          <Link href="/shop" className="hover:text-orange-400 transition">Products</Link>
          <Link href="/services" className="hover:text-orange-400 transition">Services</Link>
          <Link href="/contact" className="hover:text-orange-400 transition">Contact</Link>
        </div>

        <div className="flex items-center space-x-6">
          <Link href="/cart" className="text-xl hover:text-orange-400 transition">
            <FaShoppingCart />
          </Link>
          <button
            className="md:hidden text-xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-gray-800 text-center py-4 absolute w-full top-full left-0">
          <Link href="/" className="block py-2 hover:text-orange-400">Home</Link>
          <Link href="/about" className="block py-2 hover:text-orange-400">About Us</Link>
          <Link href="/shop" className="block py-2 hover:text-orange-400">Products</Link>
          <Link href="/services" className="block py-2 hover:text-orange-400">Services</Link>
          <Link href="/contact" className="block py-2 hover:text-orange-400">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
