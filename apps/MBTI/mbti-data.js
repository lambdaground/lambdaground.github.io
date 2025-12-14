const ageGroupInfo = {
  elementary: { label: '초등학생', subtitle: '16개의 재미있는 상황 질문', questionCount: 16 },
  middle: { label: '중학생', subtitle: '20개의 상황 선택 질문', questionCount: 20 },
  high: { label: '고등학생', subtitle: '20개의 깊이있는 질문', questionCount: 20 },
  adult: { label: '성인', subtitle: '24개의 시나리오 질문', questionCount: 24 }
};

const animalNames = {
  INTJ: '올빼미', INTP: '너구리', ENTJ: '사자', ENTP: '여우',
  INFJ: '늑대', INFP: '유니콘', ENFJ: '돌고래', ENFP: '수달',
  ISTJ: '거북이', ISFJ: '토끼', ESTJ: '독수리', ESFJ: '강아지',
  ISTP: '표범', ISFP: '고양이', ESTP: '치타', ESFP: '앵무새'
};

const animalImages = {
  INTJ: 'intj_wise_owl_mascot.png',
  INTP: 'curious_raccoon_mascot_intp.png',
  ENTJ: 'entj_lion_leader_mascot.png',
  ENTP: 'entp_clever_fox_mascot.png',
  INFJ: 'infj_wise_wolf_mascot.png',
  INFP: 'infp_unicorn_dreamer_mascot.png',
  ENFJ: 'enfj_caring_dolphin_mascot.png',
  ENFP: 'playful_otter_mascot_enfp.png',
  ISTJ: 'wise_turtle_mascot_istj.png',
  ISFJ: 'isfj_caring_rabbit_mascot.png',
  ESTJ: 'estj_eagle_leader_mascot.png',
  ESFJ: 'cute_golden_retriever_mascot.png',
  ISTP: 'istp_cool_leopard_mascot.png',
  ISFP: 'isfp_artistic_cat_mascot.png',
  ESTP: 'estp_cheetah_adventurer_mascot.png',
  ESFP: 'esfp_parrot_entertainer_mascot.png'
};

