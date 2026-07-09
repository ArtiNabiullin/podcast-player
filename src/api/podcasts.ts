import type { ITunesResponse, LookupResponse } from "../types/api";
import type { PodcastDetails, Podcast } from "../types/podcast";
import { request } from "./client";
import { mapPodcast, mapPodcastDetails } from "../mappers/podcastMapper";

// В этой функции получаем данные
export async function getBestPodcasts(): Promise<Podcast[]> {
  const data = await request<ITunesResponse>(
    "/search?q=podcast&entity=podcast&limit=20",
  );

  return data.results.map(mapPodcast);
}

// В этой функции реализуем поиск подкастов по ключевому слову
export async function searchPodcasts(query: string): Promise<Podcast[]> {
  const data = await request<ITunesResponse>(
    `/search?q=${encodeURIComponent(query)}`,
  );

  return data.results.map(mapPodcast);
}

// В этой функции получаем подробную информацию о подкасте по его id
export async function getPodcast(id: string): Promise<PodcastDetails> {
  const data = await request<LookupResponse>(`/lookup?id=${id}`);

  return mapPodcastDetails(data);
}
