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

  backButton.classList.remove("visible");
  backButton.classList.add("hidden");
}
