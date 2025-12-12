exports.handler = async function(event, context) {
  const API_KEY = process.env.OPINET_API_KEY; // 넷리파이에 등록한 키 이름
  
  // 실제 오피넷 API 주소 (필요에 따라 URL 파라미터 수정하세요)
  const url = `http://www.opinet.co.kr/api/detailByCode.do?code=${F251206225}&out=json`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: "Oil API Error" }) };
  }
};
