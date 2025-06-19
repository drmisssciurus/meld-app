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

const items: ResultItem[] = [
  {
    id: 0,
    title: 'my video',
    description:
      'A dog cuddles under a warm blanket beside a crackling fireplace, enjoying the warmth and comfort of itsenvironment',
    animal_type: 'dog',
    model: 'light-weight',
    fps: '25',
    file: true,
    status: true,
  },
  {
    id: 1,
    title: 'video',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus quidem magni, delectus sunt minima mollitia fugit corporis iure adipisci eveniet, blanditiis sed praesentium unde atque consequatur incidunt! Reiciendis, mollitia!',
    animal_type: 'cat',
    model: 'light-weight',
    fps: '100',
    file: false,
    status: false,
  },
  {
    id: 2,
    title: 'video 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus quidem magni, delectus sunt minima mollitia fugit corporis iure',
    animal_type: 'dog',
    model: 'light-weight',
    fps: '100',
    file: true,
    status: true,
  },
];

function Results() {
  const session_id = getCookie('session_id');
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const getData = async () => {
    try {
      const data = await fetch(`${API_BASE_URL}/session/${session_id}`);
      console.log('[debug] DATA: ', data);
    } catch (err) {
      console.error('There in an error:', err);
    }
  };
  return (
    <div className="container">
      <Header page="results" />
      <div className={styles.resultsWrapper}>
        {items.map((item) => (
          <CardsResults key={item.id} props={item} />
        ))}
      </div>
      <button onClick={() => getData()}>GET DATA</button>
    </div>
  );
}

export default Results;
