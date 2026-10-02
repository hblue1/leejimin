"use client";

import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from "react";
import styles from "./Reveal.module.css";

type Direction = "up" | "down" | "left" | "right";

type Props = {
  children: ReactNode;
  /** 등장 시작 방향 — 기존 jQuery animate 의 시작 위치(top/left/right/bottom 오프셋)와 대응 */
  from?: Direction;
  /** 시작 오프셋(px) */
  distance?: number;
  /** 애니메이션 시간(ms) */
  duration?: number;
  /** 지연(ms) */
  delay?: number;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
};

/**
 * 스크롤 등장 애니메이션.
 *
 * 기존 사이트는 `$(window).scroll` 에서 스크롤 위치를 하드코딩(200, 1309, 2500…)해
 * 요소를 animate 했다. 화면 크기마다 위치가 달라 모바일에서 등장하지 않는 문제가
 * 있었으므로, 요소가 실제로 화면에 들어올 때(IntersectionObserver) 한 번 등장시킨다.
 */
export function Reveal({
  children,
  from = "up",
  distance = 100,
  duration = 900,
  delay = 0,
  as: Tag = "div",
  className,
  style,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const offset = {
    up: `0, ${distance}px`,
    down: `0, ${-distance}px`,
    left: `${-distance}px, 0`,
    right: `${distance}px, 0`,
  }[from];

  return (
    <Tag
      ref={ref}
      className={`${styles.reveal} ${shown ? styles.shown : ""} ${className ?? ""}`}
      style={
        {
          ...style,
          "--reveal-offset": offset,
          "--reveal-duration": `${duration}ms`,
          "--reveal-delay": `${delay}ms`,
        } as CSSProperties
      }
    >
      {children}
    </Tag>
  );
}
