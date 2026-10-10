
const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen scroll-mt-20 items-center overflow-hidden px-4 pt-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 py-12 sm:gap-12 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-20 xl:gap-20">

        {/* Left Content */}
        <div className="min-w-0 text-left">

          {/* Small Badge */}
          <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-[var(--accent-border)] bg-[var(--accent-bg)] px-3 py-2 sm:mb-6 sm:px-4">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
            <span className="text-[10px] font-medium tracking-wide text-[var(--accent)] sm:text-xs">
              MERN STACK DEVELOPER
            </span>
          </div>

          {/* Heading */}
          <h1 className="mb-5 text-3xl font-bold leading-tight tracking-tight text-[var(--text-h)] min-[400px]:text-4xl sm:mb-6 sm:text-5xl lg:text-5xl xl:text-6xl">
            Hi, I'm{" "}
            <span className="text-[var(--accent)]">
              Vishal Sen
            </span>
          </h1>

          {/* Description */}
          <p className="mb-7 max-w-2xl text-sm leading-7 text-[var(--text)] sm:mb-8 sm:text-base lg:text-lg">
            I build modern, responsive and scalable web applications
            using React, Node.js, Express.js and MongoDB.
            I enjoy turning ideas into clean and functional digital experiences.
          </p>

          {/* Buttons */}
          <div className="mb-8 flex flex-wrap items-center gap-3 sm:mb-9 sm:gap-4">
            <a
              href="#projects"
              className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-black transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 sm:px-6"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[var(--accent-border)] bg-[var(--accent-bg)] px-4 py-3 text-sm font-semibold text-[var(--accent)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--accent)] hover:text-black sm:px-6"
            >
              Let's Connect
            </a>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-3 sm:gap-x-4">
            <span className="text-xs text-[var(--text)] sm:text-sm">
              Find me on
            </span>

            <div className="hidden h-px w-8 bg-[var(--border)] min-[380px]:block" />

            <a
              href="https://github.com/senvishal024"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-[var(--text)] transition-colors hover:text-[var(--accent)]"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/senvishal024"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-[var(--text)] transition-colors hover:text-[var(--accent)]"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right Code Card */}
        <div className="min-w-0 w-full">
          <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--code-bg)] shadow-[var(--shadow)] sm:rounded-2xl">

            {/* Window Header */}
            <div className="flex items-center justify-between gap-3 border-b border-[var(--border)] px-4 py-3 sm:px-5 sm:py-4">
              <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70 sm:h-3 sm:w-3" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70 sm:h-3 sm:w-3" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/70 sm:h-3 sm:w-3" />
              </div>

              <span className="truncate font-mono text-xs text-[var(--text)]">
                developer.js
              </span>
            </div>

            {/* Code */}
            <div className="overflow-x-auto p-4 sm:p-6 md:p-8">
              <pre className="text-left font-mono text-xs leading-7 sm:text-sm sm:leading-8 md:text-base">
                <code>
                  <span className="text-[var(--text)]">const </span>
                  <span className="text-[var(--accent)]">developer</span>
                  <span className="text-[var(--text)]"> = {"{"}</span>
                  {"\n"}
                  {"  "}
                  <span className="text-[var(--accent)]">name</span>
                  <span className="text-[var(--text)]">: </span>
                  <span className="text-green-300">"Vishal Sen"</span>
                  <span className="text-[var(--text)]">,</span>
                  {"\n"}
                  {"  "}
                  <span className="text-[var(--accent)]">role</span>
                  <span className="text-[var(--text)]">: </span>
                  <span className="text-green-300">"MERN Developer"</span>
                  <span className="text-[var(--text)]">,</span>
                  {"\n"}
                  {"  "}
                  <span className="text-[var(--accent)]">frontend</span>
                  <span className="text-[var(--text)]">: [</span>
                  <span className="text-green-300">"React"</span>
                  <span className="text-[var(--text)]">, </span>
                  <span className="text-green-300">"JavaScript"</span>
                  <span className="text-[var(--text)]">],</span>
                  {"\n"}
                  {"  "}
                  <span className="text-[var(--accent)]">backend</span>
                  <span className="text-[var(--text)]">: [</span>
                  <span className="text-green-300">"Node.js"</span>
                  <span className="text-[var(--text)]">, </span>
                  <span className="text-green-300">"Express.js"</span>
                  <span className="text-[var(--text)]">],</span>
                  {"\n"}
                  {"  "}
                  <span className="text-[var(--accent)]">database</span>
                  <span className="text-[var(--text)]">: </span>
                  <span className="text-green-300">"MongoDB"</span>
                  <span className="text-[var(--text)]">,</span>
                  {"\n"}
                  {"  "}
                  <span className="text-[var(--accent)]">passion</span>
                  <span className="text-[var(--text)]">: </span>
                  <span className="text-green-300">"Building"</span>
                  {"\n"}
                  <span className="text-[var(--text)]">{"};"}</span>
                </code>
              </pre>
            </div>

            {/* Bottom Status */}
            <div className="border-t border-[var(--border)] px-4 py-3 sm:px-6 sm:py-4">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
                <span className="text-xs text-[var(--text)] sm:text-sm">
                  Open to opportunities
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
