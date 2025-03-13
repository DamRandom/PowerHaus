import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  label: string;
  link: string;
  added: boolean; // Añadido para controlar el estado de "Añadido"
}

const Button: React.FC<ButtonProps> = ({ label, link, added }) => {
  return (
    <Link
      href={link}
      className={`inline-block text-lg font-semibold py-3 px-8 rounded-full transition-all 
        ${added ? 'bg-gray-500 cursor-not-allowed' : 'bg-orange-500 text-white hover:bg-orange-600'}`} // Diferenciar estilos
    >
      {added ? 'Added' : label} {/* Cambiar el texto dependiendo del estado */}
    </Link>
  );
};

export default Button;
