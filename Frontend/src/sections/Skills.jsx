import SkillCard from "../Component/SkillCard";
import skills from "../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="border-t border-[var(--border)] px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="flex flex-col mb-14 text-center items-center">
          <span className="mb-3 inline-block text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
            My Skills
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-[var(--text-h)] sm:text-4xl">
            Technologies I work with
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[var(--text)] sm:text-base">
            A collection of technologies and tools I use to build modern,
            responsive and full-stack web applications.
          </p>

          <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-[var(--accent)]" />
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-2">

          {/* Frontend */}
          {skills.map((item)=>(
          <SkillCard key={item.id} skill={item}/>
          ))}


          
        </div>

      </div>
    </section>
  );
};

export default Skills;