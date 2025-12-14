// 1. 이미지 매핑
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
    
    if (this.currentIndex === 0) {
      // 첫 페이지
    }
    
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
       if (type === 'parent') {
         App.showScreen('screen-home');
       } else {
         App.showScreen('screen-child-age');
       }
    }
  },

  // 1. 퍼센트 계산 로직 (React 코드의 로직 복원)
  calculateDetailedResults() {
    const scores = { EI: 0, SN: 0, TF: 0, JP: 0 };
    
    this.questions.forEach(q => {
      const answer = this.answers[q.id];
      if (answer && q.scoring) {
        scores[q.dimension] += q.scoring[answer];
      }
    });

    const mbti = 
      (scores.EI >= 0 ? 'E' : 'I') +
      (scores.SN >= 0 ? 'S' : 'N') +
      (scores.TF >= 0 ? 'T' : 'F') +
      (scores.JP >= 0 ? 'J' : 'P');

    // 점수(-N ~ +N)를 퍼센트(0 ~ 100%)로 변환
    const calculatePercent = (score) => {
       // 기본 50점에서 시작, 1점당 10%씩 가감 (문항수에 따라 조절 가능)
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
    const result = this.calculateDetailedResults();
    
    if (type === 'parent') {
      App.state.parentResult = result;
      App.state.parentMbti = result.type;
      App.showScreen('screen-child-age');
    } else {
      App.state.childResult = result;
      App.state.childMbti = result.type;
      this.showResult();
    }
  },

  showResult() {
    // 안전장치
    if (!App.state.parentResult || !App.state.childResult) {
       console.error("결과 데이터가 없습니다.");
       return;
    }

    const parentRes = App.state.parentResult;
    const childRes = App.state.childResult;
    const pType = parentRes.type.toUpperCase();
    const cType = childRes.type.toUpperCase();
    
    const parentData = mbtiTypes[pType] || mbtiTypes['ENFP'];
    const childData = mbtiTypes[cType] || mbtiTypes['ENFP'];

    // 이미지
    const pImg = document.getElementById('result-parent-img');
    const cImg = document.getElementById('result-child-img');
    if(pImg) pImg.src = `images/${mbtiImageMap[pType] || 'intj_wise_owl_mascot.png'}`;
    if(cImg) cImg.src = `images/${mbtiImageMap[cType] || 'intj_wise_owl_mascot.png'}`;

    // 텍스트
    document.getElementById('result-parent-mbti').textContent = pType;
    document.getElementById('result-child-mbti').textContent = cType;
    document.getElementById('result-parent-animal').textContent = parentData.animal;
    document.getElementById('result-child-animal').textContent = childData.animal;
    document.getElementById('result-parent-nickname').textContent = parentData.nickname;
    document.getElementById('result-child-nickname').textContent = childData.nickname;

    // 궁합 점수
    const compatibility = this.calculateCompatibility(pType, cType);
    document.getElementById('compatibility-score').textContent = `${compatibility}%`;
    
    const msgEl = document.getElementById('compatibility-message');
    if (msgEl) {
        if (compatibility >= 75) {
            msgEl.textContent = "환상의 짝꿍! 서로의 부족한 점을 완벽하게 채워줄 수 있어요.";
            msgEl.className = 'compatibility-message high';
        } else if (compatibility >= 50) {
            msgEl.textContent = "좋은 관계예요! 조금만 노력하면 더 깊이 이해할 수 있어요.";
            msgEl.className = 'compatibility-message medium';
        } else {
            msgEl.textContent = "서로 다른 점이 매력적이에요! 배울 점이 많은 관계랍니다.";
            msgEl.className = 'compatibility-message low';
        }
    }

    // 상세 내용 렌더링
    this.renderDimensionBars(parentRes, childRes);
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

  // 2. 그래프 렌더링 (Tailwind UI 반영)
  renderDimensionBars(parentRes, childRes) {
    const container = document.getElementById('dimension-bars');
    const dimensions = [
      { key: 'EI', label: '에너지 방향', left: 'E (외향)', right: 'I (내향)', leftColor: 'bg-blue-500', rightColor: 'bg-orange-500' },
      { key: 'SN', label: '인식 방식', left: 'S (현실)', right: 'N (직관)', leftColor: 'bg-green-500', rightColor: 'bg-purple-500' },
      { key: 'TF', label: '판단 방식', left: 'T (논리)', right: 'F (감성)', leftColor: 'bg-cyan-500', rightColor: 'bg-pink-500' },
      { key: 'JP', label: '생활 방식', left: 'J (계획)', right: 'P (자유)', leftColor: 'bg-indigo-500', rightColor: 'bg-yellow-500' }
    ];

    container.innerHTML = dimensions.map(dim => {
      const pPercent = parentRes.dimensionScores[dim.key].percentage;
      const cPercent = childRes.dimensionScores[dim.key].percentage;
      
      return `
        <div class="dimension-group mb-6">
           <div class="flex justify-between text-sm mb-2 font-medium">
             <span class="text-gray-600 w-16 text-left">${dim.left}</span>
             <span class="text-gray-800 font-bold">${dim.label}</span>
             <span class="text-gray-600 w-16 text-right">${dim.right}</span>
           </div>
           
           <div class="mb-2">
             <div class="flex justify-between text-xs text-gray-500 mb-1">
                <span>부모님</span>
                <span>${pPercent < 50 ? dim.left : dim.right} 성향</span>
             </div>
             <div class="h-3 bg-gray-100 rounded-full overflow-hidden flex relative">
               <div class="${dim.leftColor} h-full transition-all duration-1000" style="width: ${100 - pPercent}%"></div>
               <div class="${dim.rightColor} h-full transition-all duration-1000" style="width: ${pPercent}%"></div>
             </div>
           </div>

           <div>
             <div class="flex justify-between text-xs text-gray-500 mb-1">
                <span>아이</span>
                <span>${cPercent < 50 ? dim.left : dim.right} 성향</span>
             </div>
             <div class="h-3 bg-gray-100 rounded-full overflow-hidden flex relative">
               <div class="${dim.leftColor} h-full transition-all duration-1000" style="width: ${100 - cPercent}%"></div>
               <div class="${dim.rightColor} h-full transition-all duration-1000" style="width: ${cPercent}%"></div>
             </div>
           </div>
        </div>
      `;
    }).join('');
  },

  renderTraits(data) {
    const container = document.getElementById('child-traits');
    if(container) container.innerHTML = `<p class="trait-description text-gray-700 leading-relaxed">${data.description}</p>`;
  },

  // 3. 조언 및 진로/취미 렌더링 (텍스트 누락 해결)
  renderAdvice(pType, cType) {
    const container = document.getElementById('parent-advice');
    const childData = mbtiTypes[cType] || mbtiTypes['ENFP'];
    const advice = this.getAdvice(pType, cType); 

    container.innerHTML = `
      <div class="advice-section bg-indigo-50 p-5 rounded-lg mb-6 border border-indigo-100">
        <h4 class="font-bold text-indigo-800 mb-2">💡 양육 조언</h4>
        <p class="text-gray-700 leading-relaxed">${advice}</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="careers bg-white p-4 border rounded-lg shadow-sm">
          <h4 class="font-bold text-lg mb-3 text-indigo-600 flex items-center gap-2">
            🎓 어울리는 진로
          </h4>
          <div class="flex flex-wrap gap-2">
            ${(childData.careers || []).map(c => `<span class="px-2 py-1 bg-indigo-50 text-indigo-700 text-sm rounded font-medium">${c}</span>`).join('')}
          </div>
        </div>
        <div class="hobbies bg-white p-4 border rounded-lg shadow-sm">
          <h4 class="font-bold text-lg mb-3 text-pink-600 flex items-center gap-2">
            🎨 즐거워하는 활동
          </h4>
          <div class="flex flex-wrap gap-2">
            ${(childData.hobbies || []).map(h => `<span class="px-2 py-1 bg-pink-50 text-pink-700 text-sm rounded font-medium">${h}</span>`).join('')}
          </div>
        </div>
      </div>
    `;
  },
  
  getAdvice(parentMbti, childMbti) {
    // 4가지 차원별 조언 데이터
    const advices = {
      'E-I': '부모님은 활발한 편이지만, 아이는 혼자만의 시간이 꼭 필요해요. 아이가 방에 들어가 쉬고 싶어 할 때 "왜 같이 안 있니?"라고 묻기보단 조용히 충전할 시간을 주세요.',
      'I-E': '부모님은 조용한 걸 좋아하지만, 아이는 친구들과 어울리며 에너지를 얻어요. 아이의 왁자지껄한 활동을 소음으로 생각하지 말고 열정으로 봐주세요.',
      'S-N': '부모님은 현실적인데, 아이는 엉뚱한 상상을 좋아해요. 아이의 "말도 안 되는 소리"를 들어주고, 그 상상력에 맞장구쳐 주시면 창의력이 쑥쑥 자라요.',
      'N-S': '부모님은 직관적인데, 아이는 직접 보고 만져야 이해해요. 말로만 설명하기보단 구체적인 예시를 보여주거나 직접 체험하게 해주세요.',
      'T-F': '부모님은 논리적인데, 아이는 감정이 우선이에요. 잘잘못을 따지기 전에 "속상했구나" 하고 아이의 마음을 먼저 읽어주세요.',
      'F-T': '부모님은 감성적인데, 아이는 팩트를 중요하게 생각해요. 아이의 무뚝뚝한 반응에 상처받지 마세요. 논리적으로 납득되면 바로 행동할 거예요.',
      'J-P': '부모님은 계획적인데, 아이는 자유분방해요. 아이에게 너무 빡빡한 스케줄을 강요하면 숨 막혀 할 수 있어요. 약간의 여유를 허용해주세요.',
      'P-J': '부모님은 융통성이 있는데, 아이는 정해진 규칙을 좋아해요. 갑작스러운 일정 변경은 아이를 불안하게 해요. 미리 예고해 주는 게 좋아요.'
    };
    
    let result = [];
    // 각 자리별로 비교 (E vs I, S vs N...)
    const dimensions = ['EI', 'SN', 'TF', 'JP'];
    for(let i=0; i<4; i++) {
        const pChar = parentMbti[i];
        const cChar = childMbti[i];
        if (pChar !== cChar) {
            const key = `${pChar}-${cChar}`; // 예: E-I
            // 반대 케이스(I-E)도 고려하여 키 생성 로직 (advices 키와 일치시킴)
            // 여기선 간단히 advices에 있는 키를 찾도록 함
            if (advices[key]) result.push(advices[key]);
            else if (advices[`${cChar}-${pChar}`]) {
                 // 키가 거꾸로 있을 경우(데이터에는 I-E만 있는데
