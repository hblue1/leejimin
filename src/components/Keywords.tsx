"use client";

import { useEffect, useRef } from "react";
import { Reveal } from "./Reveal";
import { asset } from "@/lib/asset";
import styles from "./Keywords.module.css";

/**
 * 키워드 섹션 (기존 .bgm) — 배경 영상 + 마우스 위치에 따라 움직이는 해시태그.
 *
 * 처음에는 가운데에 모여 있다가, 마우스가 움직이면 기존과 같은 비율(x/60, y/30)로
 * 퍼지며 따라 움직인다. 기준 위치는 기존 사이트의 실제 표시 위치를 섹션 기준
 * 좌표로 옮긴 값이며, 화면 폭에 맞춰 축소한다(모바일 대응).
 */
const TAGS = [
  { label: "#웹 접근성", base: [-1, -30], dir: [-1, -1] },
  { label: "#웹 표준", base: [150, 70], dir: [1, 1] },
  { label: "#반응형 웹", base: [-150, -10], dir: [1, -1] },
  { label: "#디자인", base: [-1, 150], dir: [1, -1] },
] as const;

export function Keywords() {
  const boxRef = useRef<HTMLDivElement>(null);
  const tagRefs = useRef<(HTMLHeadingElement | null)[]>([]);

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;
    let frame = 0;
    let mx = 0;
    let my = 0;

    const apply = () => {
      frame = 0;
      const k = Math.min(1, box.clientWidth / 1100);
      TAGS.forEach((t, i) => {
        const el = tagRefs.current[i];
        if (!el) return;
        const x = t.base[0] * k + (t.dir[0] * mx) / 60;
        const y = t.base[1] * k + (t.dir[1] * my) / 30;
        el.style.transform = `translate(${x}px, ${y}px)`;
      });
    };
    const onMove = (e: PointerEvent) => {
      const r = box.getBoundingClientRect();
      mx = e.clientX - r.left;
      my = e.clientY - r.top;
      moved = true;
      if (!frame) frame = requestAnimationFrame(apply);
    };
    let moved = false;
    const onResize = () => {
      if (moved && !frame) frame = requestAnimationFrame(apply);
    };

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduce) box.addEventListener("pointermove", onMove);
    window.addEventListener("resize", onResize);
    return () => {
      box.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <Reveal from="left" distance={300} duration={1200} className={styles.wrap}>
      <div ref={boxRef} className={styles.box}>
        <video
          className={styles.video}
          src={asset("/video/typing.mov")}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        {TAGS.map((t, i) => (
          <h3
            key={t.label}
            ref={(el) => {
              tagRefs.current[i] = el;
            }}
            className={styles.tag}
          >
            {t.label}
          </h3>
        ))}
      </div>
    </Reveal>
  );
}
