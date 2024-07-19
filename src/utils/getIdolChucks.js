// 아이돌 데이터를 n개씩 그룹화하는 함수
const getIdolChunks = (array, chunkSize) => {
  const chunks = [];

  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }

  return chunks;
};

export default getIdolChunks;
