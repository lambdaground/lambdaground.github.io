exports.handler = async function(event, context) {
  // XAU=금, XAG=은
  const url = "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.XAUUSD,FRX.XAGUSD";

  try {
    const response = await fetch(url);
    const data = await response.json();

    const result = {
      gold: { price: data[0].basePrice, change: data[0].signedChangeRate * 100 },
      silver: { price: data[1].basePrice, change: data[1].signedChangeRate * 100 }
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
