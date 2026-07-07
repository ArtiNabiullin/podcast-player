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
  description: string;
  audio: string;
  pub_date_ms: number;
  audio_length_sec: number;
}
