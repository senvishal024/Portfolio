const SectionTitle = () => {
  return (
    <div className="mb-12 text-center">

      {/* Small Label */}
      <span className="mb-3 inline-block text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
        My Work
      </span>

      {/* Main Title */}
      <h2 className="text-3xl font-bold tracking-tight text-[var(--text-h)] md:text-4xl">
        Projects
      </h2>

      {/* Description */}
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[var(--text)] md:text-base">
        A selection of projects I have built using modern web technologies
        and full-stack development practices.
      </p>

      {/* Accent Line */}
      <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-[var(--accent)]" />

    </div>
  );
};

export default SectionTitle;