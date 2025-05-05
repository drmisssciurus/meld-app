import { useEffect, useState } from 'react';
import Navigation from '../Navigation/Navigation';
import styles from './Header.module.css';
import logo from '../../assets/meld-logo.png';

type HeaderProps = {
  sections: {
    publications: React.RefObject<HTMLDivElement | null>;
    people: React.RefObject<HTMLDivElement | null>;
    contact: React.RefObject<HTMLDivElement | null>;
  };
};

function Header({ sections }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 660);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 660);
      if (window.innerWidth >= 660) setMenuOpen(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (section: keyof typeof sections) => {
    setMenuOpen(false);
    const scrollAction = () => {
      sections[section]?.current?.scrollIntoView({ behavior: 'smooth' });
    };

    if (isMobile) {
      setTimeout(() => {
        scrollAction();
      }, 200);
    } else {
      scrollAction();
    }
  };

  return (
    <header>
      <div className={styles.headerContainer}>
        <div className={styles.headerWrapper}>
          <img className={styles.logo} src={logo} alt="Logo" />
          {!isMobile && <Navigation onNavigate={scrollToSection} />}
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
          <Navigation onNavigate={scrollToSection} />
        </div>
      )}
    </header>
  );
}

export default Header;
