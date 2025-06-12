import { useNavigate } from 'react-router-dom';
import styles from './Footer.module.css';
import logo from '../../assets/tech-animals-logo.png';

function Footer() {
  const navigate = useNavigate();
  return (
    <div className={styles.footerWrapper}>
      <p>
        ⓒ 2025 powered by
        <a
          href="https://www.tech4animals.org/"
          target="_blank"
          className={styles.link}
        >
          Tech4Animals
        </a>
      </p>
      <img
        className={styles.logo}
        src={logo}
        alt="Logo"
        onClick={() => navigate('/')}
      />
    </div>
  );
}

export default Footer;
