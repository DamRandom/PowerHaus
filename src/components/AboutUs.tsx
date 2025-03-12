import React from 'react';
import { FaStore } from 'react-icons/fa';

const AboutUs: React.FC = () => {
  return (
    <section className="bg-gray-100 text-gray-900 py-20">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold mb-4">Quiénes Somos</h2>
        <div className="flex flex-col items-center mb-8">
          <FaStore className="text-orange-500 text-6xl mb-4" />
          <p className="text-lg max-w-4xl">
            En <strong>PowerHaus</strong>, nos dedicamos a ofrecer una experiencia de compra en línea excepcional, brindando una selección cuidadosamente curada de productos de alta calidad de las marcas más confiables. Nuestro objetivo es ayudarte a descubrir artículos que mejoren tu vida diaria.
          </p>
        </div>
        <p className="text-lg max-w-3xl mx-auto mb-8">
          Fundada en 2025, PowerHaus ha crecido hasta convertirse en un destino de compras preferido por clientes en todo el mundo. Nos enorgullece nuestra atención al cliente de primera clase y nuestro compromiso con la satisfacción total de nuestros usuarios.
        </p>
        <p className="text-lg max-w-3xl mx-auto">
          Ya sea que busques productos esenciales para el día a día o artículos exclusivos, estamos aquí para asegurarnos de que encuentres exactamente lo que necesitas. En PowerHaus, nos enfocamos en la calidad, la conveniencia y la satisfacción del cliente.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
