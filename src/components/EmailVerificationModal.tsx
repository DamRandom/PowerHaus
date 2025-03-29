"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface EmailVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onVerify: (code: string) => void;
}

const EmailVerificationModal: React.FC<EmailVerificationModalProps> = ({
  isOpen,
  onClose,
  onVerify,
}) => {
  const [verificationCode, setVerificationCode] = useState("");
  const [countdown, setCountdown] = useState(60);
  const [isResendDisabled, setIsResendDisabled] = useState(true);

  // Countdown logic for resend button
  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setIsResendDisabled(false);
    }
  }, [countdown]);

  const handleVerify = () => {
    if (verificationCode) {
      onVerify(verificationCode); // Pass the code to parent
      onClose(); // Close the modal
    }
  };

  const handleResendCode = () => {
    setCountdown(60); // Reset countdown
    setIsResendDisabled(true); // Disable resend button again
    // Add logic here to resend the verification code to the user's email
    console.log("Verification code resent.");
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
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Email Verification
            </h2>
            <p className="text-gray-800 mb-4">
              We’ve sent a verification code to your email. Please enter it
              below.
            </p>
            <div className="mb-4">
              <label className="block text-gray-800">Verification Code</label>
              <input
                type="text"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                className="w-full p-2 border rounded-md bg-white/30 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
            </div>
            <div className="flex justify-between items-center">
              <button
                onClick={handleResendCode}
                className={`text-sm ${
                  isResendDisabled ? "text-gray-400" : "text-blue-600"
                }`}
                disabled={isResendDisabled}
              >
                {isResendDisabled ? `Resend in ${countdown}s` : "Resend Code"}
              </button>
              <button
                onClick={handleVerify}
                className="bg-gray-900 text-white py-2 px-6 rounded-md hover:bg-gray-800 transition"
              >
                Verify
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default EmailVerificationModal;
