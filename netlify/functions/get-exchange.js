exports.handler = async function(event, context) {
  const url = "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD,FRX.KRWJPY,FRX.KRWCNY,FRX.KRWEUR";

  try {
    const response = await fetch(url);
    const data = await response.json();

    // 순서대로: 달러[0], 엔화[1], 위안화[2], 유로[3]
    const result = {
      usdkrw: { rate: data[0].basePrice, change: data[0].changePrice, changePoints: data[0].changePrice },
      jpykrw: { rate: data[1].basePrice, change: data[1].changePrice, changePoints: data[1].changePrice },
      cnykrw: { rate: data[2].basePrice, change: data[2].changePrice, changePoints: data[2].changePrice },
      eurkrw: { rate: data[3].basePrice, change: data[3].changePrice, changePoints: data[3].changePrice }
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
