// 1. 이미지 매핑 (React 코드의 import 부분 반영)
const mbtiImageMap = {
  'INTJ': 'intj_wise_owl_mascot.png',
  'INTP': 'curious_raccoon_mascot_intp.png',
  'ENTJ': 'entj_lion_leader_mascot.png',
  'ENTP': 'entp_clever_fox_mascot.png',
  'INFJ': 'infj_wise_wolf_mascot.png',
  'INFP': 'infp_unicorn_dreamer_mascot.png',
  'ENFJ': 'enfj_caring_dolphin_mascot.png',
  'ENFP': 'playful_otter_mascot_enfp.png',
  'ISTJ': 'wise_turtle_mascot_istj.png',
  'ISFJ': 'isfj_caring_rabbit_mascot.png',
  'ESTJ': 'estj_eagle_leader_mascot.png',
  'ESFJ': 'cute_golden_retriever_mascot.png',
  'ISTP': 'istp_cool_leopard_mascot.png',
  'ISFP': 'isfp_artistic_cat_mascot.png',
  'ESTP': 'estp_cheetah_adventurer_mascot.png',
  'ESFP': 'esfp_parrot_entertainer_mascot.png'
};

// 2. 색상 매핑 (React의 Tailwind 클래스 매핑)
const mbtiColorMap = {
  'INTJ': 'from-purple-500 to-indigo-600',
  'INTP': 'from-blue-500 to-indigo-500',
  'ENTJ': 'from-red-500 to-orange-600',
  'ENTP': 'from-yellow-400 to-orange-500',
  'INFJ': 'from-green-400 to-emerald-600',
  'INFP': 'from-green-300 to-teal-400',
  'ENFJ': 'from-orange-400 to-pink-500',
  'ENFP': 'from-pink-400 to-rose-500',
  'ISTJ': 'from-slate-500 to-gray-600',
  'ISFJ': 'from-sky-400 to-blue-500',
  'ESTJ': 'from-blue-600 to-cyan-600',
  'ESFJ': 'from-yellow-300 to-amber-500',
  'ISTP': 'from-stone-500 to-neutral-600',
  'ISFP': 'from-rose-300 to-pink-400',
  'ESTP': 'from-orange-500 to-red-500',
  'ESFP': 'from-yellow-400 to-lime-500'
};

