function AboutMe() {
  const lines = [
    "はじめまして、慶應義塾大学法学部のくそまること西原蒼真です。",
    "高校時代にニュージーランドへ1年間留学していて、そこで英語力とコミュニケーション力を鍛えました。",
    "今は、世界史の年号を効率よく覚えるアプリ「難関年号世界史トレーニング」を開発しながら、塾講師や家庭教師として受験生の指導もしています。ほかにもVlogやInstagramでの発信、ビジネスコンテストへの挑戦をしていて、最近は就活NEOにも出演させていただきました。",
    "新しい人に会うのが好きで、社会課題をビジネスで解決することに興味があります。",
    <>
      「まずやってみる」がモットーなので、何か面白いことがあればぜひ声をかけてください。
      <br />
      よろしくお願いします！
    </>,
    "案件などはInstagramのDMやメールにお願いします",
  ];

  return (
    <section className="page-section" id="about-ja">
      <div className="page-heading-wrap page-heading-wrap--center about-heading-desktop">
        <span className="page-heading">{highlightFirstLetters("ABOUT ME")}</span>
        <span className="section-heading-dash" style={{ background: "#4a6b7f" }} />
      </div>

      <SectionPhotoHeading photo="images/about-me.jpg?v=2" title="ABOUT ME" subtitle="私について" />

      <div className="about-me-body">
        {lines.map((line, i) => (
          <FadeUp as="p" key={i} delay={i * 80}>
            {line}
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
