import styles from './Form.module.css';

function Form() {
  return (
    <div className="container">
      <form action="" className={styles.form}>
        <div className={styles.items}>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" />
        </div>

        <div className={styles.items}>
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" />
        </div>

        <div className={styles.items}>
          <p>FPS:</p>
          <label>
            <input type="radio" name="percentage" value="25" />
            25%
          </label>
          <label>
            <input type="radio" name="percentage" value="50" />
            50%
          </label>
          <label>
            <input type="radio" name="percentage" value="75" />
            75%
          </label>
          <label>
            <input type="radio" name="percentage" value="100" />
            100%
          </label>
        </div>

        <div className={styles.items}>
          <input type="file" name="upload" />
        </div>

        <div className={styles.items}>
          <label htmlFor="size">Size:</label>
          <select name="size" id="size" required>
            <option value="" disabled selected>
              choose option
            </option>
            <option value="1">small</option>
            <option value="2">large</option>
          </select>
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
