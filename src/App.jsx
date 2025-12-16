import { ContactCTA } from "./components/ContactCTA";
import FeaturedProducts from "./components/FeaturedProducts";
import { Hero } from "./components/Hero";
import { WhyChooseUs } from "./components/WhyChooseUs";

const App = () => {
  return (
    <div className="w-auto bg-background">
      <Hero />
      <div className="max-w-3xl m-auto flex flex-col justify-center p-4">
        <FeaturedProducts />
        <WhyChooseUs />
        <ContactCTA />
      </div>
    </div>
  );
};

export default App;
