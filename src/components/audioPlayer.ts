import type { Episode } from "../types/podcast";

const container = document.createElement("div");

const title = document.createElement("h3");
title.textContent = "Nothing playing";

const audio = document.createElement("audio");
audio.controls = true;
audio.preload = "metadata";

container.append(title, audio);

// Функция для получения DOM-элемента аудио-плеера
export function getAudioPlayer(): HTMLDivElement {
  return container;
}

// Функция для воспроизведения эпизода
export function playEpisode(episode: Episode) {
  title.textContent = episode.title;
  audio.src = episode.audio;

  audio.play().catch((error) => {
    console.log("Failed to play audio:", error);
  });
}
