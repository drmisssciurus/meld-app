import { Ref } from 'react';
import styles from './PublicationsItem.module.css';

type PublicationsItemProps = {
  name: string;
  autors: string;
  articleName: string;
  sectionRef?: Ref<HTMLDivElement>;
};

function PublicationsItem({
  name,
  autors,
  articleName,
  sectionRef,
}: PublicationsItemProps) {
  return (
    <div ref={sectionRef} className={styles.wrapper}>
      <p>{name}</p>
      <p>{autors}</p>
      <a href="">{articleName}</a>
    </div>
  );
}

export default PublicationsItem;
