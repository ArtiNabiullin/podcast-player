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
