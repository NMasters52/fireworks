import React from "react";
import { Hero } from "./components/Hero";

// export const CATEGORIES = [
//   "mortar-shells",
//   "salute-mortar-shells",
//   "cakes",
//   "salute-cakes",
//   "big-bores",
//   "roman-candles",
//   "rockets",
//   "misc"
// ];

// export const CATEGORY_LABEL = {
//   "mortar-shells": "Mortar Shells",
//   "salute-mortar-shells": "Salute Mortar Shells",
//   cakes: "Cakes",
//   "salute-cakes": "Salute Cakes",
//   "big-bores": "Big Bores",
//   "roman-candles": "Roman Candles",
//   rockets: "Rockets",
//   misc: "Misc"
// };

const App = () => {
  return (
    <div className="text-red-500 bg-gray-700 h-screen">
      <Hero />
    </div>
  );
};

export default App;
