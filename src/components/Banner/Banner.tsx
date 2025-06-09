import { useNavigate } from 'react-router-dom';
import styles from './Banner.module.css';
import { getCookie, setCookie } from '../../utils/cookies';

function Banner() {
  const navigate = useNavigate();

  const url = import.meta.env.VITE_API_BASE_URL;

  const handleStart = async () => {
    const existingSessionId = getCookie('session_id');

    if (existingSessionId) {
      console.log('Session already exist: ', existingSessionId);
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
        console.log('New session created: ', data.session_id);
        navigate('/form');
      } else {
        console.error('Failed to create session: ', data);
      }
    } catch (err) {
      console.error('Failed to create session: ', err);
    }
  };
  return (
    <div className={styles.bannerContainer}>
      <h2 className={styles.bannerTitle}>
        Multi-animal Ensemble
        <br /> Landmark Detector
      </h2>
      <p className={styles.text}>
        Multi-animal Ensemble Landmark Detector (MELD) is an AI-driven tool for
        accurately detecting and tracking animal facial landmarks. Currently, it
        supports cats' and dogs' facial landmark schemas grounded in AnimalFACS.
      </p>
      <p className={styles.text}>
        You can use MELD to detect facial landmarks on videos in your browser
        with no additional installments needed!
      </p>
      <button className={styles.btnTry} onClick={handleStart}>
        Try now!
      </button>
    </div>
  );
}

export default Banner;
