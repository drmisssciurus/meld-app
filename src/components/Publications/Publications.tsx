import { Ref } from 'react';
import PublicationsItem from '../PublicationsItem/PublicationsItem';
import styles from './Publications.module.css';

type PublicationsProps = {
  sectionRef?: Ref<HTMLDivElement>;
};

function Publications({ sectionRef }: PublicationsProps) {
  return (
    <div ref={sectionRef}>
      <h2 className={styles.title}>Publications</h2>
      <div className={styles.wrapper}>
        <PublicationsItem
          name={'Model’s Architecture'}
          autors={
            'Martvel, G., Shimshoni, I. & Zamansky, A. Automated Detection of Cat Facial Landmarks. Int J Comput Vis (2024).'
          }
          articleName={'Automated Detection of Cat Facial Landmarks'}
          articleLink={
            'https://link.springer.com/article/10.1007/s11263-024-02006-w'
          }
        />
        <PublicationsItem
          name={'Dog Landmark Scheme'}
          autors={
            'Martvel, G., Zamansky, A., Pedretti, G., Canori, C., Shimshoni, I. & Bremhorst A. (2025).'
          }
          articleName={
            'Dog facial landmarks detection and its applications for facial analysis'
          }
          articleLink={'https://www.nature.com/articles/s41598-025-07040-3'}
        />
        <PublicationsItem
          name={'Cat Landmark Scheme'}
          autors={
            'Martvel, G., Farhat, N., Shimshoni, I., & Zamansky, A. (2023).'
          }
          articleName={'CatFLW: Cat Facial Landmarks in the Wild Dataset'}
          articleLink={'https://arxiv.org/abs/2305.04232'}
        />
        <PublicationsItem
          name={'Video-based Pain Recognition in Cats'}
          autors={
            'Martvel, G., Lazebnik, T., Feighelstein, M., ... & Zamansky, A. (2025)'
          }
          articleName={
            'Automated video-based pain recognition in cats using facial landmarks'
          }
          articleLink={'https://www.nature.com/articles/s41598-024-78406-2'}
        />
        <PublicationsItem
          name={'Facial Dynamics of Brachycephalic Dogs'}
          autors={
            'Martvel, G., Eretová, P., Přibylová, L., ... & Zamansky, A. (2025).'
          }
          articleName={
            'Continuous automated analysis of facial dynamics of brachycephalic and normocephalic dogs in different contexts'
          }
          articleLink={
            'https://link.springer.com/article/10.1186/s12917-025-04839-0'
          }
        />
        <PublicationsItem
          name={'Cat Facial Signals as a Social Function'}
          autors={
            'Martvel, G., Scott, L., Florkiewicz, B., Zamansky, A., Shimshoni, I. & Lazebnik, T.'
          }
          articleName={
            'Computational investigation of the social function of domestic cat facial signals'
          }
          articleLink={'https://www.nature.com/articles/s41598-024-79216-2'}
        />
      </div>
    </div>
  );
}

export default Publications;
