import Header from '../../components/Header/Header';
import logo from '../../assets/meld-logo.png';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.homeRoot}>
      <div className="container">
        <Header page="home" />
        <div className={styles.wrapper}>
          <img className={styles.logo} src={logo} alt="" />
          <p className={styles.title}>
            Keep an eye on your pet <br /> when you are away.
          </p>
          <div>
            <p className={styles.subtitle}>Powered by science.</p>
            <p className={styles.subtitle}>Coming soon.</p>
          </div>
          <div className={styles.inputWrap}>
            <input
              className={styles.mailInput}
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
            />
            <button className={styles.submBtn}>Join Waitlist</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
