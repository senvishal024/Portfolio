import socialLinks from "../data/social";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg)]">
      <div className="mx-auto max-w-7xl px-6">

        {/* Main Footer */}
        <div className="grid gap-10 py-14 md:grid-cols-3">

          {/* Brand */}
          <div>
            <a
              href="#home"
              className="inline-block text-2xl font-bold tracking-tight text-[var(--text-h)]"
            >
              VISHAL<span className="text-[var(--accent)]">.</span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--text)]">
              MERN Stack Developer focused on building modern,
              responsive and user-friendly web applications.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--code-bg)] px-3 py-1.5">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
              <span className="text-xs text-[var(--text)]">
                Open to opportunities
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-[var(--text-h)]">
              Navigation
            </h3>

            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              <a
                href="#home"
                className="text-sm text-[var(--text)] transition-colors hover:text-[var(--accent)]"
              >
                Home
              </a>

              <a
                href="#about"
                className="text-sm text-[var(--text)] transition-colors hover:text-[var(--accent)]"
              >
                About
              </a>

              <a
                href="#skills"
                className="text-sm text-[var(--text)] transition-colors hover:text-[var(--accent)]"
              >
                Skills
              </a>

              <a
                href="#projects"
                className="text-sm text-[var(--text)] transition-colors hover:text-[var(--accent)]"
              >
                Projects
              </a>

              <a
                href="#journey"
                className="text-sm text-[var(--text)] transition-colors hover:text-[var(--accent)]"
              >
                Journey
              </a>

              <a
                href="#contact"
                className="text-sm text-[var(--text)] transition-colors hover:text-[var(--accent)]"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-[var(--text-h)]">
              Connect
            </h3>

            <p className="mb-5 text-sm leading-6 text-[var(--text)]">
              Have a project or opportunity in mind?
              Let’s connect and build something meaningful.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((item)=>(
                <SocialLinks key={item.id} item={item}/>
              ))}

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-[var(--border)] py-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-[var(--text)]">
            © 2026 Vishal Sen
          </p>

          <p className="text-xs text-[var(--text)]">
            Designed & built with{" "}
            <span className="text-[var(--accent)]">React</span>
            {" + "}
            <span className="text-[var(--accent)]">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;