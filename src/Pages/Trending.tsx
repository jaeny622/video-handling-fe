import { useEffect } from "react";
import { useNavigate } from "react-router";

import { videoStore } from "../Stores/video.stores";

export default function Trending() {
  const navigate = useNavigate();
  useEffect(() => {
    videoStore.getVideoList();
  }, []);

  const handleClick = () => {
    navigate("video/upload");
  };
  return (
    <div>
      <button onClick={handleClick}>Upload</button>
      <div>
        {videoStore.videos?.length === 0 ? "No Vidoes" : "Welcome to Homepage"}
      </div>
    </div>
  );
}
