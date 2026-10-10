import { useState } from "react";
import projects from "../data/projects";
const ProjectCard = ({item}) => {

  return (
    <article className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--code-bg)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-border)] hover:shadow-[var(--shadow)]">

      {/* Project Image */}
      <div className="aspect-video overflow-hidden bg-[var(--bg)]">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Project Content */}
      <div className="p-6">

        {/* Project Title */}
        <h3 className="mb-3 text-xl font-semibold text-[var(--text-h)]">
          {item.title}
        </h3>

        {/* Project Description */}
        <p className="mb-5 text-sm leading-6 text-[var(--text)]">
         {item.shortDescription}
        </p>

        {/* Technology Tags */}
        <div className="mb-6 flex flex-wrap gap-2">
          {item.technologies.map((techItem)=>(
          <span key={techItem} className="rounded-md border border-[var(--border)] bg-[var(--bg)] px-3 py-1 text-xs text-[var(--text)]">
            {techItem}
          </span>
          ))}

        </div>

        {/* Project Actions */}
        <div className="flex items-center gap-3">

          <a
            href={item.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-[var(--accent)] px-4 py-2 text-sm font-medium text-black transition-all duration-200 hover:opacity-90"
          >
            Live Demo
          </a>

          <a
            href={item.githubUrl}
            target="_blank"
              rel="noreferrer"
            className="rounded-lg border border-[var(--accent-border)] bg-[var(--accent-bg)] px-4 py-2 text-sm font-medium text-[var(--accent)] transition-all duration-200 hover:bg-[var(--accent)] hover:text-black"
          >
            GitHub
          </a>

        </div>

      </div>
    </article>
    
  );
};

export default ProjectCard;