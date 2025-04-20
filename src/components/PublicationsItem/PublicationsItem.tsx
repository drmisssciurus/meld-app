import styles from './PublicationsItem.module.css';

type PublicationsItemProps = {
  name: string;
  autors: string;
  articleName: string;
};

function PublicationsItem({
  name,
  autors,
  articleName,
}: PublicationsItemProps) {
  return (
    <div className={styles.wrapper}>
      <p>{name}</p>
      <p>{autors}</p>
      <a href="">{articleName}</a>
    </div>
  );
}

export default PublicationsItem;
