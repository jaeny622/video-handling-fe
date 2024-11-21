class VideoStore {
  private _title = "";
  private _fileUrl = "";
  private _thumbUrl = "";
  private _description = "";
  private _createdAt = new Date();
  private _hashtags = [] as string[];
  private _views = 0;
  private _owner = "";

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
  public get createdAt(): Date {
    return this._createdAt;
  }
  public set createdAt(value: Date) {
    this._createdAt = value;
  }
  public get hashtags(): string[] {
    return this._hashtags;
  }
  public set hashtags(value: string[]) {
    this._hashtags = value;
  }
  public get views(): number {
    return this._views;
  }
  public set views(value: number) {
    this._views = value;
  }
  public get owner(): string {
    return this._owner;
  }
  public set owner(value: string) {
    this._owner = value;
  }
}

export const videoStore = new VideoStore();
