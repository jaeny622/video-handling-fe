import { useEffect } from "react";
import { useParams } from "react-router";
import { videoStore } from "../Stores/video.stores";
import NotFound from "./NotFound";

export default function Detail() {
  const { id } = useParams();
  const { video } = videoStore;

  useEffect(() => {
    videoStore.getVideo(id ?? "");
  }, []);

  return (
    <div>
      {video._id ? (
        <div>
          {video.title}
          <div>
            {video.hashtags.map((hashtag) => (
              <span>{`#${hashtag}`}</span>
            ))}
          </div>
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
}
