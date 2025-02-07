import Image from "next/image";
import { Product } from "@/types/Product";

interface CartItemProps {
  product: Product;
  onRemove: (id: number) => void;
}

export function CartItem({ product, onRemove }: CartItemProps) {
  return (
    <div className="flex justify-between items-center mb-6 border-b pb-6">
      <div className="flex items-center">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={80} // Establece el tamaño adecuado
          height={80} // Establece el tamaño adecuado
          className="object-cover rounded-lg mr-4"
        />
        <div>
          <h3 className="font-semibold text-[#262520]">{product.name}</h3>
          <p className="text-sm text-[#595959]">{product.description}</p>
          <p className="text-lg font-bold mt-2 text-[#262520]">{product.price}</p>
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