const mbtiTypes = {
  INTJ: {
    type: 'INTJ',
    nickname: '전략적인 사색가',
    animal: '올빼미',
    color: 'from-indigo-500 to-purple-600',
    description: '독립적이고 전략적인 사고를 가진 사람이에요. 혼자서 깊이 생각하는 것을 좋아하고, 목표를 세우면 끝까지 달성하려고 노력해요.',
    strengths: ['논리적 사고력', '장기적 계획 수립', '독립적 학습 능력', '문제 해결 능력'],
    activities: ['과학 실험하기', '퍼즐이나 전략 게임', '책 읽기', '미래 계획 세우기'],
    careers: ['연구원', '데이터 과학자', '전략 컨설턴트', '소프트웨어 아키텍트'],
    hobbies: ['체스', '독서', '다큐멘터리 감상', '프로그래밍']
  },
  INTP: {
    type: 'INTP',
    nickname: '호기심 많은 탐구가',
    animal: '너구리',
    color: 'from-cyan-500 to-blue-600',
    description: '끝없는 호기심으로 세상을 탐구하는 사람이에요. "왜?"라는 질문을 자주 하고, 새로운 아이디어를 생각해내는 것을 좋아해요.',
    strengths: ['분석적 사고', '창의적 문제 해결', '이론적 이해력', '객관적 판단'],
    activities: ['코딩이나 프로그래밍', '수학 문제 풀기', '과학 다큐멘터리 보기', '발명품 구상하기'],
    careers: ['소프트웨어 개발자', '과학자', '철학자', '분석가'],
    hobbies: ['코딩', '퍼즐 게임', '위키피디아 서핑', '이론 연구']
  },
  ENTJ: {
    type: 'ENTJ',
    nickname: '타고난 리더',
    animal: '사자',
    color: 'from-amber-500 to-orange-600',
    description: '자신감 있고 카리스마가 넘치는 리더예요. 팀을 이끌고 목표를 달성하는 것을 좋아해요.',
    strengths: ['리더십', '결단력', '효율적인 계획', '설득력'],
    activities: ['팀 프로젝트 이끌기', '토론하기', '목표 세우고 달성하기', '새로운 것 배우기'],
    careers: ['CEO', '경영 컨설턴트', '변호사', '정치인'],
    hobbies: ['골프', '네트워킹', '자기계발', '전략 게임']
  },
  ENTP: {
    type: 'ENTP',
    nickname: '창의적인 도전가',
    animal: '여우',
    color: 'from-rose-500 to-pink-600',
    description: '새로운 아이디어와 가능성을 탐험하는 것을 좋아해요. 토론을 즐기고, 다양한 관점에서 생각하는 능력이 뛰어나요.',
    strengths: ['창의력', '빠른 적응력', '토론 능력', '다양한 관점 이해'],
    activities: ['새로운 아이디어 발표하기', '토론 대회', '브레인스토밍', '발명하기'],
    careers: ['기업가', '마케터', '변호사', '발명가'],
    hobbies: ['토론', '새로운 취미 시도', '스타트업 아이디어 구상', '여행']
  },
  INFJ: {
    type: 'INFJ',
    nickname: '통찰력 있는 이상주의자',
    animal: '늑대',
    color: 'from-emerald-500 to-teal-600',
    description: '깊은 통찰력으로 사람들의 마음을 이해해요. 조용하지만 확고한 가치관을 가지고 있어요.',
    strengths: ['공감 능력', '통찰력', '창의적 사고', '헌신적인 태도'],
    activities: ['글쓰기', '봉사 활동', '예술 감상', '깊은 대화 나누기'],
    careers: ['상담사', '작가', '심리학자', 'NPO 활동가'],
    hobbies: ['일기 쓰기', '명상', '봉사 활동', '예술 감상']
  },
  INFP: {
    type: 'INFP',
    nickname: '꿈꾸는 이상주의자',
    animal: '유니콘',
    color: 'from-violet-500 to-purple-600',
    description: '풍부한 상상력과 깊은 감정을 가진 사람이에요. 자신만의 가치관을 중요하게 여기고, 진정성 있는 삶을 추구해요.',
    strengths: ['창의력', '공감 능력', '진정성', '적응력'],
    activities: ['시나 소설 쓰기', '음악 듣기', '예술 활동', '자연 속 산책'],
    careers: ['작가', '예술가', '상담사', '그래픽 디자이너'],
    hobbies: ['글쓰기', '그림 그리기', '음악', '자연 속 산책']
  },
  ENFJ: {
    type: 'ENFJ',
    nickname: '따뜻한 리더',
    animal: '돌고래',
    color: 'from-sky-500 to-blue-600',
    description: '다른 사람들을 이끌고 격려하는 것을 좋아해요. 카리스마가 있고, 사람들의 잠재력을 이끌어내는 능력이 있어요.',
    strengths: ['리더십', '공감 능력', '소통 능력', '동기 부여'],
    activities: ['멘토링 하기', '그룹 활동 이끌기', '봉사 활동', '이야기 나누기'],
    careers: ['교사', 'HR 매니저', '상담사', '코치'],
    hobbies: ['멘토링', '사회 활동', '글쓰기', '요리해서 나누기']
  },
  ENFP: {
    type: 'ENFP',
    nickname: '열정적인 탐험가',
    animal: '수달',
    color: 'from-orange-500 to-yellow-500',
    description: '에너지가 넘치고 열정적인 사람이에요! 새로운 사람을 만나고 새로운 경험을 하는 것을 좋아해요.',
    strengths: ['창의력', '사교성', '열정', '적응력'],
    activities: ['새로운 친구 사귀기', '창작 활동', '여행', '브레인스토밍'],
    careers: ['마케터', '배우', '작가', '기자'],
    hobbies: ['여행', '새로운 사람 만나기', '창작 활동', '파티 기획']
  },
  ISTJ: {
    type: 'ISTJ',
    nickname: '신뢰할 수 있는 책임자',
    animal: '거북이',
    color: 'from-slate-500 to-gray-600',
    description: '믿음직스럽고 책임감이 강한 사람이에요. 규칙을 잘 따르고, 맡은 일을 끝까지 완수해요.',
    strengths: ['책임감', '신뢰성', '체계적인 사고', '인내심'],
    activities: ['계획표 만들기', '컬렉션 정리하기', '역사 공부하기', '규칙적인 운동'],
    careers: ['회계사', '법률가', '공무원', '관리자'],
    hobbies: ['등산', '역사 공부', '컬렉션', '정리정돈']
  },
  ISFJ: {
    type: 'ISFJ',
    nickname: '따뜻한 수호자',
    animal: '토끼',
    color: 'from-pink-400 to-rose-500',
    description: '다른 사람들을 돌보고 보호하는 것을 좋아해요. 세심하고 배려심이 깊으며, 조용히 헌신하는 타입이에요.',
    strengths: ['배려심', '신뢰성', '세심함', '헌신'],
    activities: ['친구 돕기', '요리하기', '정리정돈', '가족과 시간 보내기'],
    careers: ['간호사', '교사', '사회복지사', '사서'],
    hobbies: ['요리', '베이킹', '정원 가꾸기', '수공예']
  },
  ESTJ: {
    type: 'ESTJ',
    nickname: '결단력 있는 관리자',
    animal: '독수리',
    color: 'from-red-500 to-orange-600',
    description: '조직적이고 효율적으로 일을 처리하는 사람이에요. 리더십이 있고, 규칙과 질서를 중요하게 생각해요.',
    strengths: ['조직력', '리더십', '실행력', '책임감'],
    activities: ['학급 회장하기', '프로젝트 관리', '스포츠 팀 활동', '계획 세우기'],
    careers: ['관리자', 'CEO', '군인', '판사'],
    hobbies: ['골프', '등산', '자원봉사 조직', '스포츠']
  },
  ESFJ: {
    type: 'ESFJ',
    nickname: '사교적인 돌봄이',
    animal: '강아지',
    color: 'from-yellow-400 to-amber-500',
    description: '친절하고 사교적이며, 다른 사람들과 어울리는 것을 좋아해요. 조화로운 관계를 만들고 유지하는 데 뛰어나요.',
    strengths: ['사교성', '협력심', '조직력', '배려심'],
    activities: ['파티 계획하기', '친구들과 어울리기', '봉사 활동', '팀 활동'],
    careers: ['이벤트 플래너', '간호사', '교사', 'HR 담당자'],
    hobbies: ['파티 기획', '요리', '봉사 활동', '친구 만나기']
  },
  ISTP: {
    type: 'ISTP',
    nickname: '만능 해결사',
    animal: '표범',
    color: 'from-zinc-500 to-stone-600',
    description: '침착하고 분석적이며, 문제를 직접 해결하는 것을 좋아해요. 도구나 기계를 다루는 데 뛰어나요.',
    strengths: ['논리적 분석', '손재주', '위기 대처', '유연성'],
    activities: ['기계 분해하기', '스포츠', '모험 활동', '도구 다루기'],
    careers: ['엔지니어', '파일럿', '운동선수', '기술자'],
    hobbies: ['자동차 정비', '캠핑', '익스트림 스포츠', '게임']
  },
  ISFP: {
    type: 'ISFP',
    nickname: '예술가적 감성',
    animal: '고양이',
    color: 'from-fuchsia-400 to-pink-500',
    description: '조용하고 따뜻하며, 예술적인 감각이 뛰어나요. 자유롭게 자신을 표현하는 것을 좋아해요.',
    strengths: ['예술적 감각', '유연성', '감성', '현재에 충실'],
    activities: ['그림 그리기', '음악 듣기', '자연 탐험', '요리하기'],
    careers: ['디자이너', '음악가', '사진작가', '셰프'],
    hobbies: ['그림', '음악', '사진', '패션']
  },
  ESTP: {
    type: 'ESTP',
    nickname: '모험가 정신',
    animal: '치타',
    color: 'from-orange-500 to-red-500',
    description: '에너지가 넘치고 행동력이 있어요. 위험을 무릅쓰고 새로운 것을 시도하는 것을 좋아해요.',
    strengths: ['행동력', '적응력', '현실 감각', '사교성'],
    activities: ['스포츠', '모험 여행', '사교 활동', '문제 해결'],
    careers: ['기업가', '영업', '운동선수', '응급 구조대'],
    hobbies: ['스포츠', '여행', '파티', '도전적 활동']
  },
  ESFP: {
    type: 'ESFP',
    nickname: '즐거운 엔터테이너',
    animal: '앵무새',
    color: 'from-pink-500 to-orange-400',
    description: '사교적이고 재미있으며, 주변 사람들을 즐겁게 해주는 것을 좋아해요. 현재 순간을 즐기는 타입이에요.',
    strengths: ['사교성', '낙천성', '현실 감각', '관찰력'],
    activities: ['공연하기', '파티 참석', '새로운 사람 만나기', '놀이'],
    careers: ['배우', '이벤트 플래너', '판매원', '유튜버'],
    hobbies: ['댄스', '노래', '파티', '여행']
  }
};

