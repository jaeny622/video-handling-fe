import { ChangeEvent, useEffect, useState, KeyboardEvent, useRef } from "react";
import { useNavigate } from "react-router";

import { videoStore } from "../Stores/video.stores";
import { observer } from "mobx-react";
import { Video } from "../Types/video.types";

export default observer(function Trending() {
  const [searchTerm, setSearchTerm] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();
  const { videos } = videoStore;

  useEffect(() => {
    videoStore.getVideoList(searchTerm);
  }, []);

  const handleChangeSearchTerm = (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    setSearchTerm(target.value);
  };

  const handleKeyDownSearch = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") handleSearch();
  };

  const handleSearch = () => {
    videoStore.getVideoList(searchTerm);
    setSearchTerm("");
  };

  const handleClick = () => {
    navigate("video/upload");
  };

  const handleClickTitle = (id: string) => {
    navigate(`video/${id}`);
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleChangeSearchTerm}
        onKeyDown={handleKeyDownSearch}
        value={searchTerm}
        ref={searchRef}
      />
      <button onClick={handleSearch}>Search</button>
      <hr />
      <button onClick={handleClick}>Upload</button>
      <div>
        {videos?.length === 0
          ? "No Vidoes"
          : videos.map((video: Video) => (
              <div key={video._id} onClick={() => handleClickTitle(video._id)}>
                {video.title}
              </div>
            ))}
      </div>
    </div>
  );
});
