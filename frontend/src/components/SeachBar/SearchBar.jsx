import React, { useState } from "react";
import "./SearchBar.scss";
import search from "../../assets/search.png";

const SearchBar = () => {
  const Type = ["buy", "rent"];
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    maxPrice: 0,
    minPrice: 0,
  });

  const switchType = (value) => {
    setQuery((prev) => ({ ...prev, type: value }));
  };
  return (
    <div className="searchBar">
      <div className="type">
        {Type.map((type) => {
          return (
            <button
              key={type}
              className={query.type === type ? "active" : ""}
              onClick={() => switchType(type)}
            >
              {type}
            </button>
          );
        })}
      </div>
      <form action="">
        <input type="location" placeholder="Your City Location" />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={1000000}
          placeholder="min Price"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={1000000}
          placeholder="max Price"
        />
        <button>
          <img src={search} alt="" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
