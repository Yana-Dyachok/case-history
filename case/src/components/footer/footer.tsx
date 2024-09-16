import LinkTemplateIcon from '../ui/link/link-icon';
import styles from './footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <LinkTemplateIcon
        to="https://t.me/Oksirets"
        className={styles.iconTelegram}
      />
    </footer>
  );
}

export default Footer;
