export const Footer = () => {
  return (
    <footer className="bg-background text-text border-t border-pink/20">
      <div className="mx-auto max-w-screen-xl px-4 py-6 flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:justify-between sm:gap-0">
        {/* Left: business info */}
        <p className="text-sm text-tagline">
          © {new Date().getFullYear()} RascoFX. All rights reserved.
        </p>

        {/* Right: credit */}
        <p className="text-sm text-tagline">
          Website created by{" "}
          <span className="text-pink font-semibold">DevMasters</span>
        </p>
      </div>
    </footer>
  );
};
