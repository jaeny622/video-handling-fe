import { useEffect } from "react";
import { videoStore } from "../Stores/video.stores";

export default function Trending() {
  useEffect(() => {
    videoStore.getVideoList();
  }, []);
  return (
    <div>
      {videoStore.videos?.length === 0 ? "No Vidoes" : "Welcome to Homepage"}
    </div>
  );
}
