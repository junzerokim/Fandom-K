// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();
// const PORT = 3000; // 포트 설정, 환경 변수를 사용하거나 기본 포트로 설정

// // body-parser 미들웨어 사용
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.post("/list", (req, res) => {
//   const requestData = req.body;
//   console.log("클라이언트에서 전송된 데이터:", requestData);
//   res.json({
//     message: "POST 요청이 처리되었습니다.",
//     receivedData: requestData,
//   });
// });

const express = require('express');
const cors = require('cors');

const app = express();

// // 모든 도메인에서의 요청을 허용
// // app.use(cors());

// 특정 도메인에서의 요청만 허용할 경우
app.use(cors({ origin: 'http://localhost:3000/list' }));

app.listen(3000, () => {
  console.log('서버가 3000 포트에서 실행 중입니다.');
});
