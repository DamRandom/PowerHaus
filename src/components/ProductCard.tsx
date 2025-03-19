import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Product } from "../types/products";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import ProductModal from "./ProductModal";
import "../styles/productCard.css";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { cartItems, addToCart } = useCart();
  const [added, setAdded] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const productInCart = cartItems.find(item => item.id === product.id);
    setAdded(!!productInCart);
  }, [cartItems, product.id]);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart({ ...product, quantity: 1 }); 
    setAdded(true);
  };

  return (
    <>
      <motion.div
        className="card cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="image-container">
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            quality={85}
          />
        </div>

        <div className="card__content">
          <p className="card__title">{product.name}</p>
          <p className="card__description">
            {product.description.length > 120
              ? product.description.slice(0, 120) + "..."
              : product.description}
          </p>
          <div className="bottom-info">
            <p className="price">${product.price}</p>
            <button
              className={`add-to-cart ${added ? "added" : ""}`}
              onClick={handleAddToCart}
              disabled={added}
            >
              {added ? "Added" : "Add to Cart"}
            </button>
          </div>
        </div>
      </motion.div>

      <ProductModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} product={product} />
    </>
  );
};

export default ProductCard;
