export default async function sendPutRequest(selectedDonation, value) {
  const selectedId = selectedDonation.id;
  await fetch(
    `https://fandom-k-api.vercel.app/8-3/donations/${selectedId}/contribute`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        // 필요한 경우 인증 토큰 등의 헤더도 추가할 수 있습니다.
      },
      body: JSON.stringify({ amount: value }),
    },
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("서버 응답:", data);
      // 성공적으로 업데이트되었음을 사용자에게 알릴 수 있습니다.
    })
    .catch((error) => {
      console.error("PUT 요청 에러:", error);
      // 오류 처리
    });
}
