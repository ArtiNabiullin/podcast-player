import type { Episode } from "../types/podcast";
import { saveProgress, getProgress } from "../utils/storage";

const container = document.getElementById(
  "audio-player",
) as HTMLDivElement | null;

if (!container) {
  throw new Error("Audio player container not found");
}

const image = document.createElement("img");
image.className = "player-image";

const title = document.createElement("h3");
title.textContent = "Nothing playing";

const audio = document.createElement("audio");
audio.preload = "metadata";

const playButton = document.createElement("button");
playButton.textContent = "▶ Start";

playButton.addEventListener("click", () => {
  if (audio.paused) {
    audio.play().catch(console.error);
    playButton.textContent = "⏸";
  } else {
    audio.pause();
    playButton.textContent = "▶";
  }
});

const stopButton = document.createElement("button");
stopButton.textContent = "⏹ Stop";

stopButton.addEventListener("click", () => {
  audio.pause();

  audio.currentTime = 0;

  playButton.textContent = "▶ Start";
});

const time = document.createElement("span");
time.textContent = "0:00 / 0:00";

const progress = document.createElement("input");
progress.type = "range";
progress.min = "0";
progress.value = "0";
progress.step = "1";
progress.className = "progress";

let currentEpisodeId = "";

audio.addEventListener("loadedmetadata", () => {
  progress.max = String(audio.duration);
});

audio.addEventListener("timeupdate", () => {
  progress.value = String(audio.currentTime);

  time.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;

  if (currentEpisodeId) {
    saveProgress(currentEpisodeId, audio.currentTime);
  }
});

audio.addEventListener("ended", () => {
  playButton.textContent = "▶ Start";
});

progress.addEventListener("input", () => {
  audio.currentTime = Number(progress.value);
});

container.append(image, title, playButton, time, progress, audio, stopButton);

// Функция для получения DOM-элемента аудио-плеера
export function getAudioPlayer(): HTMLDivElement {
  return container;
}

// Функция для воспроизведения эпизода
export function playEpisode(episode: Episode) {
  image.src = episode.image;
  image.alt = episode.title;

  title.textContent = episode.title;

  currentEpisodeId = episode.id;

  audio.src = episode.audio;

  audio.load();

  audio.addEventListener(
    "loadedmetadata",
    () => {
      const savedTime = getProgress(episode.id);

      if (savedTime) {
        audio.currentTime = Math.max(savedTime - 10, 0);
      }
    },
    { once: true },
  );

  playButton.textContent = "⏸";

  audio.play().catch((error) => {
    console.error("Playback error:", error);
  });
}

// Функция для форматирования времени
function formatTime(seconds: number) {
  if (isNaN(seconds)) {
    return "0:00";
  }

  const minutes = Math.floor(seconds / 60);

  const secs = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");

  return `${minutes}:${secs}`;
}