const scenarioQuestionsElementary = [
  { id: 1, scenario: '놀이공원에 왔어요! 어떻게 하고 싶어요?', situation: '신나는 놀이공원 입구에서', optionA: { text: '친구들 여러 명이랑 같이 돌아다녀요!' }, optionB: { text: '한두 명의 친한 친구랑 천천히 구경해요' }, optionC: { text: '혼자 가고 싶은 곳을 정해서 가요' }, dimension: 'EI', scoring: { A: 2, B: 0, C: -2 } },
  { id: 2, scenario: '학교에서 새 짝꿍이 생겼어요!', situation: '자리 바꾸기 후 첫날', optionA: { text: '내가 먼저 말 걸고 친해져요' }, optionB: { text: '상대방이 말 걸면 친하게 지내요' }, optionC: { text: '조용히 지켜보다가 천천히 친해져요' }, dimension: 'EI', scoring: { A: 2, B: 0, C: -2 } },
  { id: 3, scenario: '마법의 그림책이 있어요. 어떤 책을 고를까요?', situation: '마법 도서관에서', optionA: { text: '용과 마법사가 나오는 판타지 이야기' }, optionB: { text: '재미있는 동물 백과사전' }, optionC: { text: '실제 탐험가의 모험 이야기' }, dimension: 'SN', scoring: { A: -2, B: 0, C: 2 } },
  { id: 4, scenario: '레고로 뭔가를 만들려고 해요!', situation: '레고 놀이 시간', optionA: { text: '설명서대로 정확하게 만들어요' }, optionB: { text: '설명서 보면서 조금씩 바꿔요' }, optionC: { text: '상상하는 대로 마음대로 만들어요' }, dimension: 'SN', scoring: { A: 2, B: 0, C: -2 } },
  { id: 5, scenario: '친구가 울고 있어요. 어떻게 할까요?', situation: '쉬는 시간에 친구가 슬퍼보여요', optionA: { text: '옆에 앉아서 같이 슬퍼해줘요' }, optionB: { text: '무슨 일인지 물어보고 이야기를 들어요' }, optionC: { text: '선생님께 말씀드리거나 해결 방법을 찾아요' }, dimension: 'TF', scoring: { A: -2, B: 0, C: 2 } },
  { id: 6, scenario: '반장 선거가 있어요. 누구를 뽑을까요?', situation: '반장 선거 투표 시간', optionA: { text: '친하고 좋아하는 친구를 뽑아요' }, optionB: { text: '잘 모르겠으면 여러 가지 생각해봐요' }, optionC: { text: '반장 일을 잘할 것 같은 친구를 뽑아요' }, dimension: 'TF', scoring: { A: -2, B: 0, C: 2 } },
  { id: 7, scenario: '내일 소풍이에요! 어떻게 준비할까요?', situation: '소풍 전날 밤', optionA: { text: '미리미리 가방에 다 챙겨놔요' }, optionB: { text: '중요한 것만 챙기고 아침에 마무리해요' }, optionC: { text: '아침에 일어나서 챙겨요' }, dimension: 'JP', scoring: { A: 2, B: 0, C: -2 } },
  { id: 8, scenario: '방학 숙제가 있어요!', situation: '방학 첫날', optionA: { text: '방학 시작하자마자 끝내버려요' }, optionB: { text: '조금씩 나눠서 해요' }, optionC: { text: '방학 끝나기 전에 해요' }, dimension: 'JP', scoring: { A: 2, B: 0, C: -2 } },
  { id: 9, scenario: '생일 파티를 열어요!', situation: '내 생일날', optionA: { text: '많은 친구들을 초대해서 시끌벅적하게!' }, optionB: { text: '적당한 친구들과 재미있게!' }, optionC: { text: '가장 친한 친구 몇 명이랑 조용히!' }, dimension: 'EI', scoring: { A: 2, B: 0, C: -2 } },
  { id: 10, scenario: '보물찾기 게임을 해요!', situation: '보물찾기 시작', optionA: { text: '힌트를 차근차근 따라가요' }, optionB: { text: '힌트도 보고 감도 써봐요' }, optionC: { text: '직감으로 보물이 있을 것 같은 곳을 찾아요' }, dimension: 'SN', scoring: { A: 2, B: 0, C: -2 } },
  { id: 11, scenario: '친구랑 게임에서 졌어요!', situation: '게임 끝난 후', optionA: { text: '분석해서 다음엔 이기겠다고 다짐해요' }, optionB: { text: '아쉽지만 재미있었어요' }, optionC: { text: '너무 속상해서 다시 하고 싶어요' }, dimension: 'TF', scoring: { A: 2, B: 0, C: -2 } },
  { id: 12, scenario: '갑자기 계획이 바뀌었어요!', situation: '놀러가기로 했는데 비가 와요', optionA: { text: '새로운 계획을 세우는 것도 재미있어요' }, optionB: { text: '좀 아쉽지만 다른 거 해요' }, optionC: { text: '약속이 바뀌어서 속상해요' }, dimension: 'JP', scoring: { A: -2, B: 0, C: 2 } },
  { id: 13, scenario: '발표 순서가 왔어요!', situation: '반 친구들 앞에서 발표', optionA: { text: '신나요! 내 이야기를 들려줄 수 있어서!' }, optionB: { text: '긴장되지만 해볼 수 있어요' }, optionC: { text: '너무 떨려서 힘들어요' }, dimension: 'EI', scoring: { A: 2, B: 0, C: -2 } },
  { id: 14, scenario: '미래에 어떤 사람이 되고 싶어요?', situation: '꿈을 상상할 때', optionA: { text: '마법사나 우주 비행사 같은 특별한 일!' }, optionB: { text: '재미있는 일이면 뭐든지 좋아요' }, optionC: { text: '선생님이나 의사 같은 도움이 되는 일!' }, dimension: 'SN', scoring: { A: -2, B: 0, C: 2 } },
  { id: 15, scenario: '친구가 실수를 했어요!', situation: '친구가 넘어져서 물을 쏟았어요', optionA: { text: '괜찮은지 먼저 물어봐요' }, optionB: { text: '같이 치우자고 해요' }, optionC: { text: '빨리 휴지를 가져와요' }, dimension: 'TF', scoring: { A: -2, B: 0, C: 2 } },
  { id: 16, scenario: '내 방을 꾸며요!', situation: '방 정리 시간', optionA: { text: '모든 물건 자리를 정해서 깔끔하게!' }, optionB: { text: '대충 정리하고 편하게!' }, optionC: { text: '내 스타일대로 자유롭게!' }, dimension: 'JP', scoring: { A: 2, B: 0, C: -2 } }
];

