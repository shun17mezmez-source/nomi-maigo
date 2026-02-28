exports.handler = async (event) => {
  const { lat, lng, range } = event.queryStringParameters;
  const API_KEY = 'c6d719fe8a8eca99';
  const url = `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${API_KEY}&lat=${lat}&lng=${lng}&range=${range}&format=json`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};