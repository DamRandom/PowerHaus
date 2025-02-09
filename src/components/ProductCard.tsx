import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/Product";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  isAdded: boolean;
}

export default function ProductCard({ product, onAddToCart, isAdded }: ProductCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center h-full">
      {/* Product image */}
      <Link href={`/store/${product.id}`} className="w-full flex justify-center">
        <div className="relative w-40 h-56 cursor-pointer">
          <Image
            src={product.imageUrl}
            alt={product.name}
            layout="fill"
            objectFit="contain"
            className="rounded-t-lg"
          />
        </div>
      </Link>

      {/* Product information */}
      <div className="p-4 flex flex-col justify-between flex-grow">
        <Link href={`/store/${product.id}`}>
          <h2 className="text-lg font-semibold cursor-pointer hover:text-[#596766] transition-colors">
            {product.name}
          </h2>
        </Link>
        <p className="text-sm text-gray-600">{product.description}</p>
        <p className="text-xl font-bold mt-2">{product.price}</p>

        {/* Add to cart button */}
        <button
          onClick={() => onAddToCart(product)}
          className={`mt-4 w-full py-2 rounded-lg transition-colors ${isAdded ? 'bg-[#ABC1BB] cursor-not-allowed' : 'bg-[#596766] text-white hover:bg-[#ABC1BB]'}`}
          disabled={isAdded}
        >
          {isAdded ? "Added" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
