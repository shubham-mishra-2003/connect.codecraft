import { features } from "../constants";

const Features = () => {
  return (
    <section className="backdrop-blur-2xl p-10">
      <h1 className="text-4xl font-extrabold text-blue-300">Features</h1>
      <div className="mt-5 flex flex-wrap gap-5">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col gap-3 bg-slate-700 max-w-80 border p-3 rounded-2xl m-4">
            <h2 className="md:text-4xl text-2xl font-extrabold text-center text-gray-300">{feature.name}</h2>
            <p className="text-lg md:text-2xl text-center text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
