const API_KEY = import.meta.env.VITE_LISTEN_NOTES_API_KEY;

const BASE_URL = "https://listen-api.listennotes.com/api/v2";

// Получаем данные с сервера
export async function request<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      "X-ListenAPI-Key": API_KEY,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP: ${response.status}`);
  }

  return response.json() as Promise<T>;
}
