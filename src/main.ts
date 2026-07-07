import "./style.css";
import { searchPodcasts, getBestPodcasts } from "./api/podcasts";
import { createPodcastCard } from "./components/createPodcastCard";
import { setupSearch } from "./components/search";

// Рендерим карточки
function renderPodcasts(podcasts: Podcast[]) {
  const container = document.getElementById("podcasts");

  if (!container) {
    return;
  }

  container.innerHTML = "";

  podcasts.forEach((podcast) => {
    const card = createPodcastCard(podcast, (selectedPodcast) => {
      console.log("Selected podcast:");
      console.log(selectedPodcast.title);
      console.log(selectedPodcast.id);
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

const details = await getPodcast(selectedPodcast.id);

console.log(details);
