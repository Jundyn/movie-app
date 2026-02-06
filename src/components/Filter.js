// components/Filter.js
import React from "react";

const Filter = ({ setTitleFilter, setRateFilter }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search by title"
        onChange={(e) => setTitleFilter(e.target.value)}
      />

      <input
        type="number"
        min="0"
        max="5"
        placeholder="Minimum rating"
        onChange={(e) => setRateFilter(e.target.value)}
      />
    </div>
  );
};

export default Filter;
