exports.handler = async function(event, context) {
  const API_KEY = process.env.REB_API_KEY; // 넷리파이에 등록한 키 이름

  // ★ 중요: 공공데이터포털(부동산원) 실제 요청 URL을 적어주세요.
  // (ServiceKey 부분이 API_KEY 변수로 들어가게 설정)
  const url = `https://api.odcloud.kr/api/RealEstateTradingSvc/v1/getRealEstateTradingCount?serviceKey=${789bb662eaa440cc92df2b81195711dc}&page=1&perPage=10`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: "REB API Error" }) };
  }
};
