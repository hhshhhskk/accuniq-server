import express from "express";
import cors from "cors";
const app = express();
const port = 4000;

app.use(
  cors({
    origin: "*", // 출처 허용 옵션
    credentials: true, // 응답 헤더에 Access-Control-Allow-Credentials 추가
    optionsSuccessStatus: 200, // 응답 상태 200으로 설정
  })
);

app.get("/", function (req, res) {
  res.send("홈페이지 입니다.");
});

// 게시판 API
app.get("/board", (요청, 반응) => {
  const result = [
    {
      pk: 1,
      id: 1,
      user: "둘리",
      title: "반가워요",
      content: "내용입니다.",
    },
  ];
  반응.send(result);
});

app.get("/good", (요청, 반응) => {
  // DB 가서 ...... 목록 출력.. 노력..
  const result = [{ title: "사과", price: 1000, discount: 25 }];
  반응.send(result);
});

// visual 영역 출력 데이터
app.get("/visual", (요청, 반응) => {
  const result = {
    total: 6,
    visual_slide: [
      {
        file: "images/v1.png",
        url: "a.html",
      },
      {
        file: "images/v2.jpg",
        url: "b.html",
      },
      {
        file: "images/v3.jpg",
        url: "c.html",
      },
      {
        file: "images/v4.jpg",
        url: "d.html",
      },
      {
        file: "images/v5.jpg",
        url: "e.html",
      },
      {
        file: "images/v6.png",
        url: "f.html",
      },
    ],
  };
  반응.send(result);
});

app.listen(port, () => {
  console.log(`현재 웹 서버가 포트번호 ${port} 으로 접속하였습니다.`);
});
