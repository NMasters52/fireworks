import { Link } from "react-router-dom";

export const ContactCTA = () => {
  return (
    <section className="relative mx-4 mb-20 overflow-hidden rounded-2xl sm:mx-6 lg:mx-8">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[var(--color-pink)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_white_0%,_transparent_50%)] opacity-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_black_0%,_transparent_50%)] opacity-20" />

      {/* Content */}
      <div className="relative px-6 py-16 sm:py-20 sm:px-10">
        <div className="max-w-screen-md mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[var(--color-background)]">
            Ready to impress your neighbors? 😏
          </h2>
          <p className="text-lg sm:text-xl mb-10 text-[var(--color-background)]/75 max-w-lg mx-auto leading-relaxed">
            Whether you're planning a grand show or just want the best fireworks
            in town, we're here to make it happen.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-semibold bg-[var(--color-background)] text-[var(--color-pink)] shadow-[0_10px_25px_rgba(0,0,0,0.3)] transition hover:brightness-110 active:brightness-95"
            >
              View Products 🚀
            </Link>

            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-semibold bg-transparent text-[var(--color-background)] ring-2 ring-[var(--color-background)]/50 transition hover:bg-[var(--color-background)]/10 hover:ring-[var(--color-background)] active:brightness-95"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
