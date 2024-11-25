import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { observer } from "mobx-react";

import { videoStore } from "../Stores/video.stores";

import NotFound from "./NotFound";
import { deleteVideo } from "../Services/video.services";

export default observer(function Detail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { video } = videoStore;

  useEffect(() => {
    videoStore.getVideo(id ?? "");
  }, []);

  const handleClickEdit = () => {
    navigate(`/video/edit?id=${id}`);
  };

  const handleClickDelete = () => {
    deleteVideo(id ?? "");
  };

  return (
    <div>
      <button onClick={handleClickEdit}>Edit</button>
      <button onClick={handleClickDelete}>Delete</button>
      {video._id ? (
        <div>
          {video.title}
          <div>
            {video.hashtags.map((hashtag, idx) => (
              <span key={`${idx}${hashtag}`}>{`#${hashtag}`}</span>
            ))}
          </div>
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
});
