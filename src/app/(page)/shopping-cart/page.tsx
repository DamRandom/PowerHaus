'use client'

import { useState } from "react";
import Cart from "@/components/cart/Cart";
import { Product } from "@/types/Product";
import { products } from "@/data/products"; // Asume que tienes una lista de productos para el carrito

export default function CartPage() {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const handleAddToCart = (product: Product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div>
      <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
    </div>
  );
}
