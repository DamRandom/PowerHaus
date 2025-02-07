import { CartItem } from "./CartItem";
import { CartSummary } from "./CartSummary";
import { CartForm } from "./CartForm";
import { Product } from "@/types/Product";

interface CartProps {
  cartItems: Product[];
  onRemoveFromCart: (id: number) => void;
}

export default function Cart({ cartItems, onRemoveFromCart }: CartProps) {
  return (
    <div className="flex justify-between p-6">
      {/* Listado de productos en el carrito */}
      <div className="w-2/3 pr-4">
        <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <CartItem key={item.id} product={item} onRemove={onRemoveFromCart} />
            ))}
          </div>
        )}
      </div>

      {/* Formulario de compra */}
      <div className="w-1/3 pl-4">
        <h2 className="text-2xl font-semibold mb-4">Delivery Information</h2>
        <CartForm />
        <CartSummary total={cartItems.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '').replace(',', '')), 0)} />
      </div>
    </div>
  );
}
