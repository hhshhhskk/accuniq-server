import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";

const app = express();
const port = 4000;

// swagger 설정
const swaggerSpec = swaggerJSDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(
  cors({
    origin: "*", // 출처 허용 옵션
    credentials: true, // 응답 헤더에 Access-Control-Allow-Credentials 추가
    optionsSuccessStatus: 200, // 응답 상태 200으로 설정
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.send("홈페이지 입니다.");
});

// 게시판 API
app.get("/board", (req, res) => {
  console.log("GET", req);
  // DB 에서 조건을 보고 결과를 {} 만들어서 [] 담아서준다.
  // MongoDB, MaraiDB(MySql)
  const result = [
    {
      number: 1,
      writer: "철수",
      title: "제목입니다.",
      contents: "내용입니다.",
    },
    {
      number: 2,
      writer: "영희",
      title: "영희입니다.",
      contents: "내용입니다.",
    },
    {
      number: 3,
      writer: "훈희",
      title: "훈희입니다.",
      contents: "내용입니다.",
    },
  ];
  res.send(result);
});

// post 는 프론트에서 백엔드로 자료 전송
// localhost:4000/board : 게시판 자료를 추가한다.
// axios.post("/board", {자료})
app.post("/board", (req, res) => {
  console.log("POST", req);
  console.log("BODY 프론트가 보낸 데이터 ", req.body);
  // DB 에 내용 추가
  res.send("게시물 추가에 성공하였습니다.");
});

// visual 영역 출력 데이터
app.get("/visual", (req, res) => {
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
  res.send(result);
});
// recommend 영역 출력 데이터
app.get("/recommend", (req, res) => {
  const result = {
    total: 11,
    total_img: {
      file: "images/total.svg",
      url: "a.html",
    },
    recommend_slide: [
      {
        file: "images/recommend/recommend1.jpeg",
        prodName:
          "[무료배송] GAP/네파키즈 유아 아동양말 특가전 6팩 건조기가능/KC인증",
        discount: 50,
        price: 6900,
        url: "a.html",
      },
      {
        file: "images/recommend/recommend2.jpeg",
        prodName: "[쎈딜] 서울우유 멸균 초코/딸기/흰우유 24팩/48팩 외",
        discount: 38,
        price: 12500,
        url: "b.html",
      },
      {
        file: "images/recommend/recommend3.jpeg",
        prodName: "[쎈딜] 아모스 컬링 에센스 2X 150ML 2개",
        discount: 12,
        price: 24120,
        url: "c.html",
      },
      {
        file: "images/recommend/recommend4.jpeg",
        prodName:
          "프로쉬 독일 식세기 세제 30개입 2개 올인원 식기세척기 전용세제 600g",
        discount: 49,
        price: 21130,
        url: "d.html",
      },
      {
        file: "images/recommend/recommend5.jpeg",
        prodName: "[스포츠파크] EXR 여성 보아 후리스 자켓 롱자켓 12종택1",
        discount: 66,
        price: 12900,
        url: "e.html",
      },
      {
        file: "images/recommend/recommend6.jpeg",
        prodName:
          "[만원의행복] 호두앤 토핑호두과자 오리지널 40알 외 앙버터/누텔라/블루베리 혼합 골라담기",
        discount: 0,
        price: 8730,
        url: "f.html",
      },
      {
        file: "images/recommend/recommend7.png",
        prodName:
          "[쎈딜] [I*POP] 아이팝 스파클링 워터 플레인 / 아이팝 탄산수 / 강탄산 / 진짜 먹는 샘물로 만든 탄산수",
        discount: 22,
        price: 6900,
        url: "g.html",
      },
      {
        file: "images/recommend/recommend8.jpeg",
        prodName:
          "[쎈딜][스포츠파크] 노스페이스 컴피 알파 플리스 집업 NJ4FP57 JKL ALL",
        discount: 26,
        price: 79000,
        url: "h.html",
      },
      {
        file: "images/recommend/recommend9.png",
        prodName:
          "[쎈딜] 야나두키즈 12개월 통합이용권+영어전집 (+30일 추가증정)",
        discount: 88,
        price: 160550,
        url: "i.html",
      },
      {
        file: "images/recommend/recommend10.jpeg",
        prodName:
          "[쎈딜] 23FW 호주 어그 UGG 슬리퍼 /남녀 겨울 슬리퍼 양털 슬리퍼",
        discount: 13,
        price: 40940,
        url: "j.html",
      },
      {
        file: "images/recommend/recommend11.jpeg",
        prodName:
          "농심 컵라면 낱개6개 미니6입세트 육개장 김치사발면 짜파게티범벅 신라면 오징어짬뽕 새우탕 튀김우동",
        discount: 14,
        price: 8280,
        url: "k.html",
      },
    ],
    recommend_slide_best: [
      {
        file: "images/recommend/recommend1.jpeg",
        prodName:
          "[무료배송] GAP/네파키즈 유아 아동양말 특가전 6팩 건조기가능/KC인증",
        discount: 50,
        price: 6900,
        url: "a.html",
      },
      {
        file: "images/recommend/recommend1.jpeg",
        prodName: "두번째json 2번째 항목입니다.",
        discount: 50,
        price: 6900,
        url: "a.html",
      },
      {
        file: "images/recommend/recommend1.jpeg",
        prodName: "두번째json 3번째 항목입니다.",
        discount: 50,
        price: 6900,
        url: "a.html",
      },
      {
        file: "images/recommend/recommend1.jpeg",
        prodName: "두번째json 4번째 항목입니다.",
        discount: 50,
        price: 6900,
        url: "a.html",
      },
      {
        file: "images/recommend/recommend5.jpeg",
        prodName: "[스포츠파크] EXR 여성 보아 후리스 자켓 롱자켓 12종택1",
        discount: 66,
        price: 12900,
        url: "e.html",
      },
      {
        file: "images/recommend/recommend6.jpeg",
        prodName:
          "[만원의행복] 호두앤 토핑호두과자 오리지널 40알 외 앙버터/누텔라/블루베리 혼합 골라담기",
        discount: 0,
        price: 8730,
        url: "f.html",
      },
      {
        file: "images/recommend/recommend7.png",
        prodName:
          "[쎈딜] [I*POP] 아이팝 스파클링 워터 플레인 / 아이팝 탄산수 / 강탄산 / 진짜 먹는 샘물로 만든 탄산수",
        discount: 22,
        price: 6900,
        url: "g.html",
      },
      {
        file: "images/recommend/recommend8.jpeg",
        prodName:
          "[쎈딜][스포츠파크] 노스페이스 컴피 알파 플리스 집업 NJ4FP57 JKL ALL",
        discount: 26,
        price: 79000,
        url: "h.html",
      },
      {
        file: "images/recommend/recommend9.png",
        prodName:
          "[쎈딜] 야나두키즈 12개월 통합이용권+영어전집 (+30일 추가증정)",
        discount: 88,
        price: 160550,
        url: "i.html",
      },
      {
        file: "images/recommend/recommend10.jpeg",
        prodName:
          "[쎈딜] 23FW 호주 어그 UGG 슬리퍼 /남녀 겨울 슬리퍼 양털 슬리퍼",
        discount: 13,
        price: 40940,
        url: "j.html",
      },
      {
        file: "images/recommend/recommend11.jpeg",
        prodName:
          "농심 컵라면 낱개6개 미니6입세트 육개장 김치사발면 짜파게티범벅 신라면 오징어짬뽕 새우탕 튀김우동",
        discount: 14,
        price: 8280,
        url: "k.html",
      },
    ],
  };
  res.send(result);
});

app.get("/tour", (req, res) => {
  const result = {
    total: 9,
    tour_slide: [
      {
        file: "images/tour/tour1.jpeg",
        babge: "올인클루시브",
        benefit: "얼리 체크인 or 레이트 체크아웃 포함",
        name: "[스완도르 깜란/올인클루시브] 나트랑 자유여행",
        price: "580000",
        url: "a.html",
      },
      {
        file: "images/tour/tour2.jpeg",
        babge: "룸UP",
        benefit: "럭셔리 킹->럭셔리 레이크 킹 룸UP",
        name: "소피텔 앰배서더 서울 호텔&서비스드 레지던스",
        price: "346500",
        url: "b.html",
      },
      {
        file: "images/tour/tour3.jpeg",
        babge: "국적기직항",
        benefit: "라스베가스 준특급 2박, 5대특식 포함",
        name: "[미서부/단독/BEST] 3대도시+8대캐년 완전일주 10일/11일 [아시아나]",
        price: "3399000",
        url: "c.html",
      },
      {
        file: "images/tour/tour4.jpeg",
        babge: "히트상품",
        benefit: "사이판 최대 워터파크 웨이브정글 이용가능",
        name: "[사이판5일]사이판 월드리조트_골드카드",
        price: "1069000",
        url: "d.html",
      },
      {
        file: "images/tour/tour5.jpeg",
        babge: "강력특가",
        benefit: "클래식 킹",
        name: "레스케이프 호텔",
        price: "220000",
        url: "e.html",
      },
      {
        file: "images/tour/tour6.jpeg",
        babge: "BEST",
        benefit: "토트넘VS울버햄튼 경기 티켓 포함",
        name: "[런던Pack] 찐 런던 & 토트넘 직관 경기_6박8일",
        price: "5490000",
        url: "f.html",
      },
      {
        file: "images/tour/tour7.jpeg",
        babge: "",
        benefit: "",
        name: "",
        price: "",
        url: "g.html",
      },
      {
        file: "images/tour/tour8.webp",
        babge: "",
        benefit: "",
        name: "",
        price: "",
        url: "h.html",
      },
      {
        file: "images/tour/tour9.jpeg",
        babge: "",
        benefit: "",
        name: "",
        price: "",
        url: "i.html",
      },
    ],
  };
  res.send(result);
});

app.listen(port, () => {
  console.log(`현재 웹 서버가 포트번호 ${port} 으로 접속하였습니다.`);
});
