import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string, filter: string, priceRange: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("name");
  const [priceRange, setPriceRange] = useState("");

  const handleSearch = () => {
    onSearch(query, filter, priceRange);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-lg shadow">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-2 border rounded flex-1"
      />
      
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="name">Name</option>
        <option value="category">Category</option>
      </select>

      <select
        value={priceRange}
        onChange={(e) => setPriceRange(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="">All Prices</option>
        <option value="low">Low ($0 - $50)</option>
        <option value="medium">Medium ($50 - $200)</option>
        <option value="high">High ($200+)</option>
      </select>

      <button onClick={handleSearch} className="bg-[#596766] text-white px-4 py-2 rounded">
        Search
      </button>
    </div>
  );
}
