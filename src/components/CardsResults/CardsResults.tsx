import { useEffect, useState } from 'react';
import { ResultItem } from '../../pages/Results/Results';
import styles from './CardsResults.module.css';

type CardsResultsProps = {
  props: ResultItem;
};

function CardsResults({ props }: CardsResultsProps) {
  const [fileUrl, setFileUrl] = useState<string | null>(props.file);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const isTracking = props.status === 'tracking landmarks';
  const isDrawing = props.status === 'drawing landmarks';

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if ((isTracking || isDrawing) && props.file) {
      interval = setInterval(async () => {
        try {
          const res = await fetch(
            `${API_BASE_URL}/landmarks/download?object_key=${props.file}`,
            {
              credentials: 'include',
            }
          );

          const data = await res.json();
          console.log('data file: ', data);
          if (data.url) {
            setFileUrl(data.url);
            clearInterval(interval);
          }
        } catch (error) {
          console.error('Error fetching file download URL:', error);
        }
      }, 15000);
    }

    return () => clearInterval(interval);
  }, [isTracking, isDrawing, props.file, API_BASE_URL]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if ((isTracking || isDrawing) && props.video) {
      interval = setInterval(async () => {
        try {
          const res = await fetch(
            `${API_BASE_URL}/landmarks/download?object_key=${props.video}`,
            {
              credentials: 'include',
            }
          );

          const data = await res.json();
          console.log('data video: ', data);
          if (data.url) {
            setVideoUrl(data.url);
            clearInterval(interval);
          }
        } catch (error) {
          console.error('Error fetching video download URL:', error);
        }
      }, 15000);
    }

    return () => clearInterval(interval);
  }, [isTracking, isDrawing, props.video, API_BASE_URL]);

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
        <p className={styles.status}>Status: {props.status}</p>

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
          <p className={styles.file}>Result file is not ready yet</p>
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
          <p className={styles.file}>Video is not ready yet</p>
        )}
      </div>
    </div>
  );
}

export default CardsResults;
