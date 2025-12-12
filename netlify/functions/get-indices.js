exports.handler = async function(event, context) {
  // 심볼: ^GSPC(S&P500), ^IXIC(나스닥), ^KS11(코스피)
  const symbols = ["^GSPC", "^IXIC", "^KS11"];
  
  // 여러 개를 한 번에 부르기 위해 Promise.all 사용
  const requests = symbols.map(symbol => 
    fetch(`https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?interval=1d&range=1d`)
      .then(res => res.json())
  );

  try {
    const results = await Promise.all(requests);
    
    // 야후 데이터가 복잡해서 필요한 것만 깔끔하게 정리
    const simplifiedData = results.map((data, index) => {
      const meta = data.chart.result[0].meta;
      return {
        symbol: symbols[index],
        name: symbols[index] === "^GSPC" ? "S&P 500" : symbols[index] === "^IXIC" ? "NASDAQ" : "KOSPI",
        price: meta.regularMarketPrice,
        change: meta.regularMarketPrice - meta.chartPreviousClose, // 등락폭
        percent: ((meta.regularMarketPrice - meta.chartPreviousClose) / meta.chartPreviousClose) * 100 // 등락률
      };
    });

    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" },
      body: JSON.stringify(simplifiedData)
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: "Indices API Error" }) };
  }
};
