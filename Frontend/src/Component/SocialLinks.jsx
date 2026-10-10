
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const icons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  email: FaEnvelope,
};

const SocialLinks = ({ item }) => {
  const Icon = icons[item.type];

  if (!Icon) return null;

  const isEmail = item.type === "email";

  return (
    <a
      href={item.url}
      target={isEmail ? undefined : "_blank"}
      rel={isEmail ? undefined : "noopener noreferrer"}
      className="flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--social-bg)] text-[var(--text)] transition-all duration-200 hover:-translate-y-1 hover:border-[var(--accent-border)] hover:bg-[var(--accent-bg)] hover:text-[var(--accent)]"
      aria-label={item.name}
      title={item.name}
    >
      <Icon size={20} />
    </a>
  );
};

export default SocialLinks;
