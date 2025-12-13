exports.handler = async function(event, context) {
  // 업비트 API (원화 마켓)
  const url = "https://api.upbit.com/v1/ticker?markets=KRW-BTC,KRW-ETH";

  try {
    const response = await fetch(url);
    const data = await response.json();
    
    // 업비트 데이터 변환 (우리가 원하는 포맷으로)
    // BTC: data[0], ETH: data[1]
    const result = {
      bitcoin: {
        price: data[0].trade_price, // 현재가
        change: (data[0].signed_change_rate * 100) // 등락률(%)
      },
      ethereum: {
        price: data[1].trade_price,
        change: (data[1].signed_change_rate * 100)
      }
    };

    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify(result)
    };
  } catch (error) {
    console.log("Crypto Error:", error);
    return { statusCode: 500, body: JSON.stringify({ error: "Failed" }) };
  }
};
