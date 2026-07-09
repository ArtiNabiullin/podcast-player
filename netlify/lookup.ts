export async function handler(event) {
  const id = event.queryStringParameters?.id;

  if (!id) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: "Missing podcast id",
      }),
    };
  }

  const response = await fetch(
    `https://itunes.apple.com/lookup?id=${id}&entity=podcastEpisode`,
  );

  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
}
