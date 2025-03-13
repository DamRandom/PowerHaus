import React from "react";
import Image from "next/image";
import { Product } from "../types/products";
import { motion } from "framer-motion";
import "../styles/productCard.css";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
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
          <p className="price">{product.price}</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
