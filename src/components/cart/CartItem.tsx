import Image from "next/image";
import { Product } from "@/types/Product";

interface CartItemProps {
  product: Product;
  onRemove: (id: number) => void;
}

export function CartItem({ product, onRemove }: CartItemProps) {
  return (
    <div className="flex justify-between items-center mb-4 border-b pb-4">
      <div className="flex items-center">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={80} // Establece el tamaño adecuado
          height={80} // Establece el tamaño adecuado
          className="object-cover rounded-lg mr-4"
        />
        <div>
          <h3 className="font-semibold">{product.name}</h3>
          <p className="text-sm text-gray-500">{product.description}</p>
          <p className="text-lg font-bold mt-2">{product.price}</p>
        </div>
      </div>
      <button
        onClick={() => onRemove(product.id)}
        className="text-red-500 hover:text-red-700 transition-colors"
      >
        Remove
      </button>
    </div>
  );
}
