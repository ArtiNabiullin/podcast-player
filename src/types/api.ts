//отдельный interface для данных, которые приходят с сервера, чтобы не смешивать их с интерфейсом Podcast, который используется в приложении
export interface PodcastApi {
  id: string;
  title: string;
  image: string;
  publisher: string;
  total_episodes: number;
  description: string;
}

export interface BestPodcastsResponse {
  podcasts: PodcastApi[];
}
