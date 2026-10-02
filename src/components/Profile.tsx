import Image from "next/image";
import { Reveal } from "./Reveal";
import styles from "./Profile.module.css";
import one from "@/assets/img/one.png";
import tw from "@/assets/img/tw.png";
import tr from "@/assets/img/tr.png";
import face from "@/assets/img/stu4.webp";
import skillsArt from "@/assets/img/stu.webp";
import workArt from "@/assets/img/stu3.webp";

const SKILLS = [
  "Photoshop & Illustrator",
  "HTML5 & CSS3",
  "Javascript",
  "jQuery",
  "Godo platform",
];

const EXPERIENCE = ["Youngjin EL", "Pine innovation", "Barog clinic"];

/** 프로필 3단 (기존 .pf — Profile / Skills / Work experience) */
export function Profile() {
  return (
    <Reveal as="div" from="down" distance={200} duration={1200} className={styles.pf}>
      <section className={`${styles.col} ${styles.p1}`}>
        <Image src={one} alt="" className={styles.num} aria-hidden="true" />
        <h2 className={styles.heading}>Profile</h2>
        <strong className={styles.name}>Lee Ji Min</strong>
        <p className={styles.info}>1990.03.08</p>
        <p className={styles.info}>010-3647-3771</p>
        <p className={styles.info}>
          <a href="mailto:dlwlals1234@naver.com">dlwlals1234@naver.com</a>
        </p>
        <Image src={face} alt="프로필 일러스트" className={styles.faceImg} />
      </section>

      <section className={`${styles.col} ${styles.p2}`}>
        <Image src={tw} alt="" className={styles.num} aria-hidden="true" />
        <h2 className={styles.heading}>Skills</h2>
        <ul className={styles.list}>
          {SKILLS.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <Image src={skillsArt} alt="" className={styles.skillsImg} aria-hidden="true" />
      </section>

      <section className={`${styles.col} ${styles.p3}`}>
        <Image src={tr} alt="" className={styles.num} aria-hidden="true" />
        <h2 className={styles.heading}>Work experience</h2>
        <ul className={`${styles.list} ${styles.work}`}>
          {EXPERIENCE.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
        <Image src={workArt} alt="" className={styles.workImg} aria-hidden="true" />
      </section>
    </Reveal>
  );
}
