import "./style.css";
import { getBestPodcasts } from "./api/podcasts";
import { createPodcastCard } from "./components/createPodcastCard";

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
    const podcasts = await getBestPodcasts();
    renderPodcasts(podcasts);
  } catch (error) {
    console.error(error);

    alert("Failed to load podcasts.");
  }
}

init();
