import { Outlet, useMatches } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import Path from '../../ui/path/path';
import useScrollTo from '../../../utils/scroll-to';
import styles from './layout.module.css';

function Layout() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const { scrollToTop } = useScrollTo();
  const matches = useMatches();

  const isErrorPage = matches.some(
    (match) => (match.handle as { hidePath?: boolean })?.hidePath,
  );

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
      {!isErrorPage && <Header />}
      <main className={styles.container}>
        {!isErrorPage && <Path />}
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
      {!isErrorPage && <Footer />}
    </div>
  );
}

export default Layout;
