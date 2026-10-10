const Journey = () => {
  return (
    <section
      id="journey"
      className="border-t border-[var(--border)] px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">

        {/* Section Heading */}
       <div className="flex flex-col mb-14 text-center items-center">
          <span className="mb-3 inline-block text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
            My Journey
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-[var(--text-h)] sm:text-4xl">
            My Learning & Development Journey
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[var(--text)] sm:text-base">
            From learning the fundamentals of computer applications to
            building real-world full-stack web applications.
          </p>

          <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-[var(--accent)]" />
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-[11px] top-2 h-[calc(100%-8px)] w-px bg-[var(--border)] sm:left-1/2 sm:-translate-x-1/2" />

          {/* 2022 */}
          <div className="relative mb-12 grid items-center gap-8 sm:grid-cols-2 sm:gap-16">

            <div className="order-2 pl-9 text-left sm:order-1 sm:pl-0 sm:text-right">

              <span className="mb-2 inline-block text-sm font-medium text-[var(--accent)]">
                2022
              </span>

              <h3 className="mb-2 text-xl font-semibold text-[var(--text-h)]">
                Started BCA
              </h3>

              <p className="text-sm leading-6 text-[var(--text)]">
                Started my Bachelor of Computer Applications at Mohanlal
                Sukhadia University and began building my foundation in
                computer science and programming.
              </p>

            </div>

            <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-[var(--accent-border)] bg-[var(--bg)] sm:left-1/2 sm:-translate-x-1/2">

              <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />

            </div>

            <div className="order-1 hidden sm:order-2 sm:block" />

          </div>


          {/* 2025 BCA */}
          <div className="relative mb-12 grid items-center gap-8 sm:grid-cols-2 sm:gap-16">

            <div className="hidden sm:block" />

            <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-[var(--accent-border)] bg-[var(--bg)] sm:left-1/2 sm:-translate-x-1/2">

              <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />

            </div>

            <div className="pl-9 text-left">

              <span className="mb-2 inline-block text-sm font-medium text-[var(--accent)]">
                2025
              </span>

              <h3 className="mb-2 text-xl font-semibold text-[var(--text-h)]">
                Completed BCA
              </h3>

              <p className="text-sm leading-6 text-[var(--text)]">
                Completed my BCA and strengthened my understanding of
                programming, databases, web technologies and software
                development fundamentals.
              </p>

            </div>

          </div>


          {/* 2025 MCA */}
          <div className="relative mb-12 grid items-center gap-8 sm:grid-cols-2 sm:gap-16">

            <div className="order-2 pl-9 text-left sm:order-1 sm:pl-0 sm:text-right">

              <span className="mb-2 inline-block text-sm font-medium text-[var(--accent)]">
                2025 – Present
              </span>

              <h3 className="mb-2 text-xl font-semibold text-[var(--text-h)]">
                Started MCA
              </h3>

              <p className="text-sm leading-6 text-[var(--text)]">
                Started my Master of Computer Applications at Vivekananda
                Global University while continuing to improve my practical
                development skills.
              </p>

            </div>

            <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-[var(--accent-border)] bg-[var(--bg)] sm:left-1/2 sm:-translate-x-1/2">

              <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />

            </div>

            <div className="order-1 hidden sm:order-2 sm:block" />

          </div>


          {/* 2025–2026 MERN */}
          <div className="relative mb-12 grid items-center gap-8 sm:grid-cols-2 sm:gap-16">

            <div className="hidden sm:block" />

            <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-[var(--accent-border)] bg-[var(--bg)] sm:left-1/2 sm:-translate-x-1/2">

              <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />

            </div>

            <div className="pl-9 text-left">

              <span className="mb-2 inline-block text-sm font-medium text-[var(--accent)]">
                2025 – 2026
              </span>

              <h3 className="mb-2 text-xl font-semibold text-[var(--text-h)]">
                MERN Stack Development
              </h3>

              <p className="text-sm leading-6 text-[var(--text)]">
                Focused on JavaScript, React, Node.js, Express.js and
                MongoDB while learning how to build complete full-stack
                applications.
              </p>

            </div>

          </div>


          {/* 2026 */}
          <div className="relative grid items-center gap-8 sm:grid-cols-2 sm:gap-16">

            <div className="order-2 pl-9 text-left sm:order-1 sm:pl-0 sm:text-right">

              <span className="mb-2 inline-block text-sm font-medium text-[var(--accent)]">
                2026
              </span>

              <h3 className="mb-2 text-xl font-semibold text-[var(--text-h)]">
                Real-World Projects
              </h3>

              <p className="text-sm leading-6 text-[var(--text)]">
                Built practical MERN applications including an e-commerce
                platform, salon management system and student management
                system.
              </p>

            </div>

            <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-[var(--accent)] bg-[var(--accent-bg)] sm:left-1/2 sm:-translate-x-1/2">

              <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />

            </div>

            <div className="order-1 hidden sm:order-2 sm:block" />

          </div>

        </div>

      </div>
    </section>
  );
};

export default Journey;
