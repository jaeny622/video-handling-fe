import { useEffect } from "react";
import { videoStore } from "../Stores/video.stores";

export default function Trending() {
  useEffect(() => {
    videoStore.getVideoList();
  }, []);
  return <div>trending</div>;
}
