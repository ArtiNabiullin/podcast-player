// интерфейс подкаста
export interface Podcast {
  id: string;
  title: string;
  image: string;
  publisher: string;
  totalEpisodes: number;
  description: string;
}

export interface PodcastDetails extends Podcast {
  episodes: Episode[];
}

export interface Episode {
  id: string;
  title: string;
  image: string;
  description: string;
  audio: string;
  pubDateMs: number;
  audioLengthSec: number;
}
