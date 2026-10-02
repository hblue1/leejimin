import Image from "next/image";
import { Reveal } from "./Reveal";
import { DESIGN_GROUPS } from "./designWorks.data";
import styles from "./DesignWorks.module.css";

/** 디자인 작업물 갤러리 (기존 .bot1 — Design Barog Clinic) */
export function DesignWorks() {
  return (
    <Reveal from="left" distance={300} duration={1200} className={styles.bot1}>
      <section aria-labelledby="design-title">
        <h2 id="design-title" className={styles.title}>
          Design Barog Clinic
        </h2>
        {DESIGN_GROUPS.map((group) => (
          <div key={group.title} className={styles.group}>
            <h3 className={styles.groupTitle}>{group.title}</h3>
            <ul className={`${styles.grid} ${styles[group.variant]}`}>
              {group.images.map((img) => (
                <li key={img.alt}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    sizes="(max-width: 750px) 50vw, 20vw"
                    loading="lazy"
                  />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </Reveal>
  );
}
