import type { Episode } from "../types/podcast";

//компонент карточки эпизода
export function createEpisodeCard(
  episode: Episode,
  onPlay: (episode: Episode) => void,
): HTMLDivElement {
  const card = document.createElement("div");
  card.className = "episode-card";

  const image = document.createElement("img");
  image.src = episode.image;
  image.alt = episode.title;

  const title = document.createElement("h3");
  title.textContent = episode.title;

  const date = document.createElement("p");
  date.textContent = new Date(episode.pubDateMs).toLocaleDateString();

  const duration = document.createElement("p");
  duration.textContent = `${Math.floor(episode.audioLengthSec / 60)} min`;

  const description = document.createElement("p");
  description.textContent = episode.description;

  const playButton = document.createElement("button");
  playButton.textContent = "▶ Play";

  console.log(episode.title);

  playButton.addEventListener("click", () => onPlay(episode));

  card.append(image, title, date, duration, description, playButton);

  return card;
}
