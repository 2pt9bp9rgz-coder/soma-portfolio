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
  ];

  return (
    <section className="product" id="product">
      <ProductStretchTitle />

      <div className="product-body">
        <div className="product-cards">
          {products.map((p, i) => (
            <ProductCard key={i} {...p} />
          ))}
          <p className="product-note">他にも現在開発中です！</p>
        </div>
      </div>
    </section>
  );
}
