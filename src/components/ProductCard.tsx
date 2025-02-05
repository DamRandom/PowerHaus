import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/Product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center">
      {/* Imagen del producto */}
      <Link href={`/store/${product.id}`} className="w-full flex justify-center">
        <div className="relative w-40 h-56 cursor-pointer">
          <Image
            src={product.imageUrl}
            alt={product.name}
            layout="fill"
            objectFit="contain" // Ajusta la imagen sin recortar
            className="rounded-t-lg"
          />
        </div>
      </Link>

      {/* Información del producto */}
      <div className="p-4 text-center">
        <Link href={`/store/${product.id}`}>
          <h2 className="text-lg font-semibold cursor-pointer hover:text-[#596766] transition-colors">
            {product.name}
          </h2>
        </Link>
        <p className="text-sm text-gray-600">{product.description}</p>
        <p className="text-xl font-bold mt-2">{product.price}</p>

        {/* Botón de añadir al carrito */}
        <button className="mt-4 w-full bg-[#596766] text-white py-2 rounded-lg hover:bg-[#ABC1BB] transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
