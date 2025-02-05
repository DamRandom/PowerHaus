import Image from "next/image";
import { notFound } from "next/navigation"; // Para manejar errores 404
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/Products";

interface ProductPageProps {
  params: { id: string }; // Next.js envía los parámetros de la URL como `params`
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id.toString() === params.id);

  if (!product) {
    return notFound(); // Si no se encuentra el producto, manda a una página 404
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-[#DADCE1] text-[#262520] p-6 md:p-12 mt-10">
        <div className="container mx-auto max-w-5xl flex flex-col md:flex-row gap-12 items-center">
          {/* Imagen del producto */}
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

          {/* Información del producto */}
          <div className="flex-1 space-y-4">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-lg text-gray-700">{product.description}</p>
            <p className="text-2xl font-bold text-[#262520]">{product.price}</p>

            {/* Detalles adicionales */}
            <ul className="space-y-2 text-gray-800">
              <li><strong>Brand:</strong> {product.brand}</li>
              <li><strong>Operating System:</strong> {product.operatingSystem}</li>
              <li><strong>RAM:</strong> {product.ram}</li>
              <li><strong>Storage:</strong> {product.storage}</li>
              <li><strong>Screen Size:</strong> {product.screenSize}&apos;</li>
              <li><strong>Processor:</strong> {product.cpuModel}</li>
              <li><strong>Cellular:</strong> {product.cellularTechnology}</li>
            </ul>

            {/* Botón de compra */}
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

// Genera las rutas estáticas
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}
