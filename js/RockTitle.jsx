function RockTitle({ as: Tag = "p", className = "", children }) {
  const ref = React.useRef(null);
  const [played, setPlayed] = React.useState(false);

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

  return (
    <div className={`rock-title-wrap${played ? " is-played" : ""}`} ref={ref}>
      <Tag className={`rock-title ${className}`} data-text={children}>
        {children}
      </Tag>
    </div>
  );
}
