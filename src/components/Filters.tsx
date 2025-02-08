'use client';

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // Importamos los iconos de Lucide

interface FilterProps {
  categories: string[];
  onCategorySelect: (category: string) => void;
  onClearFilters: () => void;
}

export default function Filters({ categories, onCategorySelect, onClearFilters }: FilterProps) {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  return (
    <div className="bg-tertiary px-6 py-4 mb-8">
      {/* Tarjeta de Filtros */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        {/* Filtro superior */}
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-lg font-medium text-gray-700">Filters</h2>
          <button
            onClick={onClearFilters}
            className="text-[#ABC1BB] hover:text-[#7C9E97] transition duration-300 text-sm font-medium"
          >
            Remove All
          </button>
        </div>
      </div>

      {/* Tarjeta de Categorías */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <button
          onClick={() => setIsCategoryOpen(!isCategoryOpen)}
          className="w-full flex justify-between items-center text-lg font-semibold text-gray-800 focus:outline-none"
        >
          Category
          {isCategoryOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
        {isCategoryOpen && (
          <div className="mt-2 bg-white border border-gray-300 rounded-lg shadow-lg">
            <ul className="max-h-60 overflow-y-auto">
              {categories.map((category, index) => (
                <li
                  key={index}
                  onClick={() => {
                    onCategorySelect(category);
                    setIsCategoryOpen(false); // Cerrar el dropdown después de seleccionar
                  }}
                  className="cursor-pointer hover:bg-[#ABC1BB] p-2 px-4 text-gray-800"
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
