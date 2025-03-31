"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import { FiMapPin } from "react-icons/fi";
import LocationModal from "./LocationModal";

const Navbar: React.FC = () => {
  const [location, setLocation] = useState<{ region: string; postal: string } | null>(null);
  const { cartCount } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postalCode, setPostalCode] = useState("");

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        if (data.region && data.postal) {
          setLocation({ region: data.region, postal: data.postal });
          setPostalCode(data.postal);
        } else {
          setLocation(null);
        }
      } catch {
        setLocation(null);
      }
    };

    fetchLocation();
  }, []);

  const handleLocationUpdate = (newPostal: string) => {
    setPostalCode(newPostal);
    setLocation({ region: location?.region || "Unknown", postal: newPostal });
    setIsModalOpen(false);
  };

  return (
    <nav className="bg-gray-900 text-white py-3 px-6 shadow-lg w-full z-50 sticky top-0 flex items-center justify-between">
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo/logo.png"
            alt="PowerHaus Logo"
            width={120} 
            height={60}
            className="cursor-pointer object-contain max-w-[120px] max-h-[60px]"
          />
        </Link>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-start">
        <div className="flex flex-col items-start">
          <p className="text-xs font-medium">
            Delivering to {location ? `${location.region}, ${location.postal}` : "Location unavailable"}
          </p>
          <div
            className="flex items-center text-sm font-bold text-white cursor-pointer hover:text-orange-400 transition mt-1"
            onClick={() => setIsModalOpen(true)}
          >
            <FiMapPin className="mr-2 -ml-6" size={20} />
            <span>Update location</span>
          </div>
        </div>
      </div>

      <div className="relative">
        <Link href="/cart">
          <Image
            src="/icons/shopping-cart.png"
            alt="Shopping Cart"
            width={40}
            height={40}
            className="cursor-pointer hover:text-orange-500 transition"
          />
        </Link>
        <span className="absolute top-0 right-0 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {cartCount > 0 ? cartCount : 0}
        </span>
      </div>

      <LocationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onUpdate={handleLocationUpdate}
        postalCode={postalCode}
        setPostalCode={setPostalCode}
      />
    </nav>
  );
};

export default Navbar;
