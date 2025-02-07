'use client'

import { useState, useEffect } from "react";
import Cart from "@/components/cart/Cart";
import { Product } from "@/types/Product";

export default function CartPage() {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  // Cargar productos del carrito desde localStorage al montar el componente
  useEffect(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, []);

  // Guardar productos en el carrito en localStorage cada vez que cambie el carrito
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } else {
      localStorage.removeItem("cartItems"); // Si el carrito está vacío, eliminarlo de localStorage
    }
  }, [cartItems]);

  // Eliminar un artículo del carrito
  const handleRemoveFromCart = (id: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart)); // Actualiza localStorage después de modificar el carrito
  };

  return (
    <div>
      <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
    </div>
  );
}
