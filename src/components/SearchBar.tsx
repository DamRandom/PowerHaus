import { useState } from "react";
import { Search } from "lucide-react";

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
    <div className="bg-white p-4 rounded-lg shadow-md h-15 flex items-center gap-4">
      <div className="flex items-center bg-gray-100 p-2 rounded-lg flex-1 min-w-[200px]">
        <Search size={20} className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="bg-transparent flex-1 outline-none"
        />
      </div>

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="p-2 border rounded-lg bg-gray-100 text-gray-800 min-w-[150px]"
      >
        <option value="name">Name</option>
        <option value="description">Description</option>
        <option value="provider">Provider</option>
      </select>

      <select
        value={priceRange}
        onChange={(e) => setPriceRange(e.target.value)}
        className="p-2 border rounded-lg bg-gray-100 text-gray-800 min-w-[150px]"
      >
        <option value="">All Prices</option>
        <option value="low">Low ($0 - $50)</option>
        <option value="medium">Medium ($50 - $200)</option>
        <option value="high">High ($200+)</option>
      </select>

      <button
        onClick={handleSearch}
        className="bg-[#596766] text-white px-4 py-2 rounded-lg hover:bg-[#ABC1BB] transition duration-300"
      >
        Search
      </button>
    </div>
  );
}
