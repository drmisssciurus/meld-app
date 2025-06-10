import { Ref } from 'react';
import styles from './PublicationsItem.module.css';

type PublicationsItemProps = {
  name: string;
  autors: string;
  articleName: string;
  articleLink: string;
  sectionRef?: Ref<HTMLDivElement>;
};

function PublicationsItem({
  name,
  autors,
  articleName,
  articleLink,
  sectionRef,
}: PublicationsItemProps) {
  return (
    <div ref={sectionRef} className={styles.wrapper}>
      <div>
        <p className={styles.name}>{name}</p>
        <p className={styles.autors}>{autors}</p>
      </div>
      <a className={styles.article} href={articleLink} target="_blank">
        {articleName}
      </a>
    </div>
  );
}

export default PublicationsItem;
