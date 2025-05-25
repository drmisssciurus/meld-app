import { ResultItem } from '../../pages/Results/Results';
import styles from './CardsResults.module.css';

type CardsResultsProps = {
  props: ResultItem;
};

function CardsResults({ props }: CardsResultsProps) {
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
        <p className={styles.file}>
          {props.file ? 'name.cvs' : 'your file would be here'}
        </p>
        <p className={styles.status}>{props.status ? 'Ready' : 'Loading...'}</p>
      </div>
    </div>
  );
}

export default CardsResults;
