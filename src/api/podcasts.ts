import type { BestPodcastsResponse } from "../types/api";
import type { PodcastDetails, Podcast } from "../types/podcast";
import type { PodcastApi } from "../types/api";
import { request } from "./client";
import { mapPodcast } from "../mappers/podcastMapper";

// В этой функции получаем данные
export async function getBestPodcasts(): Promise<Podcast[]> {
  const data = await request<BestPodcastsResponse>("/best_podcasts");

  return data.podcasts.map(mapPodcast);
}

// В этой функции реализуем поиск подкастов по ключевому слову
export async function searchPodcasts(query: string): Promise<Podcast[]> {
  interface SearchResponse {
    results: PodcastApi[];
  }

  const data = await request<SearchResponse>(
    `/search?q=${encodeURIComponent(query)}`,
  );

  return data.results.map(mapPodcast);
}

export async function getPodcast(id: string): Promise<PodcastDetails> {
  return request<PodcastDetails>(`/podcasts/${id}`);
}
