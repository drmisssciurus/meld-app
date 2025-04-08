import styles from './Navigation.module.css';

type NavigationProps = {
  onLinkClick?: () => void;
};

function Navigation({ onLinkClick }: NavigationProps) {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.navItems} onClick={onLinkClick}>
        Home
      </div>
      <div className={styles.navItems} onClick={onLinkClick}>
        Publications
      </div>
      <div className={styles.navItems} onClick={onLinkClick}>
        People
      </div>
      <div className={styles.navItems} onClick={onLinkClick}>
        Contact
      </div>
    </nav>
  );
}

export default Navigation;
