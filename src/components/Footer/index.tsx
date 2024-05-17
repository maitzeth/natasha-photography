import React from 'react';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.main}>
      <div>
        <p>© Natasha Villamizar - {new Date().getFullYear()}</p>
      </div>
      <div></div>
      <div>
        <p>Built with ❤️ by <a href="https://andreivan.me/" target="_blank" rel="noopener noreferrer">Andre Ivan</a></p>
      </div>
    </footer>
  )
}
