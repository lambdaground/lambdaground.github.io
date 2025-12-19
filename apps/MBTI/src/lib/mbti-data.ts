export type AgeGroup = 'elementary' | 'middle' | 'high' | 'adult';

export type Answer = 'A' | 'B' | 'C';

export type Role = 'parent' | 'child';

export interface ParentChildResult {
  parentResult: MBTIResult;
  childResult: MBTIResult;
}

export interface DimensionDifference {
  dimension: 'EI' | 'SN' | 'TF' | 'JP';
  parentTrait: string;
  childTrait: string;
  isSame: boolean;
}

export interface RelationshipInsight {
  communicationDifference: string;
  behaviorDifference: string;
  thinkingDifference: string;
  parentGuidance: string[];
  childUnderstanding: string[];
}

export interface StudyRecommendation {
  learningStyle: string;
  studyMethods: string[];
  studyEnvironment: string;
  motivationTips: string[];
  challengeAreas: string[];
}

export interface HybridDimension {
  dimension: 'EI' | 'SN' | 'TF' | 'JP';
  primaryTrait: string;
  secondaryTrait: string;
  primaryPercentage: number;
  isBalanced: boolean;
}

export interface HybridPersonality {
  primaryType: string;
  secondaryType: string;
  primaryAnimal: string;
  secondaryAnimal: string;
  blendLevel: 'pure' | 'slight' | 'balanced';
  blendPercentage: number;
  dimensions: HybridDimension[];
  blendDescription: string;
  hybridAnimalName: string;
}

export interface AgeScenario {
  situation: string;
  behavior: string;
}

export interface AgeNarrative {
  overview: string;
  keyTraits: string[];
  scenarios: AgeScenario[];
}

export type AgeNarratives = Record<AgeGroup, AgeNarrative>;

export interface ScenarioQuestion {
  id: number;
  scenario: string;
  situation?: string;
  optionA: { text: string; icon?: string };
  optionB: { text: string; icon?: string };
  optionC: { text: string; icon?: string };
  dimension: 'EI' | 'SN' | 'TF' | 'JP';
  scoring: { A: number; B: number; C: number };
  followUp?: {
    onA?: number[];
    onB?: number[];
    onC?: number[];
  };
}

export interface Question {
  id: number;
  text: string;
  optionA: string;
  optionB: string;
  optionC: string;
  dimension: 'EI' | 'SN' | 'TF' | 'JP';
  scoring: {
    A: number;
    B: number;
    C: number;
  };
}

export interface BehavioralScenario {
  situation: string;
  behavior: string;
}

export interface MBTIType {
  type: string;
  nickname: string;
  description: string;
  strengths: string[];
  activities: string[];
  animal: string;
  color: string;
  animalImage: string;
  careers: string[];
  hobbies: string[];
  loveStyle: string;
  behavioralScenarios: BehavioralScenario[];
}

export interface MBTIResult {
  primaryType: MBTIType;
  primaryPercentage: number;
  secondaryType: MBTIType;
  secondaryPercentage: number;
  dimensionScores: {
    EI: { score: number; percentage: number };
    SN: { score: number; percentage: number };
    TF: { score: number; percentage: number };
    JP: { score: number; percentage: number };
  };
}

export const ageGroupInfo: Record<AgeGroup, { label: string; subtitle: string; questionCount: number }> = {
  elementary: {
    label: '초등학생',
    subtitle: '16개의 재미있는 상황 질문',
    questionCount: 16
  },
  middle: {
    label: '중학생',
    subtitle: '20개의 상황 선택 질문',
    questionCount: 20
  },
  high: {
    label: '고등학생',
    subtitle: '20개의 깊이있는 질문',
    questionCount: 20
  },
  adult: {
    label: '성인',
    subtitle: '24개의 시나리오 질문',
    questionCount: 24
  }
};

export const scenarioQuestionsElementary: ScenarioQuestion[] = [
  {
    id: 1,
    scenario: '놀이공원에 왔어요! 어떻게 하고 싶어요?',
    situation: '신나는 놀이공원 입구에서',
    optionA: { text: '친구들 여러 명이랑 같이 돌아다녀요!', icon: 'users' },
    optionB: { text: '한두 명의 친한 친구랑 천천히 구경해요', icon: 'user' },
    optionC: { text: '혼자 가고 싶은 곳을 정해서 가요', icon: 'compass' },
    dimension: 'EI',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 2,
    scenario: '학교에서 새 짝꿍이 생겼어요!',
    situation: '자리 바꾸기 후 첫날',
    optionA: { text: '내가 먼저 말 걸고 친해져요', icon: 'hand' },
    optionB: { text: '상대방이 말 걸면 친하게 지내요', icon: 'message' },
    optionC: { text: '조용히 지켜보다가 천천히 친해져요', icon: 'eye' },
    dimension: 'EI',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 3,
    scenario: '마법의 그림책이 있어요. 어떤 책을 고를까요?',
    situation: '마법 도서관에서',
    optionA: { text: '용과 마법사가 나오는 판타지 이야기', icon: 'sparkles' },
    optionB: { text: '재미있는 동물 백과사전', icon: 'book' },
    optionC: { text: '실제 탐험가의 모험 이야기', icon: 'map' },
    dimension: 'SN',
    scoring: { A: -2, B: 0, C: 2 }
  },
  {
    id: 4,
    scenario: '레고로 뭔가를 만들려고 해요!',
    situation: '레고 놀이 시간',
    optionA: { text: '설명서대로 정확하게 만들어요', icon: 'clipboard' },
    optionB: { text: '설명서 보면서 조금씩 바꿔요', icon: 'edit' },
    optionC: { text: '상상하는 대로 마음대로 만들어요', icon: 'lightbulb' },
    dimension: 'SN',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 5,
    scenario: '친구가 울고 있어요. 어떻게 할까요?',
    situation: '쉬는 시간에 친구가 슬퍼보여요',
    optionA: { text: '옆에 앉아서 같이 슬퍼해줘요', icon: 'heart' },
    optionB: { text: '무슨 일인지 물어보고 이야기를 들어요', icon: 'ear' },
    optionC: { text: '선생님께 말씀드리거나 해결 방법을 찾아요', icon: 'target' },
    dimension: 'TF',
    scoring: { A: -2, B: 0, C: 2 }
  },
  {
    id: 6,
    scenario: '반장 선거가 있어요. 누구를 뽑을까요?',
    situation: '반장 선거 투표 시간',
    optionA: { text: '친하고 좋아하는 친구를 뽑아요', icon: 'heart' },
    optionB: { text: '잘 모르겠으면 여러 가지 생각해봐요', icon: 'thinking' },
    optionC: { text: '반장 일을 잘할 것 같은 친구를 뽑아요', icon: 'check' },
    dimension: 'TF',
    scoring: { A: -2, B: 0, C: 2 }
  },
  {
    id: 7,
    scenario: '내일 소풍이에요! 어떻게 준비할까요?',
    situation: '소풍 전날 밤',
    optionA: { text: '미리미리 가방에 다 챙겨놔요', icon: 'package' },
    optionB: { text: '중요한 것만 챙기고 아침에 마무리해요', icon: 'clock' },
    optionC: { text: '아침에 일어나서 챙겨요', icon: 'sun' },
    dimension: 'JP',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 8,
    scenario: '방학 숙제가 있어요!',
    situation: '방학 첫날',
    optionA: { text: '방학 시작하자마자 끝내버려요', icon: 'zap' },
    optionB: { text: '조금씩 나눠서 해요', icon: 'calendar' },
    optionC: { text: '방학 끝나기 전에 해요', icon: 'hourglass' },
    dimension: 'JP',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 9,
    scenario: '생일 파티를 열어요!',
    situation: '내 생일날',
    optionA: { text: '많은 친구들을 초대해서 시끌벅적하게!', icon: 'party' },
    optionB: { text: '적당한 친구들과 재미있게!', icon: 'cake' },
    optionC: { text: '가장 친한 친구 몇 명이랑 조용히!', icon: 'gift' },
    dimension: 'EI',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 10,
    scenario: '보물찾기 게임을 해요!',
    situation: '보물찾기 시작',
    optionA: { text: '힌트를 차근차근 따라가요', icon: 'footprints' },
    optionB: { text: '힌트도 보고 감도 써봐요', icon: 'compass' },
    optionC: { text: '직감으로 보물이 있을 것 같은 곳을 찾아요', icon: 'sparkle' },
    dimension: 'SN',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 11,
    scenario: '친구랑 게임에서 졌어요!',
    situation: '게임 끝난 후',
    optionA: { text: '분석해서 다음엔 이기겠다고 다짐해요', icon: 'chart' },
    optionB: { text: '아쉽지만 재미있었어요', icon: 'smile' },
    optionC: { text: '너무 속상해서 다시 하고 싶어요', icon: 'refresh' },
    dimension: 'TF',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 12,
    scenario: '갑자기 계획이 바뀌었어요!',
    situation: '놀러가기로 했는데 비가 와요',
    optionA: { text: '새로운 계획을 세우는 것도 재미있어요', icon: 'shuffle' },
    optionB: { text: '좀 아쉽지만 다른 거 해요', icon: 'droplet' },
    optionC: { text: '약속이 바뀌어서 속상해요', icon: 'cloud' },
    dimension: 'JP',
    scoring: { A: -2, B: 0, C: 2 }
  },
  {
    id: 13,
    scenario: '발표 순서가 왔어요!',
    situation: '반 친구들 앞에서 발표',
    optionA: { text: '신나요! 내 이야기를 들려줄 수 있어서!', icon: 'mic' },
    optionB: { text: '긴장되지만 해볼 수 있어요', icon: 'thumbsup' },
    optionC: { text: '너무 떨려서 힘들어요', icon: 'nervous' },
    dimension: 'EI',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 14,
    scenario: '미래에 어떤 사람이 되고 싶어요?',
    situation: '꿈을 상상할 때',
    optionA: { text: '마법사나 우주 비행사 같은 특별한 일!', icon: 'rocket' },
    optionB: { text: '재미있는 일이면 뭐든지 좋아요', icon: 'star' },
    optionC: { text: '선생님이나 의사 같은 도움이 되는 일!', icon: 'briefcase' },
    dimension: 'SN',
    scoring: { A: -2, B: 0, C: 2 }
  },
  {
    id: 15,
    scenario: '친구가 실수를 했어요!',
    situation: '친구가 넘어져서 물을 쏟았어요',
    optionA: { text: '괜찮은지 먼저 물어봐요', icon: 'heart' },
    optionB: { text: '같이 치우자고 해요', icon: 'hands' },
    optionC: { text: '빨리 휴지를 가져와요', icon: 'tissue' },
    dimension: 'TF',
    scoring: { A: -2, B: 0, C: 2 }
  },
  {
    id: 16,
    scenario: '내 방을 꾸며요!',
    situation: '방 정리 시간',
    optionA: { text: '모든 물건 자리를 정해서 깔끔하게!', icon: 'grid' },
    optionB: { text: '대충 정리하고 편하게!', icon: 'cozy' },
    optionC: { text: '내 스타일대로 자유롭게!', icon: 'palette' },
    dimension: 'JP',
    scoring: { A: 2, B: 0, C: -2 }
  }
];

export const scenarioQuestionsMiddle: ScenarioQuestion[] = [
  {
    id: 1,
    scenario: '주말에 갑자기 자유 시간이 생겼어요!',
    situation: '토요일 오후, 할 일이 없는 날',
    optionA: { text: '친구들에게 연락해서 뭐 할지 정해요', icon: 'phone' },
    optionB: { text: '기분에 따라 결정해요', icon: 'shuffle' },
    optionC: { text: '집에서 좋아하는 것을 하면서 쉬어요', icon: 'home' },
    dimension: 'EI',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 2,
    scenario: '새 학기 첫날, 모르는 애들뿐이에요!',
    situation: '교실에 들어섰을 때',
    optionA: { text: '옆자리에 먼저 인사하고 말을 걸어요', icon: 'wave' },
    optionB: { text: '누가 말 걸면 반갑게 대해요', icon: 'smile' },
    optionC: { text: '조용히 앉아서 상황을 지켜봐요', icon: 'eye' },
    dimension: 'EI',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 3,
    scenario: '단체 카톡방이 활발해요!',
    situation: '친구들이 수다를 떨고 있어요',
    optionA: { text: '적극적으로 대화에 참여해요', icon: 'chat' },
    optionB: { text: '가끔 리액션만 해요', icon: 'thumbsup' },
    optionC: { text: '읽기만 하고 필요할 때만 답해요', icon: 'eyeglasses' },
    dimension: 'EI',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 4,
    scenario: '영화를 골라야 해요!',
    situation: '친구들이랑 넷플릭스 볼 때',
    optionA: { text: 'SF나 판타지 같은 상상의 세계 이야기', icon: 'rocket' },
    optionB: { text: '재미있으면 장르 상관없어요', icon: 'popcorn' },
    optionC: { text: '실화 기반이나 현실적인 스토리', icon: 'film' },
    dimension: 'SN',
    scoring: { A: -2, B: 0, C: 2 }
  },
  {
    id: 5,
    scenario: '시험 공부를 해야 해요!',
    situation: '시험 일주일 전',
    optionA: { text: '교과서 내용을 꼼꼼히 암기해요', icon: 'book' },
    optionB: { text: '중요한 부분 위주로 정리해요', icon: 'highlight' },
    optionC: { text: '전체적인 흐름과 연결고리를 파악해요', icon: 'connect' },
    dimension: 'SN',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 6,
    scenario: '진로를 생각해봐야 해요!',
    situation: '미래에 대해 고민할 때',
    optionA: { text: '안정적이고 확실한 직업을 원해요', icon: 'shield' },
    optionB: { text: '아직 잘 모르겠어요', icon: 'thinking' },
    optionC: { text: '새롭고 창의적인 분야가 끌려요', icon: 'lightbulb' },
    dimension: 'SN',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 7,
    scenario: '친구가 속상한 일이 있대요!',
    situation: '친구가 고민을 말해줬어요',
    optionA: { text: '어떻게 하면 좋을지 해결책을 같이 찾아요', icon: 'puzzle' },
    optionB: { text: '이야기를 들어주며 공감해줘요', icon: 'ear' },
    optionC: { text: '같이 슬퍼하면서 위로해줘요', icon: 'hug' },
    dimension: 'TF',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 8,
    scenario: '모둠 과제에서 의견이 갈려요!',
    situation: '팀원들이 다른 의견을 가지고 있어요',
    optionA: { text: '논리적으로 가장 좋은 방법을 설득해요', icon: 'scale' },
    optionB: { text: '다들 의견을 들어보고 절충해요', icon: 'handshake' },
    optionC: { text: '분위기가 안 좋아지지 않게 조율해요', icon: 'peace' },
    dimension: 'TF',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 9,
    scenario: '점수가 기대보다 낮게 나왔어요!',
    situation: '시험 결과를 받았을 때',
    optionA: { text: '왜 틀렸는지 분석하고 다음에 더 잘해요', icon: 'chart' },
    optionB: { text: '아쉽지만 다음에 잘하면 돼요', icon: 'refresh' },
    optionC: { text: '속상하고 우울해져요', icon: 'cloud' },
    dimension: 'TF',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 10,
    scenario: '프로젝트 마감이 다가와요!',
    situation: '제출 3일 전',
    optionA: { text: '이미 거의 다 끝냈어요', icon: 'check' },
    optionB: { text: '지금부터 본격적으로 해요', icon: 'play' },
    optionC: { text: '마감 전날 집중해서 해요', icon: 'fire' },
    dimension: 'JP',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 11,
    scenario: '방학 계획을 세워요!',
    situation: '방학이 시작되기 전',
    optionA: { text: '할 일 목록과 일정표를 만들어요', icon: 'calendar' },
    optionB: { text: '대략적인 계획만 세워요', icon: 'note' },
    optionC: { text: '그때그때 하고 싶은 걸 해요', icon: 'wind' },
    dimension: 'JP',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 12,
    scenario: '갑자기 약속이 취소됐어요!',
    situation: '친구가 갑자기 못 만나게 됐어요',
    optionA: { text: '오히려 좋아! 다른 거 할 수 있어요', icon: 'sparkle' },
    optionB: { text: '아쉽지만 괜찮아요', icon: 'ok' },
    optionC: { text: '기대했는데 좀 짜증나요', icon: 'annoyed' },
    dimension: 'JP',
    scoring: { A: -2, B: 0, C: 2 }
  },
  {
    id: 13,
    scenario: '에너지가 필요해요!',
    situation: '지친 하루 끝에',
    optionA: { text: '친구들 만나서 수다 떨면 충전돼요', icon: 'bolt' },
    optionB: { text: '상황에 따라 달라요', icon: 'battery' },
    optionC: { text: '혼자 조용히 쉬면 충전돼요', icon: 'moon' },
    dimension: 'EI',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 14,
    scenario: '새로운 취미를 시작해요!',
    situation: '관심 있는 것을 찾을 때',
    optionA: { text: '실용적이고 도움이 되는 것을 배워요', icon: 'tool' },
    optionB: { text: '재미있어 보이면 해봐요', icon: 'star' },
    optionC: { text: '독특하고 창의적인 것이 끌려요', icon: 'palette' },
    dimension: 'SN',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 15,
    scenario: '친구가 약속을 어겼어요!',
    situation: '기다렸는데 친구가 안 왔어요',
    optionA: { text: '화가 나지만 이유를 물어봐요', icon: 'question' },
    optionB: { text: '다음엔 이러지 말라고 해요', icon: 'warning' },
    optionC: { text: '무슨 일이 있었나 걱정돼요', icon: 'heart' },
    dimension: 'TF',
    scoring: { A: 0, B: 2, C: -2 }
  },
  {
    id: 16,
    scenario: '내 방 책상은...',
    situation: '평소 책상 상태',
    optionA: { text: '항상 깔끔하게 정리되어 있어요', icon: 'sparkles' },
    optionB: { text: '쓰다가 가끔 정리해요', icon: 'layers' },
    optionC: { text: '나만 알아보는 나만의 스타일이에요', icon: 'chaos' },
    dimension: 'JP',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 17,
    scenario: '대화할 때 더 재미있는 것은?',
    situation: '친구들이랑 이야기할 때',
    optionA: { text: '미래에 대한 상상이나 아이디어', icon: 'crystal' },
    optionB: { text: '다양한 주제 다 좋아요', icon: 'chat' },
    optionC: { text: '실제 있었던 일이나 경험', icon: 'story' },
    dimension: 'SN',
    scoring: { A: -2, B: 0, C: 2 }
  },
  {
    id: 18,
    scenario: '칭찬을 받았어요!',
    situation: '선생님이 칭찬해주셨어요',
    optionA: { text: '뿌듯하고 더 잘하고 싶어요', icon: 'medal' },
    optionB: { text: '기분이 좋아요', icon: 'smile' },
    optionC: { text: '어색하고 부끄러워요', icon: 'blush' },
    dimension: 'TF',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 19,
    scenario: '결정을 내려야 해요!',
    situation: '중요한 선택의 순간',
    optionA: { text: '빨리 결정하고 행동해요', icon: 'zap' },
    optionB: { text: '적당히 고민하고 결정해요', icon: 'scale' },
    optionC: { text: '여러 가능성을 열어두고 천천히 결정해요', icon: 'hourglass' },
    dimension: 'JP',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 20,
    scenario: '수업 시간에 발표해요!',
    situation: '선생님이 발표할 사람을 찾아요',
    optionA: { text: '손 들고 나가서 발표해요', icon: 'hand' },
    optionB: { text: '시키면 해요', icon: 'ok' },
    optionC: { text: '되도록 안 하고 싶어요', icon: 'hide' },
    dimension: 'EI',
    scoring: { A: 2, B: 0, C: -2 }
  }
];

