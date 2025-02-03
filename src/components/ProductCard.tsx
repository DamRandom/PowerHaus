import Image from 'next/image';
import { Product } from '@/types/Product';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="relative w-full h-48">
        <Image
          src={product.imageUrl}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-sm text-gray-600">{product.description}</p>
        <p className="text-xl font-bold mt-2">{product.price}</p>
        <button className="mt-4 w-full bg-[#596766] text-white py-2 rounded-lg hover:bg-[#ABC1BB]">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
