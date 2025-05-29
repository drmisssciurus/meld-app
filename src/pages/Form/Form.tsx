import { useEffect, useRef, useState } from 'react';
import Header from '../../components/Header/Header';
import styles from './Form.module.css';
import { useNavigate } from 'react-router-dom';

function Form() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showPercentageTooltip, setShowPercentageTooltip] = useState(false);
  const [showSizeTooltip, setShowSizeTooltip] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const percentageTooltipRef = useRef<HTMLDivElement>(null);
  const sizeTooltipRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const animal_type = formData.get('animal') as string;
    const fps_percent = Number(formData.get('percentage'));
    const use_full_weights = Number(formData.get('size')) === 1;
    const save_video = formData.get('agree1') !== 'on';
    const video = formData.get('upload') as File;

    try {
      console.log('[1] Creating session...');
      const sessionRes = await fetch(`${API_BASE_URL}/session/`, {
        method: 'POST',
      });

      const sessionData = await sessionRes.json();
      console.log('[2] Session response:', sessionData);

      if (!sessionRes.ok || !sessionData.session_id) {
        throw new Error('Session creation failed or session_id missing');
      }

      const session_id = sessionData.session_id;
      const s3_key = `videos/${session_id}/${video.name}`;

      console.log('[3] Submitting to /submission with s3_key:', s3_key);

      const submissionForm = new FormData();
      submissionForm.append('video', video);
      submissionForm.append('session_id', session_id.toString());
      submissionForm.append('title', title);
      submissionForm.append('description', description);
      submissionForm.append('animal_type', animal_type);
      submissionForm.append('fps_percent', String(fps_percent));
      submissionForm.append('use_full_weights', String(use_full_weights));
      submissionForm.append('save_video', String(save_video));
      submissionForm.append('s3_key', s3_key);

      const finalRes = await fetch(`${API_BASE_URL}/submission/`, {
        method: 'POST',
        body: submissionForm,
      });

      const result = await finalRes.json();
      console.log('[4] Final submission response:', result);

      if (!finalRes.ok) throw new Error(result.error || 'Submission failed');

      console.log('✅ Submission successful!');
    } catch (err) {
      console.error('🚨 Submission error:', err);
    }
  };

  function useClickOutside(
    ref: React.RefObject<HTMLElement | null>,
    onOutsideClick: () => void
  ) {
    useEffect(() => {
      const handler = (e: MouseEvent) => {
        if (ref.current && !ref.current.contains(e.target as Node)) {
          onOutsideClick();
        }
      };
      document.addEventListener('mousedown', handler);
      return () => document.removeEventListener('mousedown', handler);
    }, [ref, onOutsideClick]);
  }

  useClickOutside(sizeTooltipRef, () => setShowSizeTooltip(false));
  useClickOutside(tooltipRef, () => setShowTooltip(false));
  useClickOutside(percentageTooltipRef, () => setShowPercentageTooltip(false));

  return (
    <div className="container">
      <Header page="form" />
      <form onSubmit={handleSubmit} action="" className={styles.form}>
        <input
          className={styles.inputField}
          type="text"
          id="title"
          name="title"
          placeholder="Title"
        />

        <textarea
          className={styles.inputField}
          id="description"
          name="description"
          placeholder="Description example: A Sphynx cat cuddles under a warm blanket
            beside a crackling fireplace, enjoying the warmth and comfort of its
            environment."
        />

        <div className={styles.container}>
          <div className={styles.animalWithTooltip}>
            <div
              className={styles.labelWithButton}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <label htmlFor="animal">Animal type:</label>
              <button
                type="button"
                className={styles.tooltipButton}
                onClick={() => setShowTooltip((prev) => !prev)} // работает на мобилке
                aria-label="More info about animal type"
              >
                ?
              </button>
            </div>
            {showTooltip && (
              <div className={styles.tooltipBox} ref={tooltipRef}>
                Select the species of the animal you are analyzing. For example,
                "cat" or "dog".
              </div>
            )}

            <div className={styles.animalChoiceWrapper}>
              <div className={styles.animalChoiceGroup}>
                <label className={styles.animalChoiceLabel}>
                  <input
                    type="radio"
                    name="animal"
                    value="dog"
                    defaultChecked
                    className={styles.animalChoiceInput}
                  />
                  <span className={styles.animalChoiceSpan}>Dog</span>
                </label>
                <label className={styles.animalChoiceLabel}>
                  <input
                    type="radio"
                    name="animal"
                    value="cat"
                    className={styles.animalChoiceInput}
                  />
                  <span className={styles.animalChoiceSpan}>Cat</span>
                </label>
              </div>
            </div>
          </div>

          <div className={styles.sizeWrapper}>
            <div
              className={styles.labelWithButton}
              onMouseEnter={() => setShowSizeTooltip(true)}
              onMouseLeave={() => setShowSizeTooltip(false)}
            >
              <label htmlFor="size">Size:</label>
              <button
                type="button"
                className={styles.tooltipButton}
                onClick={() => setShowSizeTooltip((prev) => !prev)}
                aria-label="More info about size"
              >
                ?
              </button>
            </div>
            {showSizeTooltip && (
              <div className={styles.tooltipBox} ref={sizeTooltipRef}>
                Choose model size. "Small" is faster, "Large" is more accurate.
              </div>
            )}

            <div className={styles.animalChoiceGroup}>
              <label className={styles.animalChoiceLabel}>
                <input
                  type="radio"
                  name="size"
                  value="0"
                  defaultChecked
                  className={styles.animalChoiceInput}
                />
                <span className={styles.animalChoiceSpan}>Small</span>
              </label>
              <label className={styles.animalChoiceLabel}>
                <input
                  type="radio"
                  name="size"
                  value="1"
                  className={styles.animalChoiceInput}
                />
                <span className={styles.animalChoiceSpan}>Large</span>
              </label>
            </div>
          </div>
        </div>

        <div className={styles.percentageWrapper}>
          <div
            className={styles.labelWithButton}
            onMouseEnter={() => setShowPercentageTooltip(true)}
            onMouseLeave={() => setShowPercentageTooltip(false)}
          >
            <label>FPS:</label>
            <button
              type="button"
              className={styles.tooltipButton}
              onClick={() => setShowPercentageTooltip((prev) => !prev)}
              aria-label="More info about percentage"
            >
              ?
            </button>
          </div>
          {showPercentageTooltip && (
            <div className={styles.tooltipBox} ref={percentageTooltipRef}>
              Select the percentage of frames to sample from the video (e.g.,
              25% = every fourth frame).
            </div>
          )}
          <div className={styles.radioContainer}>
            <label className={styles.radioPersentage}>
              <input
                className={styles.radioPersentageInput}
                type="radio"
                name="percentage"
                value="25"
              />
              <span className={styles.fakeRadio}>25%</span>
            </label>
            <label className={styles.radioPersentage}>
              <input
                className={styles.radioPersentageInput}
                type="radio"
                name="percentage"
                value="50"
              />
              <span className={styles.fakeRadio}>50%</span>
            </label>
            <label className={styles.radioPersentage}>
              <input
                className={styles.radioPersentageInput}
                type="radio"
                name="percentage"
                value="75"
              />
              <span className={styles.fakeRadio}>75%</span>
            </label>
            <label className={styles.radioPersentage}>
              <input
                className={styles.radioPersentageInput}
                type="radio"
                name="percentage"
                value="100"
                defaultChecked
              />
              <span className={styles.fakeRadio}>100%</span>
            </label>
          </div>
        </div>

        <div className={styles.video}>
          <input
            className={styles.videoInput}
            type="file"
            name="upload"
            required
          />
        </div>

        <div className={styles.checkboxGroup}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="agree1"
              className={styles.checkboxInput}
            />
            I don’t want my video to be used for scientific purposes.
          </label>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="agree2"
              className={styles.checkboxInput}
            />
            <p>I Agree To </p>
            <p
              className={styles.privacy}
              onClick={() => navigate('/privacy_policy')}
            >
              Privacy Policy
            </p>
          </label>
        </div>

        <div className={styles.items}>
          <button className={styles.btn} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
