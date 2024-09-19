import { Outlet } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';
import Path from '../ui/path/path';
import styles from './layout.module.css';

function Layout() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <Path />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
