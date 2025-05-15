import { Ref, useEffect, useRef, useState } from 'react';
import styles from './ContactUs.module.css';

type ContactUsProps = {
  sectionRef?: Ref<HTMLDivElement>;
};

function getCSRFToken(): string | null {
  const match = document.cookie.match(/csrftoken=([^;]+)/);
  return match ? match[1] : null;
}

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

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      first_name: firstName,
      last_name: lastName,
      email,
      message,
    };

    try {
      const response = await fetch(`${API_BASE_URL}/feedback/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSuccess(true);
        setFirstName('');
        setLastName('');
        setEmail('');
        setMessage('');
      } else {
        const data = await response.json();
        alert(`Error: ${data.message || 'Failed to send feedback.'}`);
      }
    } catch (error) {
      alert('Network error. Try again later.');
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
                type="email"
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
