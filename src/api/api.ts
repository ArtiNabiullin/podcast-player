const API_KEY = import.meta.env.VITE_LISTEN_NOTES_API_KEY;

export async function getBestPodcasts() {
  const response = await fetch(
    "https://listen-api.listennotes.com/api/v2/best_podcasts",
    {
      headers: {
        "X-ListenAPI-Key": API_KEY,
      },
    },
  );
  const data = await response.json();
  return data;
}
