import React from 'react';
import { Link } from 'react-router-dom';
import styles from './link.module.css';

interface LinkTemplateProps {
  to: string;
  children: React.ReactNode;
}

function LinkTemplate({ to, children }: LinkTemplateProps) {
  return (
    <Link to={to} className={styles.link}>
      {children}
    </Link>
  );
}

export default LinkTemplate;
