"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";  
import productsData from "../app/data/products.json";

interface SearchBarProps {
  onSearch: (term: string) => void;
  onFilterChange: (category: string | null, subcategories: string[]) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const mainCategories = Object.keys(productsData) as string[];
  const subCategories = selectedCategory
    ? Object.keys(productsData[selectedCategory])
    : [];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const handleCategoryClick = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
      setActiveFilters([]);
      onFilterChange(null, []);
    } else {
      setSelectedCategory(category);
      setActiveFilters([]);
      onFilterChange(category, []);
    }
  };

  const handleSubCategoryClick = (subCategory: string) => {
    const newFilters = activeFilters.includes(subCategory)
      ? activeFilters.filter((f) => f !== subCategory)
      : [...activeFilters, subCategory];

    setActiveFilters(newFilters);
    onFilterChange(selectedCategory, newFilters);
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-6">
      {/* Barra de búsqueda */}
      <div className="relative flex items-center bg-white/20 backdrop-blur-md border border-white/30 rounded-lg p-3 shadow-md">
        <FaSearch className="text-gray-300 absolute left-4" />
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full bg-transparent pl-10 text-gray-900 placeholder-gray-500 focus:outline-none"
        />
      </div>

      {/* Contenedor de etiquetas centrado */}
      <div className="flex flex-wrap justify-center items-center gap-2 mt-4">
        {selectedCategory ? (
          <>
            <motion.button
              onClick={() => handleCategoryClick(selectedCategory)}
              className="px-4 py-2 text-sm rounded-full bg-orange-500 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {selectedCategory}
            </motion.button>
            {subCategories.map((subCategory) => (
              <motion.button
                key={subCategory}
                onClick={() => handleSubCategoryClick(subCategory)}
                className={`px-4 py-2 text-sm rounded-full transition-all duration-300 ease-in-out ${
                  activeFilters.includes(subCategory)
                    ? "bg-orange-500 text-white"
                    : "bg-gray-500 text-gray-200"
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {subCategory}
              </motion.button>
            ))}
          </>
        ) : (
          mainCategories.map((category) => (
            <motion.button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className="px-4 py-2 text-sm rounded-full bg-gray-700 text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {category}
            </motion.button>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchBar;
