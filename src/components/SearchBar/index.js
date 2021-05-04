import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { animateScroll as scroll } from "react-scroll";
import "./styles.css";

const SearchBar = ({ submitSearch }) => {
  const [searchValue, setValueList] = useState("");
  const search = (value) => {
    setValueList(value);
    submitSearch(value);
  };

  return (
    <div className="Search">
      <form className="SearchSpan" type="submit">
        <input
          className="SearchInput"
          placeholder={"Search"}
          onChange={(e) => search(e.target.value)}
          value={searchValue}
        />
      </form>
      <FiSearch />
    </div>
  );
};

export default SearchBar;
