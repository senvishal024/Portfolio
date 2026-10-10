const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 py-20 lg:grid-cols-2 lg:gap-20">

        {/* Left Content */}
        <div className="text-left">

          {/* Small Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--accent-border)] bg-[var(--accent-bg)] px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
            <span className="text-xs font-medium tracking-wide text-[var(--accent)]">
              MERN STACK DEVELOPER
            </span>
          </div>

          {/* Heading */}
          <h1 className="mb-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[var(--text-h)] sm:text-5xl lg:text-6xl">
            Hi, I'm{" "}
            <span className="text-[var(--accent)]">
              Vishal Sen
            </span>
          </h1>

          {/* Description */}
          <p className="mb-8 max-w-2xl text-base leading-7 text-[var(--text)] sm:text-lg">
            I build modern, responsive and scalable web applications
            using React, Node.js, Express.js and MongoDB.
            I enjoy turning ideas into clean and functional digital experiences.
          </p>

          {/* Buttons */}
          <div className="mb-9 flex flex-wrap items-center gap-4">

            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-black transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-[var(--accent-border)] bg-[var(--accent-bg)] px-6 py-3 text-sm font-semibold text-[var(--accent)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--accent)] hover:text-black"
            >
              Let's Connect
            </a>

          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-[var(--text)]">
              Find me on
            </span>

            <div className="h-px w-8 bg-[var(--border)]" />

            <a
              href="#"
              className="text-sm font-medium text-[var(--text)] transition-colors hover:text-[var(--accent)]"
            >
              GitHub
            </a>

            <a
              href="#"
              className="text-sm font-medium text-[var(--text)] transition-colors hover:text-[var(--accent)]"
            >
              LinkedIn
            </a>
          </div>

        </div>

        {/* Right Code Card */}
        <div className="relative">

          <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--code-bg)] shadow-[var(--shadow)]">

            {/* Window Header */}
            <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-4">

              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                <span className="h-3 w-3 rounded-full bg-green-400/70" />
              </div>

              <span className="font-mono text-xs text-[var(--text)]">
                developer.js
              </span>

            </div>

            {/* Code */}
            <div className="overflow-x-auto p-6 sm:p-8">
              <pre className="font-mono text-sm leading-8 text-left sm:text-base">
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
            <div className="border-t border-[var(--border)] px-6 py-4">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                <span className="text-xs text-[var(--text)]">
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