exports.handler = async function(event, context) {
  // ^KS11: 코스피, ^KQ11: 코스닥, ^IXIC: 나스닥, ^GSPC: S&P500, ^DJI: 다우존스, ^TNX: 미 국채 10년
  const symbols = ["^KS11", "^KQ11", "^IXIC", "^GSPC", "^DJI", "^TNX"];
  
  // 병렬 요청으로 속도 향상
  const promises = symbols.map(sym => 
    fetch(`https://query1.finance.yahoo.com/v8/finance/chart/${sym}?interval=1d&range=1d`)
      .then(res => res.json())
      .catch(() => null)
  );

  try {
    const results = await Promise.all(promises);
    
    // 데이터 정리 함수
    const extract = (data) => {
      if (!data || !data.chart || !data.chart.result) return { price: 0, change: 0 };
      const meta = data.chart.result[0].meta;
      const price = meta.regularMarketPrice;
      const prev = meta.chartPreviousClose;
      const change = ((price - prev) / prev) * 100;
      return { price, change };
    };

    const result = {
      kospi: extract(results[0]),
      kosdaq: extract(results[1]),
      nasdaq: extract(results[2]),
      sp500: extract(results[3]),
      dowjones: extract(results[4]),
      bonds10y: { yield: results[5]?.chart?.result[0]?.meta?.regularMarketPrice || 0, change: 0 }
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
