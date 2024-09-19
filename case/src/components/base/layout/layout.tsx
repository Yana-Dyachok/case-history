import { Outlet } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import Path from '../../ui/path/path';
import useScrollTo from '../../../utils/scroll-to';
import styles from './layout.module.css';

function Layout() {
  const { scrollToTop } = useScrollTo();
  const [isVisible, setIsVisible] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      { threshold: [1] },
    );

    const currentScroll = scrollRef.current;

    if (currentScroll) {
      observer.observe(currentScroll);
    }

    return () => {
      if (currentScroll) {
        observer.unobserve(currentScroll);
      }
    };
  }, []);

  return (
    <div ref={scrollRef}>
      <Header />
      <main className={styles.container}>
        <Path />
        <Outlet />
        {isVisible && (
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
