"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpdate: () => void;
  postalCode: string;
  setPostalCode: (code: string) => void;
}

const LocationModal: React.FC<LocationModalProps> = ({ isOpen, onClose, onUpdate, postalCode, setPostalCode }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center z-50 backdrop-blur-md bg-gray-800/30">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="bg-white p-6 rounded-lg shadow-lg w-96"
          >
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Choose your location</h2>
            <p className="text-sm text-gray-600 mb-4">
              Delivery options and delivery speeds may vary for different locations.
            </p>

            <button className="w-full bg-orange-500 text-white py-2 rounded mb-4 hover:bg-orange-600 transition">
              Sign in to see your addresses
            </button>

            <div className="text-center text-gray-500 text-sm mb-2">or enter a US zip code</div>

            <input
              type="text"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              className="border p-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter zip code"
            />

            <button
              className="w-full bg-blue-600 text-white py-2 rounded mb-4 hover:bg-blue-700 transition"
              onClick={onUpdate}
            >
              Apply
            </button>

            <div className="text-center text-gray-500 text-sm mb-4">or ship outside the US</div>

            <div className="flex justify-between">
              <button
                className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 transition"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                onClick={onUpdate}
              >
                Done
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LocationModal;
