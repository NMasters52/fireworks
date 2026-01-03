import { useParams, Link } from "react-router-dom";
import { fakeProducts } from "../data/fakeData.js";

const FALLBACK_IMAGE =
  "https://res.cloudinary.com/nmasters-dev/image/upload/v1766254359/IN4OjmY4wMHBFxIcbuvRLbS2U1RKIHTf73C50anrhcA4gFo9_ixpdsl.png";

const getEmbedUrl = (id) => (id ? `https://www.youtube.com/embed/${id}` : null);

const ProductDetails = () => {
  const { id } = useParams();
  const product = fakeProducts.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="max-w-3xl px-4 py-20 mx-auto text-center">
        <h1 className="text-2xl font-bold text-[var(--color-text)]">
          Product not found
        </h1>
        <Link
          to="/products"
          className="mt-6 inline-block text-lg text-[var(--color-pink)] hover:underline"
        >
          ← Back to Products
        </Link>
      </div>
    );
  }

  const embedUrl = getEmbedUrl(product.youtubeUrl);
  const imageSrc = product.imageURL || FALLBACK_IMAGE;

  return (
    <section className="max-w-4xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
      {/* Back link */}
      <Link
        to="/products"
        className="inline-flex items-center gap-2 text-lg font-medium text-[var(--color-text)] hover:text-[var(--color-pink)] transition mb-10"
      >
        <span className="text-2xl">←</span>
        Back to Products
      </Link>

      {/* Product name */}
      <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)] mb-10">
        {product.name}
      </h1>

      {/* YouTube video (featured) */}
      {embedUrl && (
        <div className="relative w-full mb-12 overflow-hidden aspect-video rounded-2xl">
          <iframe
            src={embedUrl}
            title={product.name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      )}

      {/* CTA Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 mb-12 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-[var(--color-pink)]/10 to-transparent border border-white/10">
        <p className="text-xl md:text-2xl font-medium text-[var(--color-text)] text-center md:text-left">
          Interested in this product?
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-base font-semibold bg-[var(--color-pink)] text-[var(--color-text)] shadow-[0_10px_25px_rgba(214,77,133,0.3)] transition hover:brightness-110 active:brightness-95"
          >
            Contact Us
          </Link>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-base font-semibold bg-white/10 text-[var(--color-text)] ring-1 ring-white/20 transition hover:bg-white/15"
          >
            View More Products
          </Link>
        </div>
      </div>

      {/* Image + Description card */}
      <div className="p-6 mb-12 border rounded-2xl border-white/10 bg-black/20 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:gap-8">
          <div className="flex-shrink-0 w-full sm:w-2/5">
            <img
              src={imageSrc}
              alt={product.name}
              onError={(e) => {
                if (e.currentTarget.src !== FALLBACK_IMAGE) {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = FALLBACK_IMAGE;
                }
              }}
              className="w-full rounded-xl object-cover aspect-[4/5] shadow-md"
            />
          </div>

          <div className="flex flex-col justify-center flex-1">
            <h2 className="text-sm uppercase tracking-wider text-[var(--color-pink)] font-semibold mb-3">
              About this product
            </h2>
            <p className="text-lg text-[var(--color-text)]/85 leading-relaxed">
              {product.description}
            </p>
          </div>
        </div>
      </div>

      {/* Tags section */}
      <div className="mb-12">
        <h2 className="text-sm uppercase tracking-wider text-[var(--color-pink)] font-semibold mb-4">
          Categories
        </h2>
        <div className="flex flex-wrap gap-3">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[var(--color-pink)]/15 px-5 py-2 text-base font-medium text-[var(--color-text)] ring-1 ring-[var(--color-pink)]/30 capitalize hover:bg-pink/70 cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
