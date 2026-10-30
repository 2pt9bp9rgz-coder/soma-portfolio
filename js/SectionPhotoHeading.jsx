function SectionPhotoHeading({ photo, title, subtitle, square }) {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const classes = [
    "about-heading-mobile",
    square ? "about-heading-mobile--square" : "",
    visible ? "about-heading-mobile--visible" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} ref={ref}>
      <div className="about-heading-mobile-photo-wrap">
        <img className="about-heading-mobile-photo" src={photo} alt="" />
        <div className="about-heading-mobile-overlay" />
      </div>
      <div className="about-heading-mobile-text">
        <span className="about-heading-mobile-title">{highlightFirstLetters(title)}</span>
        <span className="about-heading-mobile-subtitle">{subtitle}</span>
      </div>
    </div>
  );
}
