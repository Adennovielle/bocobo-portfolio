export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div
      className={`
        fixed inset-0
        z-40
        bg-[rgba(10,10,10,0.8)]
        backdrop-blur-lg
        flex flex-col
        items-center
        justify-center
        transition-all
        duration-300
        ease-in-out

        ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }
      `}
    >
      {/* Close Button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="
          absolute
          top-6
          right-6
          text-gray-300
          text-4xl
          font-light
          cursor-pointer
          transition-all
          duration-300
          hover:text-cyan-400
          hover:rotate-90
          hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.7)]
          focus:outline-none
        "
        aria-label="Close Menu"
      >
        &times;
      </button>

      {/* Mobile Navigation */}
      <div className="flex flex-col items-center gap-7">
        {menuItems.map((item, index) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            style={{
              transitionDelay: menuOpen ? `${index * 80}ms` : "0ms",
            }}
            className={`
              relative
              text-3xl
              font-semibold
              tracking-wide
              text-gray-300

              transition-all
              duration-300

              hover:text-white

              after:absolute
              after:left-1/2
              after:-bottom-2
              after:h-[2px]
              after:w-0
              after:-translate-x-1/2

              after:bg-gradient-to-r
              after:from-blue-500
              after:to-cyan-400

              after:transition-all
              after:duration-300

              hover:after:w-full

              hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]

              ${
                menuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }
            `}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};
