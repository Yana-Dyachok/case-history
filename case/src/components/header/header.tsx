import { MouseEvent, useState } from 'react';
import LinkTemplateIcon from '../ui/link/link-icon';
import styles from './header.module.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) {
      closeMenu();
    }
  };

  return (
    <header className={styles.headerMain}>
      <div className={styles.wrapper}>
        <LinkTemplateIcon to="/" className={styles.iconMain} />
        <button
          className={styles.burgerMenu}
          onClick={toggleMenu}
          type="button"
          aria-label="burger"
        >
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
        {/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */}
        <nav
          className={
            isMenuOpen ? `${styles.navMain} ${styles.open}` : styles.navMain
          }
          onClick={handleNavClick}
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
          <LinkTemplateIcon to="/diagnosis" className={styles.iconDiagnostic}>
            Діагностика
          </LinkTemplateIcon>
          <LinkTemplateIcon to="/consultations" className={styles.iconDoctors}>
            Лікарі
          </LinkTemplateIcon>
          <LinkTemplateIcon to="/treatment" className={styles.iconTreatment}>
            Лікування
          </LinkTemplateIcon>
        </nav>
      </div>
    </header>
  );
}

export default Header;
