"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpdate: (postal: string) => void;
  postalCode: string;
  setPostalCode: (code: string) => void;
}

const LocationModal: React.FC<LocationModalProps> = ({ isOpen, onClose, onUpdate, postalCode, setPostalCode }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const detectLocation = () => {
    setLoading(true);
    setError("");

    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
          const data = await res.json();
          if (data.address?.postcode) {
            setPostalCode(data.address.postcode);
            onUpdate(data.address.postcode);
            onClose(); // Cierra el modal automáticamente
          } else {
            setError("Could not find postal code for your location.");
          }
        } catch {
          setError("Error fetching location details.");
        }

        setLoading(false);
      },
      () => {
        setError("Unable to retrieve location.");
        setLoading(false);
      }
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 flex justify-center items-center z-50 backdrop-blur-md bg-gray-800/30"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="bg-white/90 p-6 rounded-lg shadow-lg w-96 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón de cierre */}
            <button className="absolute top-3 right-3 text-gray-300 hover:text-gray-500" onClick={onClose}>
              <FiX size={20} />
            </button>

            <h2 className="text-xl font-semibold mb-2 text-gray-800">Choose your location</h2>
            <p className="text-sm text-gray-600 mb-4">
              Delivery options and speeds may vary based on your location.
            </p>

            {/* Input para ingresar código postal manualmente */}
            <div className="text-center text-gray-500 text-sm mb-2">Enter your zip code</div>
            <div className="relative flex items-center bg-white/20 backdrop-blur-md border border-white/30 rounded-lg p-3 shadow-md mb-4">
              <input
                type="text"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                className="w-full bg-transparent pl-10 text-gray-900 placeholder-gray-500 focus:outline-none"
                placeholder="Enter zip code"
              />
              <button
                className="absolute right-3 text-gray-500 hover:text-gray-700"
                onClick={() => {
                  onUpdate(postalCode);
                  onClose(); // Cierra el modal automáticamente
                }}
              >
                <span className="text-xs text-gray-900">Apply</span>
              </button>
            </div>

            {/* Botón para usar la ubicación automática */}
            <div className="text-center text-gray-500 text-sm mb-2">Or use your current location</div>
            <div className="w-full text-center mb-4">
              <button
                className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition"
                onClick={detectLocation}
                disabled={loading}
              >
                {loading ? "Detecting..." : "Use my location"}
              </button>
            </div>

            {/* Muestra errores si hay problemas con la geolocalización */}
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LocationModal;
