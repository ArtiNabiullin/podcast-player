import type { Episode } from "../types/podcast";
import { saveToPlayList } from "../utils/storage";

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
  description.textContent = truncate(episode.description, 200);

  const playButton = document.createElement("button");
  playButton.textContent = "▶ Play";

  playButton.addEventListener("click", () => onPlay(episode));

  const playlistButton = document.createElement("button");
  playlistButton.textContent = "➕ Add to playlist";

  playlistButton.addEventListener("click", () => {
    saveToPlayList(episode);

    playlistButton.textContent = "✓ Added";
  });

  card.append(
    image,
    title,
    date,
    duration,
    description,
    playButton,
    playlistButton,
  );

  return card;
}

function truncate(text: string, length: number) {
  if (text.length <= length) {
    return text;
  }

  return text.slice(0, length) + "...";
}
