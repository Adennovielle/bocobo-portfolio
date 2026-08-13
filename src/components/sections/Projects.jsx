import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

import InterRegistar from "../../assets/images/projects/inter-registar.png";
import QrOrdering from "../../assets/images/projects/qr-ordering.png";
import Imessage from "../../assets/images/projects/imessage.png";
import SchoolLandingPage from "../../assets/images/projects/school-landing-page.png";

export const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      title: "Qualified Buyer Inter-Registrar Registry System",
      description:
        "A web-based registry system developed during my internship at the Securities and Exchange Commission for managing qualified buyers, registrars, submissions, and audit records.",
      technologies: ["React.js", "Node.js", "Express.js", "MySQL", "Sequelize"],
      image: InterRegistar,
    },

    {
      title: "QR Code-Based Ordering System",
      description:
        "A mobile-based ordering system that allows customers to scan a QR code, browse products, place orders, and select available payment and order options.",
      technologies: ["Java", "JSP", "Servlets", "MySQL", "HTML", "CSS"],
      image: QrOrdering,
    },

    {
      title: "iMessage / Helpdesk Web Application",
      description:
        "Enhanced a helpdesk web application during my SEC internship by improving its mobile responsiveness and optimizing the interface for different screen sizes.",
      technologies: ["PHP", "JavaScript", "HTML", "CSS"],
      image: Imessage,
    },

    {
      title: "School Landing Page",
      description:
        "A school landing page designed to showcase school information, programs, services, and other important details through a clean and organized web interface.",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js"],
      image: SchoolLandingPage,
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4 w-full">
          {/* ================= HEADER ================= */}
          <div className="text-center mb-12">
            <h2
              className="
                text-3xl
                md:text-4xl
                font-bold
                mt-2
                bg-gradient-to-r
                from-blue-500
                to-cyan-400
                bg-clip-text
                text-transparent
              "
            >
              Featured Projects
            </h2>

            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              A collection of projects I've built through internships,
              academics, and personal development.
            </p>
          </div>

          {/* ================= PROJECT GRID ================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {projects.map((project) => (
              <div
                key={project.title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.025]
                  backdrop-blur-sm
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-cyan-400/30
                  hover:shadow-[0_20px_50px_rgba(34,211,238,0.08)]
                  
                "
              >
                {/* Top accent line */}
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
                    z-20
                  "
                />

                {/* ================= IMAGE ================= */}
                <div
                  className="
                    relative
                    w-full
                    h-56
                    overflow-hidden
                    bg-black/30
                    cursor-pointer
                  "
                  onClick={() => setSelectedImage(project.image)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                    "
                  />

                  {/* Bottom image gradient */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#050b14]/90
                      via-transparent
                      to-transparent
                      pointer-events-none
                    "
                  />

                  {/* View Preview */}
                  <div
                    className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                      z-10
                    "
                  >
                    <button
                      type="button"
                      className="
                        opacity-0
                        translate-y-3
                        group-hover:opacity-100
                        group-hover:translate-y-0
                        transition-all
                        duration-300
                        px-5
                        py-2.5
                        rounded-lg
                        bg-black/50
                        backdrop-blur-md
                        border
                        border-white/20
                        text-white
                        text-sm
                        font-medium
                        hover:bg-cyan-400
                        hover:text-black
                        hover:border-cyan-400
                      "
                    >
                      View Preview →
                    </button>
                  </div>
                </div>

                {/* ================= PROJECT DETAILS ================= */}
                <div className="p-6">
                  {/* Title */}
                  <h3
                    className="
                      text-xl
                      font-bold
                      text-white
                      mb-3
                      leading-snug
                      transition-colors
                      duration-300
                      group-hover:text-cyan-400
                    "
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      text-gray-400
                      text-sm
                      mb-5
                      leading-relaxed
                    "
                  >
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="
                          px-3
                          py-1
                          rounded-full
                          text-xs
                          font-medium
                          bg-white/[0.04]
                          text-gray-300
                          border
                          border-white/10
                          transition-all
                          duration-300
                          hover:border-cyan-400/30
                          hover:text-cyan-400
                          hover:bg-cyan-400/5
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>

      {/* ================= FULL SIZE IMAGE MODAL ================= */}
      {selectedImage && (
        <div
          className="
            fixed
            inset-0
            z-[999]
            bg-black/90
            backdrop-blur-sm
            flex
            items-center
            justify-center
            p-4
            cursor-zoom-out
          "
          onClick={() => setSelectedImage(null)}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="
              absolute
              top-5
              right-5
              md:top-8
              md:right-8
              w-11
              h-11
              rounded-full
              bg-white/10
              hover:bg-white/20
              border
              border-white/10
              text-white
              text-2xl
              flex
              items-center
              justify-center
              transition-all
              duration-300
              hover:rotate-90
              z-20
            "
            aria-label="Close image"
          >
            ×
          </button>

          {/* Full size image */}
          <img
            src={selectedImage}
            alt="Project preview"
            className="
              max-w-full
              max-h-[90vh]
              object-cover
              rounded-xl
              shadow-[0_0_80px_rgba(0,0,0,0.8)]
              animate-[fadeIn_0.25s_ease-out]
              cursor-default
            "
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};