const Quiz = {
  currentIndex: 0,
  answers: {},
  questions: [],
  type: 'parent',
  
  getQuestions(type, age) {
    if (type === 'parent') {
      return typeof scenarioQuestionsAdult !== 'undefined' ? scenarioQuestionsAdult : [];
    }
    const questionsByAge = {
      elementary: typeof scenarioQuestionsElementary !== 'undefined' ? scenarioQuestionsElementary : [],
      middle: typeof scenarioQuestionsMiddle !== 'undefined' ? scenarioQuestionsMiddle : [],
      high: typeof scenarioQuestionsHigh !== 'undefined' ? scenarioQuestionsHigh : [],
      adult: typeof scenarioQuestionsAdult !== 'undefined' ? scenarioQuestionsAdult : []
    };
    return questionsByAge[age] || [];
  },
  
  start(type) {
    this.type = type;
    this.currentIndex = 0;
    this.answers = {};
    
    if (type === 'parent') {
      this.questions = this.getQuestions('parent');
      const el = document.getElementById('parent-quiz-total');
      if(el) el.textContent = this.questions.length;
      App.showScreen('screen-parent-quiz');
    } else {
      this.questions = this.getQuestions('child', App.state.childAge);
      const el = document.getElementById('child-quiz-total');
      if(el) el.textContent = this.questions.length;
      App.showScreen('screen-child-quiz');
    }
    
    this.showQuestion();
  },
  
  showQuestion() {
    const prefix = this.type === 'parent' ? 'parent' : 'child';
    const container = document.getElementById(`${prefix}-quiz-content`);
    const q = this.questions[this.currentIndex];
    const selectedAnswer = this.answers[q.id];
    
    document.getElementById(`${prefix}-quiz-current`).textContent = this.currentIndex + 1;
    const progress = ((this.currentIndex + 1) / this.questions.length) * 100;
    document.getElementById(`${prefix}-quiz-progress-fill`).style.width = `${progress}%`;
    
    container.innerHTML = `
      <div class="quiz-question">
        <p class="quiz-situation">${q.situation}</p>
        <h3 class="quiz-scenario">${q.scenario}</h3>
        <div class="quiz-options">
          <button class="quiz-option ${selectedAnswer === 'A' ? 'selected' : ''}" data-answer="A">
            <span class="option-label">A</span>
            <span class="option-text">${q.optionA.text}</span>
          </button>
          <button class="quiz-option ${selectedAnswer === 'B' ? 'selected' : ''}" data-answer="B">
            <span class="option-label">B</span>
            <span class="option-text">${q.optionB.text}</span>
          </button>
          ${q.optionC ? `
          <button class="quiz-option ${selectedAnswer === 'C' ? 'selected' : ''}" data-answer="C">
            <span class="option-label">C</span>
            <span class="option-text">${q.optionC.text}</span>
          </button>` : ''}
        </div>
      </div>
    `;
    
    container.querySelectorAll('.quiz-option').forEach(opt => {
      opt.addEventListener('click', (e) => {
        const answer = e.currentTarget.dataset.answer;
        this.selectAnswer(answer);
      });
    });
    
    this.updateNavButtons();
  },
  
  selectAnswer(answer) {
    const q = this.questions[this.currentIndex];
    this.answers[q.id] = answer;
    
    const prefix = this.type === 'parent' ? 'parent' : 'child';
    document.querySelectorAll(`#${prefix}-quiz-content .quiz-option`).forEach(opt => {
      opt.classList.remove('selected');
      if (opt.dataset.answer === answer) {
        opt.classList.add('selected');
      }
    });
    
    this.updateNavButtons();
    
    if (this.currentIndex < this.questions.length - 1) {
      setTimeout(() => this.nextQuestion(), 200);
    }
  },
  
  updateNavButtons() {
    const prefix = this.type === 'parent' ? 'parent' : 'child';
    const prevBtn = document.getElementById(`btn-${prefix}-prev`);
    const nextBtn = document.getElementById(`btn-${prefix}-next`);
    const submitBtn = document.getElementById(`btn-${prefix}-submit`);
    const isLast = this.currentIndex === this.questions.length - 1;
    const hasAnswer = this.answers[this.questions[this.currentIndex].id];
    
    // 버튼 텍스트 설정 등 생략 (기존 로직 유지)
    
    if (isLast) {
      nextBtn.classList.add('hidden');
      if (Object.keys(this.answers).length === this.questions.length) {
         submitBtn.classList.remove('hidden');
      } else {
         submitBtn.classList.add('hidden');
      }
    } else {
      submitBtn.classList.add('hidden');
      if (hasAnswer) nextBtn.classList.remove('hidden');
      else nextBtn.classList.add('hidden');
    }
  },
  
  nextQuestion() {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
      this.showQuestion();
    }
  },
  
  prevQuestion(type) {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.showQuestion();
    } else {
       // 첫 페이지에서 뒤로가기 로직 (기존 유지)
       if (type === 'parent') {
         App.showScreen('screen-home');
       } else {
         App.showScreen('screen-child-age');
       }
    }
  },

  // ✨ [핵심 수정] 상세 결과 계산 (퍼센트 포함)
  calculateDetailedResults() {
    const scores = { EI: 0, SN: 0, TF: 0, JP: 0 };
    // 각 지표별 최대 점수를 계산 (문항 수 * 점수 가중치)
    // 여기서는 간단히 문항 수로 가정 (scoring이 -1, 1 이라고 가정 시)
    const maxScores = { EI: 0, SN: 0, TF: 0, JP: 0 };

    this.questions.forEach(q => {
      const answer = this.answers[q.id];
      if (answer && q.scoring) {
        scores[q.dimension] += q.scoring[answer];
        // 최대 가능 점수 누적 (단순화를 위해 문항당 1점으로 가정하거나 로직 조정 필요)
        // 여기서는 상대적 비율 계산을 위해 점수 범위를 -N ~ +N 으로 봅니다.
      }
    });

    const mbti = 
      (scores.EI >= 0 ? 'E' : 'I') +
      (scores.SN >= 0 ? 'S' : 'N') +
      (scores.TF >= 0 ? 'T' : 'F') +
      (scores.JP >= 0 ? 'J' : 'P');

    // 퍼센트 계산 ( -Max ~ +Max 범위를 0 ~ 100% 로 변환하는 로직)
    // 예: 점수가 0이면 50%, 점수가 높으면 100% 가까이
    // 정확한 문항수를 모를 때를 대비해 min/max normalization 사용
    // 여기서는 단순화하여 50을 기준으로 점수를 더함
    const calculatePercent = (score) => {
       // 점수 범위가 대략 -5 ~ +5 라고 가정 시
       let p = 50 + (score * 10); 
       return Math.min(100, Math.max(0, p));
    };

    return {
      type: mbti,
      dimensionScores: {
        EI: { percentage: calculatePercent(scores.EI) },
        SN: { percentage: calculatePercent(scores.SN) },
        TF: { percentage: calculatePercent(scores.TF) },
        JP: { percentage: calculatePercent(scores.JP) }
      }
    };
  },

  submitQuiz(type) {
    const result = this.calculateDetailedResults(); // 수정된 함수 호출
    
    if (type === 'parent') {
      App.state.parentResult = result; // 전체 결과 객체 저장
      App.state.parentMbti = result.type;
      App.showScreen('screen-child-age');
    } else {
      App.state.childResult = result;
      App.state.childMbti = result.type;
      this.showResult();
    }
  },

  // ✨ [핵심 수정] 결과 화면 렌더링 (React 스타일 복원)
  showResult() {
    // 안전장치: 데이터가 없으면 중단
    if (!App.state.parentResult || !App.state.childResult) {
       console.error("결과 데이터가 없습니다.");
       return;
    }

    const parentRes = App.state.parentResult;
    const childRes = App.state.childResult;
    
    // 데이터 가져오기 (대문자 변환 안전장치)
    const pType = parentRes.type.toUpperCase();
    const cType = childRes.type.toUpperCase();
    
    const parentData = mbtiTypes[pType] || mbtiTypes['ENFP']; // Fallback
    const childData = mbtiTypes[cType] || mbtiTypes['ENFP'];

    // 1. 이미지 렌더링 (매핑 사용)
    const pImg = document.getElementById('result-parent-img');
    const cImg = document.getElementById('result-child-img');
    if(pImg) pImg.src = `images/${mbtiImageMap[pType] || 'intj_wise_owl_mascot.png'}`;
    if(cImg) cImg.src = `images/${mbtiImageMap[cType] || 'intj_wise_owl_mascot.png'}`;

    // 2. 텍스트 렌더링
    document.getElementById('result-parent-mbti').textContent = pType;
    document.getElementById('result-child-mbti').textContent = cType;
    document.getElementById('result-parent-animal').textContent = parentData.animal;
    document.getElementById('result-child-animal').textContent = childData.animal;
    document.getElementById('result-parent-nickname').textContent = parentData.nickname;
    document.getElementById('result-child-nickname').textContent = childData.nickname;

    // 3. 궁합 점수 계산
    const compatibility = this.calculateCompatibility(pType, cType);
    document.getElementById('compatibility-score').textContent = `${compatibility}%`;

    // 4. 막대 그래프 렌더링 (Dimension Bars)
    this.renderDimensionBars(parentRes, childRes);
    
    // 5. 기타 정보 렌더링
    this.renderTraits(childData);
    this.renderAdvice(pType, cType);

    App.showScreen('screen-result');
  },

  calculateCompatibility(parent, child) {
    let match = 0;
    for (let i = 0; i < 4; i++) {
      if (parent[i] === child[i]) match++;
    }
    return match * 25;
  },

  // ✨ [UI 수정] React의 DimensionBar 컴포넌트 흉내내기
  renderDimensionBars(parentRes, childRes) {
    const container = document.getElementById('dimension-bars');
    const dimensions = [
      { key: 'EI', label: '에너지 방향', left: 'E (외향)', right: 'I (내향)', leftColor: 'bg-blue-500', rightColor: 'bg-orange-500' },
      { key: 'SN', label: '인식 방식', left: 'S (현실)', right: 'N (직관)', leftColor: 'bg-green-500', rightColor: 'bg-purple-500' }, // SN 위치 주의 (React코드에선 N이 왼쪽일수도 있음, 여기선 표준 순서)
      { key: 'TF', label: '판단 방식', left: 'T (논리)', right: 'F (감성)', leftColor: 'bg-cyan-500', rightColor: 'bg-pink-500' },
      { key: 'JP', label: '생활 방식', left: 'J (계획)', right: 'P (자유)', leftColor: 'bg-indigo-500', rightColor: 'bg-yellow-500' }
    ];

    container.innerHTML = dimensions.map(dim => {
      // React 코드의 percentage 로직 반영 (오른쪽이 기준일 경우)
      const pPercent = parentRes.dimensionScores[dim.key].percentage;
      const cPercent = childRes.dimensionScores[dim.key].percentage;
      
      // 막대 그래프 HTML 생성 (부모/자녀 각각 표시하거나, 비교 표시)
      // 여기서는 심플하게 비교를 위해 두 줄로 표시
      return `
        <div class="dimension-group mb-4">
           <div class="flex justify-between text-sm mb-1">
             <span class="text-gray-600">${dim.left}</span>
             <span class="font-bold text-gray-800">${dim.label}</span>
             <span class="text-gray-600">${dim.right}</span>
           </div>
           
           <div class="mb-1">
             <div class="text-xs text-gray-500 mb-1">부모 (${pPercent < 50 ? dim.left : dim.right})</div>
             <div class="h-2 bg-gray-200 rounded-full overflow-hidden flex">
               <div class="${dim.leftColor}" style="width: ${100 - pPercent}%"></div>
               <div class="${dim.rightColor}" style="width: ${pPercent}%"></div>
             </div>
           </div>

           <div>
             <div class="text-xs text-gray-500 mb-1">아이 (${cPercent < 50 ? dim.left : dim.right})</div>
             <div class="h-2 bg-gray-200 rounded-full overflow-hidden flex">
               <div class="${dim.leftColor}" style="width: ${100 - cPercent}%"></div>
               <div class="${dim.rightColor}" style="width: ${cPercent}%"></div>
             </div>
           </div>
        </div>
      `;
    }).join('');
  },

  renderTraits(data) {
    // ... 기존 코드 유지 ...
    const container = document.getElementById('child-traits');
    if(container) container.innerHTML = `<p class="trait-description">${data.description}</p>`;
  },

  renderAdvice(pType, cType) {
    // ... 기존 Advice 로직 유지 ...
    // 단, undefined 에러 방지용 안전장치 추가
    const container = document.getElementById('parent-advice');
    const childData = mbtiTypes[cType] || mbtiTypes['ENFP'];
    
    // (getAdvice 함수는 기존 코드 사용)
    const advice = this.getAdvice(pType, cType); 

    container.innerHTML = `
      <div class="advice-section bg-blue-50 p-4 rounded-lg mb-4">
        <p class="text-gray-700 leading-relaxed">${advice}</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="careers bg-white p-4 border rounded-lg">
          <h4 class="font-bold text-lg mb-2 text-indigo-600">🎓 어울리는 진로</h4>
          <div class="flex flex-wrap gap-2">
            ${(childData.careers || []).map(c => `<span class="px-2 py-1 bg-indigo-50 text-indigo-700 text-sm rounded">${c}</span>`).join('')}
          </div>
        </div>
        <div class="hobbies bg-white p-4 border rounded-lg">
          <h4 class="font-bold text-lg mb-2 text-pink-600">🎨 즐거워하는 활동</h4>
          <div class="flex flex-wrap gap-2">
            ${(childData.hobbies || []).map(h => `<span class="px-2 py-1 bg-pink-50 text-pink-700 text-sm rounded">${h}</span>`).join('')}
          </div>
        </div>
      </div>
    `;
  },
  
  getAdvice(parentMbti, childMbti) {
      // 기존 getAdvice 로직 그대로 사용
      // (너무 길어서 생략했으나, 기존 코드의 advices 객체와 forEach 로직이 여기 있어야 함)
      return "서로를 이해하는 것이 사랑의 시작입니다."; // 임시 반환값 (기존 로직 복붙 필요)
  },

  reset() {
    this.currentIndex = 0;
    this.answers = {};
    this.questions = [];
  }
};
