import { Link } from "react-router-dom";
import { products } from "../data/products";

const FALLBACK_IMAGE_URL =
  "https://res.cloudinary.com/nmasters-dev/image/upload/v1780562410/FullLogo_kmxfpb.jpg";

const FeaturedProducts = () => {
  const featuredList = products.filter((p) => p.featured === true);

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
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-white/5">
                <img
                  src={product.imageURL}
                  alt={product.name}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    const img = e.currentTarget;
                    if (img.src === FALLBACK_IMAGE_URL) return;
                    img.onerror = null;
                    img.src = FALLBACK_IMAGE_URL;
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-[var(--color-background)] to-transparent" />
              </div>

              {/* Content Area */}
              <div className="relative flex flex-1 flex-col p-3">
                <h3 className="line-clamp-2 text-lg font-semibold text-[var(--color-text)]">
                  {product.name}
                </h3>

                <div className="mt-2 flex flex-wrap gap-1.5">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="mt-1 rounded-full bg-white/5 px-2 py-0.5 text-md text-[var(--color-text)]/75 ring-1 ring-white/10 capitalize"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-4">
                  <Link
                    to={`/products/${product.id}`}
                    className={[
                      "inline-flex w-full items-center justify-center gap-2",
                      "rounded-xl px-3 py-2 text-sm font-semibold",
                      "bg-[var(--color-pink)] text-[var(--color-text)]",
                      "shadow-[0_10px_25px_rgba(214,77,133,0.25)]",
                      "transition hover:brightness-110 active:brightness-95",
                    ].join(" ")}
                  >
                    View Details
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
