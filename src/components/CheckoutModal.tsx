"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "../validations/validationSchema";
import { motion, AnimatePresence } from "framer-motion";
import ConfirmationModal from "./ConfirmationModal";
import EmailVerificationModal from "./EmailVerificationModal"; // Import the new modal component

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false); // State to track email verification
  const [isVerificationOpen, setIsVerificationOpen] = useState(false); // State to track the email verification modal

  // Mock function to check if email is verified (replace with your real email verification logic)
  const checkEmailVerification = (email: string) => {
    // Simulating a check; here you would call your API or service to verify the email status
    if (email === "verifiedemail@example.com") {
      setIsEmailVerified(true);
    } else {
      setIsEmailVerified(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = isOpen || isConfirmOpen || isVerificationOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen, isConfirmOpen, isVerificationOpen]);

  interface FormData {
    firstName: string;
    lastName: string;
    address: string;
    email: string;
  }

  const onSubmit = (data: FormData) => {
    console.log("Validated Data:", data);
    checkEmailVerification(data.email); // Check if the email is verified

    if (isEmailVerified) {
      setIsConfirmOpen(true); // If email is verified, open confirmation modal
    } else {
      setIsVerificationOpen(true); // If email is not verified, open email verification modal
    }
  };

  const confirmOrder = () => {
    console.log("Order Confirmed");
    setIsConfirmOpen(false);
    onClose();
  };

  const handleEmailVerified = () => {
    setIsEmailVerified(true); // Email verified, proceed with confirmation
    setIsVerificationOpen(false);
    setIsConfirmOpen(true); // Now that email is verified, show confirmation modal
  };

  return (
    <>
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
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex space-x-4 mb-4">
                  <div className="w-full">
                    <label className={`block text-gray-800 ${errors.firstName ? "text-red-600" : ""}`}>
                      First Name
                    </label>
                    <input
                      {...register("firstName")}
                      className={`w-full p-2 border rounded-md bg-white/30 placeholder-gray-500 focus:outline-none focus:ring-2 ${
                        errors.firstName ? "border-red-600 focus:ring-red-600" : "focus:ring-gray-900"
                      }`}
                    />
                    {errors.firstName && <span className="text-red-600 text-sm">{errors.firstName.message}</span>}
                  </div>
                  <div className="w-full">
                    <label className={`block text-gray-800 ${errors.lastName ? "text-red-600" : ""}`}>
                      Last Name
                    </label>
                    <input
                      {...register("lastName")}
                      className={`w-full p-2 border rounded-md bg-white/30 placeholder-gray-500 focus:outline-none focus:ring-2 ${
                        errors.lastName ? "border-red-600 focus:ring-red-600" : "focus:ring-gray-900"
                      }`}
                    />
                    {errors.lastName && <span className="text-red-600 text-sm">{errors.lastName.message}</span>}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">How can we contact you?</h3>
                <div className="mb-4">
                  <label className={`block text-gray-800 ${errors.address ? "text-red-600" : ""}`}>
                    Address
                  </label>
                  <input
                    {...register("address")}
                    className={`w-full p-2 border rounded-md bg-white/30 placeholder-gray-500 focus:outline-none focus:ring-2 ${
                      errors.address ? "border-red-600 focus:ring-red-600" : "focus:ring-gray-900"
                    }`}
                  />
                  {errors.address && <span className="text-red-600 text-sm">{errors.address.message}</span>}
                </div>
                <div className="mb-4">
                  <label className={`block text-gray-800 ${errors.email ? "text-red-600" : ""}`}>
                    Email
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    className={`w-full p-2 border rounded-md bg-white/30 placeholder-gray-500 focus:outline-none focus:ring-2 ${
                      errors.email ? "border-red-600 focus:ring-red-600" : "focus:ring-gray-900"
                    }`}
                  />
                  {errors.email && <span className="text-red-600 text-sm">{errors.email.message}</span>}
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

      {/* Confirmation modal */}
      <ConfirmationModal isOpen={isConfirmOpen} onClose={() => setIsConfirmOpen(false)} onConfirm={confirmOrder} />

      {/* Email verification modal */}
      <EmailVerificationModal isOpen={isVerificationOpen} onClose={() => setIsVerificationOpen(false)} onVerify={handleEmailVerified} />
    </>
  );
};

export default CheckoutModal;
