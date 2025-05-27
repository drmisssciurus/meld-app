import styles from './Footer.module.css';
import logo from '../../assets/tech-animals-logo.png';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();
  return (
    <div className={styles.footerWrapper}>
      <p> 2025 powered by Tech4Animals</p>
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
