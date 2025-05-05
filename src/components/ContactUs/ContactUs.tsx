import { Ref, useEffect, useRef, useState } from 'react';
import styles from './ContactUs.module.css';

type ContactUsProps = {
  sectionRef?: Ref<HTMLDivElement>;
};

function ContactUs({ sectionRef }: ContactUsProps) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [message]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new URLSearchParams();
    formData.append('name', `${firstName} ${lastName}`.trim());
    formData.append('email', email);
    formData.append('message', message);

    const response = await fetch('/contact/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    });
    if (response.ok) {
      setSuccess(true);
      setFirstName('');
      setLastName('');
      setEmail('');
      setMessage('');
    } else {
      alert('Error sending. Try later.');
    }
  };

  return (
    <div ref={sectionRef} className="container">
      <div className={styles.contactUs}>
        <div className={styles.formDescription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          laudantium vitae at sapiente delectus error, reprehenderit, placeat
          nemo debitis temporibus vel. Ut error aperiam saepe totam maxime
          reprehenderit, tempore sapiente?
        </div>
        {success ? (
          <div className={styles.successMessage}>
            Thank you for your message! We will get back to you shortly.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div>feedback form</div>
            <div className={styles.inputNameWrapper}>
              <input
                type="text"
                placeholder="First name"
                className={styles.input}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Last name"
                className={styles.input}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className={styles.inputWrapper}>
              <input
                type="mail"
                placeholder="Your email"
                className={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={styles.inputWrapper}>
              <textarea
                ref={textareaRef}
                placeholder="Your message"
                className={styles.input}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <button type="submit" className={styles.submitBtn}>
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ContactUs;
