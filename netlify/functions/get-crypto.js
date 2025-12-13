// netlify/functions/get-crypto.js
exports.handler = async function(event, context) {
  // 업비트에서 진짜 가격 가져오기
  const url = "https://api.upbit.com/v1/ticker?markets=KRW-BTC,KRW-ETH";
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify(data)
    };
  } catch (error) {
    return { statusCode: 500, body: "Error" };
  }
};
