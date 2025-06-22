import { useEffect, useRef, useState } from 'react';
import Header from '../../components/Header/Header';
import styles from './Form.module.css';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../../utils/cookies';

function Form() {
  const [attempts, setAttempts] = useState<number>(10);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showPercentageTooltip, setShowPercentageTooltip] = useState(false);
  const [showSizeTooltip, setShowSizeTooltip] = useState(false);
  const [video, setVideo] = useState<string>('');
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const percentageTooltipRef = useRef<HTMLDivElement>(null);
  const sizeTooltipRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const session_id = getCookie('session_id');
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setVideo(file.name);
      setVideoFile(file);
    }
  };

  useEffect(() => {
    async function fetchSessionData() {
      try {
        const response = await fetch(`${API_BASE_URL}/session/${session_id}`);
        const data = await response.json();
        const submissionsLength = data.submissions?.length || 0;
        setAttempts(10 - submissionsLength);
      } catch (error) {
        console.error('Failed to fetch session: ', error);
      }
    }

    fetchSessionData();
  }, []);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);

    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const animal_type = formData.get('animal') as string;
    const fps_percent = Number(formData.get('percentage'));
    const use_full_weights = Number(formData.get('size')) === 1;
    const save_video = formData.get('agree1') !== 'on';

    if (!videoFile) {
      alert('Please select a video');
      return;
    }
    // const object_key = encodeURIComponent(videoFile.name);

    const session_id = getCookie('session_id');
    console.log(session_id);

    try {
      console.log('[1] Getting presigned URL...');
      console.log(
        '[debug] presign url:',
        `${API_BASE_URL}/landmarks/presigned-url?&session_id=${session_id}`
      );

      console.log('[debug] session_id:', session_id);
      console.log(typeof session_id);
      const mimeType = videoFile.type;

      const presignRes = await fetch(
        `${API_BASE_URL}/landmarks/presigned-url?session_id=${session_id}&content_type=${encodeURIComponent(
          mimeType
        )}`,
        {
          credentials: 'include',
        }
      );

      console.log('presURL: ', presignRes);

      if (!presignRes.ok) {
        throw new Error('Failed to get presigned URL');
      }

      const presignJson = await presignRes.json();
      const presignedUrl = presignJson.url;
      let s3_key = '';
      s3_key = presignJson.object_key;

      console.log('[2] Uploading video to S3...');

      const uploadRes = await fetch(presignedUrl, {
        method: 'PUT',
        body: videoFile,
        // headers: {
        //   'Content-Type': videoFile.type,
        // },
      });

      console.log('URL:', presignedUrl);
      console.log('Key:', s3_key);
      console.log('File:', videoFile.name);

      console.log('uploadRes: ', uploadRes);

      if (!uploadRes.ok) {
        throw new Error('Video upload failed');
      }

      console.log('[3] Submitting metadata to landmarks API...');

      const landmarksForm = new FormData();
      landmarksForm.append('video', videoFile);
      landmarksForm.append('session_id', session_id!);
      landmarksForm.append('title', title);
      landmarksForm.append('description', description);
      landmarksForm.append('animal_type', animal_type);
      landmarksForm.append('fps_percent', String(fps_percent));
      landmarksForm.append('use_full_weights', String(use_full_weights));
      landmarksForm.append('save_video', String(save_video));
      landmarksForm.append('s3_key', s3_key);

      const finalRes = await fetch(`${API_BASE_URL}/landmarks/`, {
        method: 'POST',
        body: landmarksForm,
        credentials: 'include',
      });

      const result = await finalRes.json();
      console.log('[4] Final landmarks response:', result);

      if (!finalRes.ok) throw new Error(result.error || 'landmarks failed');

      console.log('landmarks successful!');

      // e.currentTarget.reset();
      // setVideo('');
      // setVideoFile(null);

      navigate('/results');
    } catch (err) {
      console.error('landmarks error:', err);
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
        <p>You have {attempts} videos left today</p>
        <input
          className={styles.inputField}
          type="text"
          id="title"
          name="title"
          placeholder="Title"
        />

        <textarea
          className={`${styles.inputField} ${styles.inputFieldTextarea}`}
          id="description"
          name="description"
          placeholder="Description example: A Sphynx cat cuddles under a warm blanket beside a crackling fireplace, enjoying the warmth and comfort of its environment."
        />

        <div className={styles.container}>
          <div className={styles.animalWithTooltip}>
            <div className={styles.labelWithButton}>
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
                Select the species of the animal you are analyzing.
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
            <div className={styles.labelWithButton}>
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
              <div
                className={`${styles.tooltipBox} ${styles.tooltipBoxSize}`}
                ref={sizeTooltipRef}
              >
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
          <div className={styles.labelWithButton}>
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

        <div className={styles.videoInput}>
          <button
            type="button"
            onClick={handleFileButtonClick}
            className={styles.videoUpload}
          >
            Choose File
          </button>
          <input
            type="file"
            accept="video/*"
            name="upload"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          {video ? <p>Selected: {video}</p> : <p>No file chosen</p>}
        </div>

        <div className={styles.checkboxGroup}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="agree1"
              className={styles.checkboxInput}
            />
            <p className={styles.agreement}>
              I don’t want my video to be used for scientific purposes.
            </p>
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
          <button
            className={styles.btn}
            type="submit"
            disabled={isSubmitting || attempts === 0}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
