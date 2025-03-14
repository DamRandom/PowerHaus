"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import Image from "next/image";
import { Product } from "../types/products";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onClose, product }) => {
  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 flex justify-center items-center z-50 backdrop-blur-md bg-gray-800/30"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="bg-white/90 p-6 rounded-lg shadow-lg w-full max-w-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón de cierre */}
            <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-700" onClick={onClose}>
              <FiX size={24} />
            </button>

            {/* Imagen del producto */}
            <div className="relative w-full h-64 mb-4">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>

            {/* Información del producto */}
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">{product.name}</h2>
            <p className="text-gray-700 text-sm mb-4">{product.description}</p>

            {/* Precio y botón de compra */}
            <div className="flex justify-between items-center">
              <p className="text-xl font-semibold text-orange-500">${product.price}</p>
              <button
                className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
              >
                Add to Cart
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;
