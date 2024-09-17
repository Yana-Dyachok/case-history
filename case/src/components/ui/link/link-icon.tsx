import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import styles from './link.module.css';

interface LinkTemplateProps {
  to: string;
  /* eslint-disable react/require-default-props */
  children?: React.ReactNode;
  /* eslint-disable react/require-default-props */
  className?: string;
}

function LinkTemplateIcon({
  to,
  children = null,
  className = '',
}: LinkTemplateProps) {
  const location = useLocation();
  const segments = location.pathname.split('/');
  const isActiveLink = `/${segments[1]}` === to;

  return (
    <RouterLink to={to} className={styles.linkBlock}>
      <div
        className={`${styles.iconHeader} ${className} ${isActiveLink ? styles.activeLink : ''}`}
      />
      <span
        className={`${styles.textLink} ${isActiveLink ? styles.activeLink : ''}`}
      >
        {children}
      </span>
    </RouterLink>
  );
}

export default LinkTemplateIcon;
