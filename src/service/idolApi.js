const BASE_URL = 'https://fandom-k-api.vercel.app/8-3';

export default async function getIdolChart() {
  const LIMIT = 10;
  const url = `${BASE_URL}/charts/gender?gender=female&pageSize=${LIMIT}`;

  try {
    const response = await fetch(url);

    if (!response || !response.ok) {
      console.error('Fetch failed:', response.status, response.statusText);
      return [];
    }
    const result = await response.json();
    const data = result.idols;

    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}
