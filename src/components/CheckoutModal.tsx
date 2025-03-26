"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Input from "../components/Input"; // Asegúrate de que la ruta sea correcta

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phoneNumber: "",
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 flex justify-center items-center z-50 backdrop-blur-md bg-gray-800/40"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="bg-white/30 p-6 rounded-lg shadow-xl w-full max-w-md relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How can we address you?</h2>
            <form onSubmit={handleSubmit}>
              <div className="flex space-x-4 mb-4">
                <div className="w-full">
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    label="First Name"
                    required
                  />
                </div>
                <div className="w-full">
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    label="Last Name"
                    required
                  />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">How can we contact you?</h3>
              <div className="mb-4">
                <Input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  label="Address"
                  required
                />
              </div>
              <div className="mb-4">
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  label="Phone Number"
                  required
                  type="tel"
                />
              </div>

              <div className="mt-6 flex space-x-6">
  <button
    type="button"
    className="w-full bg-gray-300 text-gray-800 py-2 rounded-md hover:bg-gray-400 transition"
    onClick={onClose}
  >
    Cancel
  </button>
  <button
    type="submit"
    className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800 transition"
  >
    Submit
  </button>
</div>

            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CheckoutModal;
