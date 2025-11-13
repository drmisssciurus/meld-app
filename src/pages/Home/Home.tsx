import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo-home.webp';
import styles from './Home.module.css';
import { useState } from 'react';

function Home() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const handleSubmit = async () => {
    if (!email) {
      alert('Please enter your email');
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append('name', 'Waitlist user');
    formData.append('lastname', 'Homepage');
    formData.append('email', email);
    formData.append('message', 'User wants to join waitlist from homepage');

    try {
      const res = await fetch(`${API_BASE_URL}/feedback/`, {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        throw new Error('Failed to submit');
      }

      alert('Thank you! You have joined the waitlist.');
      setEmail('');
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.homeRoot}>
      <div className="container">
        <div className={styles.landmarksWrapper}>
          <div
            className={styles.landmarks}
            onClick={() => navigate('/landmarks')}
          >
            GO TO LANDMARKS
          </div>
        </div>
        <div className={styles.wrapper}>
          <img className={styles.logo} src={logo} alt="" />
          <p className={styles.title}>
            Keep an eye on your pet <br /> when you are away.
          </p>
          <div>
            <p className={styles.subtitle}>Powered by science. Coming soon.</p>
          </div>
          <div className={styles.inputWrap}>
            <input
              className={styles.mailInput}
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className={styles.submBtn}
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Join Waitlist'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
