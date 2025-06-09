import { useEffect, useState } from 'react';
import styles from './Header.module.css';
import logo from '../../assets/meld-logo.png';
import { useNavigate } from 'react-router-dom';
import { getCookie, setCookie } from '../../utils/cookies';

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

  const url = import.meta.env.VITE_API_BASE_URL;

  const handleStart = async () => {
    const existingSessionId = getCookie('session_id');

    if (existingSessionId) {
      console.log('Session already exists: ', existingSessionId);
      navigate('/form');
      return;
    }

    try {
      const res = await fetch(`${url}/session/`, {
        method: 'POST',
        credentials: 'include',
      });

      const data = await res.json();

      if (res.ok && data.session_id) {
        setCookie('session_id', data.session_id, 1);
        console.log('Session started: ', data);
        navigate('/form');
      } else {
        console.error('Failed create session: ', data);
      }
    } catch (err) {
      console.error('Failed to create session: ', err);
    }
  };

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
            action: () => navigate('/results'),
          },
        ];

  return (
    <header>
      <div className={styles.headerContainer}>
        <div className={styles.headerWrapper}>
          <img
            className={styles.logo}
            src={logo}
            alt="Logo"
            onClick={() => navigate('/')}
          />
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
            <button className={styles.btn} onClick={handleStart}>
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
