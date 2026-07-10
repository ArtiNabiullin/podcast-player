// отдельные функции перелючения видимости списка подкастов и одного подкаста
function getElement(id: string) {
  const element = document.getElementById(id);

  if (!element) {
    throw new Error(`Element ${id} not found`);
  }

  return element;
}
// функция для отображения подробной информации о подкасте
export function showDetails() {
  const podcasts = getElement("podcasts");
  const details = getElement("details");
  const backButton = getElement("back-button");

  podcasts.classList.remove("visible");
  podcasts.classList.add("hidden");

  details.classList.remove("hidden");
  details.classList.add("visible");

  backButton.classList.remove("hidden");
  backButton.classList.add("visible");
}
// функция для отображения списка подкастов
export function showPodcasts() {
  const podcasts = getElement("podcasts");
  const details = getElement("details");
  const backButton = getElement("back-button");

  podcasts.classList.remove("hidden");
  podcasts.classList.add("visible");

  details.classList.remove("visible");
  details.classList.add("hidden");

  details.innerHTML = "";

  backButton.classList.remove("visible");
  backButton.classList.add("hidden");
}

// отображение состояния загрузки
export function showLoading() {
  const details = getElement("details");

  details.classList.remove("hidden");
  details.classList.add("visible");

  details.innerHTML = "";

  const loader = document.createElement("p");
  loader.textContent = "Loading podcast...";

  details.append(loader);
}

export function showEmptyState(message: string) {
  const podcasts = getElement("podcasts");

  podcasts.innerHTML = "";

  const text = document.createElement("p");
  text.textContent = message;

  podcasts.append(text);
}
