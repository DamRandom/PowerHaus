// /src/utils/cartFunctions.ts

import { Product } from "@/types/Product";

export const handleAddToCart = (product: Product, setCartItems: React.Dispatch<React.SetStateAction<Product[]>>) => {
  setCartItems((prevItems) => [...prevItems, product]);
};

export const handleRemoveFromCart = (id: number, setCartItems: React.Dispatch<React.SetStateAction<Product[]>>) => {
  setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
};
