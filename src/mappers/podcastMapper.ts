import type { PodcastApi, LookupResponse } from "../types/api";
import type { Podcast, PodcastDetails } from "../types/podcast";
import { mapEpisode } from "./episodeMapper";

// преобразуем данные
export function mapPodcast(apiPodcast: PodcastApi): Podcast {
  return {
    id: String(apiPodcast.collectionId),
    title: apiPodcast.collectionName,
    image: apiPodcast.artworkUrl600,
    publisher: apiPodcast.artistName,
    totalEpisodes: 0,
    description: "",
  };
}

// добавляем данные конкретного епизода
export function mapPodcastDetails(data: LookupResponse): PodcastDetails {
  const [podcast, ...episodes] = data.results;

  if (!podcast || !("collectionId" in podcast)) {
    throw new Error("Podcast not found");
  }

  return {
    ...mapPodcast(podcast),
    episodes: episodes.filter((item) => "trackId" in item).map(mapEpisode),
  };
}
