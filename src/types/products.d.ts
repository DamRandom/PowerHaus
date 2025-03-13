// types/products.d.ts

export type Product = {
  id: number;
  name: string;
  category: string;
  subCategory: string;
  price: string;
  image: string;
  description: string;
  weight?: string;
  organic?: boolean;
  storage?: string;
  brand: string;
  [key: string]: string | number | boolean | undefined;
};

export type ProductsData = {
  [category: string]: {
    [subCategory: string]: Product[];
  };
};
