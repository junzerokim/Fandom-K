const BASE_URL = "https://fandom-k-api.vercel.app/8-3";

async function postVotes(selectedIdolId) {
  const url = `${BASE_URL}/votes`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idolId: selectedIdolId,
      }),
    });
    if (!response.ok) {
      throw new Error("차트 투표하기에 실패했습니다");
    }
  } catch (error) {
    console.error("차트 투표하기 중 오류 발생:", error);
    throw error;
  }
}

export default postVotes;
