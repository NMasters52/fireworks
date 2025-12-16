import React from "react";

const FeaturedProducts = () => {
  return (
    <>
      {/* ===== Featured Products Section ===== */}
      <section className="bg-background text-text py-12 sm:py-16">
        {/* Section container */}
        <div className="mx-auto max-w-screen-xl px-4 sm:px-8">
          {/* Header */}
          <h2 className="text-3xl font-bold mb-8 text-center text-pink">
            Featured Products
          </h2>

          {/* 3 product placeholders */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="h-64 rounded-lg border border-pink/30 flex items-center justify-center text-tagline">
              Product 1
            </div>
            <div className="h-64 rounded-lg border border-pink/30 flex items-center justify-center text-tagline">
              Product 2
            </div>
            <div className="h-64 rounded-lg border border-pink/30 flex items-center justify-center text-tagline">
              Product 3
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedProducts;
