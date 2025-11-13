import styles from './HowTo.module.css';
import form from '../../assets/howto/form.png';
import result from '../../assets/howto/result.png';
import gif from '../../assets/gifs/4.gif';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Header from '../../components/Header/Header';
import { useRef, useState } from 'react';

const codeStrPython = `
import pandas as pd

# Read the CSV file
df = pd.read_csv('your_file.csv')  # Path to your landmark CSV file

# Parse the landmarks column into coordinate columns
if 'landmarks' in df.columns:
    for idx, row in df.iterrows():
        landmarks = row['landmarks']
        if landmarks != '0' and landmarks != 0:
            # Remove brackets and split into lines
            landmark_list = landmarks.replace('[', '').replace(']', '').split('\n')
            if len(landmark_list) != 0:
                for i, landmark in enumerate(landmark_list):
                    parts = [x for x in landmark.split(' ') if len(x) > 0]
                    if len(parts) == 2:
                        x, y = float(parts[0]), float(parts[1])
                        df.at[idx, f'{i}_x'] = x
                        df.at[idx, f'{i}_y'] = y
    df.drop(columns=['landmarks'], inplace=True)

df.to_csv('your_file_processed.csv', index=False)

print(df.head())
`;

const codeStrR = `
library(readr)
library(dplyr)
library(tidyr)

# Read the CSV file
df <- read_csv("your_file.csv")  # Path to your landmark CSV file

# Function to parse a single landmarks string
parse_landmarks <- function(landmarks_str) {
  if (landmarks_str != "0" && landmarks_str != 0) {
    landmarks_clean <- gsub("\\[|\\]", "", landmarks_str)
    landmark_list <- unlist(strsplit(landmarks_clean, "\n"))
    coords <- lapply(landmark_list, function(landmark) {
      parts <- unlist(strsplit(trimws(landmark), "\\s+"))
      if (length(parts) == 2) {
        c(x = as.numeric(parts[1]), y = as.numeric(parts[2]))
      } else {
        c(x = NA, y = NA)
      }
    })
    x_coords <- sapply(coords, function(coord) coord["x"])
    y_coords <- sapply(coords, function(coord) coord["y"])
    names(x_coords) <- paste0(seq_along(x_coords)-1, "_x")
    names(y_coords) <- paste0(seq_along(y_coords)-1, "_y")
    as.list(c(x_coords, y_coords))
  } else {
    NULL
  }
}

# Expand the landmarks into columns
landmarks_expanded <- lapply(df$landmarks, parse_landmarks)
landmarks_df <- bind_rows(lapply(landmarks_expanded, as.data.frame.list))

# Combine with original dataframe (excluding 'landmarks' column)
df_out <- bind_cols(df %>% select(-landmarks), landmarks_df)

# Write result to CSV
write_csv(df_out, "your_file_processed.csv")
`;

