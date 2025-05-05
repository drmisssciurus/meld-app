import { Ref } from 'react';
import PublicationsItem from '../PublicationsItem/PublicationsItem';
import styles from './Publications.module.css';

type PublicationsProps = {
  sectionRef?: Ref<HTMLDivElement>;
};

function Publications({ sectionRef }: PublicationsProps) {
  return (
    <div ref={sectionRef} className="container">
      <h2 className={styles.title}>Publications</h2>
      <div className={styles.wrapper}>
        <PublicationsItem
          name={'Model’s architecture'}
          autors={
            'Martvel, G., Shimshoni, I. & Zamansky, A. Automated Detection of Cat Facial Landmarks. Int J Comput Vis (2024).'
          }
          articleName={'Automated Detection of Cat Facial Landmarks'}
        />
        <PublicationsItem
          name={'Dog landmark scheme'}
          autors={
            'Martvel, G., Abele, G., Bremhorst, A., Canori, C., Farhat, N., Pedretti, G., ... & Zamansky, A. (2024).'
          }
          articleName={'DogFLW: Dog Facial Landmarks in the Wild Dataset.'}
        />
        <PublicationsItem
          name={'Cat landmark scheme'}
          autors={
            'Martvel, G., Farhat, N., Shimshoni, I., & Zamansky, A. (2023).'
          }
          articleName={'CatFLW: Cat Facial Landmarks in the Wild Dataset'}
        />
      </div>
    </div>
  );
}

export default Publications;
