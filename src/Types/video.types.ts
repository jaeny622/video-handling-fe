export interface VideoStd {
  [index: string]: string | Date | string[] | number;
  title: string;
  fileUrl: string;
  thumbUrl: string;
  description: string;
}

export interface VideoInfo extends VideoStd {
  hashtags: string;
}

export interface Video extends VideoStd {
  _id: string;
  createdAt: Date;
  views: number;
  hashtags: string[];
  owner: string;
}