const scenarioQuestionsMiddle = [
  { id: 1, scenario: '주말에 갑자기 자유 시간이 생겼어요!', situation: '토요일 오후, 할 일이 없는 날', optionA: { text: '친구들에게 연락해서 뭐 할지 정해요' }, optionB: { text: '기분에 따라 결정해요' }, optionC: { text: '집에서 좋아하는 것을 하면서 쉬어요' }, dimension: 'EI', scoring: { A: 2, B: 0, C: -2 } },
  { id: 2, scenario: '새 학기 첫날, 모르는 애들뿐이에요!', situation: '교실에 들어섰을 때', optionA: { text: '옆자리에 먼저 인사하고 말을 걸어요' }, optionB: { text: '누가 말 걸면 반갑게 대해요' }, optionC: { text: '조용히 앉아서 상황을 지켜봐요' }, dimension: 'EI', scoring: { A: 2, B: 0, C: -2 } },
  { id: 3, scenario: '단체 카톡방이 활발해요!', situation: '친구들이 수다를 떨고 있어요', optionA: { text: '적극적으로 대화에 참여해요' }, optionB: { text: '가끔 리액션만 해요' }, optionC: { text: '읽기만 하고 필요할 때만 답해요' }, dimension: 'EI', scoring: { A: 2, B: 0, C: -2 } },
  { id: 4, scenario: '영화를 골라야 해요!', situation: '친구들이랑 넷플릭스 볼 때', optionA: { text: 'SF나 판타지 같은 상상의 세계 이야기' }, optionB: { text: '재미있으면 장르 상관없어요' }, optionC: { text: '실화 기반이나 현실적인 스토리' }, dimension: 'SN', scoring: { A: -2, B: 0, C: 2 } },
  { id: 5, scenario: '시험 공부를 해야 해요!', situation: '시험 일주일 전', optionA: { text: '교과서 내용을 꼼꼼히 암기해요' }, optionB: { text: '중요한 부분 위주로 정리해요' }, optionC: { text: '전체적인 흐름과 연결고리를 파악해요' }, dimension: 'SN', scoring: { A: 2, B: 0, C: -2 } },
  { id: 6, scenario: '진로를 생각해봐야 해요!', situation: '미래에 대해 고민할 때', optionA: { text: '안정적이고 확실한 직업을 원해요' }, optionB: { text: '아직 잘 모르겠어요' }, optionC: { text: '새롭고 창의적인 분야가 끌려요' }, dimension: 'SN', scoring: { A: 2, B: 0, C: -2 } },
  { id: 7, scenario: '친구가 속상한 일이 있대요!', situation: '친구가 고민을 말해줬어요', optionA: { text: '어떻게 하면 좋을지 해결책을 같이 찾아요' }, optionB: { text: '이야기를 들어주며 공감해줘요' }, optionC: { text: '같이 슬퍼하면서 위로해줘요' }, dimension: 'TF', scoring: { A: 2, B: 0, C: -2 } },
  { id: 8, scenario: '모둠 과제에서 의견이 갈려요!', situation: '팀원들이 다른 의견을 가지고 있어요', optionA: { text: '논리적으로 가장 좋은 방법을 설득해요' }, optionB: { text: '다들 의견을 들어보고 절충해요' }, optionC: { text: '분위기가 안 좋아지지 않게 조율해요' }, dimension: 'TF', scoring: { A: 2, B: 0, C: -2 } },
  { id: 9, scenario: '점수가 기대보다 낮게 나왔어요!', situation: '시험 결과를 받았을 때', optionA: { text: '왜 틀렸는지 분석하고 다음에 더 잘해요' }, optionB: { text: '아쉽지만 다음에 잘하면 돼요' }, optionC: { text: '속상하고 우울해져요' }, dimension: 'TF', scoring: { A: 2, B: 0, C: -2 } },
  { id: 10, scenario: '프로젝트 마감이 다가와요!', situation: '제출 3일 전', optionA: { text: '이미 거의 다 끝냈어요' }, optionB: { text: '지금부터 본격적으로 해요' }, optionC: { text: '마감 전날 집중해서 해요' }, dimension: 'JP', scoring: { A: 2, B: 0, C: -2 } },
  { id: 11, scenario: '방학 계획을 세워요!', situation: '방학이 시작되기 전', optionA: { text: '할 일 목록과 일정표를 만들어요' }, optionB: { text: '대략적인 계획만 세워요' }, optionC: { text: '그때그때 하고 싶은 걸 해요' }, dimension: 'JP', scoring: { A: 2, B: 0, C: -2 } },
  { id: 12, scenario: '갑자기 약속이 취소됐어요!', situation: '친구가 갑자기 못 만나게 됐어요', optionA: { text: '오히려 좋아! 다른 거 할 수 있어요' }, optionB: { text: '아쉽지만 괜찮아요' }, optionC: { text: '기대했는데 좀 짜증나요' }, dimension: 'JP', scoring: { A: -2, B: 0, C: 2 } },
  { id: 13, scenario: '에너지가 필요해요!', situation: '지친 하루 끝에', optionA: { text: '친구들 만나서 수다 떨면 충전돼요' }, optionB: { text: '상황에 따라 달라요' }, optionC: { text: '혼자 조용히 쉬면 충전돼요' }, dimension: 'EI', scoring: { A: 2, B: 0, C: -2 } },
  { id: 14, scenario: '새로운 취미를 시작해요!', situation: '관심 있는 것을 찾을 때', optionA: { text: '실용적이고 도움이 되는 것을 배워요' }, optionB: { text: '재미있어 보이면 해봐요' }, optionC: { text: '독특하고 창의적인 것이 끌려요' }, dimension: 'SN', scoring: { A: 2, B: 0, C: -2 } },
  { id: 15, scenario: '친구가 약속을 어겼어요!', situation: '기다렸는데 친구가 안 왔어요', optionA: { text: '화가 나지만 이유를 물어봐요' }, optionB: { text: '다음엔 이러지 말라고 해요' }, optionC: { text: '무슨 일이 있었나 걱정돼요' }, dimension: 'TF', scoring: { A: 0, B: 2, C: -2 } },
  { id: 16, scenario: '내 방 책상은...', situation: '평소 책상 상태', optionA: { text: '항상 깔끔하게 정리되어 있어요' }, optionB: { text: '쓰다가 가끔 정리해요' }, optionC: { text: '나만 알아보는 나만의 스타일이에요' }, dimension: 'JP', scoring: { A: 2, B: 0, C: -2 } },
  { id: 17, scenario: '대화할 때 더 재미있는 것은?', situation: '친구들이랑 이야기할 때', optionA: { text: '미래에 대한 상상이나 아이디어' }, optionB: { text: '다양한 주제 다 좋아요' }, optionC: { text: '실제 있었던 일이나 경험' }, dimension: 'SN', scoring: { A: -2, B: 0, C: 2 } },
  { id: 18, scenario: '칭찬을 받았어요!', situation: '선생님이 칭찬해주셨어요', optionA: { text: '뿌듯하고 더 잘하고 싶어요' }, optionB: { text: '기분이 좋아요' }, optionC: { text: '어색하고 부끄러워요' }, dimension: 'TF', scoring: { A: 2, B: 0, C: -2 } },
  { id: 19, scenario: '결정을 내려야 해요!', situation: '중요한 선택의 순간', optionA: { text: '빨리 결정하고 행동해요' }, optionB: { text: '적당히 고민하고 결정해요' }, optionC: { text: '여러 가능성을 열어두고 천천히 결정해요' }, dimension: 'JP', scoring: { A: 2, B: 0, C: -2 } },
  { id: 20, scenario: '수업 시간에 발표해요!', situation: '선생님이 발표할 사람을 찾아요', optionA: { text: '손 들고 나가서 발표해요' }, optionB: { text: '시키면 해요' }, optionC: { text: '되도록 안 하고 싶어요' }, dimension: 'EI', scoring: { A: 2, B: 0, C: -2 } }
];

