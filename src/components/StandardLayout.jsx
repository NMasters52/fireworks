import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import ScrollToTop from "./ScrollToTop";

export const StandardLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-text">
      <Navbar />
      <ScrollToTop />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
