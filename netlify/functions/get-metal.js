exports.handler = async function(event, context) {
  const url = "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.XAUUSD,FRX.XAGUSD";

  try {
    const response = await fetch(url);
    const data = await response.json();
    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: "Metal API Error" }) };
  }
};
