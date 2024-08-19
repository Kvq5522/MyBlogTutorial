"use client";

import { useEffect } from "react";

interface ScrollToBottomDectectionProps {
  onScrollToBottom: () => void;
}

const ScrollToBottomDectection = (props: ScrollToBottomDectectionProps) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;

      if (Math.round(documentHeight - windowHeight - scrollY) == 0) {
        props.onScrollToBottom();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
};

export default ScrollToBottomDectection;
