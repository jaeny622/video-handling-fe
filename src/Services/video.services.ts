import axios from "axios";

export async function getVideos() {
  const res = await axios.get("");
  return res?.data;
}

export async function getVideo(id: string) {
  const res = await axios.get(`${id}`);
  return res?.data;
}

export async function editVideo() {
  const res = await axios.post("/edit", {});
  return res?.data;
}

export async function deleteVideo() {
  const res = await axios.post("/delets", {});
  return res?.data;
}
