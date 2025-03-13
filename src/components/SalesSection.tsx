"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SearchBar from "./SearchBar";
import ProductCard from "./ProductCard";
import productsData from "../app/data/products.json";
import { Product, ProductsData } from "../types/products";

const SalesSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const parsedProducts: Product[] = Object.entries(productsData as unknown as ProductsData).flatMap(
      ([category, subcategories]) =>
        Object.entries(subcategories).flatMap(([subCategory, items]) =>
          items.map((item) => ({
            ...item,
            category,
            subCategory,
            price: item.price ?? "",
            image: item.image ?? "",
            description: item.description ?? "",
            brand: item.brand ?? "",
          }))
        )
    );
    setProducts(parsedProducts);
  }, []);

  const handleSearch = (term: string) => setSearchTerm(term);

  const handleFilterChange = (category: string | null, subcategories: string[]) => {
    setSelectedCategory(category);
    setActiveFilters(subcategories);
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    const matchesSubcategory =
      activeFilters.length > 0 ? activeFilters.includes(product.subCategory) : true;

    return matchesSearch && matchesCategory && matchesSubcategory;
  });

  return (
    <section className="w-full px-6 py-12 bg-gradient-to-br from-white/90 via-white/70 to-gray-200">
      <SearchBar onSearch={handleSearch} onFilterChange={handleFilterChange} />

      <div className="grid auto-cols-fr grid-flow-row-dense sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mt-10">
        <AnimatePresence>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <motion.div 
                key={product.id} 
                layout 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex justify-center p-2"
              >
                <ProductCard product={product} />
              </motion.div>
            ))
          ) : (
            <motion.p
              className="text-center text-gray-500 col-span-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              No products found.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SalesSection;