const scenarioQuestionsHigh = [
  { id: 1, scenario: '금요일 밤, 뭘 할까요?', situation: '일주일의 끝, 자유 시간', optionA: { text: '친구들이랑 나가서 놀아요' }, optionB: { text: '기분 따라 정해요' }, optionC: { text: '집에서 혼자만의 시간을 가져요' }, dimension: 'EI', scoring: { A: 2, B: 0, C: -2 } },
  { id: 2, scenario: 'SNS에 올릴 사진이 있어요!', situation: '여행에서 좋은 사진을 찍었어요', optionA: { text: '바로 올리고 친구들 반응을 봐요' }, optionB: { text: '가끔 올려요' }, optionC: { text: '올리는 것보다 보는 게 좋아요' }, dimension: 'EI', scoring: { A: 2, B: 0, C: -2 } },
  { id: 3, scenario: '수행평가 모둠이 정해졌어요!', situation: '첫 모둠 회의', optionA: { text: '회의를 이끌고 역할을 정해요' }, optionB: { text: '의견을 내고 참여해요' }, optionC: { text: '맡은 역할을 조용히 수행해요' }, dimension: 'EI', scoring: { A: 2, B: 0, C: -2 } },
  { id: 4, scenario: '진로 고민 중이에요!', situation: '진로진학상담 시간', optionA: { text: '안정적이고 확실한 진로가 좋아요' }, optionB: { text: '여러 가지를 고려 중이에요' }, optionC: { text: '새롭고 도전적인 분야가 끌려요' }, dimension: 'SN', scoring: { A: 2, B: 0, C: -2 } },
  { id: 5, scenario: '수업 내용을 이해할 때...', situation: '새로운 개념을 배울 때', optionA: { text: '구체적인 예시가 있어야 이해돼요' }, optionB: { text: '둘 다 필요해요' }, optionC: { text: '전체적인 개념부터 잡으면 이해돼요' }, dimension: 'SN', scoring: { A: 2, B: 0, C: -2 } },
  { id: 6, scenario: '에세이를 쓸 때...', situation: '글쓰기 과제', optionA: { text: '비유와 상상력을 많이 써요' }, optionB: { text: '주제에 따라 달라요' }, optionC: { text: '사실과 데이터를 바탕으로 써요' }, dimension: 'SN', scoring: { A: -2, B: 0, C: 2 } },
  { id: 7, scenario: '친구가 잘못된 선택을 하려 해요!', situation: '충고가 필요한 상황', optionA: { text: '솔직하게 왜 안 되는지 말해요' }, optionB: { text: '돌려서 조심스럽게 말해요' }, optionC: { text: '감정을 먼저 공감해주고 말해요' }, dimension: 'TF', scoring: { A: 2, B: 0, C: -2 } },
  { id: 8, scenario: '토론 수업 시간!', situation: '의견이 대립하는 주제', optionA: { text: '논리적으로 상대 의견을 반박해요' }, optionB: { text: '양쪽 의견을 듣고 판단해요' }, optionC: { text: '서로 감정이 상하지 않게 조율해요' }, dimension: 'TF', scoring: { A: 2, B: 0, C: -2 } },
  { id: 9, scenario: '친구가 시험을 망쳤대요!', situation: '위로가 필요한 순간', optionA: { text: '"다음엔 이렇게 하면 돼"라고 조언해요' }, optionB: { text: '"속상하지? 다음엔 잘 될 거야"라고 해요' }, optionC: { text: '"많이 힘들지?"라며 같이 아파해요' }, dimension: 'TF', scoring: { A: 2, B: 0, C: -2 } },
  { id: 10, scenario: '수능이 100일 남았어요!', situation: 'D-100', optionA: { text: '세부 계획표를 세우고 따라가요' }, optionB: { text: '대략적인 목표를 정해요' }, optionC: { text: '그날그날 컨디션 따라 공부해요' }, dimension: 'JP', scoring: { A: 2, B: 0, C: -2 } },
  { id: 11, scenario: '동아리 활동 시간!', situation: '새 프로젝트 시작', optionA: { text: '계획을 세우고 역할을 나눠요' }, optionB: { text: '일단 시작하면서 정해요' }, optionC: { text: '자유롭게 아이디어를 나눠요' }, dimension: 'JP', scoring: { A: 2, B: 0, C: -2 } },
  { id: 12, scenario: '시험 범위가 갑자기 바뀌었어요!', situation: '예상과 다른 상황', optionA: { text: '새로운 계획을 세워요' }, optionB: { text: '당황하지만 적응해요' }, optionC: { text: '예상과 달라서 스트레스받아요' }, dimension: 'JP', scoring: { A: -2, B: 0, C: 2 } },
  { id: 13, scenario: '친구 모임에서...', situation: '많은 사람과 함께', optionA: { text: '여러 사람과 대화하며 돌아다녀요' }, optionB: { text: '상황에 맞게 행동해요' }, optionC: { text: '한두 명과 깊이 이야기해요' }, dimension: 'EI', scoring: { A: 2, B: 0, C: -2 } },
  { id: 14, scenario: '좋아하는 수업 스타일은?', situation: '수업 방식 선택', optionA: { text: '실습이나 체험 중심' }, optionB: { text: '균형 잡힌 수업' }, optionC: { text: '토론이나 아이디어 교환' }, dimension: 'SN', scoring: { A: 2, B: 0, C: -2 } },
  { id: 15, scenario: '결정을 내려야 할 때...', situation: '중요한 선택', optionA: { text: '장단점을 분석해요' }, optionB: { text: '여러 요소를 고려해요' }, optionC: { text: '마음 가는 대로 해요' }, dimension: 'TF', scoring: { A: 2, B: 0, C: -2 } },
  { id: 16, scenario: '시험 전날 밤...', situation: '시험 전날', optionA: { text: '계획대로 마무리하고 일찍 자요' }, optionB: { text: '부족한 부분 위주로 봐요' }, optionC: { text: '마지막까지 공부해요' }, dimension: 'JP', scoring: { A: 2, B: 0, C: -2 } },
  { id: 17, scenario: '발표 준비를 해요!', situation: '발표 3일 전', optionA: { text: '대본을 완벽하게 외워요' }, optionB: { text: '핵심만 정리하고 연습해요' }, optionC: { text: '흐름만 잡고 즉흥적으로 해요' }, dimension: 'JP', scoring: { A: 2, B: 0, C: -2 } },
  { id: 18, scenario: '새로운 사람을 만나면...', situation: '처음 만난 사람', optionA: { text: '먼저 말 걸고 대화를 시작해요' }, optionB: { text: '상황 보고 행동해요' }, optionC: { text: '상대가 먼저 다가오길 기다려요' }, dimension: 'EI', scoring: { A: 2, B: 0, C: -2 } },
  { id: 19, scenario: '문제가 생기면...', situation: '어려운 상황', optionA: { text: '원인을 분석하고 해결책을 찾아요' }, optionB: { text: '여러 방법을 시도해요' }, optionC: { text: '느낌대로 해결해요' }, dimension: 'SN', scoring: { A: 2, B: 0, C: -2 } },
  { id: 20, scenario: '팀 프로젝트에서 갈등이 생기면...', situation: '의견 충돌', optionA: { text: '논리적으로 최선의 방법을 찾아요' }, optionB: { text: '중간점을 찾으려 해요' }, optionC: { text: '팀원들 기분을 먼저 생각해요' }, dimension: 'TF', scoring: { A: 2, B: 0, C: -2 } }
];

