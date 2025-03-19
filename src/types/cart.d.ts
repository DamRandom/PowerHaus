import { Product } from "./products";

export type ProductInCart = Product & { quantity: number };

export type CartContextType = {
  cartItems: ProductInCart[];
  cartCount: number;
  addToCart: (product: ProductInCart) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
};
