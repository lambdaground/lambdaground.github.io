exports.handler = async function(event, context) {
  const API_KEY = process.env.ECOS_API_KEY;

  // 1. 기준금리 (코드: 722Y001 / 0101000)
  // 2. 국고채 3년 (코드: 722Y001 / 010200000)
  // 3. 소비자물가지수 (코드: 901Y009 / 0)
  // ECOS는 한 번에 하나씩만 호출 가능해서 3번 불러야 합니다.
  
  const baseUrl = `https://ecos.bok.or.kr/api/StatisticSearch/${P2C9D2VBKH593Z1X7RXL}/json/kr/1/1`;
  
  const urls = [
    `${baseUrl}/722Y001/M/202301/202512/0101000`,   // 기준금리
    `${baseUrl}/722Y001/D/20240101/20251231/010200000`, // 국고채 3년
    `${baseUrl}/901Y009/M/202401/202512/0`           // 소비자물가
  ];

  try {
    const responses = await Promise.all(urls.map(url => fetch(url).then(res => res.json())));
    
    // 응답 데이터 정리
    const baseRateData = responses[0].StatisticSearch.row.pop(); // 가장 최신 값
    const bondData = responses[1].StatisticSearch.row.pop();
    const cpiData = responses[2].StatisticSearch.row.pop();

    const result = {
      bokRate: { rate: parseFloat(baseRateData.DATA_VALUE), change: 0 }, // 기준금리는 변동폭 계산 복잡해서 0 처리
      bond3y: { rate: parseFloat(bondData.DATA_VALUE), change: 0 },
      cpi: { value: parseFloat(cpiData.DATA_VALUE), change: 0 }
    };

    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify(result)
    };
  } catch (error) {
    console.log(error);
    return { statusCode: 500, body: "Error" };
  }
};
