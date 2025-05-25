import { useEffect, useState } from 'react';
import styles from './Header.module.css';
import logo from '../../assets/meld-logo.png';
import { useNavigate } from 'react-router-dom';

type HeaderProps = {
  page: 'home' | 'form' | 'results';
  sections?: {
    publications?: React.RefObject<HTMLDivElement | null>;
    people?: React.RefObject<HTMLDivElement | null>;
    contact?: React.RefObject<HTMLDivElement | null>;
  };
};

function Header({ page, sections }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 660);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 660);
      if (window.innerWidth >= 660) setMenuOpen(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (section: keyof NonNullable<typeof sections>) => {
    sections?.[section]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems =
    page === 'home'
      ? [
          { label: 'Home', action: () => navigate('/') },
          {
            label: 'Publications',
            action: () => scrollToSection('publications'),
          },
          { label: 'People', action: () => scrollToSection('people') },
          { label: 'Contact Us', action: () => scrollToSection('contact') },
        ]
      : [
          { label: 'Home', action: () => navigate('/') },
          {
            label: 'See Results',
            action: () => console.log('See Results Clicked'),
          },
        ];

  return (
    <header>
      <div className={styles.headerContainer}>
        <div className={styles.headerWrapper}>
          <img className={styles.logo} src={logo} alt="Logo" />
          {!isMobile && (
            <nav className={styles.navContainer}>
              {navItems.map(({ label, action }) => (
                <div key={label} className={styles.navItems} onClick={action}>
                  {label}
                </div>
              ))}
            </nav>
          )}
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
          {page === 'home' && (
            <button className={styles.btn} onClick={() => navigate('/form')}>
              Run meld
            </button>
          )}
        </div>
      </div>

      {isMobile && (
        <div
          className={`${styles.mobileNav} ${
            menuOpen ? styles.mobileNavOpen : ''
          }`}
        >
          {navItems.map(({ label, action }) => (
            <div
              key={label}
              className={styles.navItems}
              onClick={() => {
                action();
                setMenuOpen(false);
              }}
            >
              {label}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;
