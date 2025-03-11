import React from 'react';
import { FaBoxOpen } from 'react-icons/fa'; // Ícono relacionado con productos o envío

const Products: React.FC = () => {
  return (
    <section className="bg-gray-50 text-gray-900 py-20">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold mb-6">Featured Products</h2>
        
        {/* Mensaje si no hay productos */}
        <div className="flex justify-center items-center flex-col">
          <FaBoxOpen className="text-orange-500 text-6xl mb-6" />
          <p className="text-lg max-w-3xl mx-auto">
            Currently, we don&apos;t have any products available for display. Check back soon for exciting updates.
          </p>
        </div>

        {/* Aquí irían los productos una vez estén disponibles */}
        {/* Para simular los productos, podemos dejar un espacio vacío o un placeholder */}
      </div>
    </section>
  );
};

export default Products;
