function Footer() {
  const navRow1 = [
    { label: "ABOUT ME", href: "#about-ja" },
    { label: "BACKGROUND", href: "#about-en-1" },
    { label: "GOAL", href: "#about-en-2" },
    { label: "PRODUCT", href: "#product" },
  ];
  const navRow2 = [{ label: "CONTACT", href: "#contact" }];

  const snsLinks = [
    { label: "note", type: "img", src: "images/sns-note.png", href: "https://note.com/mute_toucan3027" },
    { label: "X", type: "img", src: "images/sns-x.png", href: "#" },
    { label: "Instagram", type: "instagram", href: "https://www.instagram.com/9_32s0mq1u/" },
  ];

  return (
    <footer className="site-footer">
      <button
        className="footer-top-btn"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="ページトップへ戻る"
      >
        ↑
      </button>

      <div className="footer-main">
        <div className="footer-brand">
          <p className="footer-name">SOMA NISIHARA</p>
          <div className="footer-sns-icons">
            {snsLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="footer-sns-icon"
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

        <nav className="footer-nav">
          <div className="footer-nav-row">
            {navRow1.map((item, i) => (
              <a key={i} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <div className="footer-nav-row footer-nav-row--right">
            {navRow2.map((item, i) => (
              <a key={i} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </div>

      <p className="site-footer-text">© 2026 Soma Nisihara</p>
    </footer>
  );
}
