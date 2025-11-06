import React, { useEffect, useState } from "react";

export function TypingText({ text, speed = 80, className = "" }) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return <h1 className={`whitespace-nowrap ${className}`}>{displayedText}</h1>;
}