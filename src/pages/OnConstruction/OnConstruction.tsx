import Header from '../../components/Header/Header';
import styles from './OnConstruction.module.css';
import gifImg from '../../assets/construction.gif';

function OnConstruction() {
  return (
    <div className="container">
      <Header page="not_found" />
      <div className={styles.wrapper}>
        <h2>Sorry Site Under Construction</h2>
        <img className={styles.gif} src={gifImg} alt="" />
      </div>
    </div>
  );
}

export default OnConstruction;