const scenarioQuestionsAdult = [
  { id: 1, scenario: '회식이나 모임이 있어요!', situation: '팀 회식 초대', optionA: { text: '좋아요! 사람들과 어울리는 게 재미있어요' }, optionB: { text: '가끔은 좋아요' }, optionC: { text: '가능하면 조용히 쉬고 싶어요' }, dimension: 'EI', scoring: { A: 2, B: 0, C: -2 } },
  { id: 2, scenario: '주말 계획을 세워요!', situation: '토요일 아침', optionA: { text: '친구들 만나서 활동적으로 보내요' }, optionB: { text: '기분에 따라 달라요' }, optionC: { text: '집에서 혼자만의 시간을 가져요' }, dimension: 'EI', scoring: { A: 2, B: 0, C: -2 } },
  { id: 3, scenario: '새 동료가 왔어요!', situation: '팀에 새 사람이 합류', optionA: { text: '먼저 다가가서 환영하고 소개해줘요' }, optionB: { text: '필요할 때 도와줘요' }, optionC: { text: '시간이 지나면 자연스럽게 친해져요' }, dimension: 'EI', scoring: { A: 2, B: 0, C: -2 } },
  { id: 4, scenario: '업무 방식을 선택해요!', situation: '새 프로젝트 시작', optionA: { text: '검증된 방식으로 안정적으로 진행해요' }, optionB: { text: '상황에 맞게 조절해요' }, optionC: { text: '새로운 방법을 시도해봐요' }, dimension: 'SN', scoring: { A: 2, B: 0, C: -2 } },
  { id: 5, scenario: '새로운 것을 배울 때...', situation: '새 기술이나 도구', optionA: { text: '매뉴얼을 차근차근 따라해요' }, optionB: { text: '필요한 부분만 찾아봐요' }, optionC: { text: '일단 해보면서 익혀요' }, dimension: 'SN', scoring: { A: 2, B: 0, C: -2 } },
  { id: 6, scenario: '보고서를 작성해요!', situation: '주간 업무 보고', optionA: { text: '구체적인 숫자와 사실 위주로 써요' }, optionB: { text: '적절히 섞어서 써요' }, optionC: { text: '인사이트와 전략적 제안을 중심으로 써요' }, dimension: 'SN', scoring: { A: 2, B: 0, C: -2 } },
  { id: 7, scenario: '동료가 힘들어 보여요', situation: '옆자리 동료가 우울해 보여요', optionA: { text: '구체적인 도움을 제안해요' }, optionB: { text: '커피 마시며 이야기를 들어줘요' }, optionC: { text: '공감하며 위로해줘요' }, dimension: 'TF', scoring: { A: 2, B: 0, C: -2 } },
  { id: 8, scenario: '팀 내 갈등이 생겼어요!', situation: '두 동료 사이에 의견 충돌', optionA: { text: '객관적으로 옳고 그름을 판단해요' }, optionB: { text: '양쪽 의견을 듣고 절충안을 찾아요' }, optionC: { text: '관계가 상하지 않게 분위기를 조율해요' }, dimension: 'TF', scoring: { A: 2, B: 0, C: -2 } },
  { id: 9, scenario: '부정적인 피드백을 받았어요', situation: '업무 평가에서 개선점을 지적받음', optionA: { text: '어떤 점을 고쳐야 하는지 분석해요' }, optionB: { text: '참고해서 개선하려고 해요' }, optionC: { text: '기분이 좀 상하지만 받아들여요' }, dimension: 'TF', scoring: { A: 2, B: 0, C: -2 } },
  { id: 10, scenario: '중요한 프레젠테이션이 있어요!', situation: 'D-7, 발표 준비 중', optionA: { text: '미리 세세하게 준비하고 리허설해요' }, optionB: { text: '핵심만 준비하고 나머지는 즉석에서' }, optionC: { text: '대략적인 방향만 잡고 즉흥적으로 해요' }, dimension: 'JP', scoring: { A: 2, B: 0, C: -2 } },
  { id: 11, scenario: '휴가 계획을 세워요!', situation: '일주일 휴가', optionA: { text: '일정표와 예약을 미리 다 해요' }, optionB: { text: '숙소만 정하고 나머지는 현지에서' }, optionC: { text: '즉흥적으로 그날그날 정해요' }, dimension: 'JP', scoring: { A: 2, B: 0, C: -2 } },
  { id: 12, scenario: '갑자기 미팅이 취소됐어요!', situation: '오후에 빈 시간이 생김', optionA: { text: '다른 할 일을 빠르게 정리해요' }, optionB: { text: '자유 시간이 생겨서 좋아요' }, optionC: { text: '준비했던 게 헛수고가 되어 약간 짜증나요' }, dimension: 'JP', scoring: { A: 0, B: -2, C: 2 } },
  { id: 13, scenario: '주말에 에너지를 충전해요!', situation: '쉬는 날', optionA: { text: '친구들 만나서 활동적으로 보내요' }, optionB: { text: '균형있게 보내요' }, optionC: { text: '집에서 조용히 재충전해요' }, dimension: 'EI', scoring: { A: 2, B: 0, C: -2 } },
  { id: 14, scenario: '새로운 정보를 접할 때...', situation: '뉴스나 책을 읽을 때', optionA: { text: '구체적인 사실과 데이터에 집중해요' }, optionB: { text: '전체적으로 파악해요' }, optionC: { text: '숨겨진 의미와 패턴을 찾아요' }, dimension: 'SN', scoring: { A: 2, B: 0, C: -2 } },
  { id: 15, scenario: '연인과 다퉜어요!', situation: '의견 충돌 상황', optionA: { text: '논리적으로 설명하고 이해시켜요' }, optionB: { text: '차분히 대화하려고 해요' }, optionC: { text: '먼저 상대방 감정을 달래줘요' }, dimension: 'TF', scoring: { A: 2, B: 0, C: -2 } },
  { id: 16, scenario: '마감이 촉박해요!', situation: '업무 마감 2일 전', optionA: { text: '미리미리 해서 이미 거의 다 됐어요' }, optionB: { text: '지금부터 집중해서 해요' }, optionC: { text: '압박감이 있어야 집중이 돼요' }, dimension: 'JP', scoring: { A: 2, B: 0, C: -2 } },
  { id: 17, scenario: '네트워킹 행사에 참석해요!', situation: '업계 컨퍼런스', optionA: { text: '적극적으로 명함 교환하며 인맥을 넓혀요' }, optionB: { text: '관심 있는 분야 사람들과 대화해요' }, optionC: { text: '세션만 듣고 조용히 돌아와요' }, dimension: 'EI', scoring: { A: 2, B: 0, C: -2 } },
  { id: 18, scenario: '신규 사업 아이디어를 내야 해요!', situation: '브레인스토밍 회의', optionA: { text: '검증된 사례를 바탕으로 제안해요' }, optionB: { text: '현실성과 창의성을 균형있게 고려해요' }, optionC: { text: '혁신적이고 파격적인 아이디어를 내요' }, dimension: 'SN', scoring: { A: 2, B: 0, C: -2 } },
  { id: 19, scenario: '후배가 실수를 했어요!', situation: '업무상 실수를 발견함', optionA: { text: '직접적으로 문제점을 알려줘요' }, optionB: { text: '개선점을 부드럽게 제안해요' }, optionC: { text: '기분 상하지 않게 돌려서 말해요' }, dimension: 'TF', scoring: { A: 2, B: 0, C: -2 } },
  { id: 20, scenario: '책상 정리 스타일은?', situation: '평소 업무 공간', optionA: { text: '항상 깔끔하게 정돈되어 있어요' }, optionB: { text: '가끔 정리해요' }, optionC: { text: '나만 알아보는 나만의 시스템이에요' }, dimension: 'JP', scoring: { A: 2, B: 0, C: -2 } },
  { id: 21, scenario: '혼자 밥 먹기 vs 함께 먹기', situation: '점심 시간', optionA: { text: '동료들과 같이 먹는 게 좋아요' }, optionB: { text: '상황에 따라 달라요' }, optionC: { text: '혼밥도 편하고 좋아요' }, dimension: 'EI', scoring: { A: 2, B: 0, C: -2 } },
  { id: 22, scenario: '변화가 찾아왔어요!', situation: '조직 개편이나 업무 변경', optionA: { text: '익숙한 것이 좋지만 적응해요' }, optionB: { text: '필요한 변화라면 받아들여요' }, optionC: { text: '새로운 변화가 오히려 설레요' }, dimension: 'SN', scoring: { A: 2, B: 0, C: -2 } },
  { id: 23, scenario: '리더로서 가장 중요한 것은?', situation: '팀을 이끌 때', optionA: { text: '목표 달성과 효율성' }, optionB: { text: '균형 있는 운영' }, optionC: { text: '팀원들의 감정과 동기부여' }, dimension: 'TF', scoring: { A: 2, B: 0, C: -2 } },
  { id: 24, scenario: '인생의 방향에 대해...', situation: '장기적인 삶의 계획', optionA: { text: '5년, 10년 계획이 있어요' }, optionB: { text: '대략적인 방향은 있어요' }, optionC: { text: '흘러가는 대로 유연하게 살아요' }, dimension: 'JP', scoring: { A: 2, B: 0, C: -2 } }
];

