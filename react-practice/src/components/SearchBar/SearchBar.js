import React from "react";
import "../style/style.scss";

const SearchBar = ({ onSearch }) => {
  return (
    <>
      <div className="search-input">
        <label>
          <input
            type="text"
            placeholder="Search for a country... "
            onChange={(e) => onSearch(e.target.value)}
          />
        </label>
      </div>
    </>
  );
};
export default SearchBar;
