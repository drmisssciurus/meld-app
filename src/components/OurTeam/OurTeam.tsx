import OurTeamItems from '../OurTeamItems/OurTeamItems';
import styles from './OurTeam.module.css';

import georgeImg from '../../assets/people/george.png';
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
          site={'#'}
        />
        <OurTeamItems
          image={georgeImg}
          name={'George Martvel'}
          title={'PhD Candidate'}
          site={'#'}
        />
        <OurTeamItems
          image={georgeImg}
          name={'George Martvel'}
          title={'PhD Candidate'}
          site={'#'}
        />
        <OurTeamItems
          image={georgeImg}
          name={'George Martvel'}
          title={'PhD Candidate'}
          site={'#'}
        />
        <OurTeamItems
          image={georgeImg}
          name={'George Martvel'}
          title={'PhD Candidate'}
          site={'#'}
        />
        <OurTeamItems
          image={georgeImg}
          name={'George Martvel'}
          title={'PhD Candidate'}
          site={'#'}
        />
        <OurTeamItems
          image={georgeImg}
          name={'George Martvel'}
          title={'PhD Candidate'}
          site={'#'}
        />
        <OurTeamItems
          image={georgeImg}
          name={'George Martvel'}
          title={'PhD Candidate'}
          site={'#'}
        />
      </div>
    </div>
  );
}

export default OurTeam;
