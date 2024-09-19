import { Link } from 'react-router-dom';
import styles from './footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Link to="tel:" className={`${styles.icon} ${styles.iconPhone}`} />
      <Link
        to="https://t.me/Oksirets"
        className={`${styles.icon} ${styles.iconTelegram}`}
      />
      <Link to="mailto:" className={`${styles.icon} ${styles.iconMail}`} />
    </footer>
  );
}

export default Footer;
