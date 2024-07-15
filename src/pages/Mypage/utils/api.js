const BASE_URL = 'https://fandom-k-api.vercel.app/8-3';

async function getIdolData() {
  const LIMIT = 50;
  const url = `${BASE_URL}/idols?pageSize=${LIMIT}`;

  try {
    const response = await fetch(url);

    if (!response || !response.ok) {
      console.error('Fetch failed:', response.status, response.statusText);
      return [];
    }
    const result = await response.json();
    const data = result.list;

    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

export default getIdolData;
