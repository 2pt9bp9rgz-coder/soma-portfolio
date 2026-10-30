function ShootingStars() {
  const stars = [
    { top: "8%", left: "12%", angle: 25, dist: 260, duration: 5.5, delay: 0 },
    { top: "18%", left: "78%", angle: 20, dist: 300, duration: 7, delay: 2.2 },
    { top: "32%", left: "45%", angle: 30, dist: 220, duration: 6.2, delay: 4.4 },
    { top: "48%", left: "88%", angle: 22, dist: 320, duration: 8.5, delay: 1.2 },
    { top: "62%", left: "18%", angle: 28, dist: 240, duration: 6.8, delay: 5.6 },
    { top: "76%", left: "60%", angle: 18, dist: 260, duration: 7.4, delay: 3.4 },
    { top: "88%", left: "30%", angle: 26, dist: 280, duration: 9, delay: 6.5 },
  ];

  const pastelColors = ["#ff8fa3", "#ffb26b", "#e0c200", "#3ddc97", "#4fa8e8", "#a67bff", "#f56fc0"];

  const [pastel, setPastel] = React.useState(false);

  React.useEffect(() => {
    const el = document.getElementById("product");
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setPastel(entry.isIntersecting));
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="shooting-stars" aria-hidden="true">
      {stars.map((s, i) => (
        <span
          key={i}
          className="shooting-star-wrap"
          style={{ top: s.top, left: s.left, transform: `rotate(${s.angle}deg)` }}
        >
          <span
            className="shooting-star"
            style={{
              animationDuration: `${s.duration}s`,
              animationDelay: `${s.delay}s`,
              "--meteor-dist": `${s.dist}px`,
              "--star-color": pastel ? pastelColors[i % pastelColors.length] : "#fff",
            }}
          />
        </span>
      ))}
    </div>
  );
}
