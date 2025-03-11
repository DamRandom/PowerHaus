import React from 'react';
import { FaTruck } from 'react-icons/fa'; // Ícono relacionado con servicios de mensajería o envío

const Services: React.FC = () => {
  return (
    <section className="bg-gray-50 text-gray-900 py-20">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold mb-6">Our Services</h2>
        
        {/* Mensaje de los servicios de mensajería */}
        <div className="flex justify-center items-center flex-col">
          <FaTruck className="text-orange-500 text-6xl mb-6" />
          <p className="text-lg max-w-3xl mx-auto">
            PowerHaus offers efficient and reliable shipping services to ensure your orders arrive on time, every time. 
            Our logistics team works tirelessly to provide the best possible delivery experience.
          </p>
        </div>

        {/* Aquí podrían ir más detalles sobre otros servicios, si es necesario */}
      </div>
    </section>
  );
};

export default Services;