export const scenarioQuestionsHigh: ScenarioQuestion[] = [
  {
    id: 1,
    scenario: '금요일 밤, 뭘 할까요?',
    situation: '일주일의 끝, 자유 시간',
    optionA: { text: '친구들이랑 나가서 놀아요', icon: 'party' },
    optionB: { text: '기분 따라 정해요', icon: 'dice' },
    optionC: { text: '집에서 혼자만의 시간을 가져요', icon: 'couch' },
    dimension: 'EI',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 2,
    scenario: 'SNS에 올릴 사진이 있어요!',
    situation: '여행에서 좋은 사진을 찍었어요',
    optionA: { text: '바로 올리고 친구들 반응을 봐요', icon: 'share' },
    optionB: { text: '가끔 올려요', icon: 'camera' },
    optionC: { text: '올리는 것보다 보는 게 좋아요', icon: 'eye' },
    dimension: 'EI',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 3,
    scenario: '수행평가 모둠이 정해졌어요!',
    situation: '첫 모둠 회의',
    optionA: { text: '회의를 이끌고 역할을 정해요', icon: 'leader' },
    optionB: { text: '의견을 내고 참여해요', icon: 'comment' },
    optionC: { text: '맡은 역할을 조용히 수행해요', icon: 'work' },
    dimension: 'EI',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 4,
    scenario: '진로 고민 중이에요!',
    situation: '진로진학상담 시간',
    optionA: { text: '안정적이고 확실한 진로가 좋아요', icon: 'shield' },
    optionB: { text: '여러 가지를 고려 중이에요', icon: 'options' },
    optionC: { text: '새롭고 도전적인 분야가 끌려요', icon: 'rocket' },
    dimension: 'SN',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 5,
    scenario: '수업 내용을 이해할 때...',
    situation: '새로운 개념을 배울 때',
    optionA: { text: '구체적인 예시가 있어야 이해돼요', icon: 'example' },
    optionB: { text: '둘 다 필요해요', icon: 'balance' },
    optionC: { text: '전체적인 개념부터 잡으면 이해돼요', icon: 'concept' },
    dimension: 'SN',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 6,
    scenario: '에세이를 쓸 때...',
    situation: '글쓰기 과제',
    optionA: { text: '비유와 상상력을 많이 써요', icon: 'feather' },
    optionB: { text: '주제에 따라 달라요', icon: 'pen' },
    optionC: { text: '사실과 데이터를 바탕으로 써요', icon: 'data' },
    dimension: 'SN',
    scoring: { A: -2, B: 0, C: 2 }
  },
  {
    id: 7,
    scenario: '친구가 잘못된 선택을 하려 해요!',
    situation: '충고가 필요한 상황',
    optionA: { text: '솔직하게 왜 안 되는지 말해요', icon: 'honest' },
    optionB: { text: '돌려서 조심스럽게 말해요', icon: 'careful' },
    optionC: { text: '감정을 먼저 공감해주고 말해요', icon: 'heart' },
    dimension: 'TF',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 8,
    scenario: '토론 수업 시간!',
    situation: '의견이 대립하는 주제',
    optionA: { text: '논리적으로 상대 의견을 반박해요', icon: 'debate' },
    optionB: { text: '양쪽 의견을 듣고 판단해요', icon: 'listen' },
    optionC: { text: '서로 감정이 상하지 않게 조율해요', icon: 'peace' },
    dimension: 'TF',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 9,
    scenario: '친구가 시험을 망쳤대요!',
    situation: '위로가 필요한 순간',
    optionA: { text: '"다음엔 이렇게 하면 돼"라고 조언해요', icon: 'advice' },
    optionB: { text: '"속상하지? 다음엔 잘 될 거야"라고 해요', icon: 'support' },
    optionC: { text: '"많이 힘들지?"라며 같이 아파해요', icon: 'hug' },
    dimension: 'TF',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 10,
    scenario: '수능이 100일 남았어요!',
    situation: 'D-100',
    optionA: { text: '세부 계획표를 세우고 따라가요', icon: 'plan' },
    optionB: { text: '대략적인 목표를 정해요', icon: 'goal' },
    optionC: { text: '그날그날 컨디션 따라 공부해요', icon: 'flow' },
    dimension: 'JP',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 11,
    scenario: '과제 마감이 내일이에요!',
    situation: '아직 시작 안 함',
    optionA: { text: '이런 일은 거의 없어요, 미리 해요', icon: 'never' },
    optionB: { text: '오늘 밤새서 끝내요', icon: 'night' },
    optionC: { text: '압박감이 있어야 집중이 돼요', icon: 'pressure' },
    dimension: 'JP',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 12,
    scenario: '여행 스타일은?',
    situation: '여행 계획을 세울 때',
    optionA: { text: '일정표와 예약을 미리 다 해요', icon: 'itinerary' },
    optionB: { text: '대략적인 틀만 잡아요', icon: 'outline' },
    optionC: { text: '현지에서 즉흥적으로 정해요', icon: 'spontaneous' },
    dimension: 'JP',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 13,
    scenario: '스트레스 받을 때...',
    situation: '힘든 하루를 보냈어요',
    optionA: { text: '친구랑 만나서 수다 떨어요', icon: 'chat' },
    optionB: { text: '그때그때 달라요', icon: 'variable' },
    optionC: { text: '혼자 음악 듣거나 산책해요', icon: 'headphones' },
    dimension: 'EI',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 14,
    scenario: '관심있는 분야는?',
    situation: '뭔가 새로운 걸 배울 때',
    optionA: { text: '실용적이고 현실적인 것', icon: 'practical' },
    optionB: { text: '다양한 분야', icon: 'diverse' },
    optionC: { text: '이론적이고 추상적인 것', icon: 'abstract' },
    dimension: 'SN',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 15,
    scenario: '중요한 결정을 내릴 때...',
    situation: '선택의 갈림길',
    optionA: { text: '장단점을 논리적으로 분석해요', icon: 'analyze' },
    optionB: { text: '이성과 감정 둘 다 고려해요', icon: 'both' },
    optionC: { text: '마음이 가는 대로 결정해요', icon: 'heart' },
    dimension: 'TF',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 16,
    scenario: '계획이 갑자기 바뀌면...',
    situation: '예상치 못한 변화',
    optionA: { text: '유연하게 적응해요', icon: 'flexible' },
    optionB: { text: '좀 불편하지만 괜찮아요', icon: 'okay' },
    optionC: { text: '스트레스 받아요', icon: 'stress' },
    dimension: 'JP',
    scoring: { A: -2, B: 0, C: 2 }
  },
  {
    id: 17,
    scenario: '파티에 초대받았어요!',
    situation: '처음 보는 사람이 많은 파티',
    optionA: { text: '새로운 사람들 만나는 게 신나요', icon: 'excited' },
    optionB: { text: '아는 사람 위주로 어울려요', icon: 'familiar' },
    optionC: { text: '사람 많은 데 가는 게 피곤해요', icon: 'tired' },
    dimension: 'EI',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 18,
    scenario: '새로운 것을 배울 때...',
    situation: '처음 접하는 분야',
    optionA: { text: '직접 해보면서 배워요', icon: 'hands' },
    optionB: { text: '설명 듣고 해봐요', icon: 'listen' },
    optionC: { text: '원리를 먼저 이해하려고 해요', icon: 'think' },
    dimension: 'SN',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 19,
    scenario: '피드백을 줄 때...',
    situation: '친구의 작품에 의견을 달라고 해요',
    optionA: { text: '좋은 점과 아쉬운 점을 솔직히 말해요', icon: 'honest' },
    optionB: { text: '장점 위주로 말하고 조심스럽게 제안해요', icon: 'gentle' },
    optionC: { text: '격려 위주로 말해요', icon: 'encourage' },
    dimension: 'TF',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 20,
    scenario: '인생의 방향에 대해...',
    situation: '미래를 생각할 때',
    optionA: { text: '명확한 계획과 목표가 있어요', icon: 'target' },
    optionB: { text: '대략적인 방향은 있어요', icon: 'compass' },
    optionC: { text: '열린 마음으로 흘러가는 대로 살아요', icon: 'wave' },
    dimension: 'JP',
    scoring: { A: 2, B: 0, C: -2 }
  }
];

export const scenarioQuestionsAdult: ScenarioQuestion[] = [
  {
    id: 1,
    scenario: '금요일 저녁, 퇴근 후 뭘 할까요?',
    situation: '일주일의 피로가 쌓인 금요일 밤',
    optionA: { text: '친구들과 약속을 잡아 외출해요', icon: 'wine' },
    optionB: { text: '기분에 따라 결정해요', icon: 'dice' },
    optionC: { text: '집에서 넷플릭스 보며 쉬어요', icon: 'couch' },
    dimension: 'EI',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 2,
    scenario: '회식 자리에서 당신은...',
    situation: '팀 회식, 20명 정도의 자리',
    optionA: { text: '여러 테이블을 돌며 다양한 사람과 대화해요', icon: 'social' },
    optionB: { text: '옆자리 사람들과 적당히 대화해요', icon: 'chat' },
    optionC: { text: '친한 동료들과만 조용히 대화해요', icon: 'whisper' },
    dimension: 'EI',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 3,
    scenario: '새로운 프로젝트 킥오프 미팅!',
    situation: '처음 만나는 팀원들과의 첫 회의',
    optionA: { text: '적극적으로 아이디어를 제안해요', icon: 'bulb' },
    optionB: { text: '분위기 보며 적절히 참여해요', icon: 'observe' },
    optionC: { text: '경청하며 메모하고 나중에 의견을 정리해요', icon: 'note' },
    dimension: 'EI',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 4,
    scenario: '새 업무를 맡았어요!',
    situation: '처음 해보는 종류의 업무',
    optionA: { text: '기존 사례와 매뉴얼을 먼저 찾아봐요', icon: 'manual' },
    optionB: { text: '대략 파악하고 하면서 배워요', icon: 'learn' },
    optionC: { text: '새로운 접근법을 시도해봐요', icon: 'innovate' },
    dimension: 'SN',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 5,
    scenario: '커리어 방향을 고민해요',
    situation: '이직이나 진로 전환을 생각할 때',
    optionA: { text: '안정적이고 검증된 분야가 좋아요', icon: 'stable' },
    optionB: { text: '여러 가능성을 열어두고 있어요', icon: 'options' },
    optionC: { text: '새롭고 도전적인 분야가 끌려요', icon: 'adventure' },
    dimension: 'SN',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 6,
    scenario: '보고서를 작성해요!',
    situation: '주간 업무 보고',
    optionA: { text: '구체적인 숫자와 사실 위주로 써요', icon: 'data' },
    optionB: { text: '적절히 섞어서 써요', icon: 'balance' },
    optionC: { text: '인사이트와 전략적 제안을 중심으로 써요', icon: 'insight' },
    dimension: 'SN',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 7,
    scenario: '동료가 힘들어 보여요',
    situation: '옆자리 동료가 우울해 보여요',
    optionA: { text: '구체적인 도움을 제안해요', icon: 'help' },
    optionB: { text: '커피 마시며 이야기를 들어줘요', icon: 'coffee' },
    optionC: { text: '공감하며 위로해줘요', icon: 'hug' },
    dimension: 'TF',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 8,
    scenario: '팀 내 갈등이 생겼어요!',
    situation: '두 동료 사이에 의견 충돌',
    optionA: { text: '객관적으로 옳고 그름을 판단해요', icon: 'scale' },
    optionB: { text: '양쪽 의견을 듣고 절충안을 찾아요', icon: 'mediate' },
    optionC: { text: '관계가 상하지 않게 분위기를 조율해요', icon: 'peace' },
    dimension: 'TF',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 9,
    scenario: '부정적인 피드백을 받았어요',
    situation: '업무 평가에서 개선점을 지적받음',
    optionA: { text: '어떤 점을 고쳐야 하는지 분석해요', icon: 'analyze' },
    optionB: { text: '참고해서 개선하려고 해요', icon: 'improve' },
    optionC: { text: '기분이 좀 상하지만 받아들여요', icon: 'accept' },
    dimension: 'TF',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 10,
    scenario: '중요한 프레젠테이션이 있어요!',
    situation: 'D-7, 발표 준비 중',
    optionA: { text: '미리 세세하게 준비하고 리허설해요', icon: 'rehearse' },
    optionB: { text: '핵심만 준비하고 나머지는 즉석에서', icon: 'outline' },
    optionC: { text: '대략적인 방향만 잡고 즉흥적으로 해요', icon: 'improv' },
    dimension: 'JP',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 11,
    scenario: '휴가 계획을 세워요!',
    situation: '일주일 휴가',
    optionA: { text: '일정표와 예약을 미리 다 해요', icon: 'plan' },
    optionB: { text: '숙소만 정하고 나머지는 현지에서', icon: 'semiflex' },
    optionC: { text: '즉흥적으로 그날그날 정해요', icon: 'spontaneous' },
    dimension: 'JP',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 12,
    scenario: '갑자기 미팅이 취소됐어요!',
    situation: '오후에 빈 시간이 생김',
    optionA: { text: '다른 할 일을 빠르게 정리해요', icon: 'replan' },
    optionB: { text: '자유 시간이 생겨서 좋아요', icon: 'relax' },
    optionC: { text: '준비했던 게 헛수고가 되어 약간 짜증나요', icon: 'annoyed' },
    dimension: 'JP',
    scoring: { A: 0, B: -2, C: 2 }
  },
  {
    id: 13,
    scenario: '주말에 에너지를 충전해요!',
    situation: '쉬는 날',
    optionA: { text: '친구들 만나서 활동적으로 보내요', icon: 'active' },
    optionB: { text: '균형있게 보내요', icon: 'balance' },
    optionC: { text: '집에서 조용히 재충전해요', icon: 'recharge' },
    dimension: 'EI',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 14,
    scenario: '새로운 정보를 접할 때...',
    situation: '뉴스나 책을 읽을 때',
    optionA: { text: '구체적인 사실과 데이터에 집중해요', icon: 'facts' },
    optionB: { text: '전체적으로 파악해요', icon: 'overview' },
    optionC: { text: '숨겨진 의미와 패턴을 찾아요', icon: 'pattern' },
    dimension: 'SN',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 15,
    scenario: '연인과 다퉜어요!',
    situation: '의견 충돌 상황',
    optionA: { text: '논리적으로 설명하고 이해시켜요', icon: 'explain' },
    optionB: { text: '차분히 대화하려고 해요', icon: 'talk' },
    optionC: { text: '먼저 상대방 감정을 달래줘요', icon: 'comfort' },
    dimension: 'TF',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 16,
    scenario: '마감이 촉박해요!',
    situation: '업무 마감 2일 전',
    optionA: { text: '미리미리 해서 이미 거의 다 됐어요', icon: 'done' },
    optionB: { text: '지금부터 집중해서 해요', icon: 'focus' },
    optionC: { text: '압박감이 있어야 집중이 돼요', icon: 'pressure' },
    dimension: 'JP',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 17,
    scenario: '네트워킹 행사에 참석해요!',
    situation: '업계 컨퍼런스',
    optionA: { text: '적극적으로 명함 교환하며 인맥을 넓혀요', icon: 'network' },
    optionB: { text: '관심 있는 분야 사람들과 대화해요', icon: 'selective' },
    optionC: { text: '세션만 듣고 조용히 돌아와요', icon: 'observe' },
    dimension: 'EI',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 18,
    scenario: '신규 사업 아이디어를 내야 해요!',
    situation: '브레인스토밍 회의',
    optionA: { text: '검증된 사례를 바탕으로 제안해요', icon: 'proven' },
    optionB: { text: '현실성과 창의성을 균형있게 고려해요', icon: 'balanced' },
    optionC: { text: '혁신적이고 파격적인 아이디어를 내요', icon: 'disrupt' },
    dimension: 'SN',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 19,
    scenario: '후배가 실수를 했어요!',
    situation: '업무상 실수를 발견함',
    optionA: { text: '직접적으로 문제점을 알려줘요', icon: 'direct' },
    optionB: { text: '개선점을 부드럽게 제안해요', icon: 'gentle' },
    optionC: { text: '기분 상하지 않게 돌려서 말해요', icon: 'careful' },
    dimension: 'TF',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 20,
    scenario: '책상 정리 스타일은?',
    situation: '평소 업무 공간',
    optionA: { text: '항상 깔끔하게 정돈되어 있어요', icon: 'tidy' },
    optionB: { text: '가끔 정리해요', icon: 'sometimes' },
    optionC: { text: '나만 알아보는 나만의 시스템이에요', icon: 'chaos' },
    dimension: 'JP',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 21,
    scenario: '혼자 밥 먹기 vs 함께 먹기',
    situation: '점심 시간',
    optionA: { text: '동료들과 같이 먹는 게 좋아요', icon: 'together' },
    optionB: { text: '상황에 따라 달라요', icon: 'flexible' },
    optionC: { text: '혼밥도 편하고 좋아요', icon: 'solo' },
    dimension: 'EI',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 22,
    scenario: '변화가 찾아왔어요!',
    situation: '조직 개편이나 업무 변경',
    optionA: { text: '익숙한 것이 좋지만 적응해요', icon: 'adapt' },
    optionB: { text: '필요한 변화라면 받아들여요', icon: 'accept' },
    optionC: { text: '새로운 변화가 오히려 설레요', icon: 'excited' },
    dimension: 'SN',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 23,
    scenario: '리더로서 가장 중요한 것은?',
    situation: '팀을 이끌 때',
    optionA: { text: '목표 달성과 효율성', icon: 'goal' },
    optionB: { text: '균형 있는 운영', icon: 'balance' },
    optionC: { text: '팀원들의 감정과 동기부여', icon: 'motivate' },
    dimension: 'TF',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 24,
    scenario: '인생의 방향에 대해...',
    situation: '장기적인 삶의 계획',
    optionA: { text: '5년, 10년 계획이 있어요', icon: 'longterm' },
    optionB: { text: '대략적인 방향은 있어요', icon: 'direction' },
    optionC: { text: '흘러가는 대로 유연하게 살아요', icon: 'flow' },
    dimension: 'JP',
    scoring: { A: 2, B: 0, C: -2 }
  }
];

