'use client'

import { useState, useEffect } from "react";
import Cart from "@/components/cart/Cart";
import { Product } from "@/types/Product";

export default function CartPage() {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  // Load cart items from localStorage when the component mounts
  useEffect(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, []);

  // Save cart items to localStorage whenever the cart changes
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } else {
      localStorage.removeItem("cartItems"); // Remove from localStorage if the cart is empty
    }
  }, [cartItems]);

  // Remove an item from the cart
  const handleRemoveFromCart = (id: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart)); // Update localStorage after modifying the cart
  };

  return (
    <div>
      <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
    </div>
  );
}
