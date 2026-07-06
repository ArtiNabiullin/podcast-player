import type { BestPodcastsResponse } from "../types/api";
import type { Podcast } from "../types/podcast";
import { request } from "./client";
import { mapPodcast } from "../mappers/podcastMapper";

// В этой функции получаем данные
export async function getBestPodcasts(): Promise<Podcast[]> {
  const data = await request<BestPodcastsResponse>("/best_podcasts");

  return data.podcasts.map(mapPodcast);
}

export async function searchPodcasts(query: string): Promise<Podcast[]> {
  const data = await request<SearchResponse>(
    `/search?q=${encodeURIComponent(query)}`,
  );

  return data.results.map(mapPodcast);
}

export async function getPodcast(id: string) {
  return request<PodcastDetailsResponse>(`/podcasts/${id}`);
}
