import { useEffect, useState } from 'react';
import CardsResults from '../../components/CardsResults/CardsResults';
import Header from '../../components/Header/Header';
import { getCookie } from '../../utils/cookies';
import styles from './Results.module.css';
import { useNavigate } from 'react-router-dom';

export type ResultItem = {
  id: number;
  title: string;
  description: string;
  animal_type: string;
  model: string;
  fps: string;
  file: string | null;
  video: string | null;
  status: string;
};

function Results() {
  const [items, setItems] = useState<ResultItem[]>([]);
  const navigate = useNavigate();

  const session_id = getCookie('session_id');
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/session/${session_id}`);
        const data = await res.json();

        const submissions = data.submissions.map((sub: any, index: number) => ({
          id: index,
          title: sub.title || 'Untitled',
          description: sub.description || 'No description provided.',
          animal_type: sub.animal_type,
          model: sub.weights_type_bool ? 'large-weight' : 'light-weight',
          fps: sub.percentage.toString(),
          file: sub.result_csv,
          video: sub.result_video,
          status: sub.status,
        }));

        setItems(submissions);
      } catch (err) {
        console.error('Error loading results: ', err);
      }
    };
    getData();
  }, [API_BASE_URL, session_id]);

  return (
    <div className="container">
      <Header page="results" />
      <div className={styles.resultsWrapper}>
        {items.map((item) => (
          <CardsResults key={item.id} props={item} session_id={session_id} />
        ))}
      </div>
      <div className={styles.btnWrapper}>
        <button
          className={styles.btn}
          type="button"
          onClick={() => navigate('/form')}
        >
          Return to form
        </button>
      </div>
    </div>
  );
}

export default Results;
