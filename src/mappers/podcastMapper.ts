import type { PodcastApi, PodcastDetailsResponse } from "../types/api";
import type { Podcast, PodcastDetails } from "../types/podcast";
import { mapEpisode } from "./episodeMapper";

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

// добавляем данные конкретного епизода
export function mapPodcastDetails(
  apiPodcast: PodcastDetailsResponse,
): PodcastDetails {
  return {
    ...mapPodcast(apiPodcast),
    episodes: apiPodcast.episodes.map(mapEpisode),
  };
}
