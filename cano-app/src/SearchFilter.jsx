// src/SearchFilter.js
import React from "react";
import "./SearchFilter.css";

const SearchFilter = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search by title or author..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchFilter;
