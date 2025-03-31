import { RevealOnScroll } from "../RevealOnScroll";
import downloadImg from "../../assets/download.png";
export const Home = () => {
  return (
    <section
      id="home"
      className="section min-h-screen flex items-center justify-center relative pt-24 px-4"
    >
      <RevealOnScroll>
        <div className="text-center z-10">
          <div className="flex justify-center">
            <img
              className="w-60 h-60 rounded-full object-cover mb-10 overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(59, 130, 246, 0.4)]"
              src={downloadImg}
              alt="Filip Radu"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-200 to-green-800 bg-clip-text text-transparent leading-right">
            Hi, I'm Filip Radu
          </h1>

          <p className="text-gray-200 text-lg mb-8 max-w-lg mx-auto">
            I'm a front-end developer who loves crafting clean aplications. My
            goal is to build solutions that offer both performance and colorfull
            user experience.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-green-700 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4) ]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-green-500/50 text-green-500 py-3 px-6 rounded font-medium transition-all duration-200 overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2) hover:bg-blue-500/10]"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
