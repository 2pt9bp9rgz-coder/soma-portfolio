function ActivityTagline() {
  const ref = React.useRef(null);
  const [played, setPlayed] = React.useState(false);
  const [done, setDone] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setPlayed(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (!played) return;
    const timer = setTimeout(() => setDone(true), 2300);
    return () => clearTimeout(timer);
  }, [played]);

  const classes = [
    "activity-tagline-wrap",
    played ? "is-played" : "",
    done ? "is-done" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} ref={ref}>
      <svg className="activity-tagline-bolt activity-tagline-bolt--left" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
      </svg>
      <p className="activity-tagline">
        学びを捨てるな、遊び倒せ。
        <br />
        知識は人生の最強の武器だ！
      </p>
      <svg className="activity-tagline-bolt activity-tagline-bolt--right" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
      </svg>
    </div>
  );
}

function Activity() {
  return (
    <section className="activity" id="activity">
      <span className="activity-corner activity-corner--tl" />
      <span className="activity-corner activity-corner--tr" />
      <span className="activity-corner activity-corner--bl" />
      <span className="activity-corner activity-corner--br" />

      <div className="activity-heading-wrap">
        <span className="activity-heading">{highlightFirstLetters("ACTIVITY")}</span>
        <span className="activity-heading-sub">活動</span>
        <span className="activity-heading-dash" />
      </div>

      <FadeUp as="div" className="activity-body">
        <p className="activity-org-name">学生団体「StuBridge」</p>
        <ActivityTagline />
        <p className="activity-desc">
          2026年10月26日より、学生が学んだ知識を「遊び・発信・つながり」に変える学生団体としてStuBridgeを立ち上げました。(慶應義塾大学の公認団体ではありません)。
          <br />
          第1弾プロジェクトは、2027年3月開催の「世界史クイズ大会」(リアル開催)を考えています！
        </p>

        <div className="activity-recruit">
          <p className="activity-recruit-title">コアメンバー募集中</p>
          <p className="activity-recruit-text">
            一緒に団体を立ち上げてくれる仲間を募集しています。気軽に応募してください！
          </p>
          <p className="activity-recruit-deadline">応募締切：2026年11月8日(日)</p>

          <div className="activity-links">
            <a
              className="activity-apply-btn"
              href="https://docs.google.com/forms/d/e/1FAIpQLSf6SmHDIaIFDZJQ-InyJ5jvW7hWRSEFgkS5wCDyitD5Srp7fA/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              応募フォームはこちら →
            </a>
            <a
              className="activity-instagram"
              href="https://www.instagram.com/stubridge.club"
              target="_blank"
              rel="noopener noreferrer"
            >
              @stubridge.club
            </a>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
