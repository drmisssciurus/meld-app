import { useEffect, useState } from 'react';
import { ResultItem } from '../../pages/Results/Results';
import styles from './CardsResults.module.css';
// import { getCookie } from '../../utils/cookies';

type CardsResultsProps = {
  props: ResultItem;
  session_id: string | null;
};

function CardsResults({ props, session_id }: CardsResultsProps) {
  const [fileUrl, setFileUrl] = useState<string | null>(props.file);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [currentStatus, setCurrentStatus] = useState<string>(props.status);
  const [fileKey, setFileKey] = useState<string | null>(props.file);
  const [videoKey, setVideoKey] = useState<string | null>(props.video);

  // const session_id = getCookie('session_id');
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const isTracking = currentStatus === 'tracking landmarks';
  const isDrawing = currentStatus === 'drawing landmarks';

  //Poll session to update status and file/video keys
  useEffect(() => {
    async function pollSession() {
      console.log(`[${props.title}] Polling session/${session_id}...`);
      try {
        const res = await fetch(`${API_BASE_URL}/session/${session_id}`, {
          credentials: 'include',
        });
        console.log(`[${props.title}] /session response status:`, res.status);
        const data = await res.json();
        console.log(`[${props.title}] Session data:`, data);

        const matchingSubmission = data.submissions.find(
          (sub: any) =>
            sub.result_csv === props.file ||
            sub.result_video === props.video ||
            sub.title === props.title
        );

        if (!matchingSubmission) {
          console.warn(`[${props.title}] No matching submission found`);
          return;
        }

        console.log(
          `[${props.title}] Found matching submission. Status:`,
          matchingSubmission.status
        );

        // update status
        if (matchingSubmission.status !== currentStatus) {
          setCurrentStatus(matchingSubmission.status);
        }

        // update file/video keys if true
        if (matchingSubmission.result_csv && !fileKey) {
          console.log(`[${props.title}] Updating fileKey from session data`);
          setFileKey(matchingSubmission.result_csv);
        }
        if (matchingSubmission.result_video && !videoKey) {
          console.log(`[${props.title}] Updating videoKey from session data`);
          setVideoKey(matchingSubmission.result_video);
        }

        // stop polling if status
        if (
          matchingSubmission.status === 'completed' ||
          matchingSubmission.status === 'failed'
        ) {
          console.log(
            `[${props.title}] Stopping polling — final status: ${matchingSubmission.status}`
          );
          clearInterval(interval);
        }
      } catch (err) {
        console.error(`[${props.title}] Polling error:`, err);
      }
    }

    pollSession();

    const interval = setInterval(pollSession, 15000);

    return () => {
      console.log(`[${props.title}] Polling session stopped`);
      clearInterval(interval);
    };
  }, [API_BASE_URL, props, currentStatus]);

  //fetch file
  useEffect(() => {
    if (!fileKey) return;

    console.log(`[${props.title}] useEffect: file polling`);
    console.log(`[${props.title}] currentStatus = ${currentStatus}`);
    console.log(`[${props.title}] props.file = ${props.file}`);

    let interval: ReturnType<typeof setInterval>;

    async function pollFile() {
      console.log(`[${props.title}] Fetching file URL...`);
      try {
        const res = await fetch(
          `${API_BASE_URL}/landmarks/download?object_key=${props.file}`,
          { credentials: 'include' }
        );

        console.log(`[${props.title}] File response status:`, res.status);
        const data = await res.json();
        console.log(`[${props.title}] File data:`, data);

        if (data.url) {
          console.log(`[${props.title}] File URL ready`);
          setFileUrl(data.url);
          clearInterval(interval);
        }
      } catch (error) {
        console.error(`[${props.title}] File fetch error:`, error);
      }
    }

    pollFile();
    interval = setInterval(pollFile, 15000);
    return () => {
      console.log(`[${props.title}] File polling stopped`);
      clearInterval(interval);
    };
  }, [fileKey, API_BASE_URL]);

  //fetch video
  useEffect(() => {
    if (!videoKey) return;

    console.log(`[${props.title}] useEffect: video polling`);
    console.log(`[${props.title}] currentStatus = ${currentStatus}`);
    console.log(`[${props.title}] props.video = ${props.video}`);

    let interval: ReturnType<typeof setInterval>;

    async function pollVideo() {
      console.log(`[${props.title}] Fetching video URL...`);
      try {
        const res = await fetch(
          `${API_BASE_URL}/landmarks/download?object_key=${props.video}`,
          { credentials: 'include' }
        );

        console.log(`[${props.title}] Video response status:`, res.status);
        const data = await res.json();
        console.log(`[${props.title}] Video data:`, data);

        if (data.url) {
          console.log(`[${props.title}] Video URL ready`);
          setVideoUrl(data.url);
          clearInterval(interval);
        }
      } catch (error) {
        console.error(`[${props.title}] Video fetch error:`, error);
      }
    }

    pollVideo();
    interval = setInterval(pollVideo, 15000);
    return () => {
      console.log(`[${props.title}] Video polling stopped`);
      clearInterval(interval);
    };
  }, [videoKey, API_BASE_URL]);

  return (
    <div className={styles.cardWrapper}>
      <h3 className={styles.title}>{props.title}</h3>
      <div className={styles.nameWrapper}>
        <p className={styles.name}>{props.animal_type}</p>
        <p className={styles.name}>{props.model}</p>
        <p className={styles.name}>{props.fps}%</p>
      </div>
      <p className={styles.description}>{props.description}</p>
      <div className={styles.fileWrapper}>
        <p className={styles.status}>Status: {currentStatus}</p>

        {fileUrl ? (
          <a
            className={styles.file}
            href={fileUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download result file
          </a>
        ) : (
          <p className={styles.fileNotReady}>Result file is not ready yet</p>
        )}

        {videoUrl ? (
          <a
            className={styles.file}
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch result video
          </a>
        ) : (
          <p className={styles.fileNotReady}>Video is not ready yet</p>
        )}
      </div>
    </div>
  );
}

export default CardsResults;
