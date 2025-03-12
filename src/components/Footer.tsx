import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-semibold text-orange-500 mb-4">PowerHaus</h2>
        <p className="mb-6">Premium products, unmatched service. Shop with confidence.</p>

        <div className="flex justify-center space-x-6 text-xl mb-6">
          <a href="#" className="hover:text-orange-400 transition"><FaFacebook /></a>
          <a href="#" className="hover:text-orange-400 transition"><FaTwitter /></a>
          <a href="#" className="hover:text-orange-400 transition"><FaInstagram /></a>
          <a href="mailto:contact@powerhaus.com" className="hover:text-orange-400 transition"><FaEnvelope /></a>
        </div>

        <p className="text-sm">&copy; {new Date().getFullYear()} PowerHaus. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
