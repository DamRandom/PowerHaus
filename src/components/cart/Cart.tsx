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
    <div className="flex-1 bg-[#DADCE1] text-[#262520] px-4 py-8">
      <div className="container mx-auto max-w-6xl">
        {/* Sección de productos y resumen */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-center mb-6">Your Cart</h2>
          {cartItems.length === 0 ? (
            <p className="text-lg text-center">Your cart is empty. Browse our products to fill it up!</p>
          ) : (
            <div>
              {cartItems.map((item) => (
                <CartItem key={item.id} product={item} onRemove={onRemoveFromCart} />
              ))}
              <CartSummary 
                total={cartItems.reduce(
                  (sum, item) => sum + parseFloat(item.price.replace('$', '').replace(',', '')), 
                  0
                )}
              />
            </div>
          )}
        </div>

        {/* Sección de pago y formulario */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-6">Delivery Information</h2>
          <CartForm />
        </div>
      </div>
    </div>
  );
}

