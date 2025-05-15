import Header from '../../components/Header/Header';
import styles from './Form.module.css';

function Form() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data = {
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      animal: formData.get('animal') as string,
      percentage: Number(formData.get('percentage')), // строка → число
      size: Number(formData.get('size')), // строка → число
      upload: formData.get('upload') as File,
      agree1: formData.get('agree1') === 'on', // строка 'on' → boolean
      agree2: formData.get('agree2') === 'on',
    };

    console.log(data);
  };

  return (
    <div className="container">
      <Header />
      <form onSubmit={handleSubmit} action="" className={styles.form}>
        <input
          className={styles.inputField}
          type="text"
          id="title"
          name="title"
          placeholder="Title"
        />

        <textarea
          className={styles.inputField}
          id="description"
          name="description"
          placeholder="Description"
        />

        <div className={styles.animal}>
          <label htmlFor="animal">Animal type:</label>
          <select name="animal" id="animal" required>
            <option value="1">dog</option>
            <option value="2">cat</option>
          </select>
        </div>

        <div className={styles.radioContainer}>
          <label className={styles.radioPersentage}>
            <input
              className={styles.radioPersentageInput}
              type="radio"
              name="percentage"
              value="25"
            />
            <span className={styles.fakeRadio}>25%</span>
          </label>
          <label className={styles.radioPersentage}>
            <input
              className={styles.radioPersentageInput}
              type="radio"
              name="percentage"
              value="50"
            />
            <span className={styles.fakeRadio}>50%</span>
          </label>
          <label className={styles.radioPersentage}>
            <input
              className={styles.radioPersentageInput}
              type="radio"
              name="percentage"
              value="75"
            />
            <span className={styles.fakeRadio}>75%</span>
          </label>
          <label className={styles.radioPersentage}>
            <input
              className={styles.radioPersentageInput}
              type="radio"
              name="percentage"
              value="100"
              defaultChecked
            />
            <span className={styles.fakeRadio}>100%</span>
          </label>
        </div>

        <div className={styles.items}>
          <label htmlFor="size">Size:</label>
          <select name="size" id="size" required>
            {/* <option value="" disabled selected>
              choose option
            </option> */}
            <option value="0">small</option>
            <option value="1">large</option>
          </select>
        </div>

        <div className={styles.items}>
          <input type="file" name="upload" required />
        </div>

        <div className={styles.items}>
          <label>
            <input type="checkbox" name="agree1" />
            Agreements
          </label>
          <label>
            <input type="checkbox" name="agree2" />
            Agreements2
          </label>
        </div>

        <div className={styles.items}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
