import Image from "next/image";
import { Reveal } from "./Reveal";
import styles from "./Outro.module.css";
import mx from "@/assets/img/mx.png";

/** 마지막 인사 (기존 .bot5.la) */
export function Outro() {
  return (
    <Reveal from="up" distance={200} duration={1300} className={styles.la}>
      <div className={styles.titleWrap}>
        <Image src={mx} alt="" className={styles.mx} aria-hidden="true" />
        <h2 className={styles.title}>Thank You!</h2>
      </div>
      <p className={styles.text}>I hope everything will come out all right !</p>
    </Reveal>
  );
}