export const mbtiTypes: Record<string, MBTIType> = {
  INTJ: {
    type: 'INTJ',
    nickname: '전략적인 사색가',
    description: '독립적이고 전략적인 사고를 가진 사람이에요. 혼자서 깊이 생각하는 것을 좋아하고, 목표를 세우면 끝까지 달성하려고 노력해요. 지식을 쌓는 것을 좋아하며, 미래를 계획하는 것에 뛰어나요.',
    strengths: ['논리적 사고력', '장기적 계획 수립', '독립적 학습 능력', '문제 해결 능력'],
    activities: ['과학 실험하기', '퍼즐이나 전략 게임', '책 읽기', '미래 계획 세우기'],
    animal: '올빼미',
    color: 'from-indigo-500 to-purple-600',
    animalImage: 'intj_wise_owl_mascot.png',
    careers: ['연구원', '데이터 과학자', '전략 컨설턴트', '소프트웨어 아키텍트', '투자 분석가'],
    hobbies: ['체스', '독서', '다큐멘터리 감상', '프로그래밍', '미래 계획 세우기'],
    loveStyle: '사랑에도 전략적이에요. 감정 표현은 서툴지만, 한번 마음을 정하면 끝까지 신뢰하고 지지해요. 깊은 대화와 지적인 교류를 통해 친밀감을 느껴요.',
    behavioralScenarios: [
      { situation: '회의에서 의견 충돌이 생기면', behavior: '논리적 근거를 차분하게 제시하며, 감정적 대응은 피해요' },
      { situation: '친구가 갑자기 계획을 바꾸면', behavior: '약간 불편하지만 이유를 듣고 논리적으로 판단해요' },
      { situation: '새로운 프로젝트를 맡으면', behavior: '먼저 전체 그림을 그리고 세부 계획을 세워요' }
    ]
  },
  INTP: {
    type: 'INTP',
    nickname: '호기심 많은 탐구가',
    description: '끝없는 호기심으로 세상을 탐구하는 사람이에요. "왜?"라는 질문을 자주 하고, 새로운 아이디어를 생각해내는 것을 좋아해요. 논리적이고 분석적인 사고를 가지고 있어요.',
    strengths: ['분석적 사고', '창의적 문제 해결', '이론적 이해력', '객관적 판단'],
    activities: ['코딩이나 프로그래밍', '수학 문제 풀기', '과학 다큐멘터리 보기', '발명품 구상하기'],
    animal: '너구리',
    color: 'from-cyan-500 to-blue-600',
    animalImage: 'intp_curious_raccoon_mascot.png',
    careers: ['소프트웨어 개발자', '과학자', '철학자', '분석가', '교수'],
    hobbies: ['코딩', '퍼즐 게임', '위키피디아 서핑', '이론 연구', '토론'],
    loveStyle: '연애에서도 지적인 연결을 중요시해요. 감정 표현이 서툴러 오해받기도 하지만, 상대방을 이해하려는 노력을 꾸준히 해요.',
    behavioralScenarios: [
      { situation: '흥미로운 주제를 발견하면', behavior: '몇 시간이고 깊이 파고들며 연구해요' },
      { situation: '감정적인 상황에 놓이면', behavior: '일단 한 발 물러서서 객관적으로 분석하려고 해요' },
      { situation: '규칙이 비효율적으로 느껴지면', behavior: '왜 그런 규칙이 있는지 질문하고 개선점을 제안해요' }
    ]
  },
  ENTJ: {
    type: 'ENTJ',
    nickname: '타고난 리더',
    description: '자신감 있고 카리스마가 넘치는 리더예요. 팀을 이끌고 목표를 달성하는 것을 좋아해요. 효율적이고 결단력 있게 일을 처리하며, 다른 사람들에게 동기를 부여하는 능력이 뛰어나요.',
    strengths: ['리더십', '결단력', '효율적인 계획', '설득력'],
    activities: ['팀 프로젝트 이끌기', '토론하기', '목표 세우고 달성하기', '새로운 것 배우기'],
    animal: '사자',
    color: 'from-amber-500 to-orange-600',
    animalImage: 'entj_lion_leader_mascot.png',
    careers: ['CEO', '경영 컨설턴트', '변호사', '정치인', '사업가'],
    hobbies: ['골프', '네트워킹', '자기계발', '전략 게임', '멘토링'],
    loveStyle: '연애에서도 리더십을 발휘해요. 상대방의 성장을 응원하고, 함께 목표를 향해 나아가는 관계를 원해요. 솔직하고 직접적인 소통을 선호해요.',
    behavioralScenarios: [
      { situation: '팀 프로젝트에서', behavior: '자연스럽게 리더 역할을 맡고 방향을 제시해요' },
      { situation: '비효율적인 상황을 보면', behavior: '즉시 개선 방안을 제안하고 실행해요' },
      { situation: '목표가 생기면', behavior: '구체적인 실행 계획을 세우고 끝까지 밀어붙여요' }
    ]
  },
  ENTP: {
    type: 'ENTP',
    nickname: '창의적인 도전가',
    description: '새로운 아이디어와 가능성을 탐험하는 것을 좋아해요. 토론을 즐기고, 다양한 관점에서 생각하는 능력이 뛰어나요. 창의적이고 재치있으며, 문제를 새로운 방식으로 해결해요.',
    strengths: ['창의력', '빠른 적응력', '토론 능력', '다양한 관점 이해'],
    activities: ['새로운 아이디어 발표하기', '토론 대회', '브레인스토밍', '발명하기'],
    animal: '여우',
    color: 'from-rose-500 to-pink-600',
    animalImage: 'entp_clever_fox_mascot.png',
    careers: ['기업가', '마케터', '변호사', '발명가', '코미디언'],
    hobbies: ['토론', '새로운 취미 시도', '스타트업 아이디어 구상', '여행', '즉흥 코미디'],
    loveStyle: '연애도 지루함을 싫어해요. 상대방과 끊임없이 새로운 것을 시도하고, 지적인 대화를 즐겨요. 자유로운 관계를 선호하지만 깊은 유대감도 원해요.',
    behavioralScenarios: [
      { situation: '누군가 "불가능해"라고 하면', behavior: '"정말? 왜?"라고 물으며 가능성을 찾아요' },
      { situation: '새로운 규칙이 생기면', behavior: '일단 왜 그런 규칙이 필요한지 따져봐요' },
      { situation: '아이디어가 떠오르면', behavior: '즉시 누군가와 공유하며 발전시켜요' }
    ]
  },
  INFJ: {
    type: 'INFJ',
    nickname: '통찰력 있는 이상주의자',
    description: '깊은 통찰력으로 사람들의 마음을 이해해요. 조용하지만 확고한 가치관을 가지고 있고, 다른 사람들을 돕는 것에서 의미를 찾아요. 창의적이고 이상적인 비전을 가지고 있어요.',
    strengths: ['공감 능력', '통찰력', '창의적 사고', '헌신적인 태도'],
    activities: ['글쓰기', '봉사 활동', '예술 감상', '깊은 대화 나누기'],
    animal: '늑대',
    color: 'from-emerald-500 to-teal-600',
    animalImage: 'infj_wise_wolf_mascot.png',
    careers: ['상담사', '작가', '심리학자', 'NPO 활동가', '교육자'],
    hobbies: ['일기 쓰기', '명상', '봉사 활동', '예술 감상', '심리학 공부'],
    loveStyle: '깊고 의미 있는 관계를 원해요. 상대방의 영혼까지 이해하려 하고, 진정한 연결을 추구해요. 표면적인 관계보다 깊은 유대감을 중요시해요.',
    behavioralScenarios: [
      { situation: '친구가 말 안 해도', behavior: '표정과 분위기만으로 기분을 읽어요' },
      { situation: '불의를 목격하면', behavior: '조용하지만 단호하게 목소리를 내요' },
      { situation: '혼자만의 시간이 필요하면', behavior: '사람들에게서 잠시 떨어져 재충전해요' }
    ]
  },
  INFP: {
    type: 'INFP',
    nickname: '꿈꾸는 이상주의자',
    description: '풍부한 상상력과 깊은 감정을 가진 사람이에요. 자신만의 가치관을 중요하게 여기고, 진정성 있는 삶을 추구해요. 예술적이고 창의적이며, 다른 사람들의 감정에 민감해요.',
    strengths: ['창의력', '공감 능력', '진정성', '적응력'],
    activities: ['시나 소설 쓰기', '음악 듣기', '예술 활동', '자연 속 산책'],
    animal: '유니콘',
    color: 'from-violet-500 to-purple-600',
    animalImage: 'infp_unicorn_dreamer_mascot.png',
    careers: ['작가', '예술가', '상담사', '그래픽 디자이너', 'UX 디자이너'],
    hobbies: ['글쓰기', '그림 그리기', '음악', '자연 속 산책', '명상'],
    loveStyle: '이상적인 사랑을 꿈꿔요. 진정한 영혼의 동반자를 찾고, 깊은 감정적 연결을 원해요. 로맨틱하고 헌신적이며, 상대방을 있는 그대로 받아들여요.',
    behavioralScenarios: [
      { situation: '마음에 안 드는 일을 해야 할 때', behavior: '가치관에 맞지 않으면 내면의 갈등을 겪어요' },
      { situation: '감동적인 영화를 보면', behavior: '등장인물에 완전히 몰입해서 함께 울어요' },
      { situation: '상상의 세계에 빠지면', behavior: '몇 시간이고 혼자만의 세계를 즐겨요' }
    ]
  },
  ENFJ: {
    type: 'ENFJ',
    nickname: '따뜻한 리더',
    description: '다른 사람들을 이끌고 격려하는 것을 좋아해요. 카리스마가 있고, 사람들의 잠재력을 이끌어내는 능력이 있어요. 조화롭고 따뜻한 관계를 중요하게 생각해요.',
    strengths: ['리더십', '공감 능력', '소통 능력', '동기 부여'],
    activities: ['멘토링 하기', '그룹 활동 이끌기', '봉사 활동', '이야기 나누기'],
    animal: '돌고래',
    color: 'from-sky-500 to-blue-600',
    animalImage: 'enfj_caring_dolphin_mascot.png',
    careers: ['교사', 'HR 매니저', '상담사', '코치', '정치인'],
    hobbies: ['멘토링', '사회 활동', '글쓰기', '요리해서 나누기', '네트워킹'],
    loveStyle: '사랑에 헌신적이에요. 상대방의 성장을 위해 노력하고, 깊은 감정적 연결을 추구해요. 상대방의 필요를 먼저 생각하는 경향이 있어요.',
    behavioralScenarios: [
      { situation: '팀원이 힘들어 보이면', behavior: '먼저 다가가서 이야기를 들어줘요' },
      { situation: '갈등 상황이 생기면', behavior: '모두가 화해할 수 있도록 조율해요' },
      { situation: '누군가의 잠재력을 발견하면', behavior: '격려하고 성장할 수 있도록 도와줘요' }
    ]
  },
  ENFP: {
    type: 'ENFP',
    nickname: '열정적인 탐험가',
    description: '에너지가 넘치고 열정적인 사람이에요! 새로운 사람을 만나고 새로운 경험을 하는 것을 좋아해요. 창의적이고 자유로우며, 긍정적인 에너지로 주변 사람들에게 영감을 줘요.',
    strengths: ['창의력', '사교성', '열정', '적응력'],
    activities: ['새로운 친구 사귀기', '창작 활동', '여행', '브레인스토밍'],
    animal: '수달',
    color: 'from-orange-500 to-yellow-500',
    animalImage: 'enfp_playful_otter_mascot.png',
    careers: ['마케터', '배우', '작가', '기자', '이벤트 플래너'],
    hobbies: ['여행', '새로운 사람 만나기', '창작 활동', '파티 기획', '다양한 취미 시도'],
    loveStyle: '연애에 열정적이에요! 상대방과 함께 모험하고 새로운 경험을 공유하기를 원해요. 깊은 대화와 감정적 연결을 중요시하며, 자유롭지만 헌신적인 관계를 추구해요.',
    behavioralScenarios: [
      { situation: '새로운 사람을 만나면', behavior: '금방 친해지고 오랜 친구처럼 대화해요' },
      { situation: '재미있는 아이디어가 떠오르면', behavior: '즉시 실행하고 싶어서 안달이 나요' },
      { situation: '루틴한 일을 해야 할 때', behavior: '금방 지루해져서 새로운 방법을 찾아요' }
    ]
  },
  ISTJ: {
    type: 'ISTJ',
    nickname: '신뢰할 수 있는 책임자',
    description: '믿음직스럽고 책임감이 강한 사람이에요. 규칙을 잘 따르고, 맡은 일을 끝까지 완수해요. 체계적이고 꼼꼼하며, 실용적인 방식으로 문제를 해결해요.',
    strengths: ['책임감', '신뢰성', '체계적인 사고', '인내심'],
    activities: ['계획표 만들기', '컬렉션 정리하기', '역사 공부하기', '규칙적인 운동'],
    animal: '거북이',
    color: 'from-slate-500 to-gray-600',
    animalImage: 'istj_wise_turtle_mascot.png',
    careers: ['회계사', '법률가', '공무원', '관리자', '엔지니어'],
    hobbies: ['등산', '역사 공부', '컬렉션', '정리정돈', '독서'],
    loveStyle: '연애에서도 신뢰와 안정을 중요시해요. 화려한 표현보다 꾸준한 행동으로 사랑을 보여줘요. 약속을 지키고, 장기적인 관계를 추구해요.',
    behavioralScenarios: [
      { situation: '일을 맡으면', behavior: '계획을 세우고 차근차근 완수해요' },
      { situation: '규칙을 어기는 사람을 보면', behavior: '왜 규칙이 있는지 설명하고 싶어져요' },
      { situation: '갑자기 계획이 바뀌면', behavior: '약간 스트레스 받지만 적응하려 노력해요' }
    ]
  },
  ISFJ: {
    type: 'ISFJ',
    nickname: '따뜻한 수호자',
    description: '다른 사람들을 돌보고 보호하는 것을 좋아해요. 세심하고 배려심이 깊으며, 조용히 헌신하는 타입이에요. 전통과 규칙을 존중하고, 안정적인 환경을 만들어요.',
    strengths: ['배려심', '신뢰성', '세심함', '헌신'],
    activities: ['친구 돕기', '요리하기', '정리정돈', '가족과 시간 보내기'],
    animal: '토끼',
    color: 'from-pink-400 to-rose-500',
    animalImage: 'isfj_caring_rabbit_mascot.png',
    careers: ['간호사', '교사', '사회복지사', '사서', '행정 담당자'],
    hobbies: ['요리', '베이킹', '정원 가꾸기', '수공예', '가족 모임'],
    loveStyle: '헌신적이고 따뜻한 사랑을 해요. 상대방의 필요를 먼저 생각하고, 세심하게 챙겨요. 안정적이고 오래가는 관계를 원하며, 작은 것들로 사랑을 표현해요.',
    behavioralScenarios: [
      { situation: '주변 사람이 힘들어 보이면', behavior: '말없이 옆에서 도와줄 방법을 찾아요' },
      { situation: '감사 인사를 받으면', behavior: '어색해하지만 내심 뿌듯해해요' },
      { situation: '갈등이 생기면', behavior: '자신을 희생해서라도 평화를 유지하려 해요' }
    ]
  },
  ESTJ: {
    type: 'ESTJ',
    nickname: '결단력 있는 관리자',
    description: '조직적이고 효율적으로 일을 처리하는 사람이에요. 리더십이 있고, 규칙과 질서를 중요하게 생각해요. 실용적이고 논리적이며, 목표 달성을 위해 열심히 노력해요.',
    strengths: ['조직력', '리더십', '실행력', '책임감'],
    activities: ['학급 회장하기', '프로젝트 관리', '스포츠 팀 활동', '계획 세우기'],
    animal: '독수리',
    color: 'from-red-500 to-orange-600',
    animalImage: 'estj_eagle_leader_mascot.png',
    careers: ['관리자', 'CEO', '군인', '판사', '프로젝트 매니저'],
    hobbies: ['골프', '등산', '자원봉사 조직', '스포츠', '커뮤니티 활동'],
    loveStyle: '연애에서도 책임감 있게 행동해요. 상대방에게 안정감을 주고, 실질적인 방법으로 사랑을 표현해요. 약속을 중요시하고, 장기적인 관계를 추구해요.',
    behavioralScenarios: [
      { situation: '팀이 방향을 잃으면', behavior: '즉시 계획을 세우고 역할을 분배해요' },
      { situation: '규칙을 어기는 행동을 보면', behavior: '바로잡으려고 직접적으로 말해요' },
      { situation: '목표가 정해지면', behavior: '효율적인 방법으로 달성하려 노력해요' }
    ]
  },
  ESFJ: {
    type: 'ESFJ',
    nickname: '사교적인 돌봄이',
    description: '친절하고 사교적이며, 다른 사람들과 어울리는 것을 좋아해요. 조화로운 관계를 만들고 유지하는 데 뛰어나요. 실용적이고 협력적이며, 다른 사람들을 돕는 것에서 기쁨을 느껴요.',
    strengths: ['사교성', '협력심', '조직력', '배려심'],
    activities: ['파티 계획하기', '친구들과 어울리기', '봉사 활동', '팀 활동'],
    animal: '강아지',
    color: 'from-yellow-400 to-amber-500',
    animalImage: 'cute_golden_retriever_mascot.png',
    careers: ['이벤트 플래너', '간호사', '교사', 'HR 담당자', '영업'],
    hobbies: ['파티 기획', '요리', '봉사 활동', '친구 만나기', '커뮤니티 활동'],
    loveStyle: '사랑을 듬뿍 주는 타입이에요. 상대방을 세심하게 챙기고, 함께하는 시간을 소중히 여겨요. 안정적이고 따뜻한 가정을 꿈꾸며, 사랑을 적극적으로 표현해요.',
    behavioralScenarios: [
      { situation: '친구 생일이 다가오면', behavior: '깜짝 파티를 기획하거나 선물을 고르느라 바빠요' },
      { situation: '갈등이 생기면', behavior: '모두가 화해할 수 있도록 중재해요' },
      { situation: '새로운 사람이 오면', behavior: '먼저 다가가서 편하게 만들어줘요' }
    ]
  },
  ISTP: {
    type: 'ISTP',
    nickname: '논리적인 탐구가',
    description: '손재주가 뛰어나고 논리적인 사람이에요. 실용적인 문제를 해결하는 것을 좋아하고, 새로운 것을 분석하고 이해하려고 해요. 조용하지만 모험을 즐기기도 해요.',
    strengths: ['논리적 사고', '손재주', '문제 해결력', '침착함'],
    activities: ['조립하기', '실험하기', '스포츠', '게임'],
    animal: '표범',
    color: 'from-zinc-500 to-slate-600',
    animalImage: 'istp_cool_leopard_mascot.png',
    careers: ['엔지니어', '정비사', '조종사', '운동선수', '외과의사'],
    hobbies: ['자동차 정비', '익스트림 스포츠', 'DIY', '게임', '도구 다루기'],
    loveStyle: '행동으로 사랑을 표현해요. 말보다는 함께하는 활동을 통해 친밀감을 쌓아요. 개인 공간을 중요시하지만, 신뢰하는 사람에게는 깊은 유대감을 보여요.',
    behavioralScenarios: [
      { situation: '기계가 고장 나면', behavior: '분해해서 원인을 찾고 직접 고쳐요' },
      { situation: '위기 상황이 생기면', behavior: '침착하게 상황을 분석하고 대처해요' },
      { situation: '지루한 일을 해야 할 때', behavior: '더 효율적인 방법을 찾거나 피해요' }
    ]
  },
  ISFP: {
    type: 'ISFP',
    nickname: '온화한 예술가',
    description: '예술적 감각이 뛰어나고 온화한 성격이에요. 현재의 순간을 즐기고, 자신만의 방식으로 세상을 표현해요. 겸손하고 친절하며, 조화로운 것을 추구해요.',
    strengths: ['예술적 감각', '적응력', '친절함', '관찰력'],
    activities: ['그림 그리기', '음악 연주하기', '자연 탐험', '사진 찍기'],
    animal: '고양이',
    color: 'from-lime-500 to-green-600',
    animalImage: 'isfp_artistic_cat_mascot.png',
    careers: ['디자이너', '사진작가', '뮤지션', '요리사', '동물 관련 직업'],
    hobbies: ['그림', '음악', '사진', '자연 탐방', '동물 돌보기'],
    loveStyle: '조용하지만 깊은 사랑을 해요. 상대방을 있는 그대로 받아들이고, 작은 것들로 애정을 표현해요. 자유로운 관계를 원하지만, 깊은 감정적 연결을 추구해요.',
    behavioralScenarios: [
      { situation: '아름다운 풍경을 보면', behavior: '한참을 멈춰서 감상하거나 사진을 찍어요' },
      { situation: '갈등 상황이 생기면', behavior: '피하거나 조용히 물러나요' },
      { situation: '자신만의 시간이 필요하면', behavior: '예술 활동이나 자연 속에서 재충전해요' }
    ]
  },
  ESTP: {
    type: 'ESTP',
    nickname: '활동적인 모험가',
    description: '에너지가 넘치고 활동적인 사람이에요! 새로운 경험과 모험을 좋아하고, 순간의 즐거움을 추구해요. 문제 상황에서 빠르게 대처하고, 현실적인 해결책을 찾아요.',
    strengths: ['순발력', '대담함', '현실감각', '사교성'],
    activities: ['스포츠', '여행', '새로운 도전', '친구들과 놀기'],
    animal: '치타',
    color: 'from-red-500 to-rose-600',
    animalImage: 'estp_cheetah_adventurer_mascot.png',
    careers: ['영업', '운동선수', '기업가', '소방관', '이벤트 기획자'],
    hobbies: ['익스트림 스포츠', '파티', '여행', '도박', '새로운 도전'],
    loveStyle: '스릴 있는 연애를 좋아해요! 상대방과 함께 모험하고 새로운 경험을 공유하기를 원해요. 순간을 즐기며, 유쾌하고 재미있는 관계를 추구해요.',
    behavioralScenarios: [
      { situation: '새로운 도전 기회가 오면', behavior: '일단 해보고 결과는 나중에 생각해요' },
      { situation: '위기 상황이 생기면', behavior: '즉시 행동하며 현장에서 해결해요' },
      { situation: '계획을 세우라고 하면', behavior: '최소한만 세우고 유연하게 움직여요' }
    ]
  },
  ESFP: {
    type: 'ESFP',
    nickname: '즐거운 엔터테이너',
    description: '밝고 긍정적인 에너지로 주변을 즐겁게 해요! 사람들과 함께하는 것을 좋아하고, 현재의 순간을 최대한 즐기려고 해요. 자연스럽고 유쾌하며, 분위기를 띄우는 능력이 있어요.',
    strengths: ['사교성', '긍정적 에너지', '적응력', '표현력'],
    activities: ['공연하기', '파티 즐기기', '춤추기', '새로운 경험'],
    animal: '앵무새',
    color: 'from-fuchsia-500 to-pink-600',
    animalImage: 'esfp_parrot_entertainer_mascot.png',
    careers: ['배우', '가수', '이벤트 플래너', '영업', 'MC'],
    hobbies: ['춤', '노래', '파티', '쇼핑', '패션'],
    loveStyle: '연애를 즐겁게 해요! 상대방과 함께 웃고 즐기며, 매 순간을 특별하게 만들어요. 애정 표현을 아끼지 않고, 함께하는 시간을 소중히 여겨요.',
    behavioralScenarios: [
      { situation: '파티에 가면', behavior: '자연스럽게 분위기를 띄우고 사람들과 어울려요' },
      { situation: '슬픈 일이 생기면', behavior: '오래 슬퍼하지 않고 긍정적인 면을 찾아요' },
      { situation: '계획대로 안 되면', behavior: '유연하게 다른 재미있는 걸 찾아요' }
    ]
  }
};

export function getScenarioQuestions(ageGroup: AgeGroup): ScenarioQuestion[] {
  switch (ageGroup) {
    case 'elementary':
      return scenarioQuestionsElementary;
    case 'middle':
      return scenarioQuestionsMiddle;
    case 'high':
      return scenarioQuestionsHigh;
    case 'adult':
      return scenarioQuestionsAdult;
  }
}

export function getQuestions(ageGroup: AgeGroup): Question[] {
  const scenarios = getScenarioQuestions(ageGroup);
  return scenarios.map(s => ({
    id: s.id,
    text: s.scenario,
    optionA: s.optionA.text,
    optionB: s.optionB.text,
    optionC: s.optionC.text,
    dimension: s.dimension,
    scoring: s.scoring
  }));
}

