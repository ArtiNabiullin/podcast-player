// загрузка itunes к netify
export async function handler(event) {
  const params = event.queryStringParameters;

  const query = params?.q;

  if (!query) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: "Missing query",
      }),
    };
  }

  const response = await fetch(
    `https://itunes.apple.com/search?${new URLSearchParams({
      term: query,
      entity: params?.entity ?? "podcast",
      limit: params?.limit ?? "20",
    })}`,
  );

  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
}
