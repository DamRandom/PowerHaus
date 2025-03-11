import React from 'react';
import Image from 'next/image';
import Button from './Button';

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
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      <div className="relative container mx-auto text-center px-6">
        <h1 className="text-5xl font-bold mb-4">Welcome to PowerHaus</h1>
        <p className="text-lg mb-8">Elevate your shopping experience with our premium selection of products. Shop now and discover the difference.</p>
        <Button label="Shop Now" link="/shop" />
      </div>
    </section>
  );
};

export default HeroSection;
