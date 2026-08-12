import { useEffect } from "react";
import MyLogo from "../assets/my-logo.png";
export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a
            href="#home"
            className="font-mono text-xl font-bold text-white flex items-center "
          >
            <img src={MyLogo} alt="Logo" width="32" height="32" />
            adolf<span className="text-blue-500">.vincent</span>{" "}
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="
      relative text-gray-300
      transition-colors duration-300
      hover:text-white
      after:absolute after:left-1/2 after:-bottom-1
      after:h-[2px] after:w-0
      after:-translate-x-1/2
      after:bg-gradient-to-r after:from-blue-500 after:to-cyan-400
      after:transition-all after:duration-300
      hover:after:w-full
    "
            >
              Home
            </a>

            <a
              href="#about"
              className="
      relative text-gray-300
      transition-colors duration-300
      hover:text-white
      after:absolute after:left-1/2 after:-bottom-1
      after:h-[2px] after:w-0
      after:-translate-x-1/2
      after:bg-gradient-to-r after:from-blue-500 after:to-cyan-400
      after:transition-all after:duration-300
      hover:after:w-full
    "
            >
              About
            </a>

            <a
              href="#projects"
              className="
      relative text-gray-300
      transition-colors duration-300
      hover:text-white
      after:absolute after:left-1/2 after:-bottom-1
      after:h-[2px] after:w-0
      after:-translate-x-1/2
      after:bg-gradient-to-r after:from-blue-500 after:to-cyan-400
      after:transition-all after:duration-300
      hover:after:w-full
    "
            >
              Projects
            </a>

            <a
              href="#contact"
              className="
      relative text-gray-300
      transition-colors duration-300
      hover:text-white
      after:absolute after:left-1/2 after:-bottom-1
      after:h-[2px] after:w-0
      after:-translate-x-1/2
      after:bg-gradient-to-r after:from-blue-500 after:to-cyan-400
      after:transition-all after:duration-300
      hover:after:w-full
    "
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
