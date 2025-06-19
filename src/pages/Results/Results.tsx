import { useEffect, useState } from 'react';
import CardsResults from '../../components/CardsResults/CardsResults';
import Header from '../../components/Header/Header';
import { getCookie } from '../../utils/cookies';
import styles from './Results.module.css';

export type ResultItem = {
  id: number;
  title: string;
  description: string;
  animal_type: string;
  model: string;
  fps: string;
  file: boolean;
  status: boolean;
};

function Results() {
  const [items, setItems] = useState<ResultItem[]>([]);
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
          file: Boolean(sub.result_csv),
          status: sub.status === 'finished',
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
          <CardsResults key={item.id} props={item} />
        ))}
      </div>
    </div>
  );
}

export default Results;
