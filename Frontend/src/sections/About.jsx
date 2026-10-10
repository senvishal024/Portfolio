const About = () => {
  return (
    <section
      id="about"
      className="border-t border-[var(--border)] px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
            About Me
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-[var(--text-h)] sm:text-4xl">
            A little about me
          </h2>

          <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-[var(--accent)]" />
        </div>

        {/* Content */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Left - About Text */}
          <div className="text-left">

            <h3 className="mb-5 text-2xl font-semibold leading-tight text-[var(--text-h)] sm:text-3xl">
              I build web applications that are{" "}
              <span className="text-[var(--accent)]">
                useful, scalable and user-friendly.
              </span>
            </h3>

            <p className="mb-5 text-base leading-8 text-[var(--text)]">
              I'm Vishal Sen, a MERN Stack Developer passionate about
              building modern web applications and solving real-world
              problems through technology.
            </p>

            <p className="mb-5 text-base leading-8 text-[var(--text)]">
              I work with React on the frontend and Node.js, Express.js
              and MongoDB on the backend. I enjoy creating clean user
              interfaces, developing REST APIs and connecting frontend
              applications with reliable backend systems.
            </p>

            <p className="text-base leading-8 text-[var(--text)]">
              Along with development, I'm continuously improving my
              problem-solving, JavaScript and full-stack development
              skills by building practical projects.
            </p>

          </div>

          {/* Right - Education / Profile Card */}
          <div className="space-y-5">

            {/* Education Card */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--code-bg)] p-6 text-left transition-all duration-300 hover:border-[var(--accent-border)] hover:shadow-[var(--shadow)]">

              <div className="mb-5 flex items-center gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[var(--accent-border)] bg-[var(--accent-bg)] text-[var(--accent)]">
                  🎓
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[var(--text-h)]">
                    Education
                  </h4>

                  <p className="text-sm text-[var(--text)]">
                    Academic Background
                  </p>
                </div>

              </div>

              <div className="space-y-5">

                <div className="border-l-2 border-[var(--accent-border)] pl-5">
                  <h5 className="font-medium text-[var(--text-h)]">
                    Bachelor of Computer Applications
                  </h5>

                  <p className="mt-1 text-sm text-[var(--text)]">
                    Mohanlal Sukhadia University, Udaipur
                  </p>

                  <span className="mt-2 inline-block text-xs text-[var(--accent)]">
                    2022 – 2025
                  </span>
                </div>

                <div className="border-l-2 border-[var(--accent-border)] pl-5">
                  <h5 className="font-medium text-[var(--text-h)]">
                    Master of Computer Applications
                  </h5>

                  <p className="mt-1 text-sm text-[var(--text)]">
                    Vivekananda Global University, Jaipur
                  </p>

                  <span className="mt-2 inline-block text-xs text-[var(--accent)]">
                    2025 – Present
                  </span>
                </div>

              </div>

            </div>

            {/* Developer Card */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--code-bg)] p-6 text-left transition-all duration-300 hover:border-[var(--accent-border)] hover:shadow-[var(--shadow)]">

              <div className="mb-5 flex items-center gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[var(--accent-border)] bg-[var(--accent-bg)] font-mono text-sm font-bold text-[var(--accent)]">
                  &lt;/&gt;
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[var(--text-h)]">
                    Development Focus
                  </h4>

                  <p className="text-sm text-[var(--text)]">
                    What I enjoy building
                  </p>
                </div>

              </div>

              <div className="flex flex-wrap gap-2">

                <span className="rounded-md border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-xs text-[var(--text)]">
                  Full-Stack Web Apps
                </span>

                <span className="rounded-md border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-xs text-[var(--text)]">
                  REST APIs
                </span>

                <span className="rounded-md border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-xs text-[var(--text)]">
                  Authentication
                </span>

                <span className="rounded-md border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-xs text-[var(--text)]">
                  Responsive UI
                </span>

                <span className="rounded-md border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-xs text-[var(--text)]">
                  Database Integration
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
