import styles from './OurTeamItems.module.css';
type OurTeamItemsProps = {
  name: string;
  title: string;
  site: string;
  image: string;
};
function OurTeamItems({ name, title, site, image }: OurTeamItemsProps) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.name}>{name}</p>
      <div>
        <img className={styles.image} src={image} alt="George Martvel" />
      </div>
      <p className={styles.title}>{title}</p>
      <a className={styles.link} href={site}>
        Visit Website
      </a>
    </div>
  );
}

export default OurTeamItems;
