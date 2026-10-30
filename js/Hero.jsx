function Hero() {
  const titleRef = React.useRef(null);
  const [titlePlayed, setTitlePlayed] = React.useState(false);

  React.useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTitlePlayed(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero" id="hero">
      <img className="hero-bg-photo" src="images/hero-bg.jpg" alt="Soma Nisihara" />
      <div className="hero-bg-overlay" />

      <Nav />

      <h1 className="hero-title" ref={titleRef} aria-label="Soma Nishihara">
        <HeroNameLine
          className="hero-name-line hero-name-line--1"
          viewBox="0 0 469 125"
          d={HERO_NAME_LINE1_D}
          played={titlePlayed}
          drawDuration={1300}
          drawDelay={100}
        />
        <HeroNameLine
          className="hero-name-line hero-name-line--2"
          viewBox="0 0 469 142"
          d={HERO_NAME_LINE2_D}
          played={titlePlayed}
          drawDuration={1700}
          drawDelay={1250}
        />
      </h1>

      <div className="hero-scroll">
        <span>SCROLL</span>
        <div className="hero-scroll-line" />
      </div>

      <div className="hero-sns">
        <span className="hero-sns-label">Follow me</span>
        <div className="hero-sns-line" />
        <div className="hero-sns-icons">
          <a href="https://note.com/mute_toucan3027" target="_blank" rel="noopener noreferrer" aria-label="note" className="hero-sns-icon">
            <img src="images/sns-note.png" alt="" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="X" className="hero-sns-icon">
            <img src="images/sns-x.png" alt="" />
          </a>
          <a href="https://www.instagram.com/9_32s0mq1u/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hero-sns-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4.2" />
              <circle cx="17.2" cy="6.8" r="0.9" fill="#fff" stroke="none" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
