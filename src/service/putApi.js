const BASE_URL = "https://fandom-k-api.vercel.app/8-3";

async function putDonations(selectedDonation, value) {
  const selectedId = selectedDonation.id;
  const url = `${BASE_URL}/donations/${selectedId}/contribute`;

  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: value }),
    });
    if (!response.ok) {
      throw new Error("후원하기에 실패했습니다");
    }
  } catch (error) {
    console.error("후원하기 중 오류 발생:", error);
    throw error;
  }
}

export default putDonations;
