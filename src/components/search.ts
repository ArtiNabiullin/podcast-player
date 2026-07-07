import { debounce } from "../utils/debounce";

// cледим за полем поиска и сообщаем наружу, какой текст ввел пользователь.
export function setupSearch(onSearch: (query: string) => void) {
  const input = document.getElementById("search-input");
  const debouncedSearch = debounce(onSearch, 500);

  if (!(input instanceof HTMLInputElement)) {
    return;
  }

  input.addEventListener("input", () => {
    debouncedSearch(input.value);
  });
}
