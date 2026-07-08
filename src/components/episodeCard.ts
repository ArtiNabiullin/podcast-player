import type { Episode } from "../types/podcast";

//вынесем эпизод в отдельный компонент.
export function createEpisodeCard(episode: Episode): HTMLDivElement {
  const card = document.createElement("div");

  card.className = "episode-card";

  const title = document.createElement("h3");
  title.textContent = episode.title;

  const duration = document.createElement("p");
  duration.textContent = `${Math.floor(episode.audioLengthSec / 60)} min`;

  card.append(title, duration);

  return card;
}
