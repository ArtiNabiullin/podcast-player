import type { Podcast } from "../types/podcast";

const API_KEY = import.meta.env.VITE_LISTEN_NOTES_API_KEY;

export async function getBestPodcasts(): Promise<Podcast[]> {
  const response = await fetch(
    "https://listen-api.listennotes.com/api/v2/best_podcasts",
    {
      headers: {
        "X-ListenAPI-Key": API_KEY,
      },
    },
  );

  const data = await response.json();

  return data.podcasts.map((p: any) => ({
    id: p.id,
    title: p.title,
    image: p.image,
    publisher: p.publisher,
    total_episodes: p.total_episodes,
    description: p.description,
  }));
}
