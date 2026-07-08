import "./style.css";
import { searchPodcasts, getBestPodcasts, getPodcast } from "./api/podcasts";
import { createPodcastCard } from "./components/createPodcastCard";
import { setupSearch } from "./components/search";
import { renderPodcastDetails } from "./components/podcastDetails";
import { showDetails, showPodcasts } from "./utils/view";

// Рендерим карточки
function renderPodcasts(podcasts: Podcast[]) {
  const container = document.getElementById("podcasts");

  if (!container) {
    return;
  }

  container.innerHTML = "";

  podcasts.forEach((podcast) => {
    const card = createPodcastCard(podcast, async (selectedPodcast) => {
      const details = await getPodcast(selectedPodcast.id);

      renderPodcastDetails(details);

      showDetails();
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

      renderPodcasts(results);
    });
  } catch (error) {
    console.error(error);

    alert("Failed to load podcasts.");
  }
}

init();
