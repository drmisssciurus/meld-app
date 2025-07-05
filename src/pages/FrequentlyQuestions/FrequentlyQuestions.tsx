import { useState } from 'react';
import styles from './FrequentlyQuestions.module.css';
import Header from '../../components/Header/Header';
import upArrow from '../../assets/icons/top-arrow.svg';
import bottomArrow from '../../assets/icons/bottom-arrow.svg';

type SubItem = {
  id: string;
  question: string;
  answer: string;
};

type FaqItem = {
  id: string;
  question: string;
  answer?: string;
  isTitle?: boolean;
};

const faqData: FaqItem[] = [
  {
    id: 'q1',
    question: 'What is MELD?',
    answer:
      'MELD (short for Multi‑animal Ensemble Landmark Detector) is an AI-driven tool that automatically detects facial landmarks on animals in videos. In simpler terms, it can identify locations of key facial features (like eyes, ears, snout, etc.) on animals and track their movements over time.',
  },
  {
    id: 'q2',
    question: 'Can I use MELD in my research?',
    answer:
      'Yes! The platform is designed specifically for research use. Make sure to cite corresponding papers when publishing results produced by MELD.',
  },
  {
    id: 'q3',
    question: 'Can I use MELD for commercial purposes?',
    answer:
      'MELD is free for use for scientific purposes. For its use for commercial purposes, please contact Tech4Animals Lab to get a quote.',
  },
  {
    id: 'q4',
    question: 'Which animal species does MELD currently support?',
    answer:
      'Cats and dogs, but the support for additional species is on the roadmap. If you want to create a facial landmark schema for your favourite pet snake, contact us.',
  },
  {
    id: 'q5',
    question: 'Is the detection good?',
    answer:
      'It depends, but generally yes. We provide benchmarks for the models we use and highlight their limitations in the corresponding papers. To be sure, you can filter the results by the model’s confidence to select the best detections only.',
  },
  {
    id: 'q6',
    question: 'Can I trust the results?',
    answer:
      'The platform was developed by an interdisciplinary team of AI developers and animal behaviour experts to ensure that it meets both technological and scientific standards. Landmark schemas are grounded in facial anatomy and AnimalFACS, and verified by veterinarians and animal scientists.',
  },
  {
    id: 'q7',
    question:
      'Does MELD detect emotions or pain in the animal from its facial expressions?',
    answer:
      'No – MELD does not output any labels, just objective landmark positions and their movements over time. Using these landmarks for any type of emotion or pain recognition is out of scope of this platform.',
  },
  {
    id: 'q8',
    question: 'How long does it take to analyse a video with MELD?',
    answer:
      'Analysis time can vary depending on several factors: the length of the video, the video resolution/quality/angle, the number of animals in it, request settings, and the server load. Usually, short videos are done within minutes, and long ones within one or two hours, depending on the model.',
  },
  {
    id: 'q9',
    question:
      'Why is the number of requests limited? Can I process more videos with MELD?',
    answer:
      'We continually balance the efficiency and payload of the platform If you need to process a large number of videos, please contact Tech4Animals for help with the contact us form.',
  },
  {
    id: 'q10',
    question: 'Are my videos and data secure when using MELD? ',
    answer:
      'Yes. Uploads are stored temporarily in secure cloud storage only for the duration of analysis and for a few extra hours so you can download them. We do not use, publish or share your videos unless you explicitly allow it.',
  },
  {
    id: 'q11',
    question: 'Will my data be used to train MELD’s models?',
    answer:
      'We could use the metadata you input when uploading the video and output landmark data. We will not use videos unless you explicitly agree to it.',
  },
  {
    id: 'title1',
    question:
      'I uploaded a video, but MELD didn’t detect any landmarks. What could be wrong?',
    isTitle: true,
  },
  {
    id: 'q12-1',
    question: 'Unsupported Species',
    answer:
      'MELD currently supports only cats or dogs. Faces of other animals, like horses or primates, won’t be recognised, leading to no detection or inconsistent results.',
  },
  {
    id: 'q12-2',
    question: 'Face Not Visible',
    answer:
      'MELD needs a clear view of the face. If the face is turned away, blocked, or partially off-frame, detection fails. Use footage where the animal is mostly looking directly at the camera.',
  },
  {
    id: 'q12-3',
    question: 'Video Quality Issues',
    answer:
      'Low resolution, blurriness, motion blur, or poor lighting can hinder detection. Use higher-resolution footage or improve lighting.',
  },
  {
    id: 'q12-4',
    question: 'Incorrect Settings',
    answer:
      'Ensure the correct species model is selected in MELD. Using the wrong model can cause failure.',
  },
  {
    id: 'q12-5',
    question: 'Multiple Animals Confusion',
    answer:
      'Clumped animals or overlapping faces may confuse MELD. Try to isolate one to three animals per clip.',
  },
  {
    id: 'q12-6',
    question: 'Bug or Format Issue',
    answer:
      'Unsupported formats or codecs might cause issues. Convert videos to MP4 with H.264 codec.',
  },
];

function FrequentlyQuestions() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="container">
      <Header page="faq" />
      <h2 className={styles.faqTitle}>FAQ</h2>

      {faqData.map((item) =>
        item.isTitle ? (
          <h2 key={item.id} className={styles.faqTitle}>
            {item.question}
          </h2>
        ) : (
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
                {openId === item.id ? (
                  <img className={styles.arrow} src={upArrow} />
                ) : (
                  <img className={styles.arrow} src={bottomArrow} />
                )}
              </span>
            </div>
            {openId === item.id && (
              <div className={styles.accordionDetails}>{item.answer}</div>
            )}
          </div>
        )
      )}
    </div>
  );
}

export default FrequentlyQuestions;
