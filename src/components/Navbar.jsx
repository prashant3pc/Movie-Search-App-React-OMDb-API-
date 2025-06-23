import React from "react";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";

const Navbar = ({ onSearch }) => {
  const [findMovie, setFindMovie] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch(findMovie);
    }
  };
  return (
    <div className="bg-blue-500 w-full h-[150px]">
      <div className="text-center w-full p-8">
        <h1 className="text-3xl font-bold text-white py-10">Movie Search</h1>
        <div className="relative max-w-md mx-auto">
          <input
            onChange={(e) => setFindMovie(e.target.value)}
            onKeyDown={handleKeyDown}
            type="text"
            placeholder="Search..."
            className="bg-black/30 w-full pl-10 pr-4 py-2 border-0 text-white rounded-xl h-10 focus:outline-none"
          />
          <CiSearch className="absolute left-3 top-2.5 text-white text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
