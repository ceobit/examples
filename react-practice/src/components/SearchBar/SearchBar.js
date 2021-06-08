import React, { useState } from "react";
import classes from "./searchBar.module.css";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  return (
    <>
      <div className={classes.searchInput}>
        <label>
          <input
            type="text"
            placeholder="Search for a country... "
            value={search}
            onChange={handleSearch}
          />
        </label>
      </div>
    </>
  );
};
export default SearchBar;
