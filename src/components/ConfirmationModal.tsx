"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isOpen, onClose, onConfirm }) => {
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
            className="bg-white/30 p-6 rounded-lg shadow-xl w-full max-w-sm relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Confirm Your Order</h2>
            <p className="text-gray-700 mb-6">Are you sure you want to place your order with these details?</p>
            <div className="flex space-x-6">
              <button
                className="w-full bg-gray-300 text-gray-800 py-2 rounded-md hover:bg-gray-400 transition"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800 transition"
                onClick={onConfirm}
              >
                Confirm
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ConfirmationModal;