function HowTo() {
  const usingTheModelRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const schemaRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState<string | null>(null);

  function handleCopy(code: string, id: string) {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(id);
      setTimeout(() => setCopied(null), 1500);
    });
  }

  return (
    <div className="container">
      <Header
        page="howto"
        sections={{
          usingTheModel: usingTheModelRef,
          results: resultsRef,
          schema: schemaRef,
        }}
      />
      <h2 className={styles.title}>MELD/LM - How to</h2>
      <div className={styles.wrapper}>
        <div ref={usingTheModelRef} className={styles.wrapperItems}>
          <h3 className={styles.titleCommon}>Using the Model </h3>
          <div className={styles.wrapperCommon}>
            <ul className={styles.listModel}>
              <li>
                Using the ‘Run Meld’ button in the top right corner, navigate to
                the model form.
              </li>
              <li>
                <p>In the form fill</p>
                <ul>
                  <li>
                    <strong>Title and Description:</strong> An appropriate title
                    and description, containing information on the animal.{' '}
                  </li>
                  <li>
                    <strong> Animal type:</strong> Select the type of animal you
                    want to detect (cat or dog).
                  </li>
                  <li>
                    <strong>Size:</strong> Select the model you want to use. The
                    small model is faster, while the large model is more
                    accurate but takes longer. Adjust this parameter according
                    to your specific needs.
                  </li>
                  <li>
                    <strong>FPS:</strong> Select the wanted processing frame per
                    second (FPS), 100% all frames will be processed, 50% half of
                    the frames… This parameter impacts how often landmarks are
                    detected. If your animal is not moving much, it makes sense
                    to reduce this parameter.
                  </li>
                  <li>
                    <strong>Upload:</strong> Upload the video using the “Choose
                    video” button. Currently, we don’t support images.
                  </li>
                  <li>
                    Choose whether you agree to using your videos for scientific
                    purposes. Otherwise, we’ll delete your video from our
                    servers shortly after processing.
                  </li>
                  <li>
                    Agree to the privacy policy <strong>(required)</strong>.
                  </li>
                </ul>
              </li>
              <li className={styles.border}>Submit the form!</li>
            </ul>
            <div>
              <img className={styles.image} src={form} alt="" />
            </div>
          </div>
        </div>
        <div ref={resultsRef}>
          <h3 className={styles.titleCommon}>Results</h3>
          <div className={`${styles.wrapperCommon} ${styles.wrapperResult}`}>
            <div className={styles.listResLand}>
              <p>
                Once you submit the model form, go to the results page. After
                processing is complete, two buttons will appear to download the
                results.
              </p>

              <ol>
                <li>
                  <strong>Frame_count:</strong> The frame number.
                </li>
                <li>
                  <strong>Time_sec:</strong> The time in seconds for the frame.
                </li>
                <li>
                  <strong>Conf:</strong> The confidence of the model in the
                  prediction.
                </li>
                <li>
                  <strong>Landmarks</strong> A list of the predicted landmarks,
                  written in the format of [x coordinates y coordinates]. The
                  landmarks have a predefined order, and if they are not
                  detected, there will be a 0 in their place.
                </li>
              </ol>
            </div>
            <div>
              <img className={styles.image} src={result} alt="" />
            </div>
          </div>
        </div>
        <div ref={schemaRef} className={styles.wrapperItems}>
          <h3 className={styles.titleCommon}>Schema</h3>
          <div className={`${styles.wrapperCommon} ${styles.wrapperLandmark}`}>
            <div className={styles.listResLand}>
              <p>
                All landmarks are tied to specific places on the animal’s face.
                Each landmark is defined by two coordinates in the image’s
                coordinate system. As an animal moves between frames, landmark
                coordinates change accordingly. Sometimes landmarks disappear
                (when the model can’t locate them) – in that case, they are
                replaced by 0 and are not displayed.
              </p>
              <div>
                You can find detailed information about the landmarks in the
                following GitHub pages:
                <ul>
                  <li>
                    For cats:{' '}
                    <a
                      className={styles.links}
                      href="https://github.com/martvelge/CatFLW"
                      target="_blank"
                    >
                      CatFLW
                    </a>
                  </li>
                  <li>
                    For dogs:{' '}
                    <a
                      className={styles.links}
                      href="https://github.com/martvelge/DogFLW"
                      target="_blank"
                    >
                      DogFLW
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <img className={styles.image} src={gif} alt="" />
            </div>
          </div>
          <h3 className={`${styles.title} ${styles.docs}`}>
            You can interact with the output file in the following way:
          </h3>

          <p className={styles.codeName}>For Python:</p>
          <div className={styles.codeBlock}>
            <div className={styles.copyWrapper}>
              <button
                className={styles.copyButton}
                onClick={() => handleCopy(codeStrPython, 'python')}
              >
                {copied === 'python' ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <SyntaxHighlighter
              language="python"
              style={atomDark}
              wrapLines={true}
            >
              {codeStrPython}
            </SyntaxHighlighter>
          </div>
          <p className={styles.codeName}>For R:</p>
          <div className={styles.codeBlock}>
            <div className={styles.copyWrapper}>
              <button
                className={styles.copyButton}
                onClick={() => handleCopy(codeStrR, 'r')}
              >
                {copied === 'r' ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <SyntaxHighlighter language="r" style={atomDark} wrapLines={true}>
              {codeStrR}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowTo;