function getQuestionsForAge(ageGroup) {
  switch (ageGroup) {
    case 'elementary': return scenarioQuestionsElementary;
    case 'middle': return scenarioQuestionsMiddle;
    case 'high': return scenarioQuestionsHigh;
    case 'adult': return scenarioQuestionsAdult;
    default: return scenarioQuestionsElementary;
  }
}

function calculateMBTIWithPercentage(answers, ageGroup) {
  const questions = getQuestionsForAge(ageGroup);
  const scores = { EI: 0, SN: 0, TF: 0, JP: 0 };
  const counts = { EI: 0, SN: 0, TF: 0, JP: 0 };

  answers.forEach((answer, index) => {
    if (index < questions.length) {
      const question = questions[index];
      const score = question.scoring[answer] || 0;
      scores[question.dimension] += score;
      counts[question.dimension]++;
    }
  });

  const maxPossible = { EI: 0, SN: 0, TF: 0, JP: 0 };
  questions.forEach(q => {
    const maxScore = Math.max(Math.abs(q.scoring.A), Math.abs(q.scoring.B), Math.abs(q.scoring.C));
    maxPossible[q.dimension] += maxScore;
  });

  const dimensionScores = {};
  ['EI', 'SN', 'TF', 'JP'].forEach(dim => {
    const normalizedScore = maxPossible[dim] > 0 
      ? (scores[dim] / maxPossible[dim]) * 50 + 50 
      : 50;
    dimensionScores[dim] = {
      score: scores[dim],
      percentage: Math.round(Math.max(0, Math.min(100, normalizedScore)))
    };
  });

  const mbtiType = 
    (dimensionScores.EI.percentage < 50 ? 'E' : 'I') +
    (dimensionScores.SN.percentage < 50 ? 'S' : 'N') +
    (dimensionScores.TF.percentage < 50 ? 'T' : 'F') +
    (dimensionScores.JP.percentage < 50 ? 'J' : 'P');

  const primaryType = mbtiTypes[mbtiType] || mbtiTypes.INFP;

  let closestDim = 'EI';
  let closestDistance = 100;
  ['EI', 'SN', 'TF', 'JP'].forEach(dim => {
    const distance = Math.abs(dimensionScores[dim].percentage - 50);
    if (distance < closestDistance) {
      closestDistance = distance;
      closestDim = dim;
    }
  });

  const dimIndex = ['EI', 'SN', 'TF', 'JP'].indexOf(closestDim);
  const altType = mbtiType.substring(0, dimIndex) + 
    (mbtiType[dimIndex] === mbtiType[dimIndex].toUpperCase() 
      ? getOpposite(mbtiType[dimIndex]) 
      : mbtiType[dimIndex]) +
    mbtiType.substring(dimIndex + 1);
  
  function getOpposite(letter) {
    const opposites = { E: 'I', I: 'E', S: 'N', N: 'S', T: 'F', F: 'T', J: 'P', P: 'J' };
    return opposites[letter] || letter;
  }

  const secondaryTypeKey = altType.split('').map((char, i) => 
    i === dimIndex ? getOpposite(char) : char
  ).join('');
  
  const secondaryType = mbtiTypes[secondaryTypeKey] || mbtiTypes.ENFP;

  const avgDominance = ['EI', 'SN', 'TF', 'JP'].reduce((sum, dim) => {
    return sum + Math.abs(dimensionScores[dim].percentage - 50);
  }, 0) / 4;

  const primaryPercentage = Math.round(50 + avgDominance);
  const secondaryPercentage = Math.round(50 - avgDominance);

  return {
    primaryType,
    primaryPercentage: Math.max(50, Math.min(100, primaryPercentage)),
    secondaryType,
    secondaryPercentage: Math.max(0, Math.min(50, secondaryPercentage)),
    dimensionScores
  };
}

function getCompatibilityScore(parentType, childType) {
  let matchCount = 0;
  for (let i = 0; i < 4; i++) {
    if (parentType[i] === childType[i]) matchCount++;
  }
  return matchCount * 25;
}

function getCompatibilityMessage(score) {
  if (score >= 75) return '비슷한 성향으로 소통이 편해요!';
  if (score >= 50) return '공통점과 차이점이 조화롭게 있어요';
  return '서로 다른 관점으로 배울 점이 많아요';
}
