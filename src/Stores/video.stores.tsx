import { action, makeAutoObservable } from "mobx";
import { getVideo, getVideos } from "../Services/video.services";
import { Video, VideoInfo } from "../Types/video.types";

class VideoStore {
  private _videos = [] as Video[];
  private _video = {} as Video;
  private _uploadVideo = {} as VideoInfo;
  private _editVideo = {} as VideoInfo;
  private _title = "";
  private _fileUrl = "";
  private _thumbUrl = "";
  private _description = "";
  private _hashtags = [] as string[];

  constructor() {
    makeAutoObservable(this, {
      getVideoList: action,
      getVideo: action,
    });
  }

  public get videos() {
    return this._videos;
  }
  public set videos(value: Video[]) {
    this._videos = value;
  }
  public get uploadVideo() {
    return this._uploadVideo;
  }
  public set uploadVideo(value: VideoInfo) {
    this._uploadVideo = value;
  }
  public get editVideo() {
    return this._editVideo;
  }
  public set editVideo(value: VideoInfo) {
    this._editVideo = value;
  }
  public get video() {
    return this._video;
  }
  public set video(value) {
    this._video = value;
  }
  public get title(): string {
    return this._title;
  }
  public set title(value: string) {
    this._title = value;
  }
  public get fileUrl(): string {
    return this._fileUrl;
  }
  public set fileUrl(value: string) {
    this._fileUrl = value;
  }
  public get thumbUrl(): string {
    return this._thumbUrl;
  }
  public set thumbUrl(value: string) {
    this._thumbUrl = value;
  }
  public get description(): string {
    return this._description;
  }
  public set description(value: string) {
    this._description = value;
  }
  public get hashtags(): string[] {
    return this._hashtags;
  }
  public set hashtags(value: string[]) {
    this._hashtags = value;
  }

  async getVideoList() {
    try {
      const result = await getVideos();
      this.videos = result as Video[];
    } catch (error) {
      console.log(error);
    }
  }

  async getVideo(id: string) {
    try {
      const result = await getVideo(id);
      this.video = result as Video;
    } catch (error) {
      console.log(error);
    }
  }
}

export const videoStore = new VideoStore();
