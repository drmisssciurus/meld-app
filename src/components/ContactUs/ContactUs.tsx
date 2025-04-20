import styles from './ContactUs.module.css';

function ContactUs() {
  return (
    <div className="container">
      <div className={styles.contactUs}>
        <div className={styles.formDescription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          laudantium vitae at sapiente delectus error, reprehenderit, placeat
          nemo debitis temporibus vel. Ut error aperiam saepe totam maxime
          reprehenderit, tempore sapiente?
        </div>
        <form action="" className={styles.form}>
          <div>feedback form</div>
          <div className={styles.inputNameWrapper}>
            <input
              type="text"
              placeholder="Your name"
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Last name"
              className={styles.input}
            />
          </div>
          <div className={styles.inputWrapper}>
            <input
              type="mail"
              placeholder="Your email"
              className={styles.input}
            />
          </div>
          <div className={styles.inputWrapper}>
            <input
              type="text"
              placeholder="Your message"
              className={styles.input}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
