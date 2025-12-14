const Quiz = {
  currentIndex: 0,
  answers: {},
  questions: [],
  type: 'parent',
  
  getQuestions(type, age) {
    if (type === 'parent') {
      return scenarioQuestionsAdult;
    }
    const questionsByAge = {
      elementary: scenarioQuestionsElementary,
      middle: scenarioQuestionsMiddle,
      high: scenarioQuestionsHigh,
      adult: scenarioQuestionsAdult
    };
    return questionsByAge[age] || scenarioQuestionsElementary;
  },
  
  start(type) {
    this.type = type;
    this.currentIndex = 0;
    this.answers = {};
    
    if (type === 'parent') {
      this.questions = this.getQuestions('parent');
      document.getElementById('parent-quiz-total').textContent = this.questions.length;
      App.showScreen('screen-parent-quiz');
    } else {
      this.questions = this.getQuestions('child', App.state.childAge);
      document.getElementById('child-quiz-total').textContent = this.questions.length;
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
          <button class="quiz-option ${selectedAnswer === 'A' ? 'selected' : ''}" data-answer="A" data-testid="option-a">
            <span class="option-label">A</span>
            <span class="option-text">${q.optionA.text}</span>
          </button>
          <button class="quiz-option ${selectedAnswer === 'B' ? 'selected' : ''}" data-answer="B" data-testid="option-b">
            <span class="option-label">B</span>
            <span class="option-text">${q.optionB.text}</span>
          </button>
          <button class="quiz-option ${selectedAnswer === 'C' ? 'selected' : ''}" data-answer="C" data-testid="option-c">
            <span class="option-label">C</span>
            <span class="option-text">${q.optionC.text}</span>
          </button>
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
      setTimeout(() => this.nextQuestion(), 300);
    }
  },
  
  updateNavButtons() {
    const prefix = this.type === 'parent' ? 'parent' : 'child';
    const prevBtn = document.getElementById(`btn-${prefix}-prev`);
    const nextBtn = document.getElementById(`btn-${prefix}-next`);
    const submitBtn = document.getElementById(`btn-${prefix}-submit`);
    const q = this.questions[this.currentIndex];
    const hasAnswer = this.answers[q.id];
    const isLast = this.currentIndex === this.questions.length - 1;
    const allAnswered = this.questions.every(q => this.answers[q.id]);
    
    if (this.currentIndex === 0) {
      if (this.type === 'parent') {
        prevBtn.querySelector('span').textContent = App.t('quiz.previous');
      } else {
        prevBtn.querySelector('span').textContent = App.t('quiz.ageSelect');
      }
    } else {
      prevBtn.querySelector('span').textContent = App.t('quiz.previous');
    }
    
    if (isLast) {
      nextBtn.classList.add('hidden');
      if (allAnswered) {
        submitBtn.classList.remove('hidden');
      } else {
        submitBtn.classList.add('hidden');
      }
    } else {
      submitBtn.classList.add('hidden');
      if (hasAnswer) {
        nextBtn.classList.remove('hidden');
      } else {
        nextBtn.classList.add('hidden');
      }
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
        document.getElementById('hero-question-card').classList.remove('hidden');
        document.getElementById('hero-mbti-selector').classList.add('hidden');
      } else {
        App.showScreen('screen-child-age');
      }
    }
  },
  
  calculateMbti() {
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
    
    return mbti;
  },
  
  submitQuiz(type) {
    const mbti = this.calculateMbti();
    
    if (type === 'parent') {
      App.state.parentMbti = mbti;
      App.showToast(App.t('toast.parentTestComplete'), App.t('toast.parentCompleteDesc'));
      App.showScreen('screen-child-age');
    } else {
      App.state.childMbti = mbti;
      App.showToast(App.t('toast.childComplete'), App.t('toast.childCompleteDesc'));
      this.showResult();
    }
  },
  
  showResult() {
    const parentMbti = App.state.parentMbti;
    const childMbti = App.state.childMbti;
    
    if (!parentMbti || !childMbti) return;
    
    const parentData = mbtiTypes[parentMbti];
    const childData = mbtiTypes[childMbti];
    
    document.getElementById('result-parent-mbti').textContent = parentMbti;
    document.getElementById('result-child-mbti').textContent = childMbti;
    document.getElementById('result-parent-animal').textContent = parentData.animal;
    document.getElementById('result-child-animal').textContent = childData.animal;
    document.getElementById('result-parent-nickname').textContent = parentData.nickname;
    document.getElementById('result-child-nickname').textContent = childData.nickname;
    document.getElementById('result-parent-img').src = `images/${animalImages[parentMbti]}`;
    document.getElementById('result-parent-img').alt = parentData.animal;
    document.getElementById('result-child-img').src = `images/${animalImages[childMbti]}`;
    document.getElementById('result-child-img').alt = childData.animal;
    
    const compatibility = this.calculateCompatibility(parentMbti, childMbti);
    document.getElementById('compatibility-score').textContent = `${compatibility}%`;
    
    const msgEl = document.getElementById('compatibility-message');
    if (compatibility >= 75) {
      msgEl.textContent = App.t('result.highCompat');
      msgEl.className = 'compatibility-message high';
    } else if (compatibility >= 50) {
      msgEl.textContent = App.t('result.medCompat');
      msgEl.className = 'compatibility-message medium';
    } else {
      msgEl.textContent = App.t('result.lowCompat');
      msgEl.className = 'compatibility-message low';
    }
    
    this.renderDimensionBars(parentMbti, childMbti);
    this.renderTraits(childData);
    this.renderStrengths(childData);
    this.renderActivities(childData);
    this.renderAdvice(parentMbti, childMbti);
    
    App.showScreen('screen-result');
  },
  
  calculateCompatibility(parent, child) {
    let match = 0;
    for (let i = 0; i < 4; i++) {
      if (parent[i] === child[i]) match++;
    }
    return match * 25;
  },
  
  renderDimensionBars(parentMbti, childMbti) {
    const container = document.getElementById('dimension-bars');
    const dimensions = [
      { key: 'EI', parent: parentMbti[0], child: childMbti[0] },
      { key: 'SN', parent: parentMbti[1], child: childMbti[1] },
      { key: 'TF', parent: parentMbti[2], child: childMbti[2] },
      { key: 'JP', parent: parentMbti[3], child: childMbti[3] }
    ];
    
    container.innerHTML = dimensions.map(dim => {
      const match = dim.parent === dim.child;
      return `<div class="dimension-bar">
        <div class="dim-header">
          <span class="dim-name" data-i18n="result.dim${dim.key}">${App.t('result.dim' + dim.key)}</span>
          ${match ? `<span class="dim-match">${App.t('result.match')}</span>` : ''}
        </div>
        <div class="dim-values">
          <div class="dim-value parent">
            <span class="dim-label">${App.t('result.parentLabel')}</span>
            <span class="dim-trait" data-i18n="result.trait${dim.parent}">${App.t('result.trait' + dim.parent)}</span>
          </div>
          <div class="dim-value child">
            <span class="dim-label">${App.t('result.childLabel')}</span>
            <span class="dim-trait" data-i18n="result.trait${dim.child}">${App.t('result.trait' + dim.child)}</span>
          </div>
        </div>
      </div>`;
    }).join('');
  },
  
  renderTraits(data) {
    const container = document.getElementById('child-traits');
    container.innerHTML = `<p class="trait-description">${data.description}</p>`;
  },
  
  renderStrengths(data) {
    const container = document.getElementById('child-strengths');
    container.innerHTML = data.strengths.map(s => `<span class="strength-badge">${s}</span>`).join('');
  },
  
  renderActivities(data) {
    const container = document.getElementById('child-activities');
    container.innerHTML = data.activities.map(a => `<div class="activity-item">${a}</div>`).join('');
  },
  
  renderAdvice(parentMbti, childMbti) {
    const container = document.getElementById('parent-advice');
    const childData = mbtiTypes[childMbti];
    const advice = this.getAdvice(parentMbti, childMbti);
    container.innerHTML = `
      <div class="advice-section">
        <p>${advice}</p>
      </div>
      <div class="careers-hobbies">
        <div class="careers">
          <h4>${App.t('result.suitableCareers')}</h4>
          <p>${childData.careers.join(', ')}</p>
        </div>
        <div class="hobbies">
          <h4>${App.t('result.favoriteHobbies')}</h4>
          <p>${childData.hobbies.join(', ')}</p>
        </div>
      </div>
    `;
  },
  
  getAdvice(parentMbti, childMbti) {
    const advices = {
      'E-I': '아이가 혼자만의 시간을 필요로 할 때 이해해주세요. 조용히 생각할 시간을 주면 더 좋은 결과를 보여줄 거예요.',
      'I-E': '아이의 사교적인 성향을 응원해주세요. 친구들과 어울리는 활동이 에너지를 충전해준답니다.',
      'S-N': '아이의 상상력과 창의성을 격려해주세요. 구체적인 예시와 함께 설명하면 이해가 더 잘 될 거예요.',
      'N-S': '아이에게 실제 경험과 구체적인 활동 기회를 많이 제공해주세요. 손으로 직접 해보는 것을 좋아해요.',
      'T-F': '아이의 감정을 먼저 공감해주세요. 논리적인 해결책보다 따뜻한 위로가 필요할 때가 많아요.',
      'F-T': '아이가 논리적으로 생각할 때 감정이 부족하다고 느끼지 마세요. 그것이 아이의 방식이에요.',
      'J-P': '아이에게 유연성을 허용해주세요. 계획이 바뀌어도 괜찮다는 것을 알려주세요.',
      'P-J': '아이가 계획을 세우고 지키려 할 때 격려해주세요. 구조와 일정이 안정감을 준답니다.'
    };
    
    let result = [];
    const pairs = [
      [parentMbti[0], childMbti[0], 'EI'],
      [parentMbti[1], childMbti[1], 'SN'],
      [parentMbti[2], childMbti[2], 'TF'],
      [parentMbti[3], childMbti[3], 'JP']
    ];
    
    pairs.forEach(([p, c, dim]) => {
      if (p !== c) {
        const key = `${p}-${c}`;
        if (advices[key]) result.push(advices[key]);
      }
    });
    
    if (result.length === 0) {
      return '부모님과 아이의 성향이 비슷해서 자연스럽게 서로를 이해할 수 있어요! 같은 관점으로 세상을 바라보기 때문에 소통이 편할 거예요.';
    }
    
    return result.join(' ');
  },
  
  reset() {
    this.currentIndex = 0;
    this.answers = {};
    this.questions = [];
  }
};
