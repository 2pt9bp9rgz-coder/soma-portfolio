function highlightFirstLetters(text, className = "title-first-letter") {
  return text.split(" ").flatMap((word, i) => {
    const prefix = i > 0 ? [" "] : [];
    if (!word) return prefix;
    return [
      ...prefix,
      <span className={className} key={`fl-${i}`}>
        {word[0]}
      </span>,
      word.slice(1),
    ];
  });
}