export function calculateMBTIWithPercentage(answers: Record<number, Answer>, questions: Question[]): MBTIResult {
  const dimensionScores = { EI: 0, SN: 0, TF: 0, JP: 0 };
  const maxScores = { EI: 0, SN: 0, TF: 0, JP: 0 };
  
  questions.forEach((question) => {
    const answer = answers[question.id];
    if (!answer) return;
    
    const score = question.scoring[answer];
    dimensionScores[question.dimension] += score;
    maxScores[question.dimension] += 2;
  });

  const calculatePercentage = (score: number, max: number): number => {
    if (max === 0) return 50;
    const normalized = (score + max) / (2 * max);
    return Math.round(normalized * 100);
  };

  const eiPercent = calculatePercentage(dimensionScores.EI, maxScores.EI);
  const snPercent = calculatePercentage(dimensionScores.SN, maxScores.SN);
  const tfPercent = calculatePercentage(dimensionScores.TF, maxScores.TF);
  const jpPercent = calculatePercentage(dimensionScores.JP, maxScores.JP);

  const primaryE = eiPercent >= 50 ? 'E' : 'I';
  const primaryS = snPercent >= 50 ? 'S' : 'N';
  const primaryT = tfPercent >= 50 ? 'T' : 'F';
  const primaryJ = jpPercent >= 50 ? 'J' : 'P';
  
  const primaryType = `${primaryE}${primaryS}${primaryT}${primaryJ}`;

  const distances = [
    { dim: 'EI', dist: Math.abs(eiPercent - 50), letter: eiPercent >= 50 ? 'E' : 'I', opposite: eiPercent >= 50 ? 'I' : 'E' },
    { dim: 'SN', dist: Math.abs(snPercent - 50), letter: snPercent >= 50 ? 'S' : 'N', opposite: snPercent >= 50 ? 'N' : 'S' },
    { dim: 'TF', dist: Math.abs(tfPercent - 50), letter: tfPercent >= 50 ? 'T' : 'F', opposite: tfPercent >= 50 ? 'F' : 'T' },
    { dim: 'JP', dist: Math.abs(jpPercent - 50), letter: jpPercent >= 50 ? 'J' : 'P', opposite: jpPercent >= 50 ? 'P' : 'J' }
  ];

  distances.sort((a, b) => a.dist - b.dist);
  const closestDim = distances[0];

  let secondaryType = primaryType;
  if (closestDim.dim === 'EI') {
    secondaryType = `${closestDim.opposite}${primaryS}${primaryT}${primaryJ}`;
  } else if (closestDim.dim === 'SN') {
    secondaryType = `${primaryE}${closestDim.opposite}${primaryT}${primaryJ}`;
  } else if (closestDim.dim === 'TF') {
    secondaryType = `${primaryE}${primaryS}${closestDim.opposite}${primaryJ}`;
  } else {
    secondaryType = `${primaryE}${primaryS}${primaryT}${closestDim.opposite}`;
  }

  const primaryConfidence = 50 + (closestDim.dist > 0 ? closestDim.dist : 5);
  const secondaryConfidence = 100 - primaryConfidence;

  return {
    primaryType: mbtiTypes[primaryType] || mbtiTypes['INFP'],
    primaryPercentage: Math.min(95, Math.max(55, primaryConfidence)),
    secondaryType: mbtiTypes[secondaryType] || mbtiTypes['ENFP'],
    secondaryPercentage: Math.max(5, Math.min(45, secondaryConfidence)),
    dimensionScores: {
      EI: { score: dimensionScores.EI, percentage: eiPercent },
      SN: { score: dimensionScores.SN, percentage: snPercent },
      TF: { score: dimensionScores.TF, percentage: tfPercent },
      JP: { score: dimensionScores.JP, percentage: jpPercent }
    }
  };
}

export function calculateMBTI(answers: Record<number, Answer>, questions: Question[]): string {
  const result = calculateMBTIWithPercentage(answers, questions);
  return result.primaryType.type;
}

const dimensionInsights = {
  EI: {
    same: {
      E: {
        communication: '둘 다 활발하게 대화하고 생각을 바로 표현해요.',
        behavior: '함께 활동적으로 시간을 보내는 것을 좋아해요.',
        thinking: '외부 활동과 사람들과의 교류를 통해 에너지를 얻어요.'
      },
      I: {
        communication: '둘 다 조용하고 깊은 대화를 선호해요.',
        behavior: '함께 조용히 시간을 보내는 것을 편안하게 느껴요.',
        thinking: '혼자만의 시간과 내면의 생각을 중요시해요.'
      }
    },
    different: {
      parentE_childI: {
        communication: '엄마는 말로 표현하고 싶지만, 아이는 속으로 생각을 정리해요.',
        behavior: '엄마는 밖에서 함께하고 싶지만, 아이는 집에서 쉬고 싶어해요.',
        thinking: '엄마는 대화로 에너지를 얻지만, 아이는 혼자 있을 때 충전돼요.',
        parentGuidance: [
          '아이가 혼자 있는 시간을 존중해주세요',
          '대화를 강요하지 말고 아이의 페이스에 맞춰주세요',
          '조용한 환경에서 1:1로 대화하면 아이가 더 편하게 말해요',
          '아이가 생각을 정리할 시간을 주세요'
        ],
        childUnderstanding: [
          '엄마가 자꾸 말을 거는 건 너를 사랑해서야',
          '엄마는 대화하면서 기분이 좋아져',
          '엄마가 밖에 나가자고 하는 건 함께 시간을 보내고 싶어서야',
          '네가 조용히 있고 싶을 땐 엄마한테 말해도 괜찮아'
        ]
      },
      parentI_childE: {
        communication: '엄마는 조용히 듣고 싶지만, 아이는 신나게 이야기해요.',
        behavior: '엄마는 집에서 쉬고 싶지만, 아이는 밖에서 놀고 싶어해요.',
        thinking: '엄마는 혼자 생각할 때 편하지만, 아이는 사람들과 있을 때 행복해요.',
        parentGuidance: [
          '아이가 이야기할 때 적극적으로 들어주세요',
          '아이가 친구들과 어울릴 기회를 많이 만들어주세요',
          '아이의 에너지 넘치는 모습을 긍정적으로 받아들이세요',
          '가끔은 엄마도 아이와 함께 활동적으로 놀아주세요'
        ],
        childUnderstanding: [
          '엄마가 조용히 있고 싶을 때가 있어',
          '엄마가 집에 있고 싶어하는 건 피곤해서가 아니라 그게 편해서야',
          '엄마도 너랑 놀고 싶지만 방식이 다를 뿐이야',
          '엄마한테 조용히 옆에 있어주는 것도 사랑 표현이야'
        ]
      }
    }
  },
  SN: {
    same: {
      S: {
        communication: '둘 다 구체적이고 실제적인 이야기를 좋아해요.',
        behavior: '현실적이고 실용적인 방식으로 문제를 해결해요.',
        thinking: '지금 눈앞에 있는 것에 집중해요.'
      },
      N: {
        communication: '둘 다 상상력 풍부한 이야기를 좋아해요.',
        behavior: '새로운 가능성과 아이디어를 탐구하는 것을 좋아해요.',
        thinking: '미래와 가능성에 대해 생각하는 것을 즐겨요.'
      }
    },
    different: {
      parentS_childN: {
        communication: '엄마는 실제 일어난 일을 말하지만, 아이는 상상의 이야기를 해요.',
        behavior: '엄마는 현실적인 방법을 원하지만, 아이는 창의적인 방법을 시도해요.',
        thinking: '엄마는 지금 당장 해야 할 일에 집중하지만, 아이는 미래를 꿈꿔요.',
        parentGuidance: [
          '아이의 상상력과 창의성을 인정해주세요',
          '"그건 현실적이지 않아"라는 말 대신 "재미있는 생각이네"라고 해주세요',
          '아이가 꿈꾸는 것을 현실로 연결하는 방법을 함께 찾아보세요',
          '때로는 아이의 상상 세계에 함께 들어가보세요'
        ],
        childUnderstanding: [
          '엄마가 현실적인 이야기를 하는 건 너를 걱정해서야',
          '엄마는 지금 당장 필요한 것들을 잘 챙겨',
          '네 꿈을 이루려면 엄마처럼 현실적인 계획도 필요해',
          '엄마도 상상하는 건 어려울 수 있어'
        ]
      },
      parentN_childS: {
        communication: '엄마는 미래 이야기를 하지만, 아이는 지금 있는 것에 관심이 있어요.',
        behavior: '엄마는 새로운 것을 시도하고 싶지만, 아이는 익숙한 것을 좋아해요.',
        thinking: '엄마는 가능성을 보지만, 아이는 눈앞의 현실을 봐요.',
        parentGuidance: [
          '아이에게 구체적이고 단계별로 설명해주세요',
          '추상적인 개념보다 실제 예시를 들어주세요',
          '아이가 세부사항에 집중하는 것을 인정해주세요',
          '새로운 것을 시도할 때 충분한 시간을 주세요'
        ],
        childUnderstanding: [
          '엄마가 미래 이야기를 많이 하는 건 너의 가능성을 믿어서야',
          '엄마는 새로운 것을 상상하는 게 재미있어',
          '네가 꼼꼼하게 하나씩 하는 것도 정말 중요해',
          '엄마의 큰 그림과 네 꼼꼼함이 만나면 최고야'
        ]
      }
    }
  },
  TF: {
    same: {
      T: {
        communication: '둘 다 논리적이고 객관적으로 대화해요.',
        behavior: '문제가 생기면 감정보다 해결책을 먼저 찾아요.',
        thinking: '결정할 때 논리와 이유를 중요하게 생각해요.'
      },
      F: {
        communication: '둘 다 감정을 나누고 공감하는 것을 좋아해요.',
        behavior: '서로의 기분을 살피며 배려해요.',
        thinking: '결정할 때 관계와 감정을 중요하게 생각해요.'
      }
    },
    different: {
      parentT_childF: {
        communication: '엄마는 이성적으로 설명하지만, 아이는 감정을 먼저 느껴요.',
        behavior: '엄마는 해결책을 제시하지만, 아이는 위로를 원해요.',
        thinking: '엄마는 "왜"를 따지지만, 아이는 "기분이 어때"가 중요해요.',
        parentGuidance: [
          '아이가 속상할 때 해결책보다 먼저 공감해주세요',
          '"왜 그랬어?"보다 "많이 힘들었구나"라고 말해주세요',
          '아이의 감정을 인정하고 표현하게 해주세요',
          '비판보다 격려의 말을 먼저 해주세요'
        ],
        childUnderstanding: [
          '엄마가 이유를 묻는 건 너를 이해하고 싶어서야',
          '엄마가 해결책을 말하는 건 도와주고 싶어서야',
          '엄마도 너를 사랑하지만 표현 방식이 다를 뿐이야',
          '엄마한테 네 감정을 말로 설명해주면 더 잘 이해해'
        ]
      },
      parentF_childT: {
        communication: '엄마는 감정을 나누고 싶지만, 아이는 사실만 말해요.',
        behavior: '엄마는 기분을 살피지만, 아이는 논리적으로 행동해요.',
        thinking: '엄마는 관계가 중요하지만, 아이는 결과가 중요해요.',
        parentGuidance: [
          '아이의 논리적인 성향을 인정해주세요',
          '감정을 강요하지 말고 아이의 방식을 존중해주세요',
          '아이가 감정을 표현하지 않아도 괜찮다고 말해주세요',
          '논리적인 대화도 사랑의 표현임을 알아주세요'
        ],
        childUnderstanding: [
          '엄마가 기분을 자주 묻는 건 너를 걱정해서야',
          '엄마는 감정을 나누면서 가까워진다고 느껴',
          '가끔 엄마한테 "좋아" "괜찮아"라고 말해주면 기뻐해',
          '엄마의 걱정은 사랑의 다른 표현이야'
        ]
      }
    }
  },
  JP: {
    same: {
      J: {
        communication: '둘 다 계획적으로 일정을 정하고 지켜요.',
        behavior: '체계적이고 규칙적인 생활을 좋아해요.',
        thinking: '결정을 빨리 내리고 계획대로 실행하는 것을 선호해요.'
      },
      P: {
        communication: '둘 다 유연하게 상황에 맞춰요.',
        behavior: '자유롭고 즉흥적인 것을 좋아해요.',
        thinking: '여러 가능성을 열어두고 천천히 결정해요.'
      }
    },
    different: {
      parentJ_childP: {
        communication: '엄마는 계획을 세우자고 하지만, 아이는 그때그때 하고 싶어해요.',
        behavior: '엄마는 규칙을 따르지만, 아이는 자유롭게 하고 싶어해요.',
        thinking: '엄마는 미리 정해야 편하지만, 아이는 열어두는 게 좋아요.',
        parentGuidance: [
          '아이에게 너무 빡빡한 일정을 강요하지 마세요',
          '큰 틀만 정하고 세부사항은 유연하게 해주세요',
          '아이의 즉흥적인 행동도 장점이 될 수 있어요',
          '마감 시간만 정하고 방법은 아이에게 맡겨보세요'
        ],
        childUnderstanding: [
          '엄마가 계획을 세우는 건 일이 잘 되게 하려고 그래',
          '약속 시간을 지키는 건 서로를 존중하는 거야',
          '엄마는 예상치 못한 일이 생기면 불안해할 수 있어',
          '중요한 일은 미리 말해주면 엄마가 편해해'
        ]
      },
      parentP_childJ: {
        communication: '엄마는 유연하게 가자고 하지만, 아이는 계획이 필요해요.',
        behavior: '엄마는 즉흥적이지만, 아이는 정해진 대로 하고 싶어해요.',
        thinking: '엄마는 열어두고 싶지만, 아이는 빨리 정하고 싶어해요.',
        parentGuidance: [
          '아이가 계획을 세울 수 있도록 미리 정보를 주세요',
          '갑자기 일정을 바꾸면 아이가 불안해할 수 있어요',
          '아이의 규칙적인 생활 리듬을 존중해주세요',
          '변경이 있을 때는 미리 알려주세요'
        ],
        childUnderstanding: [
          '엄마가 갑자기 바꾸는 건 새로운 기회를 보기 때문이야',
          '엄마는 유연하게 하는 게 편해',
          '계획이 바뀌어도 괜찮을 때가 있어',
          '엄마한테 네가 계획이 필요하다고 말해도 돼'
        ]
      }
    }
  }
};

export const studyRecommendations: Record<string, StudyRecommendation> = {
  INTJ: {
    learningStyle: '혼자서 체계적으로 공부하는 것을 좋아해요',
    studyMethods: [
      '스스로 계획표를 세우고 체크하기',
      '전체 개념을 먼저 이해한 후 세부사항 공부하기',
      '왜 그런지 원리를 파악하며 공부하기',
      '조용한 공간에서 집중해서 공부하기'
    ],
    studyEnvironment: '조용하고 방해받지 않는 개인 공간',
    motivationTips: [
      '장기 목표를 세우고 달성하는 재미를 느끼게 해주세요',
      '스스로 공부 계획을 세울 수 있게 믿어주세요',
      '왜 배워야 하는지 논리적으로 설명해주세요'
    ],
    challengeAreas: [
      '그룹 활동이나 토론이 불편할 수 있어요',
      '완벽주의로 인해 스트레스 받을 수 있어요',
      '다른 사람의 방식을 받아들이기 어려울 수 있어요'
    ]
  },
  INTP: {
    learningStyle: '원리와 이론을 탐구하며 공부하는 것을 좋아해요',
    studyMethods: [
      '왜 그런지 깊이 파고들며 이해하기',
      '다양한 자료를 찾아보며 비교 분석하기',
      '개념 간의 연결고리 찾기',
      '혼자 생각할 시간 가지기'
    ],
    studyEnvironment: '자유롭게 탐구할 수 있는 조용한 공간',
    motivationTips: [
      '호기심을 자극하는 질문을 던져주세요',
      '정답보다 과정을 중요하게 여겨주세요',
      '스스로 발견하는 즐거움을 느끼게 해주세요'
    ],
    challengeAreas: [
      '반복 암기나 세부사항 기억이 지루할 수 있어요',
      '마감을 지키는 게 어려울 수 있어요',
      '실용적인 목적 없이는 동기가 떨어질 수 있어요'
    ]
  },
  ENTJ: {
    learningStyle: '목표를 세우고 효율적으로 달성하는 것을 좋아해요',
    studyMethods: [
      '명확한 목표와 일정 세우기',
      '중요한 것부터 우선순위 정하기',
      '스터디 그룹 이끌며 공부하기',
      '결과를 측정하고 개선하기'
    ],
    studyEnvironment: '체계적이고 목표 지향적인 환경',
    motivationTips: [
      '구체적인 목표와 보상을 정해주세요',
      '리더 역할을 맡겨 책임감을 느끼게 해주세요',
      '성취를 인정하고 다음 도전을 제시해주세요'
    ],
    challengeAreas: [
      '다른 사람의 페이스를 기다리기 어려울 수 있어요',
      '과정보다 결과에만 집중할 수 있어요',
      '지나친 경쟁심이 스트레스가 될 수 있어요'
    ]
  },
  ENTP: {
    learningStyle: '새로운 아이디어를 탐구하고 토론하는 것을 좋아해요',
    studyMethods: [
      '다양한 관점에서 생각해보기',
      '토론이나 디베이트로 공부하기',
      '여러 주제를 연결 지어 생각하기',
      '새로운 방법으로 문제 풀어보기'
    ],
    studyEnvironment: '자유롭게 토론하고 아이디어를 나눌 수 있는 환경',
    motivationTips: [
      '지루하지 않게 다양한 방법으로 공부하게 해주세요',
      '왜 그런지 질문하는 것을 격려해주세요',
      '새로운 도전과 변화를 주세요'
    ],
    challengeAreas: [
      '한 가지에 오래 집중하기 어려울 수 있어요',
      '세부사항이나 반복 작업을 싫어할 수 있어요',
      '시작은 잘하지만 끝맺기가 어려울 수 있어요'
    ]
  },
  INFJ: {
    learningStyle: '의미와 목적을 찾으며 깊이 있게 공부하는 것을 좋아해요',
    studyMethods: [
      '배우는 것의 의미를 생각하며 공부하기',
      '조용히 혼자 집중해서 공부하기',
      '전체적인 그림을 먼저 이해하기',
      '글로 정리하며 공부하기'
    ],
    studyEnvironment: '조용하고 평화로운 개인 공간',
    motivationTips: [
      '이것이 왜 중요한지 의미를 설명해주세요',
      '혼자 공부할 시간을 충분히 주세요',
      '창의적인 프로젝트를 할 수 있게 해주세요'
    ],
    challengeAreas: [
      '완벽주의로 인해 지칠 수 있어요',
      '시끄럽거나 혼란스러운 환경에서 집중이 어려워요',
      '비판에 민감하게 반응할 수 있어요'
    ]
  },
  INFP: {
    learningStyle: '자신만의 방식으로 창의적으로 공부하는 것을 좋아해요',
    studyMethods: [
      '관심 있는 주제부터 깊이 파고들기',
      '이야기나 비유로 이해하기',
      '감정과 연결 지어 기억하기',
      '자유롭게 상상하며 공부하기'
    ],
    studyEnvironment: '편안하고 아늑한 개인 공간',
    motivationTips: [
      '관심사와 연결 지어 공부하게 해주세요',
      '자신만의 방식을 존중해주세요',
      '압박보다는 격려와 지지를 해주세요'
    ],
    challengeAreas: [
      '관심 없는 과목은 동기 부여가 어려워요',
      '계획적으로 공부하기가 어려울 수 있어요',
      '비교당하거나 경쟁하는 것을 싫어해요'
    ]
  },
  ENFJ: {
    learningStyle: '함께 공부하고 가르치면서 배우는 것을 좋아해요',
    studyMethods: [
      '친구들과 스터디 그룹 만들기',
      '배운 것을 다른 사람에게 설명하기',
      '서로 도우며 공부하기',
      '토론하고 의견 나누기'
    ],
    studyEnvironment: '협력적이고 따뜻한 분위기의 그룹 환경',
    motivationTips: [
      '함께 공부할 친구를 만들어주세요',
      '가르치는 역할을 맡겨보세요',
      '노력을 인정하고 격려해주세요'
    ],
    challengeAreas: [
      '혼자 공부하는 것이 외로울 수 있어요',
      '다른 사람을 도우느라 자기 공부가 소홀해질 수 있어요',
      '인정받지 못하면 의욕이 떨어질 수 있어요'
    ]
  },
  ENFP: {
    learningStyle: '재미있고 새로운 방식으로 공부하는 것을 좋아해요',
    studyMethods: [
      '다양한 방법으로 공부 시도하기',
      '친구들과 함께 즐겁게 공부하기',
      '여러 주제를 연결 지어 생각하기',
      '게임이나 활동으로 배우기'
    ],
    studyEnvironment: '자유롭고 창의적인 분위기',
    motivationTips: [
      '지루하지 않게 다양한 활동을 섞어주세요',
      '공부의 재미와 의미를 찾게 도와주세요',
      '창의적인 방법을 시도할 수 있게 해주세요'
    ],
    challengeAreas: [
      '한 가지에 오래 집중하기 어려울 수 있어요',
      '세부사항을 놓칠 수 있어요',
      '계획대로 하는 것이 지루할 수 있어요'
    ]
  },
  ISTJ: {
    learningStyle: '체계적이고 차근차근 공부하는 것을 좋아해요',
    studyMethods: [
      '계획표 만들고 따라가기',
      '차근차근 단계별로 공부하기',
      '반복해서 암기하기',
      '문제집 풀면서 연습하기'
    ],
    studyEnvironment: '조용하고 정돈된 공간',
    motivationTips: [
      '명확한 계획과 일정을 세워주세요',
      '꾸준히 노력하는 것을 인정해주세요',
      '실용적인 이유를 설명해주세요'
    ],
    challengeAreas: [
      '갑자기 계획이 바뀌면 스트레스 받을 수 있어요',
      '새로운 방식을 시도하기 어려울 수 있어요',
      '창의적인 문제에 어려움을 느낄 수 있어요'
    ]
  },
  ISFJ: {
    learningStyle: '안정적인 환경에서 꾸준히 공부하는 것을 좋아해요',
    studyMethods: [
      '반복해서 꼼꼼히 공부하기',
      '선생님이나 부모님의 가르침 따르기',
      '정해진 방식대로 차근차근 하기',
      '조용히 혼자 또는 친한 친구와 공부하기'
    ],
    studyEnvironment: '익숙하고 편안한 공간',
    motivationTips: [
      '안정적인 환경을 만들어주세요',
      '칭찬과 격려를 많이 해주세요',
      '단계별로 천천히 진행해주세요'
    ],
    challengeAreas: [
      '새로운 환경이나 방식에 적응이 어려울 수 있어요',
      '비판에 민감하게 반응할 수 있어요',
      '자기 의견을 말하기 어려울 수 있어요'
    ]
  },
  ESTJ: {
    learningStyle: '목표를 정하고 체계적으로 달성하는 것을 좋아해요',
    studyMethods: [
      '명확한 목표와 계획 세우기',
      '시간표대로 규칙적으로 공부하기',
      '문제집 많이 풀면서 연습하기',
      '성과를 체크하며 공부하기'
    ],
    studyEnvironment: '질서 있고 체계적인 환경',
    motivationTips: [
      '구체적인 목표와 보상을 정해주세요',
      '책임감을 느낄 수 있는 역할을 주세요',
      '규칙적인 학습 루틴을 만들어주세요'
    ],
    challengeAreas: [
      '창의적이거나 열린 문제가 어려울 수 있어요',
      '다른 방식을 시도하기 어려울 수 있어요',
      '완벽하게 하려다 지칠 수 있어요'
    ]
  },
  ESFJ: {
    learningStyle: '함께 공부하고 인정받으며 배우는 것을 좋아해요',
    studyMethods: [
      '친구들과 스터디 그룹 만들기',
      '선생님의 칭찬을 받으며 공부하기',
      '배운 것을 친구에게 설명해주기',
      '규칙적으로 꾸준히 공부하기'
    ],
    studyEnvironment: '따뜻하고 협력적인 분위기',
    motivationTips: [
      '노력을 인정하고 칭찬해주세요',
      '함께 공부할 친구를 만들어주세요',
      '선생님이나 부모님의 기대를 알려주세요'
    ],
    challengeAreas: [
      '혼자 공부하는 것이 외로울 수 있어요',
      '비판에 민감하게 반응할 수 있어요',
      '남을 의식해서 스트레스 받을 수 있어요'
    ]
  },
  ISTP: {
    learningStyle: '직접 해보면서 배우는 것을 좋아해요',
    studyMethods: [
      '실험이나 실습으로 이해하기',
      '원리를 논리적으로 분석하기',
      '문제를 직접 풀어보며 배우기',
      '효율적인 방법 찾아서 공부하기'
    ],
    studyEnvironment: '자유롭게 실험하고 탐구할 수 있는 환경',
    motivationTips: [
      '직접 해볼 수 있는 기회를 주세요',
      '왜 그런지 원리를 설명해주세요',
      '자유롭게 탐구할 시간을 주세요'
    ],
    challengeAreas: [
      '이론만 배우는 것이 지루할 수 있어요',
      '장기 계획을 세우기 어려울 수 있어요',
      '반복적인 암기가 힘들 수 있어요'
    ]
  },
  ISFP: {
    learningStyle: '자신만의 페이스로 편안하게 공부하는 것을 좋아해요',
    studyMethods: [
      '예술적인 방법으로 정리하기',
      '관심 있는 주제부터 공부하기',
      '조용히 혼자 집중해서 하기',
      '자연스럽게 흥미 따라가기'
    ],
    studyEnvironment: '편안하고 압박 없는 공간',
    motivationTips: [
      '강요하지 말고 부드럽게 격려해주세요',
      '관심사와 연결해서 공부하게 해주세요',
      '창의적인 방법을 허용해주세요'
    ],
    challengeAreas: [
      '계획적으로 공부하기 어려울 수 있어요',
      '경쟁적인 환경이 스트레스가 될 수 있어요',
      '관심 없는 과목에 동기부여가 어려워요'
    ]
  },
  ESTP: {
    learningStyle: '활동적으로 직접 경험하며 배우는 것을 좋아해요',
    studyMethods: [
      '실제로 해보면서 배우기',
      '게임이나 경쟁으로 공부하기',
      '짧게 집중해서 공부하기',
      '실용적인 것부터 배우기'
    ],
    studyEnvironment: '활동적이고 자극이 있는 환경',
    motivationTips: [
      '지루하지 않게 다양한 활동을 섞어주세요',
      '경쟁이나 게임 요소를 넣어주세요',
      '즉각적인 보상과 피드백을 주세요'
    ],
    challengeAreas: [
      '오래 앉아서 공부하기 어려울 수 있어요',
      '이론적인 내용이 지루할 수 있어요',
      '장기 계획을 세우기 어려울 수 있어요'
    ]
  },
  ESFP: {
    learningStyle: '재미있게 사람들과 함께 배우는 것을 좋아해요',
    studyMethods: [
      '친구들과 재미있게 공부하기',
      '노래나 율동으로 암기하기',
      '게임이나 활동으로 배우기',
      '짧게 여러 번 나눠서 공부하기'
    ],
    studyEnvironment: '밝고 즐거운 분위기',
    motivationTips: [
      '재미있는 방법으로 공부하게 해주세요',
      '친구들과 함께할 수 있게 해주세요',
      '즉각적인 칭찬과 인정을 해주세요'
    ],
    challengeAreas: [
      '지루한 내용에 집중하기 어려워요',
      '혼자 오래 공부하기 힘들어요',
      '계획대로 하는 것이 어려울 수 있어요'
    ]
  }
};

