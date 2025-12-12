exports.handler = async function(event, context) {
  const API_KEY = process.env.ECOS_API_KEY; // 넷리파이에 등록한 키 이름

  // ★ 중요: ECOS의 실제 요청 URL을 아래에 정확히 적어주세요.
  // 예시: 100대 통계지표 조회 URL
  const url = `https://ecos.bok.or.kr/api/StatisticSearch/${P2C9D2VBKH593Z1X7RXL}/json/kr/1/10/060Y001/0101000`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: "ECOS API Error" }) };
  }
};
