import { useEffect, useState } from 'react';
import styles from './ScrollToTopButton.module.css';
import Icon from '../Icons';

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return visible ? (
    <button
      className={styles.scrollButton}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <Icon name="arrowUp" size={34} />
    </button>
  ) : null;
}

export default ScrollToTopButton;
