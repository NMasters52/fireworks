import { Link } from "react-router-dom";

export const ContactCTA = () => {
  return (
    <section className="bg-pink text-background py-16 rounded-lg mb-20">
      <div className="mx-auto max-w-screen-md px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to impress your neighbors? 😏
        </h2>
        <p className="text-lg mb-8 text-background/80">
          Whether you're planning a grand show or just want the best fireworks
          in town, we're here to make it happen. Reach out today or explore our
          collection.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            to="/products"
            className="bg-background hover:bg-background/80 text-pink font-semibold px-6 py-3 rounded-md
                       border border-background transition-all duration-300"
          >
            View Products
          </Link>

          <Link
            to="/contact"
            className="bg-transparent hover:bg-background/15 text-background font-semibold px-6 py-3 rounded-md
                       border border-background transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};
