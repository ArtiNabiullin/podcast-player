import "./style.css";
import { searchPodcasts, getBestPodcasts, getPodcast } from "./api/podcasts";
import { createPodcastCard } from "./components/createPodcastCard";
import { setupSearch } from "./components/search";
import { renderPodcastDetails } from "./components/renderPodcastDetails";
import {
  showDetails,
  showPodcasts,
  showLoading,
  showEmptyState,
} from "./utils/view";
import type { Podcast } from "./types/podcast";

// Рендерим карточки
function renderPodcasts(podcasts: Podcast[]) {
  const container = document.getElementById("podcasts");

  if (!container) {
    return;
  }

  container.innerHTML = "";

  podcasts.forEach((podcast) => {
    const card = createPodcastCard(podcast, async (selectedPodcast) => {
      showLoading();

      try {
        const details = await getPodcast(selectedPodcast.id);

        renderPodcastDetails(details);

        showDetails();
      } catch (error) {
        console.error(error);

        const container = document.getElementById("details");

        if (container) {
          container.innerHTML = "Failed to load podcast.";
        }
      }
    });

    container.appendChild(card);
  });
}

// Инициализация приложения
async function init() {
  try {
    const bestPodcasts = await getBestPodcasts();

    renderPodcasts(bestPodcasts);

    setupSearch(async (query) => {
      if (!query.trim()) {
        renderPodcasts(bestPodcasts);

        return;
      }

      const results = await searchPodcasts(query);

      if (results.length === 0) {
        showEmptyState("No podcasts found.");
        return;
      }

      renderPodcasts(results);
    });
  } catch (error) {
    console.error(error);

    alert("Failed to load podcasts.");
  }
}

init();

const backButton = document.getElementById("back-button");

backButton?.addEventListener("click", () => {
  showPodcasts();
});
