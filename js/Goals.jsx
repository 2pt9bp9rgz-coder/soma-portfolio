const GOAL_ICONS = {
  zap: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z" />
    </svg>
  ),
  rocket: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09" />
      <path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05" />
    </svg>
  ),
  handshake: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m11 17 2 2a1 1 0 1 0 3-3" />
      <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
      <path d="m21 3 1 11h-2" />
      <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
      <path d="M3 4h8" />
    </svg>
  ),
};

function Goals() {
  const values = [
    {
      icon: "zap",
      title: "壁を破壊する。",
      text: "自分が乗り越えるのに苦労した問題を次の誰かは楽に乗り越えられるようにする。見知らぬ人や、異文化の壁は全て乗り越える。",
    },
    {
      icon: "rocket",
      title: "ゼロイチの体現者になる。",
      text: "課題発見から解決まで自分がリーダーとなり、領域を問わず実践する。",
    },
    {
      icon: "handshake",
      title: "人と人とを繋げる存在になる。",
      text: "個人や法人の垣根なく同じ、又は異なる背景を持つ人同士をつなぎ、頼られるようになる。",
    },
  ];

  return (
    <section className="page-section" id="about-en-2">
      <div className="page-heading-wrap page-heading-wrap--center about-heading-desktop">
        <span className="page-heading">{highlightFirstLetters("VISION")}</span>
        <span className="section-heading-dash" style={{ background: "#473c6e" }} />
      </div>

      <SectionPhotoHeading photo="images/gallery-6.jpg" title="VISION" subtitle="目標" square />

      <div className="goals-body">
        <div className="goal-items">
          {values.map((value, i) => (
            <div className="goal-item" key={i}>
              <span className="goal-item-number">{String(i + 1).padStart(2, "0")}</span>
              <FadeUp as="div" className="goal-item-content">
                <span className="goal-item-icon">{GOAL_ICONS[value.icon]}</span>
                <RockTitle as="p" className="goal-item-title">
                  {value.title}
                </RockTitle>
                <p className="goal-item-text">{value.text}</p>
              </FadeUp>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
