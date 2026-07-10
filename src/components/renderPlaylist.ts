import { getSavedPlayList, removeFromPlayList } from "../utils/storage";
import { playEpisode } from "./audioPlayer";

export function renderPlaylist() {
  const container = document.getElementById("playlist");

  if (!container) {
    return;
  }

  container.innerHTML = "";

  const playlist = getSavedPlayList();

  const title = document.createElement("h2");
  title.textContent = "My Playlist";

  container.append(title);

  if (playlist.length === 0) {
    const empty = document.createElement("p");
    empty.textContent = "Your playlist is empty. Add episodes to listen later.";

    container.append(empty);

    return;
  }

  playlist.forEach((episode) => {
    const card = document.createElement("div");
    card.className = "playlist-card";

    const name = document.createElement("h3");
    name.textContent = episode.title;

    const play = document.createElement("button");

    play.textContent = "▶ Play";

    play.addEventListener("click", () => {
      playEpisode(episode);
    });

    const remove = document.createElement("button");
    remove.textContent = "Remove";

    remove.addEventListener("click", () => {
      const confirmed = confirm("Remove this episode?");

      if (!confirmed) {
        return;
      }

      removeFromPlayList(episode.id);

      renderPlaylist();
    });

    const image = document.createElement("img");
    image.className = "playlist-image";

    image.src = episode.image;

    image.alt = episode.title;

    const duration = document.createElement("p");

    duration.textContent = `${Math.floor(episode.audioLengthSec / 60)} min`;

    const date = document.createElement("p");

    date.textContent = new Date(episode.pubDateMs).toLocaleDateString();

    card.append(image, name, date, duration, play, remove);

    container.append(card);
  });
}
