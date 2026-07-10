import type { Episode } from "../types/podcast";

const container = document.createElement("div");
container.className = "audio-player";

const image = document.createElement("img");
image.className = "player-image";

const title = document.createElement("h3");
title.textContent = "Nothing playing";

const audio = document.createElement("audio");
audio.controls = true;
audio.preload = "metadata";

const stopButton = document.createElement("button");
stopButton.textContent = "⏹ Stop";

stopButton.addEventListener("click", () => {
  audio.pause();

  audio.currentTime = 0;
});

container.append(image, title, audio, stopButton);

// Функция для получения DOM-элемента аудио-плеера
export function getAudioPlayer(): HTMLDivElement {
  return container;
}

// Функция для воспроизведения эпизода
export function playEpisode(episode: Episode) {
  image.src = episode.image;
  image.alt = episode.image;

  title.textContent = episode.title;

  audio.src = episode.audio;

  audio.load();

  audio.play().catch((error) => {
    console.error("Playback error:", error);
  });
}
