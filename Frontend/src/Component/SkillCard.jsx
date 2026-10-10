const SkillCard = ({skill}) => {

  return (
    <div className="group rounded-2xl border border-[var(--border)] bg-[var(--code-bg)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-border)] hover:shadow-[var(--shadow)]">

      {/* Icon */}
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--accent-border)] bg-[var(--accent-bg)] text-xl text-[var(--accent)] transition-all duration-300 group-hover:bg-[var(--accent)] group-hover:text-black">
       {skill.icon}
      </div>

      {/* Skill Category */}
      <h3 className="mb-2 text-lg font-semibold text-[var(--text-h)]">
        {skill.title}
      </h3>

      {/* Description */}
      <p className="mb-5 text-sm leading-6 text-[var(--text)]">
        {skill.description}
      </p>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {skill.technologies.map((tech)=>(
        <span key={tech} className="rounded-md border border-[var(--border)] bg-[var(--bg)] px-3 py-1.5 text-xs text-[var(--text)] transition-colors hover:border-[var(--accent-border)] hover:text-[var(--accent)]">
          {tech}
        </span>
        ))}

      </div>

    </div>
  );
};

export default SkillCard;