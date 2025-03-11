import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  label: string;
  link: string;
}

const Button: React.FC<ButtonProps> = ({ label, link }) => {
  return (
    <Link href={link} className="inline-block bg-orange-500 text-white text-lg font-semibold py-3 px-8 rounded-full transition-all hover:bg-orange-600">
      {label}
    </Link>
  );
};

export default Button;
