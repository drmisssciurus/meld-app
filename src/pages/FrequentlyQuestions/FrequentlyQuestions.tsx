import { useState } from 'react';
import styles from './FrequentlyQuestions.module.css';

const faqData = [
  {
    id: 'q1',
    question: 'What is MELD?',
    answer: 'MELD is an AI-driven tool for detecting animal facial landmarks.',
  },
  {
    id: 'q2',
    question: 'What animals are supported?',
    answer: 'Currently, cats and dogs.',
  },
  {
    id: 'q3',
    question:
      'I uploaded a video, but MELD didn’t detect any landmarks. What could be wrong?',
    answer:
      'Unsupported Species: MELD currently supports only cats or dogs. Faces of other animals, like horses or primates, won’t be recognised, leading to no detection or inconsistent results.Face Not Visible or Poor Angle: MELD needs a clear view of the face. If the face is turned away, blocked, or partially off-frame, detection fails. Use footage where the animal is mostly looking directly at the camera. Video Quality Issues: Low resolution, blurriness, motion blur, or poor lighting can hinder detection. Use higher-resolution footage or improve lighting.Incorrect Settings: Ensure the correct species model is selected in MELD. Using the wrong model can cause failure. Multiple Animals Confusion: Clumped animals or overlapping faces may confuse MELD. Try to isolate one to three animals per clip.Bug or Format Issue: Unsupported formats or codecs might cause issues. Convert videos to MP4 with H.264 codec.',
  },
];

function FrequentlyQuestions() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="container">
      <h2>FAQ</h2>
      {faqData.map((item) => (
        <div
          key={item.id}
          className={`${styles.accordion} ${
            openId === item.id ? styles.open : ''
          }`}
        >
          <div
            className={styles.accordionSummary}
            onClick={() => toggle(item.id)}
          >
            {item.question}
            <span className={styles.arrow}>
              {openId === item.id ? '▲' : '▼'}
            </span>
          </div>
          {openId === item.id && (
            <div className={styles.accordionDetails}>{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default FrequentlyQuestions;
