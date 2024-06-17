import { useState } from 'react';
import LinkTemplateIcon from '../ui/link/link-icon';
import styles from './header.module.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.headerMain}>
      <LinkTemplateIcon to="/main" className={styles.iconMain} />
      <button className={styles.burgerMenu} onClick={toggleMenu} type="button">
        <div
          className={
            isMenuOpen
              ? `${styles.burgerIcon} ${styles.open}`
              : styles.burgerIcon
          }
        >
          <span className={styles.spanBurger} />
          <span className={styles.spanBurger} />
          <span className={styles.spanBurger} />
        </div>
      </button>
      <nav
        className={
          isMenuOpen ? `${styles.navMain} ${styles.open}` : styles.navMain
        }
      >
        <LinkTemplateIcon to="/anamnesis-vite" className={styles.iconVite}>
          Anamesis vite
        </LinkTemplateIcon>
        <LinkTemplateIcon to="/anamnesis-morbi" className={styles.iconMorbi}>
          Anamesis morbi
        </LinkTemplateIcon>
        <LinkTemplateIcon to="/analysis" className={styles.iconAnalysis}>
          Аналізи
        </LinkTemplateIcon>
        <LinkTemplateIcon to="/analysis" className={styles.iconDiagnostic}>
          Діагностика
        </LinkTemplateIcon>
        <LinkTemplateIcon to="/consultations" className={styles.iconDoctors}>
          Лікарі
        </LinkTemplateIcon>
        <LinkTemplateIcon to="/treatment" className={styles.iconTreatment}>
          Лікування
        </LinkTemplateIcon>
      </nav>
    </header>
  );
}

export default Header;
