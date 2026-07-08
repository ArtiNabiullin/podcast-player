import type { PodcastDetails } from "../types/podcast";
import { createEpisodeCard } from "./episodeCard";

export function renderPodcastDetails(podcast: PodcastDetails) {
  const container = document.getElementById("podcasts");

  if (!container) {
    return;
  }

  container.innerHTML = "";

  const title = document.createElement("h1");
  title.textContent = podcast.title;

  const image = document.createElement("img");
  image.src = podcast.image;

  const publisher = document.createElement("p");
  publisher.textContent = podcast.publisher;

  const description = document.createElement("p");
  description.textContent = podcast.description;

  const episodesTitle = document.createElement("h2");
  episodesTitle.textContent = "Episodes";

  const episodesList = document.createElement("div");

  podcast.episodes.forEach((episode) => {
    const card = createEpisodeCard(episode);
    episodesList.append(card);
  });

  container.append(
    image,
    title,
    publisher,
    description,
    episodesTitle,
    episodesList,
  );
}
