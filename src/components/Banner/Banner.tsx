import { useNavigate } from 'react-router-dom';
import styles from './Banner.module.css';

function Banner() {
  const navigate = useNavigate();
  return (
    <div className={styles.bannerContainer}>
      <h2 className={styles.bannerTitle}>
        Multi-animal Ensemble
        <br /> Landmark Detector
      </h2>
      <p>
        Multi-animal Ensemble Landmark Detector (MELD) is an AI-driven tool for
        accurately detecting and tracking animal facial landmarks. Currently, it
        supports cats' and dogs' facial landmark schemas grounded in AnimalFACS.
      </p>
      <p>
        You can use MELD to detect facial landmarks on videos in your browser
        with no additional installments needed!
      </p>
      <button className={styles.btnTry} onClick={() => navigate('/form')}>
        Try now!
      </button>
    </div>
  );
}

export default Banner;
