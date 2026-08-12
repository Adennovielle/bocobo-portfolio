import { RevealOnScroll } from "../RevealOnScroll";
import InterRegistar from "../../assets/images/projects/inter-registar.png";
import QrOrdering from "../../assets/images/projects/qr-ordering.png";
import Imessage from "../../assets/images/projects/imessage.png";
import SchoolLandingPage from "../../assets/images/projects/school-landing-page.png";

export const Projects = () => {
  const projects = [
    {
      title: "Qualified Buyer Inter-Registrar Registry System",
      description:
        "A web-based registry system developed during my internship at the Securities and Exchange Commission for managing qualified buyers, registrars, submissions, and audit records.",
      technologies: ["React.js", "Node.js", "Express.js", "MySQL", "Sequelize"],
      image: InterRegistar,
      link: "#",
    },

    {
      title: "QR Code-Based Ordering System",
      description:
        "A mobile-based ordering system that allows customers to scan a QR code, browse products, place orders, and select available payment and order options.",
      technologies: ["Java", "JSP", "Servlets", "MySQL", "HTML", "CSS"],
      image: QrOrdering,
      link: "#",
    },

    {
      title: "iMessage / Helpdesk Web Application",
      description:
        "Enhanced a helpdesk web application during my SEC internship by improving its mobile responsiveness and optimizing the interface for different screen sizes.",
      technologies: ["php", "JavaScript", "HTML", "CSS"],
      image: Imessage,
      link: "#",
    },

    {
      title: "School Landing Page",
      description:
        "A school landing page designed to showcase school information, programs, services, and other important details through a clean and organized web interface.",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js"],
      image: SchoolLandingPage,
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="
                  overflow-hidden
                  rounded-xl
                  border border-white/10
                  hover:-translate-y-1
                  hover:border-blue-500/30
                  hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
                  transition-all
                "
              >
                {/* Project Image */}
                <div className="relative w-full h-52 overflow-hidden bg-black/20 group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
      w-full
      h-full
      object-cover
      transition-all
      duration-500
      group-hover:object-contain
    "
                  />
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>

                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="
                          bg-blue-500/10
                          text-blue-500
                          py-1 px-3
                          rounded-full
                          text-sm
                          transition
                          hover:bg-blue-500/20
                          hover:-translate-y-0.5
                          hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
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
    </section>
  );
};
