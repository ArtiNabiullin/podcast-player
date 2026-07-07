import type { Podcast } from "../types/podcast";

//создаем карточки подкастов

function createTextElement<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  text: string,
): HTMLElementTagNameMap[K] {
  const element = document.createElement(tag);
  element.textContent = text;
  return element;
}

export function createPodcastCard(
  podcast: Podcast,
  onClick: (podcast: Podcast) => void,
): HTMLDivElement {
  const card = document.createElement("div");
  card.className = "card";

  const image = document.createElement("img");
  image.src = podcast.image;
  image.alt = podcast.title;

  const title = createTextElement("h3", podcast.title);
  const publisher = createTextElement("p", podcast.publisher);
  const episodes = createTextElement(
    "small",
    `${podcast.totalEpisodes ?? "Unknown"} episodes`,
  );

  card.append(image, title, publisher, episodes);

  card.addEventListener("click", () => onClick(podcast));

  return card;
}
