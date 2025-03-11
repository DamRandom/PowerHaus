import React from 'react';
import { FaStore } from 'react-icons/fa';

const AboutUs: React.FC = () => {
  return (
    <section className="bg-gray-100 text-gray-900 py-20">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold mb-4">Who We Are</h2>
        <div className="flex justify-center items-center mb-8">
          <FaStore className="text-orange-500 text-6xl mr-4" />
          <p className="text-lg max-w-4xl">
            PowerHaus is a cutting-edge online store designed to provide a seamless shopping experience.
            We offer a curated selection of high-quality products from the most trusted brands.
            Our goal is simple: to help you discover products that enhance your life.
          </p>
        </div>
        <p className="text-lg max-w-3xl mx-auto">
          Whether you&apos;re looking for everyday essentials or something special, we&apos;re here to make sure you get
          exactly what you need. At PowerHaus, we focus on quality, convenience, and customer satisfaction.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
