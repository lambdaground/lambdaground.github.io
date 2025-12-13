exports.handler = async function(event, context) {
  const API_KEY = process.env.OPINET_API_KEY; // 넷리파이에 저장할 키 이름
  
  // F001: 전국 평균 유가 (out=json 옵션 필수)
  const url = `http://www.opinet.co.kr/api/avgAllPrice.do?code=${F251206225}&out=json`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    
    // 오피넷 데이터 구조에서 휘발유(B027), 경유(D047) 찾기
    const list = data.RESULT.OIL;
    const gasoline = list.find(item => item.PRODCD === 'B027');
    const diesel = list.find(item => item.PRODCD === 'D047');

    const result = {
      gasoline: { price: parseFloat(gasoline.PRICE), change: parseFloat(gasoline.DIFF) },
      diesel: { price: parseFloat(diesel.PRICE), change: parseFloat(diesel.DIFF) }
    };

    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify(result)
    };
  } catch (error) {
    return { statusCode: 500, body: "Error" };
  }
};
