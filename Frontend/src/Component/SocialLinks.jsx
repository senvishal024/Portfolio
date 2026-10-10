const SocialLinks = ({item}) => {
  return (
    <div className="flex items-center gap-3">


      {/* GitHub */}
      
      <a
        href={item.url}
        className="flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--social-bg)] text-[var(--text)] transition-all duration-200 hover:-translate-y-1 hover:border-[var(--accent-border)] hover:bg-[var(--accent-bg)] hover:text-[var(--accent)]"
        aria-label={item.type}
      >
        <span className="text-sm font-semibold">{item.shortName}</span>
      </a>

    </div>
  );  
};

export default SocialLinks;