function WaveUnderline({ color = "#8b3fc9", width = 260 }) {
  return (
    <svg
      className="wave-underline"
      style={{ width }}
      viewBox="0 0 260 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="6" cy="10" r="3.5" fill={color} />
      <line
        x1="18"
        y1="10"
        x2="258"
        y2="10"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeOpacity="0.85"
      />
    </svg>
  );
}
