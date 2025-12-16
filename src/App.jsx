import { Hero } from "./components/Hero";

const App = () => {
  return (
    <div className="w-auto bg-background">
      <Hero />
      <div className="max-w-3xl m-auto flex justify-center p-4 "></div>
    </div>
  );
};

export default App;
