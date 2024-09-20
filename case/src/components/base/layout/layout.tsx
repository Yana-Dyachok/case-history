import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import Path from '../../ui/path/path';
import useScrollTo from '../../../utils/scroll-to';
import styles from './layout.module.css';

function Layout() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const { scrollToTop } = useScrollTo();
  useEffect(() => {
    let scrollTimeout: number | undefined;

    const checkScroll = () => {
      scrollTimeout = requestAnimationFrame(() => {
        if (window.scrollY > 300) {
          setShowTopBtn(true);
        } else {
          setShowTopBtn(false);
        }
        checkScroll();
      });
    };

    checkScroll();

    return () => {
      if (scrollTimeout) {
        cancelAnimationFrame(scrollTimeout);
      }
    };
  }, []);

  return (
    <div>
      <Header />
      <main className={styles.container}>
        <Path />
        <Outlet />
        {showTopBtn && (
          <button
            type="button"
            aria-label="scroll-button"
            onClick={scrollToTop}
            className={styles.scrollTo}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
