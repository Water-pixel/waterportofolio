import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="section min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4 mb-2">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-200 to-green-800 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-300/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Weather Project</h3>
              <p className="text-gray-200 mb-4">
                A little project that show you the current weather in 5 cities
                from Romania and the weather forecast.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "JavaScript", "API"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-200/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://schoolweather.netlify.app/"
                  className="text-green-400 hover:text-gray-200 transition-colors my-4 hover:translate-x-1"
                  target="_blank"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-green-200/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">
                IT School Page Presentation
              </h3>
              <p className="text-gray-200 mb-4">
                A presentation about the IT School in Romania. The presentation
                includes the course curriculum, the benefits of the IT industry.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-green-300/10 text-green-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-green-200/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://pixelaquaprimproject.netlify.app/"
                  className="text-green-400 hover:text-gray-200 transition-colors my-4 hover:translate-x-1"
                  target="_blank"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-green-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">
                Soho Music Hall - Website
              </h3>
              <p className="text-gray-200 mb-4">
                This website serves as the digital hub for event exploration,
                ticket purchasing, and community engagement.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-green-500/10 text-green-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-green-200/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://sensational-kringle-ecc6a8.netlify.app/"
                  className="text-green-400 hover:text-gray-200 transition-colors my-4 hover:translate-x-1"
                  target="_blank"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-green-200/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">The Digital Me</h3>
              <p className="text-gray-200 mb-4">
                This is the website you're on right now! I built it to share my
                work, talk about who I am, and keep everything in one place.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "React", "TailwindCSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-green-300/10 text-green-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-green-200/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://water-pixel.github.io/waterportofolio/"
                  className="text-green-400 hover:text-gray-200 transition-colors my-4 hover:translate-x-1"
                  target="_blank"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
