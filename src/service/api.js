export default async function getDonation(params = {}) {
  const query = new URLSearchParams(params).toString();

  try {
    const response = await fetch(
      `https://fandom-k-api.vercel.app/8-3/donations/${query}`,
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.error('Failed to fetch donations:', error);
    throw error;
  }
}