export function getDimensionDifferences(parentType: string, childType: string): DimensionDifference[] {
  const dimensions: Array<{ dim: 'EI' | 'SN' | 'TF' | 'JP'; index: number }> = [
    { dim: 'EI', index: 0 },
    { dim: 'SN', index: 1 },
    { dim: 'TF', index: 2 },
    { dim: 'JP', index: 3 }
  ];

  const traitNames: Record<string, string> = {
    'E': '외향형', 'I': '내향형',
    'S': '감각형', 'N': '직관형',
    'T': '사고형', 'F': '감정형',
    'J': '판단형', 'P': '인식형'
  };

  return dimensions.map(({ dim, index }) => ({
    dimension: dim,
    parentTrait: traitNames[parentType[index]] || parentType[index],
    childTrait: traitNames[childType[index]] || childType[index],
    isSame: parentType[index] === childType[index]
  }));
}

export function getRelationshipInsight(parentType: string, childType: string): RelationshipInsight {
  const differences = getDimensionDifferences(parentType, childType);
  
  let communicationParts: string[] = [];
  let behaviorParts: string[] = [];
  let thinkingParts: string[] = [];
  let parentGuidance: string[] = [];
  let childUnderstanding: string[] = [];

  differences.forEach(diff => {
    const dimData = dimensionInsights[diff.dimension];
    const parentLetter = parentType[['EI', 'SN', 'TF', 'JP'].indexOf(diff.dimension)];
    const childLetter = childType[['EI', 'SN', 'TF', 'JP'].indexOf(diff.dimension)];

    if (diff.isSame) {
      const sameData = dimData.same[parentLetter as keyof typeof dimData.same];
      if (sameData) {
        communicationParts.push(sameData.communication);
        behaviorParts.push(sameData.behavior);
        thinkingParts.push(sameData.thinking);
      }
    } else {
      const diffKey = `parent${parentLetter}_child${childLetter}` as keyof typeof dimData.different;
      const diffData = dimData.different[diffKey];
      if (diffData) {
        communicationParts.push(diffData.communication);
        behaviorParts.push(diffData.behavior);
        thinkingParts.push(diffData.thinking);
        parentGuidance.push(...diffData.parentGuidance);
        childUnderstanding.push(...diffData.childUnderstanding);
      }
    }
  });

  if (parentGuidance.length === 0) {
    parentGuidance = [
      '아이와 비슷한 성향이라 자연스럽게 소통할 수 있어요',
      '서로를 이해하기 쉬워서 편안한 관계를 유지할 수 있어요',
      '같은 방식으로 생각하고 행동해서 갈등이 적어요'
    ];
  }

  if (childUnderstanding.length === 0) {
    childUnderstanding = [
      '엄마랑 너는 비슷하게 생각하고 행동해',
      '엄마가 하는 말이 이해가 잘 될 거야',
      '서로 편하게 이야기할 수 있어'
    ];
  }

  return {
    communicationDifference: communicationParts.join(' '),
    behaviorDifference: behaviorParts.join(' '),
    thinkingDifference: thinkingParts.join(' '),
    parentGuidance: parentGuidance.slice(0, 6),
    childUnderstanding: childUnderstanding.slice(0, 6)
  };
}

export function getStudyRecommendation(mbtiType: string): StudyRecommendation {
  return studyRecommendations[mbtiType] || studyRecommendations['INFP'];
}

export const animalNames: Record<string, string> = {
  INTJ: '올빼미',
  INTP: '너구리',
  ENTJ: '사자',
  ENTP: '여우',
  INFJ: '늑대',
  INFP: '유니콘',
  ENFJ: '돌고래',
  ENFP: '수달',
  ISTJ: '거북이',
  ISFJ: '토끼',
  ESTJ: '독수리',
  ESFJ: '강아지',
  ISTP: '표범',
  ISFP: '고양이',
  ESTP: '치타',
  ESFP: '앵무새'
};

const traitLabels: Record<string, string> = {
  E: '외향적인', I: '내향적인',
  S: '현실적인', N: '직관적인',
  T: '논리적인', F: '감성적인',
  J: '계획적인', P: '자유로운'
};

function getKoreanParticle(word: string, particleType: 'wa' | 'i' | 'eul'): string {
  const lastChar = word.charCodeAt(word.length - 1);
  const hasJongseong = (lastChar - 0xAC00) % 28 !== 0;
  
  switch (particleType) {
    case 'wa':
      return hasJongseong ? '과' : '와';
    case 'i':
      return hasJongseong ? '이' : '가';
    case 'eul':
      return hasJongseong ? '을' : '를';
    default:
      return '';
  }
}

function getHybridAnimalName(animal1: string, animal2: string): string {
  if (animal1 === animal2) return animal1;
  
  const hybridNames: Record<string, string> = {
    '강아지_고양이': '개냥이',
    '고양이_강아지': '냥멍이',
    '사자_여우': '사여우',
    '여우_사자': '여자왕',
    '올빼미_너구리': '올너구리',
    '너구리_올빼미': '너빼미',
    '늑대_강아지': '늑멍이',
    '강아지_늑대': '멍늑이',
    '토끼_고양이': '토냥이',
    '고양이_토끼': '냥토끼',
    '독수리_사자': '독사왕',
    '사자_독수리': '사독이',
    '돌고래_수달': '돌수달',
    '수달_돌고래': '수돌이',
    '표범_치타': '표치타',
    '치타_표범': '치표범',
    '거북이_토끼': '거토끼',
    '토끼_거북이': '토거북',
    '유니콘_수달': '유수달',
    '수달_유니콘': '수유니',
    '앵무새_수달': '앵수달',
    '수달_앵무새': '수앵이',
    '늑대_올빼미': '늑빼미',
    '올빼미_늑대': '올늑이',
    '여우_고양이': '여냥이',
    '고양이_여우': '냥우이',
    '강아지_토끼': '강토끼',
    '토끼_강아지': '토멍이',
    '사자_늑대': '사늑이',
    '늑대_사자': '늑사왕',
    '독수리_올빼미': '독빼미',
    '올빼미_독수리': '올독이',
    '치타_강아지': '치멍이',
    '강아지_치타': '멍치타',
    '돌고래_강아지': '돌멍이',
    '강아지_돌고래': '멍고래',
    '앵무새_강아지': '앵멍이',
    '강아지_앵무새': '멍무새',
    '강아지_독수리': '멍독이',
    '독수리_강아지': '독멍이',
    '표범_고양이': '표냥이',
    '고양이_표범': '냥표범',
    '거북이_올빼미': '거빼미',
    '올빼미_거북이': '올거북',
    '사자_올빼미': '사올이',
    '올빼미_사자': '올사자',
    '수달_강아지': '수멍이',
    '강아지_수달': '멍수달',
    '너구리_여우': '너여우',
    '여우_너구리': '여너구리',
    '거북이_늑대': '거늑이',
    '늑대_거북이': '늑거북'
  };
  
  const key = `${animal1}_${animal2}`;
  if (hybridNames[key]) return hybridNames[key];
  
  const firstPart = animal1.slice(0, Math.ceil(animal1.length / 2));
  const secondPart = animal2.slice(Math.floor(animal2.length / 2));
  return firstPart + secondPart;
}

export const animalPersonalities: { animal: string; mbti: string; description: string }[] = [
  { animal: '올빼미', mbti: 'INTJ', description: '혼자서 깊이 생각하고, 전략적으로 목표를 달성해요' },
  { animal: '너구리', mbti: 'INTP', description: '끝없는 호기심으로 새로운 것을 탐구하고 분석해요' },
  { animal: '사자', mbti: 'ENTJ', description: '리더십이 강하고 목표를 향해 당당하게 나아가요' },
  { animal: '여우', mbti: 'ENTP', description: '재치있고 창의적이며, 새로운 아이디어로 가득해요' },
  { animal: '늑대', mbti: 'INFJ', description: '신비롭고 깊은 통찰력을 가진 이상주의자예요' },
  { animal: '유니콘', mbti: 'INFP', description: '상상력이 풍부하고 자신만의 세계를 가진 몽상가예요' },
  { animal: '돌고래', mbti: 'ENFJ', description: '따뜻하고 친절하며, 다른 사람을 돕는 것을 좋아해요' },
  { animal: '수달', mbti: 'ENFP', description: '활발하고 사교적이며, 놀기를 좋아하는 에너자이저예요' },
  { animal: '거북이', mbti: 'ISTJ', description: '꾸준하고 신뢰할 수 있으며, 맡은 일을 끝까지 해내요' },
  { animal: '토끼', mbti: 'ISFJ', description: '부드럽고 다정하며, 주변 사람들을 세심하게 챙겨요' },
  { animal: '독수리', mbti: 'ESTJ', description: '책임감이 강하고 체계적으로 일을 처리해요' },
  { animal: '강아지', mbti: 'ESFJ', description: '사교적이고 친근하며, 모두와 어울리기를 좋아해요' },
  { animal: '표범', mbti: 'ISTP', description: '독립적이고 손재주가 뛰어나며, 문제를 바로 해결해요' },
  { animal: '고양이', mbti: 'ISFP', description: '예술적 감각이 뛰어나고 자유로운 영혼을 가졌어요' },
  { animal: '치타', mbti: 'ESTP', description: '모험을 즐기고 행동력이 넘치는 활동가예요' },
  { animal: '앵무새', mbti: 'ESFP', description: '밝고 에너지 넘치며, 주변을 즐겁게 만들어요' },
];

const animalDescriptions: Record<string, string> = {
  '올빼미': '혼자서 깊이 생각하는 것을 좋아하고, 전략적으로 목표를 달성하는',
  '너구리': '끝없는 호기심으로 새로운 것을 탐구하고 분석하는',
  '사자': '리더십이 강하고 목표를 향해 당당하게 나아가는',
  '여우': '재치있고 창의적이며, 새로운 아이디어로 가득한',
  '늑대': '신비롭고 깊은 통찰력을 가진 이상주의자',
  '유니콘': '상상력이 풍부하고 자신만의 세계를 가진 몽상가',
  '돌고래': '따뜻하고 친절하며, 다른 사람을 돕는 것을 좋아하는',
  '수달': '활발하고 사교적이며, 놀기를 좋아하는 에너자이저',
  '거북이': '꾸준하고 신뢰할 수 있으며, 맡은 일을 끝까지 해내는',
  '토끼': '부드럽고 다정하며, 주변 사람들을 세심하게 챙기는',
  '독수리': '책임감이 강하고 체계적으로 일을 처리하는',
  '강아지': '사교적이고 친근하며, 모두와 어울리기를 좋아하는',
  '표범': '독립적이고 손재주가 뛰어나며, 문제를 바로 해결하는',
  '고양이': '예술적 감각이 뛰어나고 자유로운 영혼을 가진',
  '치타': '모험을 즐기고 행동력이 넘치는 활동가',
  '앵무새': '밝고 에너지 넘치며, 주변을 즐겁게 만드는'
};

function getBlendDescription(dimensions: HybridDimension[], primaryAnimal: string, secondaryAnimal: string, primaryType?: MBTIType, secondaryPercentage?: number): string {
  const balancedDims = dimensions.filter(d => d.isBalanced);
  const primaryParticleWa = getKoreanParticle(primaryAnimal, 'wa');
  const secondaryParticleI = getKoreanParticle(secondaryAnimal, 'i');
  
  const hasSignificantSecondary = secondaryPercentage !== undefined && secondaryPercentage >= 25;
  
  if (balancedDims.length === 0 && !hasSignificantSecondary) {
    const animalDesc = animalDescriptions[primaryAnimal] || '독특한 매력을 가진';
    return `${animalDesc} ${primaryAnimal} 성향이에요. ${primaryType?.description || '자신만의 방식으로 세상을 바라보며 특별한 매력을 가지고 있어요.'}`;
  }
  
  if (balancedDims.length === 0 && hasSignificantSecondary) {
    const primaryDesc = animalDescriptions[primaryAnimal] || '독특한 매력을 가진';
    const secondaryDesc = animalDescriptions[secondaryAnimal] || '특별한';
    return `${primaryDesc} ${primaryAnimal} 성향이 주를 이루지만, ${secondaryDesc} ${secondaryAnimal}의 특성도 함께 가지고 있어요. 두 가지 성향이 조화를 이루며 상황에 따라 다양한 모습을 보여줘요.`;
  }
  
  const traits = balancedDims.map(d => {
    const primary = traitLabels[d.primaryTrait];
    const secondary = traitLabels[d.secondaryTrait];
    return `${primary} 면${primaryParticleWa} ${secondary} 면`;
  });
  
  if (balancedDims.length === 1) {
    return `${primaryAnimal}의 특성이 강하지만, ${traits[0]}도 함께 가지고 있어서 ${secondaryAnimal}의 매력도 있어요.`;
  }
  
  if (balancedDims.length >= 2) {
    return `${primaryAnimal}${primaryParticleWa} ${secondaryAnimal}${secondaryParticleI} 조화롭게 섞인 특별한 성격이에요. ${traits.slice(0, 2).join(', ')}을 모두 가지고 있어서 상황에 따라 다양하게 행동해요.`;
  }
  
  return `${primaryAnimal}의 기본 성향에 ${secondaryAnimal}의 특성이 살짝 섞여있어요.`;
}

export function getHybridPersonality(result: MBTIResult): HybridPersonality {
  const { primaryType, secondaryType, dimensionScores } = result;
  
  const primaryAnimal = animalNames[primaryType.type] || '동물';
  const secondaryAnimal = animalNames[secondaryType.type] || '동물';
  
  const dimensions: HybridDimension[] = [
    {
      dimension: 'EI',
      primaryTrait: dimensionScores.EI.percentage < 50 ? 'E' : 'I',
      secondaryTrait: dimensionScores.EI.percentage < 50 ? 'I' : 'E',
      primaryPercentage: dimensionScores.EI.percentage < 50 
        ? 100 - dimensionScores.EI.percentage 
        : dimensionScores.EI.percentage,
      isBalanced: dimensionScores.EI.percentage >= 40 && dimensionScores.EI.percentage <= 60
    },
    {
      dimension: 'SN',
      primaryTrait: dimensionScores.SN.percentage < 50 ? 'S' : 'N',
      secondaryTrait: dimensionScores.SN.percentage < 50 ? 'N' : 'S',
      primaryPercentage: dimensionScores.SN.percentage < 50 
        ? 100 - dimensionScores.SN.percentage 
        : dimensionScores.SN.percentage,
      isBalanced: dimensionScores.SN.percentage >= 40 && dimensionScores.SN.percentage <= 60
    },
    {
      dimension: 'TF',
      primaryTrait: dimensionScores.TF.percentage < 50 ? 'T' : 'F',
      secondaryTrait: dimensionScores.TF.percentage < 50 ? 'F' : 'T',
      primaryPercentage: dimensionScores.TF.percentage < 50 
        ? 100 - dimensionScores.TF.percentage 
        : dimensionScores.TF.percentage,
      isBalanced: dimensionScores.TF.percentage >= 40 && dimensionScores.TF.percentage <= 60
    },
    {
      dimension: 'JP',
      primaryTrait: dimensionScores.JP.percentage < 50 ? 'J' : 'P',
      secondaryTrait: dimensionScores.JP.percentage < 50 ? 'P' : 'J',
      primaryPercentage: dimensionScores.JP.percentage < 50 
        ? 100 - dimensionScores.JP.percentage 
        : dimensionScores.JP.percentage,
      isBalanced: dimensionScores.JP.percentage >= 40 && dimensionScores.JP.percentage <= 60
    }
  ];
  
  const balancedCount = dimensions.filter(d => d.isBalanced).length;
  
  const avgPrimaryPercentage = dimensions.reduce((sum, d) => sum + d.primaryPercentage, 0) / 4;
  const blendPercentage = 100 - avgPrimaryPercentage;
  
  const secondaryTypeSignificant = result.secondaryPercentage >= 25;
  
  let blendLevel: 'pure' | 'slight' | 'balanced';
  if (balancedCount === 0 && !secondaryTypeSignificant) {
    blendLevel = 'pure';
  } else if (balancedCount <= 2 || secondaryTypeSignificant) {
    blendLevel = 'slight';
  } else {
    blendLevel = 'balanced';
  }
  
  const showHybrid = blendLevel !== 'pure' || secondaryTypeSignificant;
  const hybridAnimalName = showHybrid
    ? getHybridAnimalName(primaryAnimal, secondaryAnimal)
    : primaryAnimal;
  
  const blendDescription = getBlendDescription(dimensions, primaryAnimal, secondaryAnimal, primaryType, result.secondaryPercentage);
  
  return {
    primaryType: primaryType.type,
    secondaryType: secondaryType.type,
    primaryAnimal,
    secondaryAnimal,
    blendLevel,
    blendPercentage: Math.round(blendPercentage),
    dimensions,
    blendDescription,
    hybridAnimalName
  };
}

