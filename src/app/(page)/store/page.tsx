'use client'

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/Products";
import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Product } from "@/types/Product";
import Filters from "@/components/Filters";
import SearchBar from "@/components/SearchBar"; 

export default function StorePage() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFilter, setSearchFilter] = useState("name");
  const [searchPrice, setSearchPrice] = useState("");
  const [isAtFooter, setIsAtFooter] = useState(false);

  useEffect(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, []);

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } else {
      localStorage.removeItem("cartItems");
    }
  }, [cartItems]);

  const handleAddToCart = (product: Product) => {
    if (!cartItems.some(item => item.id === product.id)) {
      setCartItems((prevItems) => [...prevItems, product]);
    }
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const handleClearFilters = () => {
    setSelectedCategory(null);
    setSearchQuery("");
    setSearchPrice("");
  };

  const handleSearch = (query: string, filter: string, priceRange: string) => {
    setSearchQuery(query);
    setSearchFilter(filter);
    setSearchPrice(priceRange);
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory ? product.type === selectedCategory : true;
    const matchesSearch = searchQuery
      ? searchFilter === "name"
        ? product.name.toLowerCase().includes(searchQuery.toLowerCase())
        : product.type?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false
      : true;
    const matchesPrice =
      searchPrice === "low"
        ? Number(product.price) <= 50
        : searchPrice === "medium"
        ? Number(product.price) > 50 && Number(product.price) <= 200
        : searchPrice === "high"
        ? Number(product.price) > 200
        : true;    

    return matchesCategory && matchesSearch && matchesPrice;
  });

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById("footer");
      if (!footer) return;

      const footerTop = footer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      setIsAtFooter(footerTop <= windowHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-[#DADCE1] text-[#262520] p-8 pt-24">
        <div className="container mx-auto flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/4">
            <Filters
              categories={["electronics", "home", "books", "accessories"]}
              onCategorySelect={handleCategorySelect}
              onClearFilters={handleClearFilters}
            />
          </div>

          {/* Contenedor que agrupa SearchBar y productos */}
          <div className="w-full md:w-3/4">
            <SearchBar onSearch={handleSearch} />

            {/* Grid de productos con solo 3 columnas */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                  isAdded={cartItems.some(item => item.id === product.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <Link href="/shopping-cart">
        <div
          className={`fixed right-6 bg-[#596766] text-white p-4 rounded-full shadow-lg hover:bg-[#ABC1BB] transition cursor-pointer ${
            isAtFooter ? "bottom-[120px]" : "bottom-6"
          }`}
          style={{
            transition: "bottom 0.3s ease-in-out",
          }}
        >
          <ShoppingCartIcon className="w-6 h-6" />
        </div>
      </Link>
    </div>
  );
}
