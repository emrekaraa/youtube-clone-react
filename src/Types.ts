export interface InitialState {
  videos: HomePageVideos[];
  currentPlaying: any;
  searchTerm: string;
  searchResutls: [];
  nextPageToken: string | null;
  recommendedVideos: RecommendedVideos[];
}

export interface HomePageVideos {
  videoId: string;
  videoTitle: string;
  videoDescription: string;
  videoLink: string;
  videoThumbnail: string;
  videoDuration: string;
  videoViews: string | number;
  videoAge: string;
  channelInfo: {
    id: string;
    image: string;
    name: string;
  };
}
export interface CurrentPlaying {
  videoId?: string;
  videoTitle?: string;
  videoDescription?: string;
  videoViews?: string | number;
  videoLikes?: string | number;
  videoAge?: string;
  channelInfo?: {
    id?: string;
    image?: string;
    name?: string;
    subscribers?: string | number;
  };
}
export interface RecommendedVideos {
  videoId: string;
  videoTitle: string;
  videoThumbnail: string;
  videoDuration: string;
  videoViews: string | number;
  videoAge: string;
  channelInfo: {
    id: string;
    name: string;
  };
}

export interface Item {
  snippet: {
    title: string;
    thumbnails: { medium: { url: string } };
    publishedAt: Date;
    channelTitle: string;
    channelId: string;
  };
  contentDetails: {
    upload: {
      videoId: string;
    };
  };
}
