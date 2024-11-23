import { ChangeEvent } from "react";
import { videoStore } from "../Stores/video.stores";
import { uploadVideo } from "../Services/video.services";

export default function Upload() {
  const { title, fileUrl, thumbUrl, description, hashtags } =
    videoStore.uploadVideo;

  const handleChange = (event: ChangeEvent, type: string) => {
    const target = event.target as HTMLInputElement;
    videoStore.uploadVideo[type] = target.value;
  };

  const handleUpload = () => {
    uploadVideo(videoStore.uploadVideo);
  };

  return (
    <div>
      <input
        name="title"
        onChange={(e) => handleChange(e, "title")}
        value={title}
      />
      <input
        name="fileUrl"
        onChange={(e) => handleChange(e, "fileUrl")}
        value={fileUrl}
      />
      <input
        name="thumbUrl"
        onChange={(e) => handleChange(e, "thumbUrl")}
        value={thumbUrl}
      />
      <input
        name="description"
        onChange={(e) => handleChange(e, "description")}
        value={description}
      />
      <input
        name="hashtags"
        onChange={(e) => handleChange(e, "hashtags")}
        value={hashtags}
      />
      <button onClick={handleUpload}>Submit</button>
    </div>
  );
}
