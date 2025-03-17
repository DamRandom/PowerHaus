"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";
import Image from "next/image";
import { Product } from "../types/products";
import { useCart } from "../context/CartContext";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onClose, product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setQuantity(1);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!product) return null;

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      quantity,
      price: parseFloat(product.price.replace("$", "").trim()),
    });
    onClose();
  };

  const renderExtraInfo = () => {
    const excludedFields = ["id", "image", "price", "description", "category", "subCategory", "name"];
    
    return Object.entries(product)
      .filter(([key, value]) => !excludedFields.includes(key) && value !== undefined && value !== "")
      .map(([key, value]) => (
        <p key={key} className="text-gray-600 text-sm">
          <span className="font-semibold capitalize">{key.replace(/([A-Z])/g, " $1")}:</span> {String(value)}
        </p>
      ));
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
            className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Product image */}
            <div className="relative w-full h-64 mb-4">
              <Image src={product.image} alt={product.name} layout="fill" objectFit="cover" className="rounded-md" />
            </div>

            {/* Product details */}
            <h2 className="text-2xl font-semibold text-gray-900">{product.name}</h2>
            <p className="text-gray-700 text-sm mb-4">{product.description}</p>

            {/* Extra product information */}
            <div className="mb-4">{renderExtraInfo()}</div>

            {/* Price and quantity selection */}
            <div className="flex justify-between items-center">
              <p className="text-xl font-semibold text-orange-500">{product.price}</p>
              <div className="flex items-center">
                <button
                  className="bg-gray-300 text-gray-700 px-2 py-1 rounded-l-md hover:bg-gray-400 transition"
                  onClick={decreaseQuantity}
                >
                  <FiMinus />
                </button>
                <span className="px-4 py-1 bg-gray-100 text-gray-900 font-medium">{quantity}</span>
                <button
                  className="bg-gray-300 text-gray-700 px-2 py-1 rounded-r-md hover:bg-gray-400 transition"
                  onClick={increaseQuantity}
                >
                  <FiPlus />
                </button>
              </div>
            </div>

            {/* Add to cart button */}
            <button
              className="w-full mt-4 bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;
