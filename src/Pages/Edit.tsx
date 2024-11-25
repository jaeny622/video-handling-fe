import { ChangeEvent, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { observer } from "mobx-react";

import { videoStore } from "../Stores/video.stores";
import { editVideo } from "../Services/video.services";

export default observer(function Edit() {
  const [params] = useSearchParams();
  const id = params.get("id");
  const { title, fileUrl, thumbUrl, description, hashtags } =
    videoStore.editVideo;

  useEffect(() => {
    if (id) {
      videoStore.getVideo(id);
      videoStore.editVideo = {
        ...videoStore.video,
        hashtags: videoStore.video.hashtags.join(","),
      };
    }
  }, []);

  const handleChange = (event: ChangeEvent, type: string) => {
    const target = event.target as HTMLInputElement;
    videoStore.editVideo[type] = target.value;
  };

  const handleUpload = () => {
    if (id) editVideo(id, videoStore.editVideo);
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
});
