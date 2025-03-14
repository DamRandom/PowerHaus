// context/CartContext.tsx
'use client';

import React, { createContext, useState, useContext, ReactNode } from "react";

export type ProductInCart = {
  id: number;
  name: string;
  quantity: number;
  price: number; 
};

type CartContextType = {
  cartItems: ProductInCart[];
  cartCount: number;
  addToCart: (product: ProductInCart) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<ProductInCart[]>([]);

  const addToCart = (product: ProductInCart) => {
    setCartItems((prevItems) => {
      const existingProductIndex = prevItems.findIndex((item) => item.id === product.id);
      if (existingProductIndex >= 0) {
        // Si el producto ya está en el carrito, actualizamos la cantidad
        const updatedItems = [...prevItems];
        updatedItems[existingProductIndex].quantity += product.quantity;
        return updatedItems;
      } else {
        // Si el producto no está en el carrito, lo agregamos
        return [...prevItems, product];
      }
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems];
      const productIndex = updatedItems.findIndex((item) => item.id === productId);
      if (productIndex >= 0) {
        updatedItems[productIndex].quantity = quantity;
      }
      return updatedItems;
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // Contador de productos en el carrito
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, cartCount, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook para usar el carrito
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
