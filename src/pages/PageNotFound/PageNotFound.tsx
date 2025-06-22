import Header from '../../components/Header/Header';
import gifImg from '../../assets/hungry-cat.gif';
import styles from './PageNotFound.module.css';

function PageNotFound() {
  return (
    <div className="container">
      <Header page="not_found" />
      <div className={styles.wrapper}>
        <h2>404 Page not found</h2>
        <img className={styles.gif} src={gifImg} alt="" />
      </div>
    </div>
  );
}

export default PageNotFound;
