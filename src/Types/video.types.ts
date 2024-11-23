export interface VideoStd {
  [index: string]: string | Date | string[] | number;
  title: string;
  fileUrl: string;
  thumbUrl: string;
  description: string;
  hashtags: string;
}

export interface Video extends Omit<VideoStd, "hashtags"> {
  createdAt: Date;
  views: number;
  hashtags: string[];
  owner: string;
}
