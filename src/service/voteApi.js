export default async function handleVote(selectedIdolId) {
  const apiUrl = "https://fandom-k-api.vercel.app/8-3/votes";

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idolId: selectedIdolId,
      }),
    });
    if (!response.ok) {
      throw new Error("투표 업데이트에 실패했습니다");
    }
  } catch (error) {
    console.error("투표 업데이트 중 오류 발생:", error);
    throw error; // 오류를 호출한 컴포넌트나 함수에서 처리할 수 있도록 다시 throw합니다
  }
}
