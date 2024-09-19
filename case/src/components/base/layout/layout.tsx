import { Outlet } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import Path from '../../ui/path/path';
import useScrollTo from '../../../utils/scroll-to';
import styles from './layout.module.css';

function Layout() {
  const { scrollToTop } = useScrollTo();
  const [ref, inView] = useInView({
    threshold: 1,
    triggerOnce: false,
  });

  return (
    <>
      <Header />
      <main className={styles.container}>
        <Path />
        <Outlet />
        <div ref={ref} />
        <button
          type="button"
          aria-label="scroll-button"
          onClick={scrollToTop}
          className={`${styles.scrollTo} ${inView ? styles.show : ''}`}
        />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
