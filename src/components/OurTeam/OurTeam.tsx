import OurTeamItems from '../OurTeamItems/OurTeamItems';
import styles from './OurTeam.module.css';

import georgeImg from '../../assets/people/george.png';
import annaImg from '../../assets/people/anna.avif';
import ilanImg from '../../assets/people/ilan.avif';
import nareedImg from '../../assets/people/nareed.avif';
import ephantusImg from '../../assets/people/ephantus.avif';
import { Ref } from 'react';
type OurTeamProps = {
  sectionRef?: Ref<HTMLDivElement>;
};
function OurTeam({ sectionRef }: OurTeamProps) {
  return (
    <div ref={sectionRef} className="container">
      <h2 className={styles.title}>People</h2>
      <div className={styles.wrapper}>
        <OurTeamItems
          image={georgeImg}
          name={'George Martvel'}
          title={'PhD Candidate'}
          site={'https://martvelge.com'}
        />
        <OurTeamItems
          image={annaImg}
          name={'Prof. ​Anna Zamansky'}
          title={'Supervisor'}
          site={'https://anna4animals8.wixsite.com/zamansky'}
        />
        <OurTeamItems
          image={ilanImg}
          name={'Prof. Ilan Shimshoni'}
          title={'Supervisor'}
          site={'https://sites.google.com/is.haifa.ac.il/ilan-shimshoni/home'}
        />
        <OurTeamItems
          image={nareedImg}
          name={'Nareed Farhat'}
          title={'Project Manager'}
          site={'https://scholar.google.com/citations?user=lbTDul8AAAAJ&hl=en'}
        />
        <OurTeamItems
          image={ephantusImg}
          name={'Ephantus Kanyugi'}
          title={'Data Manager'}
          site={'https://datalabelers.org/'}
        />
      </div>
      <h2 className={styles.title}>Advisors</h2>
      <div className={styles.wrapper}>
        <p className={styles.advisors}>Dr. ​Annika Bremhorst</p>
        <p className={styles.advisors}> ​Dr. Giulia Pedretti</p>
        <p className={styles.advisors}> ​Chiara Canori</p>
        <p className={styles.advisors}>Dr. Greta Abele</p>
      </div>
    </div>
  );
}

export default OurTeam;
