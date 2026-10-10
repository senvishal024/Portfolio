
const Button = ({
  children,
  variant = "primary",
  href = "#",
  target = "_self",
  rel,
  onClick,
}) => {
  return (
    <a
      href={href}
        target="_blank"
  rel="noreferrer"

      onClick={onClick}
      className={`
        inline-flex
        items-center
        justify-center
        rounded-lg
        px-5
        py-2.5
        text-sm
        font-medium
        transition-all
        duration-200
        ${
          variant === "primary"
            ? "bg-[var(--accent)] text-black hover:opacity-90"
            : "border border-[var(--accent-border)] bg-[var(--accent-bg)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-black"
        }
      `}
    >
      {children}
    </a>
  );
};

export default Button;