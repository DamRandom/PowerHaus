import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/Product";

export default function StorePage() {
  const products: Product[] = [
    {
      id: 1,
      name: 'Smart Refrigerator',
      description: 'Energy-efficient refrigerator with smart features.',
      price: '$999.99',
      imageUrl: '/images/refrigerator.jpg',
    },
    {
      id: 2,
      name: 'High-Efficiency Washing Machine',
      description: 'Powerful washing machine with multiple modes.',
      price: '$799.99',
      imageUrl: '/images/washing-machine.jpg',
    },
  ];

  return (
    <div className="h-screen flex flex-col">
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
    </div>
  );
}
