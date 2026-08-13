import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["HTML", "CSS", "JavaScript", "React.js"];

  const backendSkills = [
    "Node.js",
    "Express.js",
    "MySQL",
    "MongoDB",
    "Sequelize",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2
              className="
      text-4xl
      md:text-5xl
      font-bold
      mt-2
      leading-tight
      bg-gradient-to-r
      from-blue-500
      to-cyan-400
      bg-clip-text
      text-transparent
    "
            >
              About Me
            </h2>

            <p
              className="
      text-gray-500
      mt-4
      max-w-2xl
      mx-auto
      leading-relaxed
    "
            >
              A passionate IT graduate focused on building practical,
              user-friendly, and scalable web applications.
            </p>
          </div>

          {/* Introduction */}
          <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6 leading-relaxed">
              I’m an entry-level full-stack developer with a background in
              Information Technology and hands-on experience developing web
              applications using React.js, Node.js, Express.js, and MySQL.
              During my internship at the Securities and Exchange Commission, I
              worked on a web-based registry system and contributed to
              developing features, RESTful APIs, CRUD operations, form
              validation, file uploads, and dynamic data tables.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Frontend */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>

                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend & Database</h3>

                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education & Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Education */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>

              <div className="text-gray-300 space-y-3">
                <div>
                  <h4 className="font-semibold text-white">
                    Bachelor of Science in Information Technology
                  </h4>

                  <p>Mary The Queen College of Quezon City</p>

                  <p>2022 – 2026</p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Experience</h3>

              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold text-white">
                    Information Technology Intern
                  </h4>

                  <p>Securities and Exchange Commission (SEC)</p>

                  <p className="text-sm mb-2">March 2026 – July 2026</p>

                  <p className="leading-relaxed">
                    Developed features for the Qualified Buyer Inter-Registrar
                    Registry System using React.js, Node.js, Express.js, MySQL,
                    and Sequelize. Implemented RESTful APIs, CRUD operations,
                    form validation, file uploads, and dynamic data tables.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Previous Experience */}
          {/* <div className="mt-6 p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Previous Work Experience</h3>

            <div className="space-y-4 text-gray-300">
              <div>
                <h4 className="font-semibold text-white">
                  Sales Assistant — Electrical Devices
                </h4>

                <p>DIY Hardware | 2018 – 2022</p>

                <p className="mt-1">
                  Assisted customers with product information, maintained
                  inventory, and organized product displays.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white">
                  Sales Assistant — Home Decor
                </h4>

                <p>Ace Hardware | 2017 – 2018</p>

                <p className="mt-1">
                  Managed product displays, monitored inventory, and assisted
                  customers with their inquiries.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </RevealOnScroll>
    </section>
  );
};
