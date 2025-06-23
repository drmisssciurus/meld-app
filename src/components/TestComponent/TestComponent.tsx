import { FFprobeWorker } from 'ffprobe-wasm';
import { useRef, useState } from 'react';

const ffprobeWorker = new FFprobeWorker();

function TestComponent() {
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setVideoFile(file);
      await checkVideoRotationWithFFprobe(file);
    }
  };

  async function checkVideoRotationWithFFprobe(file: File) {
    try {
      const info = await ffprobeWorker.getFileInfo(file);
      console.log('[ffprobe] Full metadata:', info);

      const videoStream = info.streams.find(
        (s) => s.codec_type === 'video'
      ) as any;

      console.log('[ffprobe] full videoStream:', videoStream);

      const rotation =
        videoStream?.tags?.rotate ?? videoStream?.side_data_list?.[0]?.rotation;

      if (rotation !== undefined) {
        console.log(`[rotation] Found: ${rotation} degrees`);
      } else {
        console.log('[rotation] No rotation tag found');
      }
    } catch (err) {
      console.error('[ffprobe] Failed to read metadata:', err);
    }
  }

  return (
    <div>
      <button onClick={handleFileButtonClick}>Choose video</button>
      <input
        ref={fileInputRef}
        type="file"
        accept="video/*"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      {videoFile && <p>Selected file: {videoFile.name}</p>}
    </div>
  );
}

export default TestComponent;
