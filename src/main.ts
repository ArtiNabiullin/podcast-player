import { getBestPodcasts } from "./api/api";
import "./style.css";

async function init() {
  const podcasts = await getBestPodcasts();

  console.log(podcasts);
}

init();
