export interface Video {
  title: string;
  fileUrl: string;
  thumbUrl: string;
  description: string;
  createdAt: Date;
  hashtags: string[];
  views: number;
  owner: string;
}
