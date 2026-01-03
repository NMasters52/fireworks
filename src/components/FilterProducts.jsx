import React from "react";

const FilterProducts = ({ filter, setFilter }) => {
  return (
    <div className="p-4 mb-6 border-2 border-pink rounded-xl bg-black/20">
      <label className="text-[var(--color-pink)] font-bold mr-4">
        Filter By:
      </label>
      <select
        className="p-2 border rounded-lg outline-none bg-background text-text border-pink/30"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="">All Products</option>
        <option value="cakes">Cakes</option>
        <option value="mortars">Mortars</option>
        <option value="salutes">Salutes</option>
        <option value="roman candles">Roman Candles</option>
        <option value="misc">Misc</option>
      </select>
    </div>
  );
};

export default FilterProducts;
