'use client';

import { useState } from "react";

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
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        {/* Filtro superior */}
        <div className="flex justify-between items-center pb-4">
          <h2 className="text-2xl font-semibold text-foreground">Filters:</h2>
          <button
            onClick={onClearFilters}
            className="text-secondary hover:text-primary transition duration-300"
          >
            Remove All
          </button>
        </div>
      </div>

      {/* Tarjeta de Categorías */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-foreground mb-4">Category</h3>
        <div className="relative">
          <button
            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            className="w-full text-left px-4 py-2 border border-tertiary rounded-md focus:outline-none"
          >
            Select Category
          </button>
          {isCategoryOpen && (
            <div className="absolute left-0 w-full mt-2 bg-white border border-tertiary rounded-lg shadow-lg z-10">
              <ul className="max-h-60 overflow-y-auto">
                {categories.map((category, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      onCategorySelect(category);
                      setIsCategoryOpen(false); // Cerrar el dropdown después de seleccionar
                    }}
                    className="cursor-pointer hover:bg-secondary p-2 px-4 text-foreground"
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
