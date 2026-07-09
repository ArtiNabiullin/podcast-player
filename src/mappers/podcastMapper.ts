import type { PodcastApi, LookupResponse, EpisodeApi } from "../types/api";
import type { Podcast, PodcastDetails } from "../types/podcast";
import { mapEpisode } from "./episodeMapper";

// проверка эпизод или нет
function isEpisode(item: PodcastApi | EpisodeApi): item is EpisodeApi {
  return item.kind === "podcast-episode";
}

// преобразуем данные подкаста
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
  const [podcast, ...rest] = data.results;

  return {
    ...mapPodcast(podcast as PodcastApi),

    episodes: rest.filter(isEpisode).map(mapEpisode),
  };
}
