import { useEffect, useState } from "react";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled
          ? "border-[var(--border)] bg-[rgba(11,15,20,0.75)] backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="text-xl font-bold tracking-wide text-[var(--text-h)]"
        >
          VISHAL<span className="text-[var(--accent)]">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">

          <a
            href="#home"
            className="relative text-sm font-medium text-[var(--accent)] transition-colors duration-200"
          >
            Home
            <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-[var(--accent)]" />
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-[var(--text)] transition-colors duration-200 hover:text-[var(--accent)]"
          >
            About
          </a>

          <a
            href="#skills"
            className="text-sm font-medium text-[var(--text)] transition-colors duration-200 hover:text-[var(--accent)]"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="text-sm font-medium text-[var(--text)] transition-colors duration-200 hover:text-[var(--accent)]"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-[var(--text)] transition-colors duration-200 hover:text-[var(--accent)]"
          >
            Contact
          </a>

        </div>

        {/* Desktop Resume */}
        <div className="hidden items-center gap-8 md:flex">
           <Button href="/vishalresume.pdf" variant="secondary" >Resume</Button>
        </div>
        
        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-h)] transition-colors duration-200 hover:border-[var(--accent-border)] hover:text-[var(--accent)] md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-[var(--border)] bg-[rgba(11,15,20,0.95)] px-6 py-5 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-5">

            <a
              href="#home"
              onClick={closeMenu}
              className="text-sm font-medium text-[var(--accent)]"
            >
              Home
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="text-sm font-medium text-[var(--text)] transition-colors hover:text-[var(--accent)]"
            >
              About
            </a>

            <a
              href="#skills"
              onClick={closeMenu}
              className="text-sm font-medium text-[var(--text)] transition-colors hover:text-[var(--accent)]"
            >
              Skills
            </a>

            <a
              href="#projects"
              onClick={closeMenu}
              className="text-sm font-medium text-[var(--text)] transition-colors hover:text-[var(--accent)]"
            >
              Projects
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="text-sm font-medium text-[var(--text)] transition-colors hover:text-[var(--accent)]"
            >
              Contact
            </a>

            
          <Button href="/vishalresume.pdf" variant="secondary" onClick={closeMenu} >Resume</Button>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;