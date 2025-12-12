exports.handler = async function(event, context) {
  // 업비트 원화 마켓 시세 조회
  const url = "https://api.upbit.com/v1/ticker?markets=KRW-BTC,KRW-ETH,KRW-XRP,KRW-SOL";

  try {
    const response = await fetch(url);
    const data = await response.json();
    
    // data는 배열 형태입니다. [{market: "KRW-BTC", trade_price: ...}, ...]
    
    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: "Crypto API Error" }) };
  }
};
