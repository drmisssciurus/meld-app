import { useEffect, useState } from 'react';
import styles from './Header.module.css';
import logo from '../../assets/meld-logo.png';
import { useNavigate } from 'react-router-dom';
import { getCookie, setCookie } from '../../utils/cookies';

type HeaderProps = {
  page: 'home' | 'form' | 'results' | 'not_found' | 'faq' | 'howto';
  sections?: {
    publications?: React.RefObject<HTMLDivElement | null>;
    people?: React.RefObject<HTMLDivElement | null>;
    contact?: React.RefObject<HTMLDivElement | null>;
    usingTheModel?: React.RefObject<HTMLDivElement | null>;
    results?: React.RefObject<HTMLDivElement | null>;
    schema?: React.RefObject<HTMLDivElement | null>;
  };
};

const MOBILE_BREAKPOINT = 941;

function Header({ page, sections }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < MOBILE_BREAKPOINT
  );
  const navigate = useNavigate();

  const url = import.meta.env.VITE_API_BASE_URL;

  const handleStart = async () => {
    const existingSessionId = getCookie('session_id');

    if (existingSessionId) {
      // console.log('Session already exists: ', existingSessionId);
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
        // console.log('Session started: ', data);
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
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
      if (window.innerWidth >= MOBILE_BREAKPOINT) setMenuOpen(false);
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
          // { label: 'Landmarks', action: () => navigate('/landmarks') },
          {
            label: 'Publications',
            action: () => scrollToSection('publications'),
          },
          { label: 'People', action: () => scrollToSection('people') },
          { label: 'Contact Us', action: () => scrollToSection('contact') },
          { label: 'FAQ', action: () => navigate('/faq') },
        ]
      : page === 'not_found'
      ? [
          { label: 'Landmarks', action: () => navigate('/landmarks') },
          { label: 'Form', action: () => navigate('/form') },
          { label: 'See Results', action: () => navigate('/results') },
        ]
      : page === 'faq'
      ? [{ label: 'Home', action: () => navigate('/') }]
      : page === 'howto'
      ? [
          { label: 'Home', action: () => navigate('/') },

          {
            label: 'Using The Model',
            action: () => scrollToSection('usingTheModel'),
          },
          { label: 'Results', action: () => scrollToSection('results') },
          { label: 'Schema', action: () => scrollToSection('schema') },
        ]
      : [
          { label: 'Home', action: () => navigate('/') },

          { label: 'See Results', action: () => navigate('/results') },
          { label: 'How To Meld', action: () => navigate('/how_to') },
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
          {(page === 'home' || page === 'faq' || page === 'howto') && (
            // <button
            //   className={styles.btn}
            //   onClick={() => navigate('/construction')}
            // >
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
