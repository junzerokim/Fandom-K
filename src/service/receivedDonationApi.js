export default async function sendPutRequest(selectedDonation, value) {
  const selectedId = selectedDonation.id;
  await fetch(
    `https://fandom-k-api.vercel.app/8-3/donations/${selectedId}/contribute`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: value }),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("서버 응답:", data);
    })
    .catch((error) => {
      console.error("PUT 요청 에러:", error);
    });
}
