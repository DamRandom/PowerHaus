import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gray-800 text-white py-20">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="PowerHaus - Store"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        {/* Filtro de la imagen */}
        <div className="absolute inset-0 filter brightness-75 blur-sm"></div>
      </div>

      <div className="relative container mx-auto text-center px-6 z-10">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 text-shadow">
          Welcome to PowerHaus
        </h1>
        <p className="text-lg sm:text-xl mb-8 leading-relaxed">
          Elevate your shopping experience with our premium selection of products. Shop now and discover the difference.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
