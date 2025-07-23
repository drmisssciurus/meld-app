import { useState } from 'react';
import { Prism as PrismHighlighter } from 'react-syntax-highlighter';
import { Light as HLJSHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

type Language = 'python' | 'r';

const supportedByPrism: Language[] = ['python'];

const codeExamples: Record<Language, string> = {
  python: `import pandas as pd

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
`,
  r: `library(readr)
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
`,
};

export default function CodeTabs() {
  const [selectedLang, setSelectedLang] = useState<Language>('python');
  const code = codeExamples[selectedLang];
  const Highlighter = supportedByPrism.includes(selectedLang)
    ? PrismHighlighter
    : HLJSHighlighter;
  const style = supportedByPrism.includes(selectedLang) ? atomDark : atomDark;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
  };

  return (
    <div style={{ marginTop: '1rem', position: 'relative' }}>
      <div style={{ marginBottom: '0.5rem', display: 'flex', gap: '8px' }}>
        {Object.keys(codeExamples).map((lang) => (
          <button
            key={lang}
            onClick={() => setSelectedLang(lang as Language)}
            style={{
              padding: '6px 12px',
              borderRadius: '6px',
              border: '1px solid gray',
              background: lang === selectedLang ? '#eee' : '#fff',
              fontWeight: lang === selectedLang ? 'bold' : 'normal',
              cursor: 'pointer',
            }}
          >
            {lang.toUpperCase()}
          </button>
        ))}
        <button
          onClick={handleCopy}
          style={{
            marginLeft: 'auto',
            padding: '6px 12px',
            background: '#eee',
            border: '1px solid gray',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          Copy
        </button>
      </div>

      <Highlighter language={selectedLang} style={style}>
        {code}
      </Highlighter>
    </div>
  );
}
