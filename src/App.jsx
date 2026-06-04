import { ContactCTA } from "./components/ContactCTA";
import FeaturedProducts from "./components/FeaturedProducts";
import { FireworksOverlay } from "./components/FireworksOverlay";
import { Hero } from "./components/Hero";
import { WhyChooseUs } from "./components/WhyChooseUs";

const App = () => {
  return (
    <div className="w-auto bg-background">
      <FireworksOverlay />
      <Hero />
      <div className="flex flex-col justify-center max-w-3xl p-4 m-auto">
        <FeaturedProducts />
        <WhyChooseUs />
        <ContactCTA />
      </div>
    </div>
  );
};

export default App;
