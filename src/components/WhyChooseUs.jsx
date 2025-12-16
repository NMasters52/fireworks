import { FaDollarSign, FaFire, FaBalanceScale } from "react-icons/fa";

export const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaDollarSign className="text-4xl text-pink mb-4" />,
      title: "Affordable Prices",
      text: "We make fireworks accessible to everyone with competitive prices that never sacrifice quality.",
    },
    {
      icon: <FaFire className="text-4xl text-pink mb-4" />,
      title: "Best Products",
      text: "We source only top-tier fireworks, ensuring each launch delivers maximum color and excitement.",
    },
    {
      icon: <FaBalanceScale className="text-4xl text-pink mb-4" />,
      title: "Better Than The Rest",
      text: "Our value beats the competition — more boom, better service, and unmatched expertise.",
    },
  ];

  return (
    <section className="bg-background text-text py-16 mb-10">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-8 text-center">
        <h2 className="text-3xl font-bold mb-12 text-pink">
          Why Choose RascoFX?
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={i}
              className="flex flex-col items-center rounded-lg border border-pink/30 p-6 transition-all duration-300
                         hover:bg-pink/10 hover:border-pink hover:shadow-[0_0_20px_rgba(214,77,133,0.5)]"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-tagline max-w-sm">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
