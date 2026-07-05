import "./style.css";
import { getBestPodcasts } from "./api/api";
import { createPodcastCard } from "./components/createPodcastCard";

async function init() {
  const podcasts = await getBestPodcasts();

  const container = document.getElementById("podcasts");

  if (!container) return;

  podcasts.forEach((podcast) => {
    const card = createPodcastCard(podcast);
    container.appendChild(card);
  });
}

init();
