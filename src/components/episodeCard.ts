import type { Episode } from "../types/podcast";

//компонент карточки эпизода
export function createEpisodeCard(episode: Episode): HTMLDivElement {
  const card = document.createElement("div");

  card.className = "episode-card";

  const title = document.createElement("h3");
  title.textContent = episode.title;

  const duration = document.createElement("p");
  duration.textContent = `${Math.floor(episode.audioLengthSec / 60)} min`;

  const description = document.createElement("p");
  description.textContent = episode.description;

  const audio = document.createElement("audio");
  audio.controls = true;
  audio.src = episode.audio;

  card.append(title, duration, description, audio);

  return card;
}
