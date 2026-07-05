import type { Podcast } from "../types/podcast";

export function createPodcastCard(podcast: Podcast): HTMLDivElement {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
  <img src="${podcast.image}" alt="${podcast.title}" />
  <h3>${podcast.title}</h3>
  <p>${podcast.publisher}</p>
  <small>${podcast.total_episodes}</small>
  `;

  return card;
}
