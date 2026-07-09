// выводим базовый url для запросов к серверу
const BASE_URL = "/.netlify/functions";

// Получаем данные с сервера
export async function request<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${BASE_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error(`HTTP: ${response.status}`);
  }

  return response.json() as Promise<T>;
}