export interface DimensionSimilarity {
  dimension: 'EI' | 'SN' | 'TF' | 'JP';
  dimensionName: string;
  parentPct: number;
  childPct: number;
  similarityPct: number;
}

export function getComplexComparisonAnalysis(
  parentResult: MBTIResult, 
  childResult: MBTIResult
): {
  overallCompatibility: string;
  overallCompatibilityScore: number;
  dimensionSimilarities: DimensionSimilarity[];
  strengthsTogether: string[];
  potentialChallenges: string[];
  communicationTips: string[];
  parentHybrid: HybridPersonality;
  childHybrid: HybridPersonality;
} {
  const parentHybrid = getHybridPersonality(parentResult);
  const childHybrid = getHybridPersonality(childResult);
  
  const dimensionNames: Record<string, string> = {
    EI: '에너지 방향',
    SN: '인식 방식',
    TF: '판단 방식',
    JP: '생활 방식'
  };
  
  const dimensionSimilarities: DimensionSimilarity[] = [
    {
      dimension: 'EI',
      dimensionName: dimensionNames.EI,
      parentPct: parentResult.dimensionScores.EI.percentage,
      childPct: childResult.dimensionScores.EI.percentage,
      similarityPct: 100 - Math.abs(parentResult.dimensionScores.EI.percentage - childResult.dimensionScores.EI.percentage)
    },
    {
      dimension: 'SN',
      dimensionName: dimensionNames.SN,
      parentPct: parentResult.dimensionScores.SN.percentage,
      childPct: childResult.dimensionScores.SN.percentage,
      similarityPct: 100 - Math.abs(parentResult.dimensionScores.SN.percentage - childResult.dimensionScores.SN.percentage)
    },
    {
      dimension: 'TF',
      dimensionName: dimensionNames.TF,
      parentPct: parentResult.dimensionScores.TF.percentage,
      childPct: childResult.dimensionScores.TF.percentage,
      similarityPct: 100 - Math.abs(parentResult.dimensionScores.TF.percentage - childResult.dimensionScores.TF.percentage)
    },
    {
      dimension: 'JP',
      dimensionName: dimensionNames.JP,
      parentPct: parentResult.dimensionScores.JP.percentage,
      childPct: childResult.dimensionScores.JP.percentage,
      similarityPct: 100 - Math.abs(parentResult.dimensionScores.JP.percentage - childResult.dimensionScores.JP.percentage)
    }
  ];
  
  const overallCompatibilityScore = Math.round(
    dimensionSimilarities.reduce((sum, d) => sum + d.similarityPct, 0) / 4
  );
  
  const dimensionMatches: { dim: string; parentPct: number; childPct: number; similar: boolean }[] = [
    {
      dim: 'EI',
      parentPct: parentResult.dimensionScores.EI.percentage,
      childPct: childResult.dimensionScores.EI.percentage,
      similar: Math.abs(parentResult.dimensionScores.EI.percentage - childResult.dimensionScores.EI.percentage) < 25
    },
    {
      dim: 'SN',
      parentPct: parentResult.dimensionScores.SN.percentage,
      childPct: childResult.dimensionScores.SN.percentage,
      similar: Math.abs(parentResult.dimensionScores.SN.percentage - childResult.dimensionScores.SN.percentage) < 25
    },
    {
      dim: 'TF',
      parentPct: parentResult.dimensionScores.TF.percentage,
      childPct: childResult.dimensionScores.TF.percentage,
      similar: Math.abs(parentResult.dimensionScores.TF.percentage - childResult.dimensionScores.TF.percentage) < 25
    },
    {
      dim: 'JP',
      parentPct: parentResult.dimensionScores.JP.percentage,
      childPct: childResult.dimensionScores.JP.percentage,
      similar: Math.abs(parentResult.dimensionScores.JP.percentage - childResult.dimensionScores.JP.percentage) < 25
    }
  ];
  
  const similarCount = dimensionMatches.filter(m => m.similar).length;
  
  let overallCompatibility: string;
  if (similarCount >= 3) {
    overallCompatibility = `${parentHybrid.hybridAnimalName}와 ${childHybrid.hybridAnimalName}는 비슷한 파장으로 소통해요! 서로의 마음을 자연스럽게 이해하고, 편안하게 대화할 수 있어요.`;
  } else if (similarCount >= 2) {
    overallCompatibility = `${parentHybrid.hybridAnimalName}와 ${childHybrid.hybridAnimalName}는 공통점도 있고 차이점도 있어요. 서로 다른 점이 오히려 서로를 보완해주는 좋은 팀이 될 수 있어요.`;
  } else {
    overallCompatibility = `${parentHybrid.hybridAnimalName}와 ${childHybrid.hybridAnimalName}는 서로 다른 스타일이에요. 하지만 그래서 더 다양한 관점으로 세상을 볼 수 있고, 서로에게 배울 점이 많아요!`;
  }
  
  const strengthsTogether: string[] = [];
  const potentialChallenges: string[] = [];
  const communicationTips: string[] = [];
  
  if (dimensionMatches[0].similar) {
    strengthsTogether.push('에너지 충전 방식이 비슷해서 함께 있어도 편안해요');
  } else {
    potentialChallenges.push('혼자만의 시간 vs 함께하는 시간에 대한 기대가 다를 수 있어요');
    if (parentResult.dimensionScores.EI.percentage > 50 && childResult.dimensionScores.EI.percentage < 50) {
      communicationTips.push('내향적인 부모님은 아이가 친구들과 놀고 싶어하는 마음을 이해해주세요');
    } else if (parentResult.dimensionScores.EI.percentage < 50 && childResult.dimensionScores.EI.percentage > 50) {
      communicationTips.push('외향적인 부모님은 아이에게 혼자만의 시간도 필요하다는 것을 기억해주세요');
    }
  }
  
  if (dimensionMatches[1].similar) {
    strengthsTogether.push('세상을 바라보는 방식이 비슷해서 대화가 잘 통해요');
  } else {
    potentialChallenges.push('현실적 접근 vs 상상력 위주의 접근에서 의견이 다를 수 있어요');
    if (parentResult.dimensionScores.SN.percentage < 50 && childResult.dimensionScores.SN.percentage > 50) {
      communicationTips.push('현실적인 부모님은 아이의 상상력과 창의성을 존중해주세요');
    } else if (parentResult.dimensionScores.SN.percentage > 50 && childResult.dimensionScores.SN.percentage < 50) {
      communicationTips.push('직관적인 부모님은 아이가 구체적인 설명을 원할 때 차근차근 알려주세요');
    }
  }
  
  if (dimensionMatches[2].similar) {
    strengthsTogether.push('결정을 내리는 방식이 비슷해서 갈등이 적어요');
  } else {
    potentialChallenges.push('논리 vs 감정 중심의 판단에서 오해가 생길 수 있어요');
    if (parentResult.dimensionScores.TF.percentage < 50 && childResult.dimensionScores.TF.percentage > 50) {
      communicationTips.push('논리적인 부모님은 아이의 감정을 먼저 공감해준 후에 해결책을 제시해주세요');
    } else if (parentResult.dimensionScores.TF.percentage > 50 && childResult.dimensionScores.TF.percentage < 50) {
      communicationTips.push('감성적인 부모님은 아이가 논리적으로 생각하는 것을 "차갑다"고 오해하지 마세요');
    }
  }
  
  if (dimensionMatches[3].similar) {
    strengthsTogether.push('생활 방식과 계획에 대한 생각이 비슷해요');
  } else {
    potentialChallenges.push('계획 vs 유연함에 대한 선호가 달라서 일상에서 부딪힐 수 있어요');
    if (parentResult.dimensionScores.JP.percentage < 50 && childResult.dimensionScores.JP.percentage > 50) {
      communicationTips.push('계획적인 부모님은 아이에게 융통성 있는 여유 시간도 허용해주세요');
    } else if (parentResult.dimensionScores.JP.percentage > 50 && childResult.dimensionScores.JP.percentage < 50) {
      communicationTips.push('자유로운 부모님은 아이가 규칙과 계획을 원할 때 도와주세요');
    }
  }
  
  if (strengthsTogether.length < 2) {
    strengthsTogether.push('서로 다른 관점으로 문제를 해결할 수 있어요');
    strengthsTogether.push('다양한 경험과 생각을 나눌 수 있어요');
  }
  
  if (communicationTips.length < 2) {
    communicationTips.push('서로의 차이를 인정하고 존중해주세요');
    communicationTips.push('규칙적으로 대화 시간을 가져보세요');
  }
  
  return {
    overallCompatibility,
    overallCompatibilityScore,
    dimensionSimilarities,
    strengthsTogether,
    potentialChallenges,
    communicationTips,
    parentHybrid,
    childHybrid
  };
}

