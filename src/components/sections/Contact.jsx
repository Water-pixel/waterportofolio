import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import linkedInImg from "../../../public/linkedin.svg";
import gitHubImg from "../../../public/github-brands.svg";
export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch(() => alert("Oops! Something went wrong"));
  };
  return (
    <section id="contact" className=" flex items-center justify-center py-30">
      <RevealOnScroll>
        <div className="w-90 mb-10">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-200 to-green-800 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-green-500 focus:bg-green-500/5"
                placeholder="Your Name"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="relative">
              <input
                type="text"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-green-500 focus:bg-blue-green/5"
                placeholder="Example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-green-500 focus:bg-green-500/5"
                placeholder="Your Message.."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-700 text-white py-3 px-6 rounded hover:bg-green-500 transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,246,130,0.4)]"
            >
              🔥 Hit Me Up
            </button>
            <a
              href="https://www.linkedin.com/in/filipraducalin/"
              className="flex justify-center"
              target="_blank"
            >
              <img
                src={linkedInImg}
                alt="LinkedIn Profile"
                className="w-14 sm:w-12 md:w-10 lg:2-6 mx-auto filter invert-[80%] brightness-150 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,246,130,0.4)]"
              />
            </a>
            <a
              href="https://github.com/Water-pixel"
              className="flex justify-center"
              target="_blank"
            >
              <img
                src={gitHubImg}
                alt="GitHub Profile"
                className="w-12 sm:w-10 md:w-8 lg:2-6 mx-auto filter invert-[80%] brightness-150 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,246,130,0.4)]"
              />
            </a>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
