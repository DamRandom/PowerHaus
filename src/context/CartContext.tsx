"use client";

import React, { createContext, useState, useContext, useEffect, ReactNode } from "react";
import { ProductInCart, CartContextType } from "@/types/cart";

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<ProductInCart[]>([]);

  useEffect(() => {
    try {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        const parsedCart = JSON.parse(storedCart);
        if (Array.isArray(parsedCart)) {
          setCartItems(
            parsedCart.map((item) => ({
              ...item,
              price: isNaN(Number(item.price)) ? 0 : Number(item.price),
              image: item.image?.trim() || "/images/default-image.jpg",
              quantity: item.quantity || 1,
            }))
          );
        }
      }
    } catch {
      localStorage.removeItem("cart");
    }
  }, []);

  useEffect(() => {
    if (cartItems.length) {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    } else {
      localStorage.removeItem("cart");
    }
  }, [cartItems]);

  const addToCart = (product: ProductInCart) => {
    if (!product.id || !product.name) return;

    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      return existing
        ? prev.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + (product.quantity || 1) }
              : item
          )
        : [
            ...prev,
            {
              ...product,
              price: isNaN(Number(product.price)) ? 0 : Number(product.price),
              image: product.image?.trim() || "/images/default-image.jpg",
              quantity: product.quantity || 1,
            },
          ];
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) return;
    setCartItems((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
  };

  const getTotalPrice = () =>
    cartItems.reduce((total, item) => total + Number(item.price) * item.quantity, 0);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cartItems, cartCount, addToCart, removeFromCart, updateQuantity, clearCart, getTotalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};
