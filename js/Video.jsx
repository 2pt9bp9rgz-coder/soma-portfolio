// 出演動画。YouTube の動画 ID（watch?v= の後ろ）と番組名・見出しを足すと並ぶ
const VIDEOS = [
  { id: "9Ew_HwIKdPQ", show: "wakatte TV", title: "マニアックな参考書がヤバすぎた！ #1472" },
  { id: "SrcqNP3KgrE", show: "就活NEO", title: "248人目（2026年9月）" },
];

// PR動画（Instagram リール）。サムネを押すと Instagram で開く。サムネは images/ に置く
const PR_REELS = [
  { code: "DfAfKjKThOt", thumb: "images/pr-1.jpg" },
  { code: "De6SSK_xWhp", thumb: "images/pr-2.jpg" },
  { code: "DZmofwMxe5v", thumb: "images/pr-3.jpg" },
];

function Video() {
  return (
    <section className="video" id="video">
      <div className="video-heading-wrap">
        <span className="video-heading">{highlightFirstLetters("VIDEO")}</span>
        <span className="video-heading-sub">出演動画</span>
        <span className="video-heading-dash" />
      </div>

      <FadeUp as="div" className="video-list">
        {VIDEOS.map((v) => (
          <figure className="video-item" key={v.id}>
            <div className="video-screen">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${v.id}`}
                title={`${v.show} ${v.title}`}
                loading="lazy"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <figcaption>
              <span className="video-show">{v.show}</span>
              <span className="video-title">{v.title}</span>
            </figcaption>
          </figure>
        ))}
      </FadeUp>

      <p className="video-sub-heading">PR</p>
      <FadeUp as="div" className="video-reels">
        {PR_REELS.map((r) => (
          <a
            className="video-reel"
            key={r.code}
            href={`https://www.instagram.com/reel/${r.code}/`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="PR動画をInstagramで見る"
          >
            <img src={r.thumb} alt="" loading="lazy" />
            <span className="video-reel-play" />
          </a>
        ))}
      </FadeUp>

      <FadeUp as="div" className="video-offer">
        <p className="video-offer-label">NOW ACCEPTING</p>
        <p className="video-offer-title">出演・PR案件のご依頼受付中</p>
        <p className="video-offer-text">
          YouTube・SNS動画への出演、教育系サービスやアプリのPRなど、お気軽にご相談ください。
        </p>
        <a className="video-offer-btn" href="contact-form.html">ご依頼・ご相談はこちら →</a>
      </FadeUp>
    </section>
  );
}
