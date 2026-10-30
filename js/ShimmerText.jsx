function ShimmerText({ as: Tag = "span", className = "", children, ...rest }) {
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
    const el = ref.current;
    if (!el || !played) return;
    const handleEnd = () => setDone(true);
    el.addEventListener("animationend", handleEnd);
    return () => el.removeEventListener("animationend", handleEnd);
  }, [played]);

  const classes = [
    "shimmer-text",
    played ? "shimmer-text--play" : "",
    done ? "shimmer-text--done" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag ref={ref} className={classes} {...rest}>
      {children}
    </Tag>
  );
}
