function Background() {
  const timelineRef = React.useRef(null);
  const glowRef = React.useRef(null);

  React.useEffect(() => {
    const el = timelineRef.current;
    const glow = glowRef.current;
    if (!el || !glow) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const travel = el.offsetHeight - 60;
            glow.animate(
              [
                { transform: "translateY(0)", opacity: 0 },
                { transform: "translateY(0)", opacity: 1, offset: 0.05 },
                { transform: `translateY(${travel}px)`, opacity: 1, offset: 0.95 },
                { transform: `translateY(${travel}px)`, opacity: 0 },
              ],
              { duration: 2200, easing: "ease-in-out", fill: "forwards" }
            );
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const events = [
    { date: "2006年10月23日", text: "東京都の清瀬市に生まれる。" },
    { date: "2022年4月", text: "杉並区の豊多摩高校に進学。高一は遊び呆ける。" },
    { date: "2023年2月", text: "模試の偏差値が40程になり危機感を覚える。" },
    { date: "2023年3月", text: "慶應法学部を夢見るも、時間が足りないことに気づく。" },
    { date: "2023年7月", text: "東京都教育委員会管轄の次世代リーダー育成道場に選抜される。" },
    { date: "2024年1月〜11月", text: "休学しながらニュージーランドで1年間本気で英語を学ぶ。" },
    { date: "2024年12月", text: "帰国後、忘れていた世界史を一から年号を中心に勉強する。" },
    { date: "2025年夏", text: "市場に年号を中心に学べる教材やアプリがないことに気づく。" },
    { date: "2025年11月", text: "鬱気味になり勉強が手につかなくなり、アプリ開発を始める。" },
    { date: "2026年4月", text: "第1志望の慶應義塾大学法学部に合格。" },
    { date: "2026年4月", text: "｢くそまる｣として慶應生Vlogを投稿開始。" },
    { date: "2026年6月", text: "世界史アプリのクラファンを始める。" },
    { date: "2026年7月8日", text: "就活NEOに出演し、株式会社ミツカルに600万＋事業部ポスト(営利1%)で内定。" },
    { date: "2026年7月17日", text: "世界史年号トレーニングをリリース。" },
  ];

  const photoSets = {
    0: [{ src: "images/baby-1.jpg" }, { src: "images/baby-2.jpg" }],
    5: [{ src: "images/study-1.jpg", position: "center 18%" }, { src: "images/study-2.jpg", position: "22% center" }],
    9: [{ src: "images/keio-1.jpg" }],
  };

  return (
    <section className="page-section" id="about-en-1">
      <div className="page-heading-wrap page-heading-wrap--center about-heading-desktop">
        <span className="page-heading">{highlightFirstLetters("BACKGROUND")}</span>
        <span className="section-heading-dash" style={{ background: "#3a3f74" }} />
      </div>

      <SectionPhotoHeading photo="images/baby-2.jpg" title="BACKGROUND" subtitle="私の歩み" square />

      <div className="background-body">
        <div className="timeline" ref={timelineRef}>
          <span className="timeline-glow" ref={glowRef} />
          {events.map((event, i) => (
            <div
              className={`timeline-item${photoSets[i] ? " timeline-item--photo" : ""}${
                photoSets[i] && photoSets[i].length === 1 ? " timeline-item--photo-single" : ""
              }`}
              key={i}
            >
              <span className="timeline-marker" />
              {photoSets[i] && (
                <div
                  className={`timeline-baby-photos${
                    photoSets[i].length === 1 ? " timeline-baby-photos--single" : ""
                  }${i === 5 ? " timeline-baby-photos--spread" : ""}`}
                >
                  {photoSets[i].map((photo, n) => (
                    <img
                      key={n}
                      src={photo.src}
                      alt=""
                      className={`timeline-baby-photo timeline-baby-photo--${n + 1}`}
                      style={photo.position ? { objectPosition: photo.position } : undefined}
                    />
                  ))}
                </div>
              )}
              <FadeUp as="div" className="timeline-content">
                <span className="timeline-date">{event.date}</span>
                <p className="timeline-text">{event.text}</p>
              </FadeUp>
            </div>
          ))}
        </div>

        <div className="background-wave">
          <img src="images/bg-wave-person.png" alt="" className="background-wave-photo" />
          <div className="background-wave-bubble">
            <img src="images/bg-wave-bubble.png" alt="" className="background-wave-bubble-img" />
            <p className="background-wave-bubble-text">今はSNS発信や新規アプリ開発などを頑張っています！</p>
          </div>
        </div>
      </div>
    </section>
  );
}
