import ProjectCard from "../Component/ProjectCard";
import projects from "../data/projects";
const Projects = () => {
  return (
    <section
      id="projects"
      className="border-t border-[var(--border)] px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="flex flex-col mb-14 text-center items-center">
          <span className="mb-3 inline-block text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
            My Work
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-[var(--text-h)] sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-7 text-[var(--text)] sm:text-base ">
            A selection of full-stack applications I have built while
            learning and applying modern web development technologies.
          </p>

          <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-[var(--accent)]" />
        </div>

        {/* Projects Grid */}
        <div className="grid gap-7 lg:grid-cols-3">
          {projects.map((item)=>( 
        <ProjectCard key={item.id} item={item} />
          ))} 

        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">

          <p className="mb-4 text-sm text-[var(--text)]">
            Want to see more of my work?
          </p>

          <a
            href="https://github.com/senvishal024"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] transition-colors hover:text-[var(--text-h)]"
          >
            View GitHub Profile
            <span>→</span>
          </a>

        </div>

      </div>
    </section>
  );
};

export default Projects;