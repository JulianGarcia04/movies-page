"use client";

import React, { useRef, useCallback, useState, CSSProperties } from "react";

interface ScrollableContentProps {
  children: React.ReactNode;
  onReachEnd?: () => void;
  threshold?: number;
  className?: string;
  style?: CSSProperties;
  horizontal?: boolean;
}

const ScrollableContent: React.FC<ScrollableContentProps> = ({
  children,
  onReachEnd,
  threshold = 20,
  className,
  style,
  horizontal,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    let isReachingEnd: boolean;
    if (!horizontal) {
      const scrollHeight = container.scrollHeight;
      const scrollPosition = container.scrollTop + container.clientHeight;
      isReachingEnd = scrollHeight - scrollPosition <= threshold;
    } else {
      const scrollWidth = container.scrollWidth;
      const scrollPosition = container.scrollLeft + container.clientWidth;
      isReachingEnd = scrollWidth - scrollPosition <= threshold;
    }

    if (isReachingEnd && !isAtEnd) {
      setIsAtEnd(true);
      onReachEnd?.();
    } else if (!isReachingEnd && isAtEnd) {
      setIsAtEnd(false);
    }
  }, [threshold, isAtEnd, onReachEnd]);

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      className={className}
      style={
        horizontal
          ? {
              overflowX: "auto",
              ...style,
            }
          : {
              overflowY: "auto",
              ...style,
            }
      }
    >
      {children}
    </div>
  );
};

export default ScrollableContent;
