import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Product } from "../types/products";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import ProductModal from "./ProductModal"; // Importamos el modal
import "../styles/productCard.css";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, cartItems } = useCart();
  const [added, setAdded] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para el modal

  useEffect(() => {
    const productInCart = cartItems.find(item => item.id === product.id);
    setAdded(!!productInCart);
  }, [cartItems, product.id]);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation(); // Evita que se abra el modal al hacer clic en el botón
    addToCart({
      id: product.id,
      name: product.name,
      quantity: 1,
      price: product.price,
    });
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
        onClick={() => setIsModalOpen(true)} // Abre el modal al hacer clic en la tarjeta
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

      {/* Modal del producto */}
      <ProductModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} product={product} />
    </>
  );
};

export default ProductCard;
