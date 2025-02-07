'use effect'
'use client'

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/Products";
import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

export default function StorePage() {
  const [isAtFooter, setIsAtFooter] = useState(false);

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
      <main className="flex-1 bg-[#DADCE1] text-[#262520] p-8">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold mb-6">Our Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>

      <Footer />

      {/* Botón flotante del carrito con ajuste al footer */}
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
