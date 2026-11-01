function Nav() {
  const [open, setOpen] = React.useState(false);

  const items = [
    { label: "ABOUT ME", href: "#about-ja" },
    { label: "BACKGROUND", href: "#about-en-1" },
    { label: "VISION", href: "#about-en-2" },
    { label: "PRODUCT", href: "#product" },
    { label: "ACTIVITY", href: "#activity" },
    { label: "VIDEO", href: "#video" },
    { label: "CONTACT", href: "#contact" },
  ];

  const snsLinks = [
    { label: "note", type: "img", src: "images/sns-note.png", href: "https://note.com/mute_toucan3027" },
    { label: "X", type: "img", src: "images/sns-x.png", href: "#" },
    { label: "Instagram", type: "instagram", href: "https://www.instagram.com/9_32s0mq1u/" },
  ];

  return (
    <React.Fragment>
      <nav className="nav">
        {items.map((item, i) => (
          <a key={i} href={item.href} className={`nav-item nav-item--${(i % 3) + 1}`}>
            {item.label}
          </a>
        ))}
      </nav>

      <button
        className={`nav-hamburger${open ? " nav-hamburger--open" : ""}`}
        onClick={() => setOpen((v) => !v)}
        aria-label="メニューを開閉する"
        aria-expanded={open}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`nav-mobile${open ? " nav-mobile--open" : ""}`}>
        <div className="nav-mobile-smoke">
          <span className="nav-mobile-smoke-blob nav-mobile-smoke-blob--1" />
          <span className="nav-mobile-smoke-blob nav-mobile-smoke-blob--2" />
          <span className="nav-mobile-smoke-blob nav-mobile-smoke-blob--3" />
          <span className="nav-mobile-smoke-blob nav-mobile-smoke-blob--4" />
          <span className="nav-mobile-smoke-white nav-mobile-smoke-white--1" />
          <span className="nav-mobile-smoke-white nav-mobile-smoke-white--2" />
          <span className="nav-mobile-smoke-white nav-mobile-smoke-white--3" />
        </div>

        <div className="nav-mobile-content">
          <nav className="nav-mobile-links">
            {items.map((item, i) => (
              <a key={i} href={item.href} className="nav-mobile-item" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="nav-mobile-sns">
            {snsLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="nav-mobile-sns-icon"
              >
                {link.type === "instagram" ? (
                  <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4.2" />
                    <circle cx="17.2" cy="6.8" r="0.9" fill="#fff" stroke="none" />
                  </svg>
                ) : (
                  <img src={link.src} alt="" />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
