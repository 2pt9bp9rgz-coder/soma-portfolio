function ProductCard({ photo, icon, name, caption, date, href }) {
  return (
    <a className="product-card" href={href} target="_blank" rel="noopener noreferrer">
      <div className="product-card-photo-wrap">
        <img className="product-card-photo" src={photo} alt="" />
      </div>

      <div className="product-card-content">
        <div className="product-name-row">
          <img className="product-icon" src={icon} alt="" />
          <p className="product-name">
            {name.map((line, i) => (
              <React.Fragment key={i}>
                {i > 0 && <br />}
                {line}
              </React.Fragment>
            ))}
          </p>
        </div>

        <FadeUp as="p" className="product-caption">
          {caption}
        </FadeUp>

        <span className="product-view-more">＞ view more</span>

        <span className="product-card-date">{date}</span>
      </div>
    </a>
  );
}

function ProductStretchTitle() {
  return (
    <div className="product-marquee">
      <div className="product-marquee-row">
        <span>PRODUCT</span>
        <span className="product-marquee-main">{highlightFirstLetters("PRODUCT")}</span>
        <span>PRODUCT</span>
      </div>
    </div>
  );
}

function Product() {
  const products = [
    {
      photo: "images/product-photo.jpg",
      icon: "images/product-icon.png",
      name: ["難関年号", "世界史トレーニング"],
      caption:
        "約2400問の豊富な問題、四択、年号入力、タイムアタック、友達と対戦など豊富なモードで、覚えるを楽しみながら習慣化。",
      date: "2026年7月17日リリース",
      href: "https://apps.apple.com/jp/app/%E9%9B%A3%E9%96%A2%E5%B9%B4%E5%8F%B7-%E4%B8%96%E7%95%8C%E5%8F%B2%E3%83%88%E3%83%AC%E3%83%BC%E3%83%8B%E3%83%B3%E3%82%B0/id6776702626",
    },
    {
      photo: "images/map-product-photo.jpg",
      icon: "images/map-product-icon.png",
      name: ["世界史都市マップ"],
      caption:
        "約480の都市をタップすると、その都市で起きた出来事が年表で出る。位置を当てる地図ゲッサーや週替わりランキングも。年号アプリと行き来して「いつ」と「どこで」をセットで。",
      date: "2026年11月13日リリース",
      href: "https://apps.apple.com/jp/app/id6832856543",
    },
  ];

  // 横にスライドして見る（2026-11-15）。下の点は今見ているカード
  const [active, setActive] = React.useState(0);
  const sliderRef = React.useRef(null);
  const onScroll = () => {
    const el = sliderRef.current;
    if (!el) return;
    const cards = [...el.children];
    const mid = el.scrollLeft + el.clientWidth / 2;
    const i = cards.reduce((best, c, idx) => Math.abs(c.offsetLeft + c.offsetWidth / 2 - mid) < Math.abs(cards[best].offsetLeft + cards[best].offsetWidth / 2 - mid) ? idx : best, 0);
    setActive(i);
  };
  const goTo = (i) => {
    const el = sliderRef.current, c = el && el.children[i];
    if (c) el.scrollTo({ left: c.offsetLeft - (el.clientWidth - c.offsetWidth) / 2, behavior: "smooth" });
  };

  return (
    <section className="product" id="product">
      <ProductStretchTitle />

      <div className="product-body">
        <div className="product-cards">
          <div className="product-slider" ref={sliderRef} onScroll={onScroll}>
            {products.map((p, i) => (
              <ProductCard key={i} {...p} />
            ))}
          </div>
          <div className="product-dots">
            {products.map((_, i) => (
              <button key={i} className={i === active ? "active" : ""} aria-label={`${i + 1}枚目`} onClick={() => goTo(i)} />
            ))}
          </div>
          <p className="product-note">他にも現在開発中です！</p>
        </div>
      </div>
    </section>
  );
}
