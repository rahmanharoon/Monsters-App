import React from "react";
import "./search-box.styles.css";

export const SearchBox = ({ placeholder, onSearchHandler }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={onSearchHandler}
  />
);
