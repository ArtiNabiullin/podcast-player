import type { EpisodeApi } from "../types/api";
import type { Episode } from "../types/podcast";
//

// маппер епизода
export function mapEpisode(apiEpisode: EpisodeApi): Episode {
  return {
    id: apiEpisode.id,
    title: apiEpisode.title,
    image: apiEpisode.image,
    description: apiEpisode.description,
    audio: apiEpisode.audio,
    pubDateMs: apiEpisode.pub_date_ms,
    audioLengthSec: apiEpisode.audio_length_sec,
  };
}
