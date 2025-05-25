import CardsResults from '../../components/CardsResults/CardsResults';
import Header from '../../components/Header/Header';
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
