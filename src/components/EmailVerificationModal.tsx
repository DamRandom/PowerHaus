"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface EmailVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onVerify: (code: string) => void;
  userEmail: string;
}

const EmailVerificationModal: React.FC<EmailVerificationModalProps> = ({
  isOpen,
  onClose,
  onVerify,
  userEmail,
}) => {
  const [verificationCode, setVerificationCode] = useState("");
  const [countdown, setCountdown] = useState(60);
  const [isResendDisabled, setIsResendDisabled] = useState(true);

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

  const sendVerificationCode = async () => {
    try {
      const response = await fetch('/api/sendVerificationCode', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: userEmail }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Verification code sent:', data.message);
      } else {
        console.log('Error:', data.error);
      }
    } catch (error) {
      console.error('Error sending verification code:', error);
    }
  };

  const handleVerify = () => {
    if (verificationCode) {
      onVerify(verificationCode);
      onClose();
    }
  };

  const handleResendCode = () => {
    setCountdown(60);
    setIsResendDisabled(true);
    sendVerificationCode();
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
