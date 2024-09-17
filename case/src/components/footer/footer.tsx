import { Link } from 'react-router-dom';
import styles from './footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Link to="https://t.me/Oksirets" className={styles.iconTelegram} />
    </footer>
  );
}

export default Footer;
