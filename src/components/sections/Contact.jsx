import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "@emailjs/browser";
import { FiMail, FiMapPin, FiGithub, FiLinkedin } from "react-icons/fi";

import { FaFacebookF, FaInstagram, FaViber } from "react-icons/fa";
export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSending(true);
    setStatus({ type: "", message: "" });

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY,
      )
      .then(() => {
        setStatus({
          type: "success",
          message: "Your message has been sent successfully!",
        });

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);

        setStatus({
          type: "error",
          message: "Something went wrong. Please try again.",
        });
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section
      id="contact"
      className="
        min-h-screen
        flex
        items-center
        justify-center
        py-24
        relative
        overflow-hidden
      "
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4 w-full relative z-10">
          {/* ================= HEADER ================= */}
          <div className="text-center mb-14">
            <h2
              className="
                text-4xl
                md:text-5xl
                font-bold
                mt-2
                bg-gradient-to-r
                from-blue-500
                to-cyan-400
                bg-clip-text
                text-transparent
              "
            >
              Contact
            </h2>

            <p className="text-gray-500 mt-4 max-w-xl mx-auto leading-relaxed">
              Have a project, opportunity, or just want to say hello? Feel free
              to reach out.
            </p>
          </div>

          {/* ================= MAIN CONTENT ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* ================= LEFT - CONTACT INFO ================= */}
            <div
              className="
                group
                relative
                rounded-2xl
                border
                border-white/10
                bg-white/[0.025]
                backdrop-blur-sm
                p-8
                md:p-10
                overflow-hidden
                transition-all
                duration-500
                hover:border-cyan-400/20
                hover:shadow-[0_20px_50px_rgba(34,211,238,0.05)]
              "
            >
              {/* Top accent */}
              <div
                className="
                  absolute
                  top-0
                  left-0
                  w-full
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-cyan-400/50
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                "
              />

              <div className="relative z-10">
                {/* Status */}
                <div className="flex items-center gap-2 mb-8">
                  <span
                    className="
                      w-2
                      h-2
                      rounded-full
                      bg-cyan-400
                      shadow-[0_0_12px_rgba(34,211,238,0.9)]
                      animate-pulse
                    "
                  />

                  <span
                    className="
                      text-xs
                      font-mono
                      tracking-widest
                      text-cyan-400/70
                      uppercase
                    "
                  >
                    Open to opportunities
                  </span>
                </div>

                {/* Heading */}
                <h3 className="text-3xl font-bold text-white mb-4">
                  Let's connect.
                </h3>

                <p className="text-gray-400 leading-relaxed mb-10">
                  I'm always interested in discussing new projects,
                  opportunities, and ideas. Whether you have a question or
                  simply want to connect, feel free to send me a message.
                </p>

                {/* Contact Details */}
                <div className="space-y-5">
                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <div
                      className="
                        w-11
                        h-11
                        rounded-xl
                        bg-blue-500/10
                        border
                        border-blue-500/20
                        flex
                        items-center
                        justify-center
                        text-blue-400
                      "
                    >
                      <FiMail size={19} />
                    </div>

                    <div>
                      <p className="text-xs text-gray-500 mb-1">Email</p>

                      <p className="text-gray-300 text-sm">
                        Contact me through the form
                      </p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-4">
                    <div
                      className="
                        w-11
                        h-11
                        rounded-xl
                        bg-cyan-500/10
                        border
                        border-cyan-500/20
                        flex
                        items-center
                        justify-center
                        text-cyan-400
                      "
                    >
                      <FiMapPin size={19} />
                    </div>

                    <div>
                      <p className="text-xs text-gray-500 mb-1">Location</p>

                      <p className="text-gray-300 text-sm">Philippines</p>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="my-10 h-px bg-white/10" />

                {/* Socials */}
                <div>
                  <p
                    className="
      text-xs
      font-mono
      tracking-widest
      text-gray-500
      uppercase
      mb-4
    "
                  >
                    Connect with me
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {/* LinkedIn */}
                    <a
                      href="#"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="
        w-11
        h-11
        rounded-xl
        border
        border-white/10
        bg-white/[0.03]
        flex
        items-center
        justify-center
        text-gray-400
        transition-all
        duration-300
        hover:text-cyan-400
        hover:border-cyan-400/30
        hover:bg-cyan-400/5
        hover:-translate-y-1
      "
                    >
                      <FiLinkedin size={19} />
                    </a>

                    {/* Facebook */}
                    <a
                      href="https://web.facebook.com/vincelaguerta2017"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="
        w-11
        h-11
        rounded-xl
        border
        border-white/10
        bg-white/[0.03]
        flex
        items-center
        justify-center
        text-gray-400
        transition-all
        duration-300
        hover:text-cyan-400
        hover:border-cyan-400/30
        hover:bg-cyan-400/5
        hover:-translate-y-1
      "
                    >
                      <FaFacebookF size={18} />
                    </a>

                    {/* Instagram */}
                    <a
                      href="https://www.instagram.com/avbyakult/?hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="
        w-11
        h-11
        rounded-xl
        border
        border-white/10
        bg-white/[0.03]
        flex
        items-center
        justify-center
        text-gray-400
        transition-all
        duration-300
        hover:text-cyan-400
        hover:border-cyan-400/30
        hover:bg-cyan-400/5
        hover:-translate-y-1
      "
                    >
                      <FaInstagram size={19} />
                    </a>

                    {/* Viber */}
                    <a
                      href="viber://chat?number=09772788454"
                      aria-label="Viber"
                      className="
        w-11
        h-11
        rounded-xl
        border
        border-white/10
        bg-white/[0.03]
        flex
        items-center
        justify-center
        text-gray-400
        transition-all
        duration-300
        hover:text-cyan-400
        hover:border-cyan-400/30
        hover:bg-cyan-400/5
        hover:-translate-y-1
      "
                    >
                      <FaViber size={19} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= RIGHT - FORM ================= */}
            <div
              className="
                group
                relative
                rounded-2xl
                border
                border-white/10
                bg-white/[0.025]
                backdrop-blur-sm
                p-8
                md:p-10
                overflow-hidden
                transition-all
                duration-500
                hover:border-blue-500/20
                hover:shadow-[0_20px_50px_rgba(59,130,246,0.05)]
              "
            >
              {/* Top accent */}
              <div
                className="
                  absolute
                  top-0
                  left-0
                  w-full
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-blue-500/50
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                "
              />

              <div className="relative z-10">
                {/* Form heading */}
                <div className="mb-8">
                  <p className="text-cyan-400/60 text-xs font-mono tracking-widest uppercase mb-2">
                    Send a message
                  </p>

                  <h3 className="text-2xl font-bold text-white">
                    Get In Touch
                  </h3>
                </div>

                {/* Confirmation Message */}
                {status.message && (
                  <div
                    className={`
                      mb-6
                      p-4
                      rounded-xl
                      border
                      flex
                      items-center
                      gap-3
                      ${
                        status.type === "success"
                          ? "bg-green-500/10 border-green-500/30 text-green-400"
                          : "bg-red-500/10 border-red-500/30 text-red-400"
                      }
                    `}
                  >
                    <span
                      className="
                        w-7
                        h-7
                        rounded-full
                        bg-white/5
                        flex
                        items-center
                        justify-center
                        text-sm
                      "
                    >
                      {status.type === "success" ? "✓" : "!"}
                    </span>

                    <p className="text-sm">{status.message}</p>
                  </div>
                )}

                <form className="space-y-5" onSubmit={handleSubmit}>
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="
                        block
                        text-sm
                        text-gray-400
                        mb-2
                      "
                    >
                      Name
                    </label>

                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      placeholder="Your name"
                      className="
                        w-full
                        bg-white/[0.03]
                        border
                        border-white/10
                        rounded-xl
                        px-4
                        py-3
                        text-white
                        placeholder:text-gray-600
                        transition-all
                        duration-300
                        focus:outline-none
                        focus:border-cyan-400/50
                        focus:bg-cyan-400/[0.02]
                        focus:ring-1
                        focus:ring-cyan-400/20
                      "
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          name: e.target.value,
                        })
                      }
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="
                        block
                        text-sm
                        text-gray-400
                        mb-2
                      "
                    >
                      Email
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      placeholder="example@gmail.com"
                      className="
                        w-full
                        bg-white/[0.03]
                        border
                        border-white/10
                        rounded-xl
                        px-4
                        py-3
                        text-white
                        placeholder:text-gray-600
                        transition-all
                        duration-300
                        focus:outline-none
                        focus:border-cyan-400/50
                        focus:bg-cyan-400/[0.02]
                        focus:ring-1
                        focus:ring-cyan-400/20
                      "
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        })
                      }
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="
                        block
                        text-sm
                        text-gray-400
                        mb-2
                      "
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      placeholder="Tell me about your project..."
                      className="
                        w-full
                        bg-white/[0.03]
                        border
                        border-white/10
                        rounded-xl
                        px-4
                        py-3
                        text-white
                        placeholder:text-gray-600
                        resize-none
                        transition-all
                        duration-300
                        focus:outline-none
                        focus:border-cyan-400/50
                        focus:bg-cyan-400/[0.02]
                        focus:ring-1
                        focus:ring-cyan-400/20
                      "
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          message: e.target.value,
                        })
                      }
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSending}
                    className="
                      w-full
                      bg-blue-500
                      text-white
                      py-3.5
                      px-6
                      rounded-xl
                      font-medium
                      transition-all
                      duration-300
                      relative
                      overflow-hidden
                      hover:-translate-y-1
                      hover:bg-cyan-400
                      hover:text-black
                      hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]
                      disabled:opacity-50
                      disabled:cursor-not-allowed
                      disabled:hover:translate-y-0
                      disabled:hover:bg-blue-500
                      disabled:hover:text-white
                    "
                  >
                    {isSending ? "Sending..." : "Send Message →"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
