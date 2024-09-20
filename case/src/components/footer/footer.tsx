import { Link } from 'react-router-dom';
import styles from './footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Link
        to="tel:+380685557509"
        className={`${styles.icon} ${styles.iconPhone}`}
      />
      <Link
        to="https://t.me/Oksirets"
        className={`${styles.icon} ${styles.iconTelegram}`}
      />
      <Link
        to="mailto:kukharets1bs.17b@gmail.com"
        className={`${styles.icon} ${styles.iconMail}`}
      />
    </footer>
  );
}

export default Footer;
