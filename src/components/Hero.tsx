import styles from "./Hero.module.css";

/** 상단 헤더 + 메인 비주얼 (기존 header / .top) */
export function Hero() {
  return (
    <>
      <header className={styles.header}>
        <span className={styles.brand}>Portfolio</span>
      </header>
      <section className={styles.top} aria-label="소개">
        <h1 className={styles.title}>
          Lee Ji Min
          <br />
          Design&amp;Publishing
          <br />
          Portfolio.
        </h1>
        <div className={styles.bg} role="presentation" />
      </section>
    </>
  );
}
