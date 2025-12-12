// netlify/functions/get-exchange.js

exports.handler = async function(event, context) {
  // 두나무(Dunamu) 오픈 API URL (별도 키 없이 호출 가능)
  // codes=FRX.KRWUSD : 원/달러 환율
  // codes=FRX.KRWJPY : 원/엔 환율 등 추가 가능
  const url = "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD";

  try {
    const response = await fetch(url);
    const data = await response.json();

    // 두나무 API는 배열로 줍니다. 첫 번째꺼만 꺼내면 됩니다.
    /*
      응답 예시:
      [{
        "code": "FRX.KRWUSD",
        "currencyCode": "USD",
        "basePrice": 1320.50, (기준 환율)
        "changePrice": 5.00,
        "openingPrice": 1315.00,
        ...
      }]
    */

    return {
      statusCode: 200,
      headers: { 
        "Access-Control-Allow-Origin": "*", 
        "Content-Type": "application/json" 
      },
      body: JSON.stringify(data[0]) // 배열의 첫 번째 객체만 보냄
    };
  } catch (error) {
    return { 
      statusCode: 500, 
      body: JSON.stringify({ error: "Exchange API Error" }) 
    };
  }
};
