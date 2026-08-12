import { RevealOnScroll } from "../RevealOnScroll";
import MyProfile from "../../assets/my-profile.jpg";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
            {/* LEFT SIDE - TEXT */}
            <div className="text-center md:text-left z-10 max-w-2xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
                Hi, I'm Adolf Vincent
              </h1>

              <p className="text-gray-400 text-lg mb-8 max-w-lg md:max-w-xl mx-auto md:mx-0 leading-relaxed">
                I’m an aspiring full-stack developer with hands-on experience in
                React.js, Node.js, Express.js, MySQL, and Sequelize. I enjoy
                building practical web applications, developing RESTful APIs,
                and creating user-friendly interfaces while continuously growing
                my skills in software development.
              </p>

              {/* Buttons */}
              <div className="flex justify-center md:justify-start gap-4">
                <a
                  href="#projects"
                  className="
                    bg-blue-500
                    text-white
                    py-3 px-6
                    rounded
                    font-medium
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]
                  "
                >
                  View Projects
                </a>

                <a
                  href="#contact"
                  className="
                    border border-blue-500/50
                    text-blue-500
                    py-3 px-6
                    rounded
                    font-medium
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]
                    hover:bg-blue-500/10
                    hover:text-cyan-400
                  "
                >
                  Contact Me
                </a>
              </div>
            </div>

            {/* RIGHT SIDE - PROFILE */}
            <div className="flex justify-center md:justify-end z-10">
              <div
                className="
                  relative
                  w-56 h-56
                  md:w-72 md:h-72
                  lg:w-115 lg:h-115
                  rounded-full
                  p-1
                  bg-gradient-to-r from-blue-500 to-cyan-400
                  shadow-[0_0_50px_rgba(59,130,246,0.35)]
                "
              >
                <img
                  src={MyProfile}
                  alt="Adolf Vincent Bocobo"
                  className="
                    w-full
                    h-full
                    rounded-full
                    object-fill
                    border-4
                    border-[#0a0a0a]
                    transition-transform
                    duration-500
                    hover:scale-105
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
