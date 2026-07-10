// storage
const STORAGE_KEY = "podcast-progress";

type ProgressStorage = Record<string, number>;

// сохраняем прогресс в localStorage
function getStorage(): ProgressStorage {
  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) {
    return {};
  }

  return JSON.parse(data);
}

// сохраняем прогресс в localStorage
export function saveProgress(episodeId: string, currentTime: number) {
  const progress = getStorage();

  progress[episodeId] = currentTime;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

// получаем прогресс из localStorage
export function getProgress(episodeId: string): number | null {
  const progress = getStorage();

  return progress[episodeId] ?? null;
}
