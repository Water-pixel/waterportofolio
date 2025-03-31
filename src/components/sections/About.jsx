import { RevealOnScroll } from "../RevealOnScroll";
export const About = () => {
  const frontendSkills = ["HTML", "CSS", "TailwindCSS", "React", "Bootstrap"];
  const backendSkills = ["Node.js", "Express.js", "MongoDB", "FastAPI"];
  return (
    <section
      id="about"
      className="section flex items-center justify-center py-30"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4 mb-">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-200 to-green-800 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 hover:border-green-300/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <p className="text-gray-200 mb-6 text-center">
              I’m a passionate developer at the start of my journey, constantly
              exploring and learning something new every day to grow my skills
              and expand my knowledge.
            </p>

            <div className="grid grid-cols-1  md:grid-cols-2 gap-6 ">
              <div className="rounded-xl p-6 hover:-translate-y-1 hover:border-green-300/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                <h3 className="text-xl font-bold mb-4 ">Frontend</h3>
                <div className="flex flex-wrap gap-2 ">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-green-500/10 text-green-300 py-1 px-3 rounded-full text-sm hover:bg-green-200/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 hover:border-green-300/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-green-500/10 text-green-300 py-1 px-3 rounded-full text-sm hover:bg-green-200/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 text-center">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-green-300/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-200 space-y-2">
                <li>
                  <strong> B.S. in Computer Science</strong> - University "Titu
                  Maiorescu" (2022-2025)
                </li>
                <li>IT School: Data Structures, Web Development. (2025)</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-green-300/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-4"> 🏫 Work Experience</h3>
              <div className="space-y-4 text-gray-200">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Software Engineer at ABC Corp (2025-Present)
                  </h4>
                  <p>
                    Developed and maintained microservices for cloud-based
                    applications.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Internship at ABC Corp (2024)
                  </h4>
                  <p>
                    Assisted in building front-end compoents and integration
                    REST APIs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
