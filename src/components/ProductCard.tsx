import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Product } from "../types/products";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext"; // Importar el hook de contexto
import "../styles/productCard.css";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, cartItems } = useCart();
  const [added, setAdded] = useState<boolean>(false);

  // Revisar si el producto ya está en el carrito
  useEffect(() => {
    const productInCart = cartItems.find(item => item.id === product.id);
    if (productInCart) {
      setAdded(true); // Si el producto ya está en el carrito, marcarlo como añadido
    }
  }, [cartItems, product.id]);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      quantity: 1,
      price: product.price,
    });
    setAdded(true); 
  };

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
          <button
            className={`add-to-cart ${added ? "added" : ""}`} // Añadimos la clase "added" si el producto está en el carrito
            onClick={handleAddToCart}
            disabled={added} // Deshabilitar el botón si el producto ya está en el carrito
          >
            {added ? "Added" : "Add to Cart"} {/* Cambiar texto a "Added" si ya está en el carrito */}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
