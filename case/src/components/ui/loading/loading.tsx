import styles from './loading.module.css';

function Loading() {
  return (
    <section className={styles.rectSpinner}>
      <div className={styles.loadingContainer}>
        <div className={styles.rect} />
        <div className={styles.rect} />
        <div className={styles.rect} />
        <div className={styles.rect} />
        <div className={styles.rect} />
        <div className={styles.rect} />
        <div className={styles.rect} />
        <div className={styles.rect} />
        <div className={styles.rect} />
        <div className={styles.rect} />
        <div className={styles.rect} />
        <div className={styles.rect} />
        <div className={styles.rect} />
        <div className={styles.rect} />
        <div className={styles.rect} />
        <div className={styles.rect} />
      </div>
    </section>
  );
}

export default Loading;
// main idea was taken from https://codepen.io/timhilton/pen/ZEVzRgG
