const BASE_URL = "https://fandom-k-api.vercel.app/8-3";
const PAGE_SIZE = 30;

async function getIdols() {
  const url = `${BASE_URL}/idols?pageSize=${PAGE_SIZE}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("아이돌 목록 불러오기에 실패했습니다");
    }

    const result = await response.json();
    const data = result.list;
    return data;
  } catch (error) {
    console.error("아이돌 목록 불러오기 중 오류 발생:", error);
    throw error;
  }
}

async function getDonations(params = {}) {
  const QUERY = new URLSearchParams(params).toString();
  const url = `${BASE_URL}/donations/${QUERY}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("후원 목록 불러오기에 실패했습니다");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("후원 목록 불러오기 중 오류 발생:", error);
    throw error;
  }
}

async function getCharts(gender = "female") {
  const url = `${BASE_URL}/charts/gender?gender=${gender}&pageSize=${PAGE_SIZE}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("순위 목록 불러오기에 실패했습니다");
    }

    const result = await response.json();
    const data = result.idols;
    return data;
  } catch (error) {
    console.error("순위 목록 불러오기 중 오류 발생:", error);
    throw error;
  }
}

export { getIdols, getDonations, getCharts };
