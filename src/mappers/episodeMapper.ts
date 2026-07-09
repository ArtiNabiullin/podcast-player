import type { EpisodeApi } from "../types/api";
import type { Episode } from "../types/podcast";
//

// маппер епизода
export function mapEpisode(apiEpisode: EpisodeApi): Episode {
  return {
    id: String(apiEpisode.trackId),
    title: apiEpisode.trackName,
    image: apiEpisode.artworkUrl600,
    description: apiEpisode.description ?? "",
    audio: apiEpisode.previewUrl ?? "",
    pubDateMs: Date.parse(apiEpisode.releaseDate),
    audioLengthSec: Math.floor((apiEpisode.trackTimeMillis ?? 0) / 1000),
  };
}
