import OurTeamItems from '../OurTeamItems/OurTeamItems';
import styles from './OurTeam.module.css';

function OurTeam() {
  return (
    <div className="container">
      <h2 className={styles.title}>People</h2>
      <div className={styles.wrapper}>
        <OurTeamItems
          image={'./assets/people/george.png'}
          name={'George Martvel'}
          title={'PhD Candidate'}
          site={'#'}
        />
        <OurTeamItems
          image={'./assets/people/george.png'}
          name={'George Martvel'}
          title={'PhD Candidate'}
          site={'#'}
        />
        <OurTeamItems
          image={'./assets/people/george.png'}
          name={'George Martvel'}
          title={'PhD Candidate'}
          site={'#'}
        />
        <OurTeamItems
          image={'./assets/people/george.png'}
          name={'George Martvel'}
          title={'PhD Candidate'}
          site={'#'}
        />
        <OurTeamItems
          image={'./assets/people/george.png'}
          name={'George Martvel'}
          title={'PhD Candidate'}
          site={'#'}
        />
        <OurTeamItems
          image={'./assets/people/george.png'}
          name={'George Martvel'}
          title={'PhD Candidate'}
          site={'#'}
        />
        <OurTeamItems
          image={'./assets/people/george.png'}
          name={'George Martvel'}
          title={'PhD Candidate'}
          site={'#'}
        />
        <OurTeamItems
          image={'./assets/people/george.png'}
          name={'George Martvel'}
          title={'PhD Candidate'}
          site={'#'}
        />
      </div>
    </div>
  );
}

export default OurTeam;
