//отдельный interface для данных, которые приходят с сервера, чтобы не смешивать их с интерфейсом Podcast, который используется в приложении
export interface PodcastApi {
  wrapperType: "track";
  kind: "podcast";

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
  wrapperType: "podcastEpisode";
  kind: "podcast-episode";

  trackId: number;
  trackName: string;

  description?: string;

  artworkUrl600: string;

  previewUrl?: string;

  releaseDate: string;

  trackTimeMillis?: number;
}

export interface LookupResponse {
  resultCount: number;
  results: (PodcastApi | EpisodeApi)[];
}
