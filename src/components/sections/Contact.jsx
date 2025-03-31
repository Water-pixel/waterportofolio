import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { Element } from "react-scroll";
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
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong"));
  };

  return (
    <Element
      id="contact"
      name="contact"
      className="section min-h-screen flex items-center justify-center px-4"
    >
      <RevealOnScroll>
        <div className="w-full max-w-xl">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-200 to-green-800 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>

          <div className="flex justify-center gap-6 items-center mb-4 flex-wrap">
            <a
              href="https://www.linkedin.com/in/filipraducalin/"
              target="_blank"
              className="flex items-center gap-2 hover:scale-105 transition"
            >
              <span className="text-white font-medium text-xl">LinkedIn</span>
              <img
                src={linkedInImg}
                alt="LinkedIn Profile"
                className="w-7 h-7 filter invert-[80%] brightness-150 hover:shadow-[0_0_15px_rgba(59,246,130,0.4)]"
              />
            </a>
            <a
              href="https://github.com/Water-pixel"
              target="_blank"
              className="flex items-center gap-2 hover:scale-105 transition"
            >
              <span className="text-white font-medium text-xl">GitHub</span>
              <img
                src={gitHubImg}
                alt="GitHub Profile"
                className="w-7 h-7 filter invert-[80%] brightness-150 hover:shadow-[0_0_15px_rgba(59,246,130,0.4)]"
              />
            </a>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              placeholder="Your Name"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-green-500 focus:bg-green-500/5"
            />

            <input
              type="email"
              name="email"
              required
              value={formData.email}
              placeholder="Example@gmail.com"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-green-500 focus:bg-green-500/5"
            />

            <textarea
              name="message"
              rows={4}
              required
              value={formData.message}
              placeholder="Your Message..."
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-green-500 focus:bg-green-500/5"
            />

            <button
              type="submit"
              className="w-full bg-green-700 text-white py-3 px-6 rounded hover:bg-green-500 transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,246,130,0.4)]"
            >
              🔥 Hit Me Up
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </Element>
  );
};
