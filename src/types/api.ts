//отдельный interface для данных, которые приходят с сервера, чтобы не смешивать их с интерфейсом Podcast, который используется в приложении
export interface PodcastApi {
  collectionId: number;
  collectionName: string;
  artworkUrl600: string;
  artistName: string;
}

export interface ITunesResponse {
  resultCount: number;
  results: PodcastApi[];
}

export interface EpisodeApi {
  trackId: number;
  trackName: string;
  description: string;
  artworkUrl600: string;
  releaseDate: string;
}

export interface LookupResponse {
  resultCount: number;
  results: (PodcastApi | EpisodeApi)[];
}
