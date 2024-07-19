const BASE_URL = "https://fandom-k-api.vercel.app/8-3";
const PAGE_SIZE = 30;

async function getIdols() {
  const url = `${BASE_URL}/idols?pageSize=${PAGE_SIZE}`;

  try {
    const response = await fetch(url);

    if (!response || !response.ok) {
      console.error("Fetch failed:", response.status, response.statusText);
      return [];
    }

    const result = await response.json();
    const data = result.list;
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

async function getDonations(params = {}) {
  const QUERY = new URLSearchParams(params).toString();
  const url = `${BASE_URL}/donations/${QUERY}`;

  try {
    const response = await fetch(url);

    if (!response || !response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Failed to fetch donations:", error);
    throw error;
  }
}

async function getCharts(gender = "female") {
  const url = `${BASE_URL}/charts/gender?gender=${gender}&pageSize=${PAGE_SIZE}`;

  try {
    const response = await fetch(url);

    if (!response || !response.ok) {
      return [];
    }

    const result = await response.json();
    const data = result.idols;
    return data;
  } catch (error) {
    return [];
  }
}

export { getIdols, getDonations, getCharts };
