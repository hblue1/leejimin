import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { asset } from "@/lib/asset";
import styles from "./Works.module.css";
import filament from "@/assets/img/filament.png";
import yjel from "@/assets/img/yjel.png";
import lamp from "@/assets/img/lamp.png";
import jqueryLogo from "@/assets/img/jquery-logo.png";
import idclinicLogo from "@/assets/img/idclinic-logo.svg";
import idclinicGlobalLogo from "@/assets/img/idclinic-global-logo.svg";

type Work = {
  /** 호버 시 보이는 문구 */
  label: string;
  href: string;
  logo: StaticImageData;
  alt: string;
  logoWidth: string;
};

/** 작업물 카드 — 2개씩 엇갈림 배치. 카드 번호(Project N)는 순서대로 자동 부여 */
const ROWS: Work[][] = [
  [
    { label: "React", href: "https://idclinic-jm.vercel.app/", logo: idclinicLogo, alt: "id Clinic 리뉴얼 사이트", logoWidth: "42%" },
    { label: "React", href: "https://old-idclinic-jm.vercel.app/", logo: idclinicGlobalLogo, alt: "id Clinic 글로벌 사이트", logoWidth: "48%" },
  ],
  [
    { label: "godo1", href: "http://filamentkorea.com/", logo: filament, alt: "필라멘트", logoWidth: "55%" },
    { label: "godo2", href: "http://yjinel.com/", logo: yjel, alt: "영진이엘", logoWidth: "70%" },
  ],
  [
    { label: "godo3", href: "https://www.lampohm.com/", logo: lamp, alt: "램프옴", logoWidth: "60%" },
    { label: "Web", href: asset("/legacy/html/jQuery/index.html"), logo: jqueryLogo, alt: "jQuery 웹 작업물", logoWidth: "90%" },
  ],
];

function WorkCard({
  work,
  no,
  side,
  className,
}: {
  work: Work;
  no: number;
  side: "left" | "right";
  className: string;
}) {
  return (
    <Reveal
      from={side}
      distance={200}
      duration={side === "left" ? 700 : 900}
      delay={side === "left" ? 0 : 200}
      className={className}
    >
      <a
        className={styles.card}
        href={work.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Project ${no} - ${work.alt} (새 창)`}
      >
        <span className={styles.click} aria-hidden="true">
          Project {no}
        </span>
        <Image
          src={work.logo}
          alt={work.alt}
          className={styles.logo}
          style={{ width: work.logoWidth, maxWidth: work.logo.width }}
        />
        <span className={styles.label} aria-hidden="true">
          {work.label}
        </span>
      </a>
    </Reveal>
  );
}

export function Works() {
  return (
    <>
      <Reveal from="up" distance={300} duration={700} className={styles.m2}>
        <section className={styles.roles} aria-label="Roles">
          <h3>Web Design</h3>
          <h3>Web Publishing</h3>
          <h3>Development</h3>
          <Link href="/guide/" target="_blank" prefetch={false} className={styles.guide}>
            Publishing Guide
          </Link>
        </section>
      </Reveal>

      {ROWS.map((row, i) => (
        <section
          key={i}
          className={`${styles.row} ${i === 0 ? styles.rowFirst : ""} ${
            i === ROWS.length - 1 ? styles.rowLast : ""
          }`}
          aria-label={`작업물 ${i + 1}`}
        >
          <WorkCard
            work={row[0]}
            no={i * 2 + 1}
            side="left"
            className={styles.w1}
          />
          <WorkCard
            work={row[1]}
            no={i * 2 + 2}
            side="right"
            className={styles.w2}
          />
        </section>
      ))}
    </>
  );
}
