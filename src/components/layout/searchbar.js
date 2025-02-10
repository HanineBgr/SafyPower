import React from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="flex items-center justify-center w-full max-w-xl bg-white rounded-full px-3 py-1 shadow-sm"> 
      <Search className="text-gray-700 w-3 h-3 mr-2" /> 
      <input
        type="text"
        placeholder="Search something..."
        className="w-full py-1 px-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" 
      />
    </div>
  );
};

export default SearchBar;
