import { RevealOnScroll } from "../RevealOnScroll";
import MyProfile from "../../assets/my-profile.png";

export const Home = () => {
  return (
    <section
      id="home"
      className="
        min-h-screen
        flex
        items-center
        justify-center
        relative
        overflow-hidden
      "
    >
      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none ">
        <div
          className="
            absolute
            top-1/4
            right-0
            w-72
            h-72
            bg-blue-500/10
            rounded-full
            blur-3xl
          "
        />

        <div
          className="
            absolute
            bottom-0
            left-0
            w-72
            h-72
            bg-cyan-500/5
            rounded-full
            blur-3xl
          "
        />
      </div>

      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div
            className="
              min-h-[calc(100vh-64px)]
              flex
              flex-col-reverse
              md:flex-row
              items-center
              justify-between
              gap-12
              py-20
            "
          >
            {/* ================= LEFT ================= */}
            <div
              className="
                text-center
                md:text-left
                z-10
                max-w-2xl
                flex-1
              "
            >
              {/* Small intro */}
              <div
                className="
                  flex
                  items-center
                  justify-center
                  md:justify-start
                  gap-3
                  mb-4
                  text-blue-400
                  font-semibold
                  tracking-widest
                  text-sm
                "
              ></div>

              {/* Name */}
              <h1
                className="
                  text-5xl
                  sm:text-6xl
                  md:text-6xl
                  lg:text-7xl
                  font-bold
                  mb-6
                  leading-tight
                "
              >
                <span className="text-white">Hi, I'm </span>

                <span
                  className="
                    bg-gradient-to-r
                    from-blue-500
                    to-cyan-400
                    bg-clip-text
                    text-transparent
                  "
                >
                  Adolf
                </span>

                <br />

                <span
                  className="
                    bg-gradient-to-r
                    from-blue-500
                    to-cyan-400
                    bg-clip-text
                    text-transparent
                  "
                >
                  Vincent
                </span>
              </h1>

              {/* Description */}
              <p
                className="
                  text-gray-400
                  text-lg
                  mb-8
                  max-w-xl
                  mx-auto
                  md:mx-0
                  leading-relaxed
                "
              >
                I’m an aspiring full-stack developer with hands-on experience in
                React.js, Node.js, Express.js, MySQL, and Sequelize. I enjoy
                building practical web applications, developing RESTful APIs,
                and creating user-friendly interfaces while continuously growing
                my skills in software development.
              </p>

              {/* Buttons */}
              <div
                className="
                  flex
                  flex-col
                  sm:flex-row
                  justify-center
                  md:justify-start
                  gap-4
                "
              >
                <a
                  href="#projects"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    bg-blue-500
                    text-white
                    py-3
                    px-7
                    rounded-lg
                    font-medium
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-cyan-400
                    hover:text-black
                    hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]
                  "
                >
                  View Projects →
                </a>

                <a
                  href="#contact"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    border
                    border-blue-500/50
                    text-blue-400
                    py-3
                    px-7
                    rounded-lg
                    font-medium
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-cyan-400
                    hover:bg-cyan-400/10
                    hover:text-cyan-400
                    hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]
                  "
                >
                  Contact Me
                </a>
              </div>
            </div>

            {/* ================= RIGHT - PROFILE ================= */}
            <div
              className="
    flex
    justify-center
    md:justify-end
    items-center
    flex-1
    z-10
  "
            >
              <div
                className="
      relative
      w-72
      h-[390px]
      sm:w-80
      sm:h-[430px]
      md:w-[390px]
      md:h-[500px]
      lg:w-[450px]
      lg:h-[540px]
      group
    "
              >
                {/* ================= TECH GRID ================= */}
                <div
                  className="
        absolute
        inset-0
        opacity-20
        rounded-[2rem]
        bg-[linear-gradient(rgba(34,211,238,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.15)_1px,transparent_1px)]
        bg-[size:30px_30px]
        mask-image-[linear-gradient(to_bottom,black,transparent)]
      "
                />

                {/* ================= LARGE BLUE GLOW ================= */}
                <div
                  className="
        absolute
        top-10
        left-1/2
        -translate-x-1/2
        w-72
        h-72
        bg-blue-600/20
        rounded-full
        blur-[90px]
        group-hover:bg-cyan-500/20
        transition-all
        duration-700
        
      "
                />

                {/* ================= BACK CARD ================= */}
                <div
                  className="
        absolute
        top-10
        right-0
        w-[82%]
        h-[75%]
        rounded-[2.5rem]
        bg-gradient-to-br
        from-blue-600/30
        via-blue-900/40
        to-cyan-950/20
        border
        border-blue-400/30
        rotate-[7deg]
        transition-all
        duration-500
        group-hover:rotate-[4deg]
        group-hover:border-cyan-400/50
      "
                />

                {/* ================= SECOND LAYER ================= */}
                <div
                  className="
        absolute
        top-6
        right-4
        w-[82%]
        h-[75%]
        rounded-[2.5rem]
        border
        border-cyan-400/30
        rotate-[-5deg]
        transition-all
        duration-500
        group-hover:rotate-[-2deg]
      "
                />

                {/* ================= MAIN GLASS PANEL ================= */}
                <div
                  className="
        absolute
        top-12
        right-5
        w-[82%]
        h-[76%]
        rounded-[2.5rem]
        bg-white/[0.03]
        backdrop-blur-sm
        border
        border-white/10
        shadow-[0_25px_80px_rgba(0,0,0,0.5)]
      "
                />

                {/* ================= PROFILE IMAGE ================= */}
                <div
                  className="
        absolute
        inset-x-0
        bottom-0
        h-[95%]
        flex
        items-end
        justify-center
          overflow-hidden
        z-10 
      "
                >
                  <img
                    src={MyProfile}
                    alt="Adolf Vincent Bocobo"
                    className="
          w-full
          h-full
          object-contain
          object-bottom
          drop-shadow-[0_25px_35px_rgba(0,0,0,0.8)]
          transition-all
          duration-700
          ease-out
          group-hover:scale-[1.035]
          group-hover:drop-shadow-[0_25px_45px_rgba(34,211,238,0.25)]
        "
                  />
                </div>

                {/* ================= BOTTOM FADE ================= */}
                <div
                  className="
        absolute
        bottom-0
        left-1/2
        -translate-x-1/2
        w-[90%]
        h-28
        bg-gradient-to-t
        from-[#050b14]
        via-[#050b14]/60
        to-transparent
        z-20
        pointer-events-none
        rounded-b-2xl
      "
                />

                {/* ================= CYAN SCAN LINE ================= */}
                <div
                  className="
        absolute
        left-8
        right-8
        top-[38%]
        h-px
        bg-gradient-to-r
        from-transparent
        via-cyan-400/70
        to-transparent
        opacity-40
        group-hover:opacity-100
        transition-opacity
        duration-500
      "
                />

                {/* ================= TOP LEFT TECH LABEL ================= */}
                <div
                  className="
        absolute
        top-8
        left-0
        flex
        items-center
        gap-2
        z-30
      "
                >
                  <span
                    className="
          w-2
          h-2
          rounded-full
          bg-cyan-400
          shadow-[0_0_12px_rgba(34,211,238,0.9)]
        "
                  />

                  <span
                    className="
          text-[10px]
          tracking-[0.3em]
          text-cyan-400/70
          uppercase
        "
                  >
                    Developer
                  </span>
                </div>

                {/* ================= TOP RIGHT DECORATION ================= */}
                <div
                  className="
        absolute
        top-3
        right-0
        flex
        items-center
        gap-2
      "
                >
                  <span className="w-10 h-px bg-blue-500/50" />
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                </div>

                {/* ================= LEFT DOT MATRIX ================= */}
                <div
                  className="
        absolute
        left-[-10px]
        top-28
        grid
        grid-cols-4
        gap-2
        opacity-50
      "
                >
                  {[...Array(16)].map((_, index) => (
                    <span
                      key={index}
                      className="
            w-1
            h-1
            rounded-full
            bg-cyan-400
          "
                    />
                  ))}
                </div>

                {/* ================= FLOATING CODE BRACKET ================= */}
                <div
                  className="
        absolute
        right-[-15px]
        bottom-28
        text-cyan-400/60
        text-4xl
        font-mono
        select-none
        transition-all
        duration-500
        group-hover:text-cyan-400
        group-hover:translate-x-1
      "
                >
                  {"</>"}
                </div>

                {/* ================= BOTTOM LEFT LINE ================= */}
                <div
                  className="
        absolute
        bottom-14
        left-[-25px]
        w-24
        h-12
        border-l
        border-b
        border-cyan-400/40
        rounded-bl-3xl
      "
                />

                {/* ================= FLOATING GLOW DOT ================= */}
                <div
                  className="
        absolute
        right-[-8px]
        top-[45%]
        w-3
        h-3
        rounded-full
        bg-cyan-400
        shadow-[0_0_20px_rgba(34,211,238,0.9)]
        animate-pulse
        z-30
      "
                />

                {/* ================= SMALL BLUE DOT ================= */}
                <div
                  className="
        absolute
        left-10
        bottom-10
        w-2
        h-2
        rounded-full
        bg-blue-500
        shadow-[0_0_15px_rgba(59,130,246,0.8)]
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