export const mbtiAgeNarratives: Record<string, AgeNarratives> = {
  ESFJ: {
    elementary: {
      overview: "친구들과 함께 있는 것을 좋아하고, 다른 사람들을 돕는 것을 즐거워해요. 규칙을 잘 지키고, 착하다는 말을 자주 들어요.",
      keyTraits: ["친구들과 잘 어울려요", "다른 사람 도와주는 걸 좋아해요", "규칙을 잘 지켜요", "칭찬받으면 더 열심히 해요"],
      scenarios: [
        { situation: "새 친구가 반에 오면", behavior: "먼저 다가가서 인사하고 같이 놀자고 해요" },
        { situation: "친구가 슬퍼보이면", behavior: "무슨 일인지 물어보고 위로해줘요" },
        { situation: "선생님이 도움을 요청하면", behavior: "신나게 손들고 도와드려요" }
      ]
    },
    middle: {
      overview: "주변 사람들의 기분을 잘 살피고, 모두가 잘 지내도록 노력해요. 책임감이 강하고 약속을 잘 지켜서 친구들에게 신뢰받아요.",
      keyTraits: ["리더십이 있어요", "친구 관계를 중요하게 생각해요", "다른 사람의 기분을 잘 읽어요", "책임감이 강해요"],
      scenarios: [
        { situation: "모둠 활동을 할 때", behavior: "분위기를 이끌고 역할을 나눠요" },
        { situation: "친구들 사이에 갈등이 생기면", behavior: "중재하고 화해시키려고 노력해요" },
        { situation: "약속한 일이 있으면", behavior: "무슨 일이 있어도 꼭 지키려고 해요" }
      ]
    },
    high: {
      overview: "사회적 관계를 중요시하고, 조화로운 환경을 만들기 위해 노력해요. 다른 사람들의 필요를 잘 파악하고 도움을 주는 것에서 보람을 느껴요.",
      keyTraits: ["대인관계 능력이 뛰어나요", "조직적이고 계획적이에요", "타인의 감정에 민감해요", "전통과 규칙을 존중해요"],
      scenarios: [
        { situation: "동아리 활동에서", behavior: "행사를 기획하고 사람들을 모아요" },
        { situation: "친구가 진로 고민을 하면", behavior: "경험을 나누고 함께 해결책을 찾아요" },
        { situation: "그룹 프로젝트에서", behavior: "팀원들의 의견을 조율하고 일정을 관리해요" }
      ]
    },
    adult: {
      overview: "타인을 돕고 조화로운 관계를 유지하는 것이 삶의 중요한 가치예요. 책임감 있고 신뢰할 수 있는 사람으로 주변에서 의지해요.",
      keyTraits: ["헌신적이에요", "조직력이 뛰어나요", "공감 능력이 높아요", "실용적이에요"],
      scenarios: [
        { situation: "가족 모임에서", behavior: "모든 사람이 편하게 지낼 수 있도록 세심하게 챙겨요" },
        { situation: "직장에서 갈등이 생기면", behavior: "중재자 역할을 하며 분위기를 풀어요" },
        { situation: "친구가 어려움에 처하면", behavior: "실질적인 도움과 정서적 지지를 함께 제공해요" }
      ]
    }
  },
  ESFP: {
    elementary: {
      overview: "밝고 활발해서 친구들 사이에서 인기가 많아요. 재미있는 것을 좋아하고, 지금 이 순간을 즐기는 것이 중요해요.",
      keyTraits: ["밝고 활발해요", "친구들과 노는 걸 좋아해요", "재미있는 것을 찾아다녀요", "표현력이 풍부해요"],
      scenarios: [
        { situation: "쉬는 시간에", behavior: "친구들과 신나게 뛰어놀아요" },
        { situation: "발표 시간에", behavior: "당당하게 나가서 재미있게 발표해요" },
        { situation: "새로운 활동이 있으면", behavior: "먼저 해보겠다고 손들어요" }
      ]
    },
    middle: {
      overview: "유쾌하고 사교적이어서 어디서든 분위기 메이커 역할을 해요. 현재를 즐기고, 다양한 경험을 하고 싶어해요.",
      keyTraits: ["사교성이 뛰어나요", "분위기를 띄워요", "즉흥적이에요", "에너지가 넘쳐요"],
      scenarios: [
        { situation: "친구들 모임에서", behavior: "자연스럽게 분위기를 이끌고 웃음을 만들어요" },
        { situation: "공부가 지루할 때", behavior: "재미있는 방법을 찾거나 잠시 쉬어요" },
        { situation: "새로운 사람을 만나면", behavior: "금방 친해지고 말을 트요" }
      ]
    },
    high: {
      overview: "사람들과 함께하는 것에서 에너지를 얻고, 다양한 경험을 통해 성장해요. 현실적이면서도 낙관적인 태도로 생활해요.",
      keyTraits: ["활동적이에요", "적응력이 뛰어나요", "긍정적이에요", "감각적이에요"],
      scenarios: [
        { situation: "학교 축제에서", behavior: "행사에 적극 참여하고 무대에도 서요" },
        { situation: "스트레스를 받으면", behavior: "친구들과 놀거나 운동으로 풀어요" },
        { situation: "진로를 고민할 때", behavior: "다양한 경험을 해보며 맞는 걸 찾아요" }
      ]
    },
    adult: {
      overview: "삶을 즐기고 사람들과의 관계에서 행복을 찾아요. 현실적이고 적응력이 좋아서 어디서든 잘 어울려요.",
      keyTraits: ["유연해요", "낙관적이에요", "실용적이에요", "친화력이 높아요"],
      scenarios: [
        { situation: "새 직장에 적응할 때", behavior: "빠르게 사람들과 친해지고 적응해요" },
        { situation: "주말에", behavior: "활동적인 취미나 모임을 즐겨요" },
        { situation: "어려운 상황에서", behavior: "긍정적인 면을 찾고 유연하게 대처해요" }
      ]
    }
  },
  ENFJ: {
    elementary: {
      overview: "친구들을 잘 챙기고, 다른 사람들이 행복했으면 좋겠다고 생각해요. 어른들에게도 예의 바르다는 말을 자주 들어요.",
      keyTraits: ["친구를 잘 챙겨요", "다른 사람 마음을 잘 알아요", "리더 역할을 좋아해요", "말을 잘해요"],
      scenarios: [
        { situation: "반에서 혼자 있는 친구를 보면", behavior: "다가가서 같이 놀자고 해요" },
        { situation: "모둠 활동에서", behavior: "자연스럽게 이끌면서 모두의 의견을 들어요" },
        { situation: "친구가 잘못을 하면", behavior: "부드럽게 고쳐줘야 할 점을 말해줘요" }
      ]
    },
    middle: {
      overview: "타인의 성장과 행복에 관심이 많고, 주변을 긍정적으로 이끄는 능력이 있어요. 공감 능력이 뛰어나서 친구들이 고민을 털어놓아요.",
      keyTraits: ["카리스마가 있어요", "공감 능력이 뛰어나요", "동기 부여를 잘해요", "따뜻해요"],
      scenarios: [
        { situation: "친구가 힘들어할 때", behavior: "진심으로 이야기를 듣고 응원해요" },
        { situation: "학급 임원 선거에서", behavior: "모두를 위한 공약을 만들어 나가요" },
        { situation: "갈등이 있는 친구 사이에서", behavior: "양쪽 마음을 이해하고 화해시켜요" }
      ]
    },
    high: {
      overview: "사람들에게 영감을 주고 이끄는 것을 좋아해요. 이상적인 목표를 향해 함께 나아가는 것에서 보람을 느끼고, 타인의 잠재력을 발굴해줘요.",
      keyTraits: ["비전을 제시해요", "설득력이 있어요", "열정적이에요", "이타적이에요"],
      scenarios: [
        { situation: "동아리를 이끌 때", behavior: "구성원들의 강점을 찾아 역할을 맡겨요" },
        { situation: "토론에서", behavior: "다양한 의견을 존중하면서도 방향을 이끌어요" },
        { situation: "후배가 고민할 때", behavior: "자신의 경험을 나누며 조언해요" }
      ]
    },
    adult: {
      overview: "타인의 성장을 돕는 것에서 의미를 찾고, 긍정적인 영향력을 미치고 싶어해요. 조직을 이끄는 능력과 공감 능력이 조화를 이뤄요.",
      keyTraits: ["영향력이 있어요", "비전을 가져요", "헌신적이에요", "소통을 잘해요"],
      scenarios: [
        { situation: "팀을 이끌 때", behavior: "구성원 각자의 강점을 살려주며 목표를 향해 나아가요" },
        { situation: "누군가 어려움에 처하면", behavior: "실질적인 도움과 정서적 지원을 함께 제공해요" },
        { situation: "새로운 프로젝트에서", behavior: "사람들에게 영감을 주며 참여를 이끌어내요" }
      ]
    }
  },
  ENFP: {
    elementary: {
      overview: "상상력이 풍부하고, 새로운 것을 시도하는 것을 좋아해요. 호기심이 많고 질문을 많이 해서 '왜?'라는 말을 자주 해요.",
      keyTraits: ["호기심이 많아요", "상상력이 풍부해요", "새로운 것을 좋아해요", "밝고 활발해요"],
      scenarios: [
        { situation: "새로운 장난감이 생기면", behavior: "설명서도 안 보고 이것저것 해봐요" },
        { situation: "이야기를 들으면", behavior: "'그 다음엔?', '왜?'라고 계속 물어봐요" },
        { situation: "그림을 그릴 때", behavior: "상상 속의 세계를 마음껏 그려요" }
      ]
    },
    middle: {
      overview: "다양한 가능성에 흥미를 느끼고, 새로운 아이디어를 생각해내는 것을 좋아해요. 사람들과 어울리는 것도 좋아하고 감정 표현이 풍부해요.",
      keyTraits: ["창의적이에요", "열정적이에요", "감정 표현이 풍부해요", "변화를 좋아해요"],
      scenarios: [
        { situation: "새 취미를 발견하면", behavior: "신나서 빠져들다가 또 새로운 것에 관심 가져요" },
        { situation: "친구가 고민을 말하면", behavior: "진심으로 들어주고 함께 해결책을 찾아요" },
        { situation: "프로젝트를 할 때", behavior: "독특하고 창의적인 아이디어를 많이 내요" }
      ]
    },
    high: {
      overview: "가능성과 잠재력을 보는 눈이 있고, 새로운 경험을 통해 성장해요. 자유로운 영혼으로 정해진 틀에 갇히는 것을 싫어해요.",
      keyTraits: ["자유로워요", "열린 마음이에요", "직관적이에요", "에너지가 넘쳐요"],
      scenarios: [
        { situation: "진로를 고민할 때", behavior: "다양한 가능성을 열어두고 탐색해요" },
        { situation: "반복적인 일을 할 때", behavior: "지루해하며 새로운 방법을 찾아요" },
        { situation: "사람들과 대화할 때", behavior: "아이디어를 나누고 영감을 주고받아요" }
      ]
    },
    adult: {
      overview: "열정과 창의성으로 삶을 풍요롭게 만들어요. 진정한 자신을 찾고 의미 있는 일을 하고 싶어하며, 사람들에게 영감을 줘요.",
      keyTraits: ["창의적이에요", "열정적이에요", "적응력이 좋아요", "이상주의적이에요"],
      scenarios: [
        { situation: "새 프로젝트를 시작할 때", behavior: "아이디어가 넘치고 사람들을 모아요" },
        { situation: "일상이 지루해지면", behavior: "새로운 도전을 찾거나 변화를 만들어요" },
        { situation: "의미를 찾을 때", behavior: "자신의 가치와 맞는 일을 추구해요" }
      ]
    }
  },
  ESTJ: {
    elementary: {
      overview: "규칙을 잘 지키고, 일을 끝까지 해내는 것이 중요해요. 리더 역할을 맡으면 책임감 있게 해내서 선생님께 칭찬을 받아요.",
      keyTraits: ["책임감이 강해요", "규칙을 잘 지켜요", "리더십이 있어요", "목표를 달성해요"],
      scenarios: [
        { situation: "모둠장을 맡으면", behavior: "역할을 나누고 모두가 잘하도록 이끌어요" },
        { situation: "숙제가 있으면", behavior: "미루지 않고 빨리 끝내요" },
        { situation: "친구가 규칙을 어기면", behavior: "그건 안 된다고 말해줘요" }
      ]
    },
    middle: {
      overview: "목표를 세우고 체계적으로 달성하는 것을 잘해요. 정해진 규칙과 질서를 중요하게 생각하고, 효율적으로 일하는 것을 좋아해요.",
      keyTraits: ["조직적이에요", "결단력이 있어요", "효율을 중시해요", "신뢰할 수 있어요"],
      scenarios: [
        { situation: "시험 기간에", behavior: "계획을 세우고 하나씩 체크하며 공부해요" },
        { situation: "조별 과제에서", behavior: "역할 분담과 일정을 정해서 진행해요" },
        { situation: "결정을 내려야 할 때", behavior: "빠르게 판단하고 실행해요" }
      ]
    },
    high: {
      overview: "리더십이 강하고 조직을 이끄는 능력이 있어요. 명확한 목표와 체계적인 계획으로 결과를 만들어내는 것에 자신감이 있어요.",
      keyTraits: ["추진력이 있어요", "논리적이에요", "실용적이에요", "책임감이 강해요"],
      scenarios: [
        { situation: "학생회 활동에서", behavior: "체계적으로 일을 추진하고 결과를 만들어요" },
        { situation: "의견이 다를 때", behavior: "논리적으로 설득하거나 효율적인 방법을 찾아요" },
        { situation: "목표를 세우면", behavior: "계획을 세우고 끝까지 밀고 나가요" }
      ]
    },
    adult: {
      overview: "조직과 시스템을 효율적으로 운영하는 능력이 있어요. 책임감이 강하고, 목표를 달성하기 위해 체계적으로 일해요.",
      keyTraits: ["리더십이 있어요", "체계적이에요", "결과 중심이에요", "신뢰할 수 있어요"],
      scenarios: [
        { situation: "프로젝트를 맡으면", behavior: "명확한 계획과 일정으로 진행해요" },
        { situation: "팀에 문제가 생기면", behavior: "빠르게 원인을 파악하고 해결책을 제시해요" },
        { situation: "결정을 내릴 때", behavior: "데이터와 경험을 바탕으로 합리적으로 결정해요" }
      ]
    }
  },
  ESTP: {
    elementary: {
      overview: "활동적이고 모험을 좋아해요. 가만히 앉아있는 것보다 움직이고 뛰어노는 것이 좋고, 새로운 것을 직접 해보고 싶어해요.",
      keyTraits: ["활동적이에요", "용감해요", "즉흥적이에요", "모험을 좋아해요"],
      scenarios: [
        { situation: "체육 시간에", behavior: "열심히 참여하고 잘해요" },
        { situation: "무서운 놀이기구 앞에서", behavior: "먼저 타겠다고 나서요" },
        { situation: "새로운 것을 보면", behavior: "직접 만져보고 해봐야 직성이 풀려요" }
      ]
    },
    middle: {
      overview: "현재 순간을 즐기고, 위기 상황에서 빠르게 대처하는 능력이 있어요. 이론보다 실전을 좋아하고, 도전을 두려워하지 않아요.",
      keyTraits: ["행동력이 있어요", "문제 해결을 잘해요", "현실적이에요", "적응력이 뛰어나요"],
      scenarios: [
        { situation: "갑자기 문제가 생기면", behavior: "당황하지 않고 빠르게 해결해요" },
        { situation: "지루한 수업 시간에", behavior: "몰래 다른 것을 하거나 친구와 이야기해요" },
        { situation: "운동이나 게임에서", behavior: "경쟁적이고 이기려고 노력해요" }
      ]
    },
    high: {
      overview: "순간적인 판단력이 뛰어나고, 위험을 감수하면서도 도전하는 것을 좋아해요. 실용적이고 현실적인 해결책을 빠르게 찾아요.",
      keyTraits: ["순발력이 좋아요", "위기 대처를 잘해요", "실용적이에요", "자신감 있어요"],
      scenarios: [
        { situation: "토론에서", behavior: "순발력 있게 반박하고 논쟁을 즐겨요" },
        { situation: "새로운 기회가 오면", behavior: "일단 도전해보고 결과는 나중에 생각해요" },
        { situation: "규칙이 답답할 때", behavior: "융통성 있게 해결책을 찾아요" }
      ]
    },
    adult: {
      overview: "행동 지향적이고 실질적인 결과를 중시해요. 위기 상황에서 빛을 발하며, 즉각적인 문제 해결 능력이 뛰어나요.",
      keyTraits: ["실용적이에요", "적응력이 있어요", "결과 중심이에요", "용감해요"],
      scenarios: [
        { situation: "급한 문제가 생기면", behavior: "빠르게 상황을 파악하고 대응해요" },
        { situation: "협상이나 거래에서", behavior: "상황을 읽고 유리하게 이끌어요" },
        { situation: "새로운 도전이 오면", behavior: "리스크를 계산하고 과감하게 도전해요" }
      ]
    }
  },
  ENTJ: {
    elementary: {
      overview: "무리에서 자연스럽게 리더가 되고, 목표를 정하면 끝까지 해내요. '이렇게 하면 되잖아!'라며 방법을 찾는 것을 좋아해요.",
      keyTraits: ["리더십이 강해요", "목표를 향해 가요", "자신감 있어요", "문제 해결을 잘해요"],
      scenarios: [
        { situation: "친구들과 놀 때", behavior: "놀이를 정하고 규칙을 만들어요" },
        { situation: "어려운 문제가 있으면", behavior: "포기하지 않고 방법을 찾아요" },
        { situation: "하고 싶은 것이 있으면", behavior: "부모님을 설득해서 해내요" }
      ]
    },
    middle: {
      overview: "목표 지향적이고 효율적으로 일하는 것을 좋아해요. 다른 사람들을 이끄는 데 자연스러운 능력이 있고, 도전을 즐겨요.",
      keyTraits: ["결단력이 있어요", "전략적이에요", "야망이 있어요", "논리적이에요"],
      scenarios: [
        { situation: "조별 과제에서", behavior: "방향을 제시하고 효율적으로 나눠요" },
        { situation: "목표를 세우면", behavior: "달성하기 위해 계획을 세우고 실행해요" },
        { situation: "비효율적인 일을 보면", behavior: "더 좋은 방법을 제안해요" }
      ]
    },
    high: {
      overview: "장기적인 비전을 가지고 목표를 향해 전략적으로 움직여요. 리더로서 사람들을 이끌고, 결과를 만들어내는 데 능숙해요.",
      keyTraits: ["비전이 있어요", "추진력이 강해요", "전략적이에요", "자신감 있어요"],
      scenarios: [
        { situation: "진로를 정할 때", behavior: "장기적인 목표를 세우고 계획해요" },
        { situation: "리더 역할을 맡으면", behavior: "비전을 제시하고 팀을 이끌어요" },
        { situation: "장애물을 만나면", behavior: "우회하거나 돌파할 방법을 찾아요" }
      ]
    },
    adult: {
      overview: "전략적 사고와 리더십으로 조직을 이끌어요. 큰 그림을 보며 장기적인 목표를 향해 효율적으로 움직이는 것을 좋아해요.",
      keyTraits: ["전략가예요", "결단력이 있어요", "효율을 중시해요", "목표 지향적이에요"],
      scenarios: [
        { situation: "조직을 이끌 때", behavior: "비전을 제시하고 체계적으로 운영해요" },
        { situation: "어려운 결정을 내릴 때", behavior: "논리적으로 분석하고 빠르게 결정해요" },
        { situation: "목표 달성에 방해가 있으면", behavior: "전략을 수정하거나 돌파구를 찾아요" }
      ]
    }
  },
  ENTP: {
    elementary: {
      overview: "'왜?'라는 질문을 많이 하고, 새로운 아이디어를 생각해내는 것을 좋아해요. 토론하는 것도 재미있어하고, 규칙에 의문을 제기해요.",
      keyTraits: ["호기심이 많아요", "질문을 많이 해요", "창의적이에요", "토론을 좋아해요"],
      scenarios: [
        { situation: "수업 중에", behavior: "궁금한 것이 생기면 바로 질문해요" },
        { situation: "규칙이 있으면", behavior: "'왜 그렇게 해야 해요?'라고 물어봐요" },
        { situation: "놀이를 할 때", behavior: "새로운 규칙이나 방법을 만들어요" }
      ]
    },
    middle: {
      overview: "토론과 논쟁을 즐기고, 다양한 관점에서 생각하는 것을 좋아해요. 새로운 아이디어가 많고, 정해진 틀을 벗어나 생각해요.",
      keyTraits: ["논쟁을 즐겨요", "다양한 관점을 가져요", "혁신적이에요", "언변이 좋아요"],
      scenarios: [
        { situation: "토론 수업에서", behavior: "다양한 관점에서 논쟁을 즐겨요" },
        { situation: "문제를 풀 때", behavior: "기존 방법이 아닌 새로운 방법을 시도해요" },
        { situation: "관심사가 생기면", behavior: "깊이 파고들다가 또 새로운 것으로 옮겨가요" }
      ]
    },
    high: {
      overview: "지적 도전을 즐기고, 새로운 가능성을 탐구해요. 관습에 도전하고 혁신적인 아이디어를 제시하는 것에서 재미를 느껴요.",
      keyTraits: ["혁신적이에요", "지적 호기심이 높아요", "논리적이에요", "자유로워요"],
      scenarios: [
        { situation: "새 아이디어가 떠오르면", behavior: "열정적으로 탐구하고 발전시켜요" },
        { situation: "기존 방식에 문제가 있으면", behavior: "더 나은 방법을 제안하고 논쟁해요" },
        { situation: "여러 프로젝트가 있으면", behavior: "다 시작하지만 끝내기는 어려워해요" }
      ]
    },
    adult: {
      overview: "가능성과 혁신을 추구하며, 지적 도전을 즐겨요. 논쟁과 토론을 통해 아이디어를 발전시키고, 새로운 것을 창조해요.",
      keyTraits: ["혁신가예요", "논리적이에요", "도전적이에요", "유연해요"],
      scenarios: [
        { situation: "새 사업 아이디어가 있으면", behavior: "가능성을 분석하고 도전해요" },
        { situation: "회의에서", behavior: "다양한 관점을 제시하고 토론을 이끌어요" },
        { situation: "반복적인 일을 하면", behavior: "지루해하며 자동화하거나 더 좋은 방법을 찾아요" }
      ]
    }
  },
  ISFJ: {
    elementary: {
      overview: "조용하고 착해서 어른들에게 칭찬을 많이 받아요. 친구들을 잘 챙기고, 규칙을 잘 지키며, 도움이 필요한 사람을 잘 도와줘요.",
      keyTraits: ["착하고 다정해요", "친구를 잘 챙겨요", "차분해요", "도와주는 것을 좋아해요"],
      scenarios: [
        { situation: "친구가 아프면", behavior: "보건실에 같이 가주거나 돌봐줘요" },
        { situation: "교실 정리 시간에", behavior: "묵묵히 정리를 도와요" },
        { situation: "새 친구가 오면", behavior: "조용히 다가가서 필요한 것을 도와줘요" }
      ]
    },
    middle: {
      overview: "헌신적이고 신뢰할 수 있어요. 다른 사람들의 필요를 살피고 도움을 주는 것에서 보람을 느끼고, 책임감 있게 맡은 일을 해내요.",
      keyTraits: ["헌신적이에요", "꼼꼼해요", "인내심이 있어요", "믿음직해요"],
      scenarios: [
        { situation: "친구가 힘들어할 때", behavior: "곁에서 조용히 지지해줘요" },
        { situation: "맡은 역할이 있으면", behavior: "묵묵히 끝까지 해내요" },
        { situation: "누군가 도움이 필요하면", behavior: "자신의 일이 있어도 도와줘요" }
      ]
    },
    high: {
      overview: "성실하고 책임감이 강해요. 조용하지만 사람들을 돌보는 마음이 깊고, 안정적인 환경에서 최선을 다해요.",
      keyTraits: ["성실해요", "배려심이 깊어요", "신중해요", "전통을 존중해요"],
      scenarios: [
        { situation: "공부할 때", behavior: "꾸준히 성실하게 해서 성적을 유지해요" },
        { situation: "친구 관계에서", behavior: "오래된 친구를 소중히 여기고 깊게 사귀어요" },
        { situation: "변화가 생기면", behavior: "천천히 적응하며 안정을 찾아요" }
      ]
    },
    adult: {
      overview: "헌신적이고 책임감 있게 맡은 일을 해내요. 타인을 돌보는 것에서 의미를 찾고, 안정적이고 조화로운 환경을 만들어요.",
      keyTraits: ["헌신적이에요", "실용적이에요", "인내심이 있어요", "보호자 역할을 해요"],
      scenarios: [
        { situation: "가족이나 친구가 아프면", behavior: "세심하게 돌보고 필요한 것을 챙겨요" },
        { situation: "직장에서", behavior: "묵묵히 맡은 일을 완수하고 동료를 도와요" },
        { situation: "전통적인 가치를 지킬 때", behavior: "중요하게 여기고 이어나가요" }
      ]
    }
  },
  ISFP: {
    elementary: {
      overview: "조용하지만 마음이 따뜻해요. 예술적인 것을 좋아하고, 동물이나 자연을 좋아해요. 자신만의 세계가 있어요.",
      keyTraits: ["감각적이에요", "예술을 좋아해요", "다정해요", "조용해요"],
      scenarios: [
        { situation: "미술 시간에", behavior: "자신만의 스타일로 그림을 그려요" },
        { situation: "동물을 보면", behavior: "다가가서 쓰다듬고 싶어해요" },
        { situation: "혼자 있을 때", behavior: "상상하거나 좋아하는 것을 하며 시간을 보내요" }
      ]
    },
    middle: {
      overview: "자유로운 영혼으로 자신만의 가치관을 중요시해요. 예술적 감각이 뛰어나고, 현재 순간을 즐기며 살아요.",
      keyTraits: ["예술적이에요", "자유로워요", "감성적이에요", "현재를 살아요"],
      scenarios: [
        { situation: "취미 생활에서", behavior: "음악, 미술, 사진 등 예술적인 것을 즐겨요" },
        { situation: "자신의 스타일에 대해", behavior: "남들과 다른 독특한 취향을 가져요" },
        { situation: "갈등 상황에서", behavior: "피하려 하고 조용히 물러나요" }
      ]
    },
    high: {
      overview: "진정한 자아를 찾고 표현하는 것을 중요시해요. 예술이나 자연에서 영감을 얻고, 자유롭게 살고 싶어해요.",
      keyTraits: ["진실해요", "감각적이에요", "평화로워요", "유연해요"],
      scenarios: [
        { situation: "진로를 정할 때", behavior: "자신이 정말 좋아하는 것을 찾아요" },
        { situation: "스트레스를 받으면", behavior: "자연 속에서 쉬거나 예술 활동을 해요" },
        { situation: "가치관에 어긋나는 일을 보면", behavior: "조용히 거리를 두거나 자신의 방식을 지켜요" }
      ]
    },
    adult: {
      overview: "자신의 가치와 진정성을 중요시하며 살아요. 현재 순간을 즐기고, 예술이나 자연에서 평화를 찾아요.",
      keyTraits: ["진실해요", "유연해요", "감각적이에요", "조용해요"],
      scenarios: [
        { situation: "일을 선택할 때", behavior: "의미 있고 자신의 가치와 맞는 일을 찾아요" },
        { situation: "여가 시간에", behavior: "예술 활동이나 자연에서 시간을 보내요" },
        { situation: "결정을 내릴 때", behavior: "자신의 느낌과 가치관을 따라요" }
      ]
    }
  },
  ISTJ: {
    elementary: {
      overview: "약속을 잘 지키고, 규칙을 따르는 것이 중요해요. 꼼꼼하고 차분해서 맡은 일을 잘 끝내고, 정리정돈을 잘해요.",
      keyTraits: ["꼼꼼해요", "규칙을 잘 지켜요", "책임감이 있어요", "정리를 잘해요"],
      scenarios: [
        { situation: "숙제가 있으면", behavior: "차근차근 해서 제시간에 제출해요" },
        { situation: "방 정리를 할 때", behavior: "물건마다 자리를 정해서 정리해요" },
        { situation: "약속을 하면", behavior: "무슨 일이 있어도 지키려고 해요" }
      ]
    },
    middle: {
      overview: "신뢰할 수 있고 책임감이 강해요. 체계적으로 일하는 것을 좋아하고, 꾸준함으로 목표를 달성해요.",
      keyTraits: ["신뢰할 수 있어요", "체계적이에요", "성실해요", "실용적이에요"],
      scenarios: [
        { situation: "공부할 때", behavior: "계획표대로 꾸준히 해요" },
        { situation: "조별 과제에서", behavior: "맡은 부분을 확실히 해내요" },
        { situation: "변화가 생기면", behavior: "천천히 적응하며 안정을 찾아요" }
      ]
    },
    high: {
      overview: "성실하고 책임감이 강해서 신뢰받아요. 논리적이고 체계적으로 일하며, 꾸준함이 장점이에요.",
      keyTraits: ["논리적이에요", "꾸준해요", "신중해요", "믿음직해요"],
      scenarios: [
        { situation: "목표를 정하면", behavior: "계획을 세우고 꾸준히 실행해요" },
        { situation: "중요한 결정을 할 때", behavior: "충분히 생각하고 신중하게 결정해요" },
        { situation: "다른 사람이 부탁하면", behavior: "맡은 일은 끝까지 해내요" }
      ]
    },
    adult: {
      overview: "신뢰할 수 있고 책임감 있게 일해요. 체계적이고 논리적으로 문제를 해결하며, 꾸준한 노력으로 결과를 만들어요.",
      keyTraits: ["믿음직해요", "체계적이에요", "꾸준해요", "실용적이에요"],
      scenarios: [
        { situation: "업무에서", behavior: "정해진 절차를 따르고 완벽하게 마무리해요" },
        { situation: "약속이나 계약에서", behavior: "정확하게 지키고 신뢰를 쌓아요" },
        { situation: "새로운 것을 배울 때", behavior: "차근차근 단계별로 익혀요" }
      ]
    }
  },
  ISTP: {
    elementary: {
      overview: "손으로 직접 만들거나 고치는 것을 좋아해요. 조용하지만 관심 있는 것에는 집중력이 대단하고, 호기심이 많아요.",
      keyTraits: ["손재주가 있어요", "호기심이 많아요", "독립적이에요", "조용해요"],
      scenarios: [
        { situation: "장난감이 고장나면", behavior: "분해해서 어떻게 작동하는지 살펴봐요" },
        { situation: "레고나 조립하는 것에서", behavior: "집중해서 끝까지 완성해요" },
        { situation: "새로운 것이 생기면", behavior: "직접 만져보고 실험해봐요" }
      ]
    },
    middle: {
      overview: "논리적이고 분석적인 사고를 하며, 실용적인 문제 해결을 잘해요. 독립적이고, 직접 경험하면서 배우는 것을 좋아해요.",
      keyTraits: ["분석적이에요", "실용적이에요", "독립적이에요", "모험적이에요"],
      scenarios: [
        { situation: "문제가 생기면", behavior: "원인을 분석하고 직접 해결해요" },
        { situation: "새로운 기술이 있으면", behavior: "직접 해보면서 익혀요" },
        { situation: "규칙이 답답하면", behavior: "효율적인 방법을 찾아 우회해요" }
      ]
    },
    high: {
      overview: "냉철하고 논리적으로 상황을 분석해요. 실용적인 문제 해결 능력이 뛰어나고, 위기 상황에서 침착하게 대응해요.",
      keyTraits: ["냉철해요", "적응력이 뛰어나요", "독립적이에요", "효율적이에요"],
      scenarios: [
        { situation: "관심 있는 분야에서", behavior: "깊이 파고들어 전문가 수준이 되어요" },
        { situation: "급한 상황에서", behavior: "침착하게 상황을 파악하고 대응해요" },
        { situation: "혼자 있는 시간에", behavior: "취미 활동에 몰두하며 충전해요" }
      ]
    },
    adult: {
      overview: "논리적이고 실용적인 문제 해결사예요. 위기 상황에서 침착하게 대응하고, 효율적인 방법을 찾아요.",
      keyTraits: ["논리적이에요", "위기 대처를 잘해요", "독립적이에요", "실용적이에요"],
      scenarios: [
        { situation: "기술적 문제가 생기면", behavior: "분석하고 직접 해결해요" },
        { situation: "급박한 상황에서", behavior: "침착하게 효율적으로 대응해요" },
        { situation: "자유 시간에", behavior: "도구나 기계를 다루는 취미를 즐겨요" }
      ]
    }
  },
  INTJ: {
    elementary: {
      overview: "혼자 생각하는 것을 좋아하고, '왜?'라는 질문을 많이 해요. 계획을 세우고 나만의 방법으로 문제를 푸는 것을 좋아해요.",
      keyTraits: ["생각이 깊어요", "독립적이에요", "목표가 있어요", "계획을 잘 세워요"],
      scenarios: [
        { situation: "어려운 문제가 있으면", behavior: "혼자 끙끙 생각해서 풀어내요" },
        { situation: "하고 싶은 것이 있으면", behavior: "어떻게 할지 계획을 세워요" },
        { situation: "모르는 것이 있으면", behavior: "책이나 인터넷으로 찾아봐요" }
      ]
    },
    middle: {
      overview: "전략적으로 생각하고 장기적인 목표를 세워요. 독립적이고 자기만의 높은 기준이 있어요.",
      keyTraits: ["전략적이에요", "독립적이에요", "높은 기준이 있어요", "논리적이에요"],
      scenarios: [
        { situation: "목표가 생기면", behavior: "달성하기 위한 계획을 세우고 실행해요" },
        { situation: "비효율적인 것을 보면", behavior: "더 좋은 방법을 생각해요" },
        { situation: "관심 있는 분야에서", behavior: "깊이 파고들어 전문가가 되려고 해요" }
      ]
    },
    high: {
      overview: "비전을 가지고 장기적인 계획을 세워요. 독창적인 사고로 문제를 해결하고, 높은 기준을 스스로에게 적용해요.",
      keyTraits: ["비전을 가져요", "완벽주의적이에요", "독창적이에요", "결단력이 있어요"],
      scenarios: [
        { situation: "진로를 정할 때", behavior: "장기적인 비전과 계획을 세워요" },
        { situation: "시스템에 문제가 있으면", behavior: "근본적인 해결책을 생각해요" },
        { situation: "자신의 능력을 키울 때", behavior: "체계적으로 학습하고 발전해요" }
      ]
    },
    adult: {
      overview: "전략적 사고로 장기적인 목표를 달성해요. 독창적인 아이디어와 높은 기준으로 성과를 만들어요.",
      keyTraits: ["전략가예요", "독립적이에요", "비전이 있어요", "높은 기준을 가져요"],
      scenarios: [
        { situation: "장기 프로젝트에서", behavior: "전체 그림을 보며 전략적으로 접근해요" },
        { situation: "비효율을 발견하면", behavior: "시스템을 개선할 방법을 설계해요" },
        { situation: "목표를 향해", behavior: "꾸준히 노력하며 높은 기준을 유지해요" }
      ]
    }
  },
  INTP: {
    elementary: {
      overview: "호기심이 많고 '왜?'라는 질문을 많이 해요. 혼자 생각하고 탐구하는 것을 좋아하고, 자기만의 세계에 빠져 있을 때가 많아요.",
      keyTraits: ["호기심이 많아요", "생각이 깊어요", "질문을 많이 해요", "혼자 노는 것도 좋아해요"],
      scenarios: [
        { situation: "궁금한 것이 생기면", behavior: "끝까지 알아내려고 해요" },
        { situation: "레고나 퍼즐에서", behavior: "어떻게 작동하는지 생각하며 조립해요" },
        { situation: "수업 시간에", behavior: "선생님 말씀 중에 궁금한 게 떠오르면 바로 물어봐요" }
      ]
    },
    middle: {
      overview: "논리적으로 분석하고 이론을 탐구하는 것을 좋아해요. 독창적인 생각을 하고, 왜 그런지 원리를 파악하려 해요.",
      keyTraits: ["논리적이에요", "분석적이에요", "독창적이에요", "지적 호기심이 높아요"],
      scenarios: [
        { situation: "새로운 개념을 배우면", behavior: "원리를 파악할 때까지 파고들어요" },
        { situation: "문제를 풀 때", behavior: "여러 가지 방법을 시도해봐요" },
        { situation: "토론에서", behavior: "논리적인 허점을 발견하면 지적해요" }
      ]
    },
    high: {
      overview: "깊이 있는 사고와 분석으로 문제의 본질을 파악해요. 지적 호기심이 강하고, 이론과 가능성을 탐구해요.",
      keyTraits: ["분석적이에요", "객관적이에요", "이론적이에요", "창의적이에요"],
      scenarios: [
        { situation: "복잡한 문제가 있으면", behavior: "여러 각도에서 분석하고 해결책을 찾아요" },
        { situation: "관심 있는 주제에 대해", behavior: "깊이 연구하고 자기만의 이론을 만들어요" },
        { situation: "틀린 논리를 보면", behavior: "조용히 문제점을 파악하고, 가끔 지적해요" }
      ]
    },
    adult: {
      overview: "깊이 있는 분석과 논리적 사고로 문제를 해결해요. 이론과 가능성을 탐구하며, 독창적인 아이디어를 발전시켜요.",
      keyTraits: ["분석가예요", "창의적이에요", "독립적이에요", "지적 호기심이 높아요"],
      scenarios: [
        { situation: "새로운 아이디어가 떠오르면", behavior: "논리적으로 검증하고 발전시켜요" },
        { situation: "복잡한 시스템을 보면", behavior: "작동 원리를 파악하려 해요" },
        { situation: "토론에서", behavior: "다양한 관점에서 논리를 분석해요" }
      ]
    }
  },
  INFJ: {
    elementary: {
      overview: "생각이 깊고 상상력이 풍부해요. 다른 사람의 마음을 잘 이해하고, 동화책이나 이야기를 좋아해요.",
      keyTraits: ["상상력이 풍부해요", "다른 사람 마음을 잘 알아요", "조용해요", "이야기를 좋아해요"],
      scenarios: [
        { situation: "친구가 슬퍼하면", behavior: "말없이 옆에 있어주며 위로해요" },
        { situation: "그림을 그릴 때", behavior: "상상 속 이야기를 그려요" },
        { situation: "많은 사람이 있으면", behavior: "조용한 곳에서 쉬고 싶어해요" }
      ]
    },
    middle: {
      overview: "직관적으로 사람과 상황을 이해해요. 의미 있는 일을 하고 싶어하고, 깊은 관계를 중요시해요.",
      keyTraits: ["직관적이에요", "공감 능력이 높아요", "이상주의적이에요", "통찰력이 있어요"],
      scenarios: [
        { situation: "친구가 말하지 않아도", behavior: "표정만 봐도 기분을 알 수 있어요" },
        { situation: "의미 없는 일을 하면", behavior: "동기가 떨어지고 힘들어해요" },
        { situation: "미래에 대해 생각할 때", behavior: "세상에 좋은 영향을 미치고 싶어요" }
      ]
    },
    high: {
      overview: "깊은 통찰력으로 사람과 상황의 본질을 파악해요. 의미 있는 목표를 향해 나아가며, 사람들에게 긍정적 영향을 주고 싶어해요.",
      keyTraits: ["통찰력이 있어요", "이상주의적이에요", "헌신적이에요", "복잡해요"],
      scenarios: [
        { situation: "진로를 정할 때", behavior: "의미 있고 사람들에게 도움이 되는 일을 찾아요" },
        { situation: "사람들과 관계에서", behavior: "깊고 진실된 관계를 추구해요" },
        { situation: "혼자 있을 때", behavior: "자신의 내면을 탐구하고 성찰해요" }
      ]
    },
    adult: {
      overview: "깊은 통찰력과 비전으로 의미 있는 변화를 추구해요. 사람들을 깊이 이해하고, 긍정적인 영향을 미치려 노력해요.",
      keyTraits: ["통찰력이 있어요", "비전을 가져요", "복잡해요", "헌신적이에요"],
      scenarios: [
        { situation: "누군가를 도울 때", behavior: "표면적인 것이 아닌 근본적인 도움을 주려해요" },
        { situation: "목표를 세울 때", behavior: "더 큰 의미와 연결된 비전을 추구해요" },
        { situation: "혼자만의 시간에", behavior: "깊이 생각하고 창작 활동을 해요" }
      ]
    }
  },
  INFP: {
    elementary: {
      overview: "상상력이 풍부하고 마음이 여려요. 동물이나 작은 것들을 좋아하고, 자기만의 세계에서 이야기를 만들어요.",
      keyTraits: ["상상력이 풍부해요", "마음이 여려요", "창의적이에요", "조용해요"],
      scenarios: [
        { situation: "혼자 있을 때", behavior: "상상 속 이야기를 만들며 놀아요" },
        { situation: "동물을 보면", behavior: "다가가서 친해지고 싶어해요" },
        { situation: "친구가 놀림을 받으면", behavior: "마음이 너무 아파요" }
      ]
    },
    middle: {
      overview: "자신의 가치관과 이상을 중요시해요. 진정성을 추구하고, 자신만의 방식으로 세상을 이해해요.",
      keyTraits: ["이상주의적이에요", "진정성이 있어요", "창의적이에요", "감성적이에요"],
      scenarios: [
        { situation: "글이나 그림에서", behavior: "자신의 감정과 생각을 표현해요" },
        { situation: "불공정한 일을 보면", behavior: "마음이 불편하고 바로잡고 싶어해요" },
        { situation: "관심 있는 것에 대해", behavior: "깊이 빠져들어 탐구해요" }
      ]
    },
    high: {
      overview: "진정한 자아와 의미를 찾아가는 여정을 해요. 예술이나 글쓰기로 내면을 표현하고, 진실된 관계를 추구해요.",
      keyTraits: ["진정성을 추구해요", "창의적이에요", "깊이 느껴요", "이상을 가져요"],
      scenarios: [
        { situation: "진로를 정할 때", behavior: "돈보다 의미와 가치를 고려해요" },
        { situation: "창작 활동에서", behavior: "자신의 내면을 작품으로 표현해요" },
        { situation: "가치관에 맞지 않는 일은", behavior: "아무리 좋아도 거부해요" }
      ]
    },
    adult: {
      overview: "진정성과 의미를 추구하며 살아요. 창의적인 방식으로 자신을 표현하고, 이상적인 세계를 꿈꿔요.",
      keyTraits: ["이상주의적이에요", "창의적이에요", "공감 능력이 높아요", "진정성 있어요"],
      scenarios: [
        { situation: "일을 선택할 때", behavior: "의미 있고 가치와 맞는 일을 추구해요" },
        { situation: "창작 활동에서", behavior: "깊은 감정과 생각을 표현해요" },
        { situation: "부당한 것을 보면", behavior: "조용히라도 자신의 방식으로 저항해요" }
      ]
    }
  }
};

