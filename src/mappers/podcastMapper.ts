import type { PodcastApi } from "../types/api";
import type { Podcast } from "../types/podcast";

// преобразуем данные
export function mapPodcast(apiPodcast: PodcastApi): Podcast {
  return {
    id: apiPodcast.id,
    title: apiPodcast.title,
    image: apiPodcast.image,
    publisher: apiPodcast.publisher,
    totalEpisodes: apiPodcast.total_episodes,
    description: apiPodcast.description,
  };
}
