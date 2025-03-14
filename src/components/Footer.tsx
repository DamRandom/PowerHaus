import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        
        {/* Izquierda - Derechos de autor y enlaces legales */}
        <div className="md:w-1/3 mb-6 md:mb-0">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} PowerHaus. All rights reserved.</p>
          <nav className="mt-2 text-xs text-gray-500 space-y-1">
            <Link href="/privacy-policy" className="block hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="block hover:text-white transition">Terms of Service</Link>
          </nav>
        </div>

        {/* Centro - Logo */}
        <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
          <Link href="/">
            <Image
              src="/logo/logo.png"
              alt="PowerHaus Logo"
              width={200}
              height={110}
              className="cursor-pointer object-contain"
            />
          </Link>
        </div>

        {/* Derecha - Redes Sociales */}
        <div className="md:w-1/3 flex justify-center md:justify-end space-x-6 text-xl">
          <a href="#" className="hover:text-orange-400 transition"><FaFacebook /></a>
          <a href="#" className="hover:text-orange-400 transition"><FaTwitter /></a>
          <a href="#" className="hover:text-orange-400 transition"><FaInstagram /></a>
          <a href="mailto:contact@powerhaus.com" className="hover:text-orange-400 transition"><FaEnvelope /></a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
