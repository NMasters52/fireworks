import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { fakeProducts } from "../data/fakeData.js";
import { useState } from "react";
import FilterProducts from "../components/FilterProducts.jsx";

const FALLBACK_IMAGE_URL =
  "https://res.cloudinary.com/nmasters-dev/image/upload/v1766254359/IN4OjmY4wMHBFxIcbuvRLbS2U1RKIHTf73C50anrhcA4gFo9_ixpdsl.png";

const Products = () => {
  const [filter, setFilter] = useState("");

  const filteredProducts = fakeProducts.filter((product) => {
    if (filter === "") return true;

    return product.tags.includes(filter);
  });

  return (
    <>
      <PageHeader
        title="Products"
        content="See below for a range of products we provide. If you're looking for
          something specific use the filters to find the items you want."
      />

      <section className="px-8 pb-10 sm:px-10 md:px-12">
        <div className="max-w-6xl m-auto">
          <FilterProducts filter={filter} setFilter={setFilter} />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map((product) => {
              const hasImage = Boolean(product.imageURL);
              const src = hasImage ? product.imageURL : FALLBACK_IMAGE_URL;

              return (
                <article
                  key={product.id}
                  className={[
                    "group relative overflow-hidden rounded-2xl border",
                    "border-white/10 bg-black/20",
                    "shadow-[0_10px_30px_rgba(0,0,0,0.45)]",
                    "transition hover:-translate-y-0.5 hover:border-white/20",
                    "hover:shadow-[0_18px_50px_rgba(0,0,0,0.6)]",
                  ].join(" ")}
                >
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[var(--color-pink)]/10 via-transparent to-transparent opacity-0 transition group-hover:opacity-100 space-y-2" />

                  {product.featured ? (
                    <div className="absolute z-10 left-3 top-3">
                      <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-pink)]/80 px-2.5 py-1 text-xs font-semibold text-[var(--color-text)] ring-1 ring-[var(--color-pink)]/35">
                        Featured
                      </span>
                    </div>
                  ) : null}

                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-white/5">
                    <img
                      src={src}
                      alt={product.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                      onError={(e) => {
                        const img = e.currentTarget;

                        if (img.src === FALLBACK_IMAGE_URL) return;

                        img.onerror = null;
                        img.src = FALLBACK_IMAGE_URL;
                      }}
                    />

                    <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-[var(--color-background)] to-transparent" />
                  </div>

                  <div className="relative p-3">
                    <h3 className="line-clamp-2 text-lg font-semibold text-[var(--color-text)]">
                      {product.name}
                    </h3>

                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {product.tags.map((tag) => (
                        <span
                          key={tag}
                          className=" mt-1 rounded-full bg-white/5 px-2 py-0.5 text-md text-[var(--color-text)]/75 ring-1 ring-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5">
                      <Link
                        to={`/products/${product.id}`}
                        className={[
                          "inline-flex w-full items-center justify-center gap-2",
                          "rounded-xl px-3 py-2 text-sm font-semibold",
                          "bg-[var(--color-pink)] text-[var(--color-text)]",
                          "shadow-[0_10px_25px_rgba(214,77,133,0.25)]",
                          "transition hover:brightness-110 active:brightness-95",
                          "focus:outline-none focus-visible:ring-2",
                          "focus-visible:ring-[var(--color-pink)]/60",
                          "focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)]",
                        ].join(" ")}
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
