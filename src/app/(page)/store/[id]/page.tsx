import Image from "next/image";
import { notFound } from "next/navigation"; // To handle 404 errors
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/Products";

interface ProductPageProps {
  params: { id: string }; // Next.js passes URL parameters as `params`
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id.toString() === params.id);

  if (!product) {
    return notFound(); // If the product is not found, redirect to a 404 page
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-[#DADCE1] text-[#262520] p-6 md:p-12 mt-10">
        <div className="container mx-auto max-w-5xl flex flex-col md:flex-row gap-12 items-center">
          {/* Product Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative max-w-sm w-full h-auto">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={300}
                height={400}
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Product Information */}
          <div className="flex-1 space-y-4">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-lg text-gray-700">{product.description}</p>
            <p className="text-2xl font-bold text-[#262520]">{product.price}</p>

            {/* Additional Details */}
            <ul className="space-y-2 text-gray-800">
              <li><strong>Brand:</strong> {product.brand}</li>

              {/* Display only if properties are available */}
              {product.operatingSystem && (
                <li><strong>Operating System:</strong> {product.operatingSystem}</li>
              )}
              {product.ram && (
                <li><strong>RAM:</strong> {product.ram}</li>
              )}
              {product.storage && (
                <li><strong>Storage:</strong> {product.storage}</li>
              )}
              {product.screenSize && (
                <li><strong>Screen Size:</strong> {product.screenSize}&apos;</li>
              )}
              {product.cpuModel && (
                <li><strong>Processor:</strong> {product.cpuModel}</li>
              )}
              {product.cellularTechnology && (
                <li><strong>Cellular:</strong> {product.cellularTechnology}</li>
              )}
              {/* New properties for products like Roborock */}
              {product.surfaceRecommendation && (
                <li><strong>Surface Recommendation:</strong> {product.surfaceRecommendation}</li>
              )}
              {product.specialFeatures && (
                <li><strong>Special Features:</strong> {product.specialFeatures.join(', ')}</li>
              )}
              {product.color && (
                <li><strong>Color:</strong> {product.color}</li>
              )}
              {product.dimensions && (
                <li><strong>Dimensions:</strong> {product.dimensions}</li>
              )}
              {product.batteryLife && (
                <li><strong>Battery Life:</strong> {product.batteryLife}</li>
              )}
            </ul>

            {/* Buy Now Button */}
            <button className="w-full bg-[#596766] text-white py-3 rounded-lg hover:bg-[#ABC1BB] transition">
              Buy Now
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

{/* Generate static routes */ }
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}
