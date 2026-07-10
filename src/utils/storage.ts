import type { Episode } from "../types/podcast";
// storage
const PROGRESS_KEY = "podcast-progress";
const PLAYLIST_KEY = "podcast-playlist";

type ProgressStorage = Record<string, number>;

// сохраняем прогресс в localStorage
function getProgressStorage(): ProgressStorage {
  const data = localStorage.getItem(PROGRESS_KEY);

  if (!data) {
    return {};
  }

  return JSON.parse(data);
}

// сохраняем прогресс в localStorage
export function saveProgress(episodeId: string, currentTime: number) {
  const progress = getProgressStorage();

  progress[episodeId] = currentTime;

  localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
}

// получаем прогресс из localStorage
export function getProgress(episodeId: string): number | null {
  const progress = getProgressStorage();

  return progress[episodeId] ?? null;
}

function getPlayList(): Episode[] {
  const data = localStorage.getItem(PLAYLIST_KEY);

  if (!data) {
    return [];
  }

  return JSON.parse(data);
}

export function saveToPlayList(episode: Episode) {
  const playlist = getPlayList();

  const exists = playlist.some((item) => item.id === episode.id);

  if (!exists) {
    playlist.push(episode);

    localStorage.setItem(PLAYLIST_KEY, JSON.stringify(playlist));
  }
}

export function getSavedPlayList(): Episode[] {
  return getPlayList();
}

export function removeFromPlayList(episodeId: string) {
  const playlist = getPlayList().filter((episode) => episode.id !== episodeId);

  localStorage.setItem(PLAYLIST_KEY, JSON.stringify(playlist));
}
