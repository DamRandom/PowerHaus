import React from 'react';
import { FaUsers } from 'react-icons/fa'; // Ícono relacionado con el equipo

const Team: React.FC = () => {
  return (
    <section className="bg-gray-100 text-gray-900 py-20">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold mb-6">Meet Our Team</h2>
        
        {/* Mensaje si no se muestran miembros del equipo */}
        <div className="flex justify-center items-center flex-col">
          <FaUsers className="text-orange-500 text-6xl mb-6" />
          <p className="text-lg max-w-3xl mx-auto">
            Our team is currently being formed. Stay tuned for introductions to the people behind PowerHaus.
          </p>
        </div>

        {/* Aquí irían los miembros del equipo una vez estén disponibles */}
        {/* Para simular los miembros del equipo, podemos dejar un espacio vacío o un placeholder */}
      </div>
    </section>
  );
};

export default Team;