export function getAgeNarrative(mbtiType: string, ageGroup: AgeGroup): AgeNarrative | null {
  const normalizedType = mbtiType.toUpperCase();
  const narratives = mbtiAgeNarratives[normalizedType];
  if (!narratives) return null;
  return narratives[ageGroup];
}

export interface MBTIFunFacts {
  hiddenTalent: string;
  funFact: string;
  superpower: string;
  famousQuote: string;
  bestMatch: string;
  secretWeakness: string;
}

export const mbtiInterestingFacts: Record<string, MBTIFunFacts> = {
  INTJ: {
    hiddenTalent: "복잡한 상황에서도 빠르게 핵심을 파악하고 10년 후 미래까지 예측할 수 있어요",
    funFact: "INTJ는 전체 인구의 약 2%로, 가장 희귀한 유형 중 하나예요. 역사상 많은 전략가와 혁신가들이 이 유형이었어요",
    superpower: "계획의 달인! 어떤 프로젝트든 완벽한 계획을 세워서 성공으로 이끌어요",
    famousQuote: "\"혼자 있는 시간은 충전의 시간이에요\"",
    bestMatch: "열정적인 ENFP와 만나면 서로에게 새로운 세계를 열어줘요",
    secretWeakness: "감정을 표현하는 것이 어렵지만, 속으로는 정말 깊이 느끼고 있어요"
  },
  INTP: {
    hiddenTalent: "모든 것에 '왜?'라고 질문하며, 아무도 생각하지 못한 해결책을 찾아내요",
    funFact: "INTP는 아인슈타인처럼 생각하는 타입! 관심 있는 주제가 생기면 몇 시간이고 파고들어요",
    superpower: "논리의 마법사! 복잡한 문제를 단순하게 풀어내는 천재적인 능력이 있어요",
    famousQuote: "\"세상의 모든 것은 탐구할 가치가 있어요\"",
    bestMatch: "따뜻한 ENFJ와 함께하면 세상과 더 잘 연결될 수 있어요",
    secretWeakness: "생각이 너무 많아서 결정을 내리기 어려울 때가 있어요"
  },
  ENTJ: {
    hiddenTalent: "타고난 리더십으로 혼란스러운 상황에서도 모두를 이끌 수 있어요",
    funFact: "많은 CEO와 정치 지도자들이 ENTJ예요. 목표를 정하면 반드시 달성해요",
    superpower: "카리스마 폭발! 자연스럽게 사람들을 설득하고 팀을 이끌어요",
    famousQuote: "\"불가능은 나에게 도전장이에요\"",
    bestMatch: "섬세한 INFP와 함께하면 감성적인 균형을 찾을 수 있어요",
    secretWeakness: "가끔 다른 사람의 감정을 놓칠 때가 있어요. 하지만 정말 신경 쓰고 있어요"
  },
  ENTP: {
    hiddenTalent: "어떤 주제든 재치있게 토론하고, 불가능해 보이는 아이디어를 현실로 만들어요",
    funFact: "ENTP는 '아이디어 폭풍' 유형! 하루에도 수십 개의 새로운 생각이 떠올라요",
    superpower: "창의력 천재! 남들이 생각하지 못한 기발한 해결책을 찾아내요",
    famousQuote: "\"규칙은 깨라고 있는 거예요... 더 좋은 규칙을 만들기 위해!\"",
    bestMatch: "안정적인 INFJ와 함께하면 아이디어를 현실로 만드는 힘을 얻어요",
    secretWeakness: "시작은 잘하지만, 마무리가 어려울 때가 있어요"
  },
  INFJ: {
    hiddenTalent: "사람들의 마음을 읽듯이 이해하고, 깊은 통찰력으로 미래를 내다봐요",
    funFact: "INFJ는 전체 인구의 1-2%로 가장 희귀한 유형이에요. 마틴 루터 킹과 간디가 이 유형이었어요",
    superpower: "마음 읽기! 말하지 않아도 상대방이 무엇을 느끼는지 알 수 있어요",
    famousQuote: "\"세상을 더 좋은 곳으로 만들고 싶어요\"",
    bestMatch: "활기찬 ENTP와 함께하면 이상을 현실로 만드는 용기를 얻어요",
    secretWeakness: "다른 사람을 너무 많이 생각하다가 자신을 잊을 때가 있어요"
  },
  INFP: {
    hiddenTalent: "풍부한 상상력으로 감동적인 이야기를 만들고, 진정한 아름다움을 발견해요",
    funFact: "많은 작가와 예술가들이 INFP예요. 셰익스피어도 이 유형으로 추정돼요",
    superpower: "감정의 예술가! 마음으로 느끼는 모든 것을 아름답게 표현해요",
    famousQuote: "\"진심은 언제나 통해요\"",
    bestMatch: "논리적인 ENTJ와 함께하면 꿈을 현실로 만드는 힘을 얻어요",
    secretWeakness: "현실보다 이상에 빠져 있을 때가 있어요. 하지만 그게 창의력의 원천이에요"
  },
  ENFJ: {
    hiddenTalent: "다른 사람의 잠재력을 발견하고, 그들이 최고가 될 수 있도록 도와줘요",
    funFact: "ENFJ는 타고난 멘토예요. 오프라 윈프리와 버락 오바마가 이 유형이에요",
    superpower: "사람 만들기! 모든 사람의 장점을 찾아 빛나게 해줘요",
    famousQuote: "\"함께하면 더 멀리 갈 수 있어요\"",
    bestMatch: "독립적인 ISTP와 함께하면 새로운 관점을 배울 수 있어요",
    secretWeakness: "다른 사람에게 '아니오'라고 말하기 어려워요"
  },
  ENFP: {
    hiddenTalent: "어디서든 분위기를 밝게 만들고, 사람들에게 영감과 희망을 줘요",
    funFact: "ENFP는 '무지개 유형'이라고 불려요. 모든 것에 가능성을 보고 열정적으로 도전해요",
    superpower: "열정 전파! 주변 사람들도 덩달아 신나게 만드는 에너지를 가졌어요",
    famousQuote: "\"인생은 모험이에요, 매일 새롭게!\"",
    bestMatch: "신중한 INTJ와 함께하면 꿈에 현실적인 계획을 더할 수 있어요",
    secretWeakness: "관심사가 너무 많아서 한 가지에 집중하기 어려울 때가 있어요"
  },
  ISTJ: {
    hiddenTalent: "모든 일을 체계적으로 정리하고, 약속은 반드시 지키는 신뢰의 상징이에요",
    funFact: "ISTJ는 조직의 기둥이에요. 많은 성공적인 관리자와 회계사들이 이 유형이에요",
    superpower: "약속의 수호자! 한번 한 약속은 무슨 일이 있어도 꼭 지켜요",
    famousQuote: "\"성실함이 최고의 능력이에요\"",
    bestMatch: "자유로운 ESFP와 함께하면 삶에 즐거움을 더할 수 있어요",
    secretWeakness: "변화가 갑자기 오면 불안할 수 있지만, 천천히 적응해요"
  },
  ISFJ: {
    hiddenTalent: "조용히 모든 것을 기억하고, 필요할 때 정확하게 도움을 줘요",
    funFact: "ISFJ는 '지구의 수호자'라고 불려요. 가장 헌신적이고 따뜻한 유형이에요",
    superpower: "마음 챙김! 아무도 모르게 모든 사람을 세심하게 돌봐요",
    famousQuote: "\"작은 친절이 세상을 바꿔요\"",
    bestMatch: "열정적인 ESTP와 함께하면 새로운 모험을 경험할 수 있어요",
    secretWeakness: "자신의 필요보다 다른 사람을 먼저 생각해서 지칠 때가 있어요"
  },
  ESTJ: {
    hiddenTalent: "어떤 혼란 속에서도 질서를 만들고, 목표를 향해 팀을 이끌어요",
    funFact: "ESTJ는 사회의 기둥이에요. 많은 성공적인 경영자와 관리자들이 이 유형이에요",
    superpower: "실행력 최강! 계획을 세우면 반드시 실현해요",
    famousQuote: "\"말보다 행동이에요\"",
    bestMatch: "감성적인 ISFP와 함께하면 삶에 부드러움을 더할 수 있어요",
    secretWeakness: "다른 사람의 감정보다 효율을 우선할 때가 있어요"
  },
  ESFJ: {
    hiddenTalent: "어디서든 환영받는 분위기를 만들고, 모두가 편하게 느끼도록 해요",
    funFact: "ESFJ는 '사회의 호스트'예요. 파티와 모임을 완벽하게 조직해요",
    superpower: "화합의 달인! 어떤 모임이든 따뜻하고 즐거운 분위기로 만들어요",
    famousQuote: "\"함께여서 더 행복해요\"",
    bestMatch: "독립적인 ISTP와 함께하면 새로운 시각을 배울 수 있어요",
    secretWeakness: "다른 사람의 평가에 민감할 수 있어요"
  },
  ISTP: {
    hiddenTalent: "무엇이든 분해하고 다시 조립하며, 문제를 손으로 직접 해결해요",
    funFact: "ISTP는 '장인 정신의 소유자'예요. 많은 운동선수와 기술자가 이 유형이에요",
    superpower: "문제 해결사! 복잡한 기계도 순식간에 고쳐요",
    famousQuote: "\"직접 해보면 알아요\"",
    bestMatch: "따뜻한 ENFJ와 함께하면 감정적 연결을 배울 수 있어요",
    secretWeakness: "감정을 말로 표현하는 것이 어려울 때가 있어요"
  },
  ISFP: {
    hiddenTalent: "일상에서 아름다움을 발견하고, 예술적 감각으로 모든 것을 특별하게 만들어요",
    funFact: "많은 예술가와 음악가들이 ISFP예요. 마이클 잭슨도 이 유형으로 알려져 있어요",
    superpower: "아름다움 탐지기! 어디서든 숨겨진 아름다움을 발견해요",
    famousQuote: "\"지금 이 순간이 가장 소중해요\"",
    bestMatch: "계획적인 ENTJ와 함께하면 꿈을 현실로 만드는 힘을 얻어요",
    secretWeakness: "갈등을 피하려고 자신의 감정을 숨길 때가 있어요"
  },
  ESTP: {
    hiddenTalent: "위기 상황에서 빠르게 판단하고, 즉각적으로 행동으로 옮겨요",
    funFact: "ESTP는 '행동파 영웅'이에요. 많은 기업가와 운동선수들이 이 유형이에요",
    superpower: "순간 반응! 어떤 상황에서도 빠르게 최선의 결정을 내려요",
    famousQuote: "\"생각만 하지 말고 일단 해봐!\"",
    bestMatch: "신중한 ISFJ와 함께하면 안정적인 기반을 얻을 수 있어요",
    secretWeakness: "장기적인 계획보다 당장의 재미를 추구할 때가 있어요"
  },
  ESFP: {
    hiddenTalent: "어디서든 파티를 열고, 사람들을 웃게 만드는 천부적인 재능이 있어요",
    funFact: "ESFP는 '인생의 파티'예요. 많은 연예인과 배우들이 이 유형이에요",
    superpower: "즐거움 전파! 주변 사람들을 순식간에 행복하게 만들어요",
    famousQuote: "\"오늘을 즐기자, 내일은 내일의 해가 떠!\"",
    bestMatch: "진지한 ISTJ와 함께하면 균형 잡힌 삶을 배울 수 있어요",
    secretWeakness: "진지한 대화나 장기 계획이 어려울 때가 있어요"
  }
};

export function getMBTIFunFacts(mbtiType: string): MBTIFunFacts | null {
  const normalizedType = mbtiType.toUpperCase();
  return mbtiInterestingFacts[normalizedType] || null;
}
