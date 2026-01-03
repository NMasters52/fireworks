import { Link } from "react-router-dom";
import { fakeProducts } from "../data/fakeData";

const FeaturedProducts = () => {
  const featuredList = fakeProducts.filter((p) => p.featured === true);

  return (
    <section className="py-16 bg-[var(--color-background)]">
      <div className="max-w-5xl px-4 mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-3xl font-bold text-center text-[var(--color-text)] mb-3">
            Featured <span className="text-[var(--color-pink)]">Picks</span>
          </h2>
          <div className="h-1 w-12 bg-[var(--color-pink)] rounded-full" />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredList.map((product) => (
            <article
              key={product.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 hover:border-[var(--color-pink)]/40"
            >
              {/* Image Area */}
              <div className="relative w-full overflow-hidden aspect-video">
                <img
                  src={product.imageURL}
                  alt={product.name}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content Area */}
              <div className="flex flex-col flex-1 p-5">
                <h3 className="text-xl font-bold text-[var(--color-text)] mb-4 line-clamp-1">
                  {product.name}
                </h3>

                {/* Larger, High-Visibility Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[var(--color-pink)]/20 px-4 py-1.5 text-xs font-semibold text-[var(--color-text)] ring-1 ring-[var(--color-pink)]/40 capitalize tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto">
                  <Link
                    to={`/products/${product.id}`}
                    className="inline-flex w-full items-center justify-center rounded-xl bg-[var(--color-pink)] px-5 py-3 text-sm font-bold text-white shadow-[0_4px_14px_0_rgba(214,77,133,0.39)] transition-all hover:brightness-110 active:scale-95"
                  >
                    View Product 🧨
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
