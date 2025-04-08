import { useEffect, useState } from 'react';
import Navigation from '../Navigation/Navigation';
import styles from './Header.module.css';
import logo from '/public/assets/meld-logo.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 580);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 580);
      if (window.innerWidth >= 580) setMenuOpen(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header>
      <div className={styles.headerContainer}>
        <div className={styles.headerWrapper}>
          <img className={styles.logo} src={logo} alt="Logo" />
          {!isMobile && <Navigation />}
        </div>

        <div className={styles.rightSide}>
          {isMobile && (
            <button
              className={`${styles.burger} ${menuOpen ? styles.open : ''}`}
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          )}
          <button className={styles.btn}>Run meld</button>
        </div>
      </div>
      {isMobile && (
        <div
          className={`${styles.mobileNav} ${
            menuOpen ? styles.mobileNavOpen : ''
          }`}
        >
          <Navigation onLinkClick={() => setMenuOpen(false)} />
        </div>
      )}
    </header>
  );
}

export default Header;
