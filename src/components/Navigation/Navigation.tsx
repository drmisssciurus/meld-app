import styles from './Navigation.module.css';

type NavigationProps = {
  onNavigate?: (section: 'publications' | 'people' | 'contact') => void;
};

function Navigation({ onNavigate }: NavigationProps) {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.navItems}>Home</div>
      <div
        className={styles.navItems}
        onClick={() => onNavigate?.('publications')}
      >
        Publications
      </div>
      <div className={styles.navItems} onClick={() => onNavigate?.('people')}>
        People
      </div>
      <div className={styles.navItems} onClick={() => onNavigate?.('contact')}>
        Contact
      </div>
    </nav>
  );
}

export default Navigation;
