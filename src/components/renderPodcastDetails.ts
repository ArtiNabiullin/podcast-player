import type { PodcastDetails } from "../types/podcast";
import { createEpisodeCard } from "./episodeCard";
import { playEpisode } from "./audioPlayer";

//компонент отображения деталей подкаста
export function renderPodcastDetails(podcast: PodcastDetails) {
  const container = document.getElementById("details");

  if (!container) {
    return;
  }

  container.innerHTML = "";
  container.className = "podcast-details";

  const info = document.createElement("div");
  info.className = "podcast-info";

  const title = document.createElement("h1");
  title.textContent = podcast.title;

  const image = document.createElement("img");
  image.src = podcast.image;

  const publisher = document.createElement("p");
  publisher.textContent = podcast.publisher;

  const description = document.createElement("p");
  description.textContent = podcast.description;

  info.append(image, title, publisher, description);

  const episodesTitle = document.createElement("h2");
  episodesTitle.textContent = "Episodes";

  const episodesList = document.createElement("div");
  episodesList.className = "episodes-list";

  let visibleEpisodes = 10;

  function renderEpisodes() {
    const startIndex = episodesList.children.length;

    podcast.episodes.slice(startIndex, visibleEpisodes).forEach((episode) => {
      const card = createEpisodeCard(episode, playEpisode);

      episodesList.append(card);
    });
  }

  renderEpisodes();

  const loadMoreButton = document.createElement("button");

  loadMoreButton.textContent = "Load more";

  if (podcast.episodes.length <= 10) {
    loadMoreButton.remove();
  }

  loadMoreButton.addEventListener("click", () => {
    visibleEpisodes += 10;

    renderEpisodes();

    if (visibleEpisodes >= podcast.episodes.length) {
      loadMoreButton.remove();
    }
  });

  container.append(info, episodesTitle, episodesList, loadMoreButton);
}
