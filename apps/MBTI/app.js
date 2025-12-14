const App = {
  state: {
    parentMbti: null,
    childMbti: null,
    childAge: null,
    language: 'ko',
    theme: 'light'
  },
  
  init() {
    this.loadSavedSettings();
    this.bindEvents();
    this.renderMbtiGrid('parent-mbti-grid', 'parent');
    this.renderMbtiGrid('child-mbti-grid', 'child');
    this.renderAgeCards();
    this.renderAnimalGallery();
    this.updateLanguage();
    this.applyTheme();
  },
  
  loadSavedSettings() {
    const savedLang = localStorage.getItem('mbti-language');
    const savedTheme = localStorage.getItem('mbti-theme');
    if (savedLang) this.state.language = savedLang;
    if (savedTheme) this.state.theme = savedTheme;
    document.getElementById('language-select').value = this.state.language;
  },
  
  t(key) {
    return translations[this.state.language]?.[key] || translations['ko'][key] || key;
  },
  
  updateLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const text = this.t(key);
      if (text) el.textContent = text;
    });
    document.documentElement.lang = this.state.language;
    document.title = this.t('site.title');
  },
  
  applyTheme() {
    if (this.state.theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  },
  
  toggleTheme() {
    this.state.theme = this.state.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('mbti-theme', this.state.theme);
    this.applyTheme();
  },
  
  showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
      targetScreen.classList.add('active');
      window.scrollTo(0, 0);
    }
    const restartBtn = document.getElementById('restart-btn');
    if (screenId !== 'screen-home') {
      restartBtn.classList.remove('hidden');
    } else {
      restartBtn.classList.add('hidden');
    }
  },
  
  showToast(title, description) {
    const toast = document.getElementById('toast');
    const toastTitle = document.getElementById('toast-title');
    const toastDesc = document.getElementById('toast-description');
    toastTitle.textContent = title;
    toastDesc.textContent = description;
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('hidden'), 3000);
  },
  
  renderMbtiGrid(containerId, type) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const mbtiList = ['INTJ', 'INTP', 'ENTJ', 'ENTP', 'INFJ', 'INFP', 'ENFJ', 'ENFP', 'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ', 'ISTP', 'ISFP', 'ESTP', 'ESFP'];
    container.innerHTML = mbtiList.map(mbti => {
      const animal = animalNames[mbti];
      return `<button class="mbti-btn" data-mbti="${mbti}" data-type="${type}" data-testid="button-mbti-${mbti.toLowerCase()}">
        <span class="mbti-type">${mbti}</span>
        <span class="mbti-animal">${animal}</span>
      </button>`;
    }).join('');
    
    container.querySelectorAll('.mbti-btn').forEach(btn => {
      btn.addEventListener('click', (e) => this.handleMbtiSelect(e));
    });
  },
  
  handleMbtiSelect(e) {
    const btn = e.currentTarget;
    const mbti = btn.dataset.mbti;
    const type = btn.dataset.type;
    const container = btn.closest('.mbti-grid');
    container.querySelectorAll('.mbti-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    
    if (type === 'parent') {
      this.state.parentMbti = mbti;
      document.getElementById('selected-parent-mbti').textContent = mbti;
      document.getElementById('selected-parent-mbti').classList.remove('hidden');
      document.getElementById('no-parent-mbti').classList.add('hidden');
      document.getElementById('btn-confirm-parent').disabled = false;
    } else {
      this.state.childMbti = mbti;
      document.getElementById('selected-child-mbti').textContent = mbti;
      document.getElementById('selected-child-mbti').classList.remove('hidden');
      document.getElementById('no-child-mbti').classList.add('hidden');
      document.getElementById('btn-confirm-child').disabled = false;
    }
  },
  
  renderAgeCards() {
    const container = document.getElementById('age-cards');
    if (!container) return;
    const ages = [
      { key: 'elementary', icon: 'school', questions: 16 },
      { key: 'middle', icon: 'book', questions: 20 },
      { key: 'high', icon: 'graduation', questions: 20 },
      { key: 'adult', icon: 'user', questions: 24 }
    ];
    container.innerHTML = ages.map(age => `
      <div class="age-card" data-age="${age.key}" data-testid="card-age-${age.key}">
        <div class="age-icon ${age.key}">
          ${this.getAgeIcon(age.key)}
        </div>
        <h3 class="age-title" data-i18n="age.${age.key}">${this.t('age.' + age.key)}</h3>
        <p class="age-subtitle" data-i18n="age.${age.key}.subtitle">${this.t('age.' + age.key + '.subtitle')}</p>
      </div>
    `).join('');
    
    container.querySelectorAll('.age-card').forEach(card => {
      card.addEventListener('click', () => {
        this.state.childAge = card.dataset.age;
        document.getElementById('child-age-badge').textContent = this.t('age.' + this.state.childAge);
        document.getElementById('child-age-badge-2').textContent = this.t('age.' + this.state.childAge);
        this.showScreen('screen-child-mbti-option');
      });
    });
  },
  
  getAgeIcon(key) {
    const icons = {
      elementary: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>',
      middle: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
      high: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/><path d="M10 21v-3h4v3"/></svg>',
      adult: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>'
    };
    return icons[key] || icons.elementary;
  },
  
  renderAnimalGallery() {
    const container = document.getElementById('animal-gallery');
    if (!container) return;
    const mbtiList = ['INTJ', 'INTP', 'ENTJ', 'ENTP', 'INFJ', 'INFP', 'ENFJ', 'ENFP', 'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ', 'ISTP', 'ISFP', 'ESTP', 'ESFP'];
    container.innerHTML = mbtiList.map(mbti => {
      const data = mbtiTypes[mbti];
      const imgFile = animalImages[mbti];
      return `<div class="animal-card" data-testid="card-animal-${mbti.toLowerCase()}">
        <img src="images/${imgFile}" alt="${data.animal}" class="animal-img" onerror="this.style.display='none'">
        <div class="animal-info">
          <span class="animal-mbti">${mbti}</span>
          <span class="animal-name">${data.animal}</span>
        </div>
      </div>`;
    }).join('');
  },
  
  restart() {
    this.state.parentMbti = null;
    this.state.childMbti = null;
    this.state.childAge = null;
    document.querySelectorAll('.mbti-btn.selected').forEach(b => b.classList.remove('selected'));
    document.getElementById('selected-parent-mbti').classList.add('hidden');
    document.getElementById('no-parent-mbti').classList.remove('hidden');
    document.getElementById('btn-confirm-parent').disabled = true;
    document.getElementById('selected-child-mbti').classList.add('hidden');
    document.getElementById('no-child-mbti').classList.remove('hidden');
    document.getElementById('btn-confirm-child').disabled = true;
    document.getElementById('hero-question-card').classList.remove('hidden');
    document.getElementById('hero-mbti-selector').classList.add('hidden');
    this.showScreen('screen-home');
    Quiz.reset();
  },
  
  bindEvents() {
    document.getElementById('language-select').addEventListener('change', (e) => {
      this.state.language = e.target.value;
      localStorage.setItem('mbti-language', this.state.language);
      this.updateLanguage();
      this.renderAgeCards();
    });
    
    document.getElementById('theme-toggle').addEventListener('click', () => this.toggleTheme());
    document.getElementById('logo-link').addEventListener('click', (e) => {
      e.preventDefault();
      this.restart();
    });
    document.getElementById('restart-btn').addEventListener('click', () => this.restart());
    document.getElementById('btn-restart-result').addEventListener('click', () => this.restart());
    
    document.getElementById('btn-know-mbti').addEventListener('click', () => {
      document.getElementById('hero-question-card').classList.add('hidden');
      document.getElementById('hero-mbti-selector').classList.remove('hidden');
    });
    
    document.getElementById('btn-take-quiz').addEventListener('click', () => {
      Quiz.start('parent');
    });
    
    document.getElementById('btn-back-home').addEventListener('click', () => {
      document.getElementById('hero-question-card').classList.remove('hidden');
      document.getElementById('hero-mbti-selector').classList.add('hidden');
    });
    
    document.getElementById('btn-confirm-parent').addEventListener('click', () => {
      if (this.state.parentMbti) {
        this.showToast(this.t('toast.parentComplete'), this.t('toast.parentCompleteDesc'));
        this.showScreen('screen-child-age');
      }
    });
    
    document.getElementById('btn-child-know-mbti').addEventListener('click', () => {
      this.showScreen('screen-child-mbti-select');
    });
    
    document.getElementById('btn-child-take-quiz').addEventListener('click', () => {
      Quiz.start('child');
    });
    
    document.getElementById('btn-back-age').addEventListener('click', () => {
      this.showScreen('screen-child-age');
    });
    
    document.getElementById('btn-back-mbti-option').addEventListener('click', () => {
      this.showScreen('screen-child-mbti-option');
    });
    
    document.getElementById('btn-confirm-child').addEventListener('click', () => {
      if (this.state.childMbti) {
        this.showToast(this.t('toast.childComplete'), this.t('toast.childCompleteDesc'));
        Quiz.showResult();
      }
    });
    
    document.getElementById('btn-share').addEventListener('click', () => {
      const url = window.location.href.split('?')[0] + `?p=${this.state.parentMbti}&c=${this.state.childMbti}`;
      if (navigator.share) {
        navigator.share({ title: this.t('site.title'), url: url });
      } else {
        navigator.clipboard.writeText(url).then(() => {
          this.showToast(this.t('toast.copied'), this.t('toast.copiedDesc'));
        });
      }
    });
    
    document.getElementById('btn-parent-prev').addEventListener('click', () => Quiz.prevQuestion('parent'));
    document.getElementById('btn-parent-next').addEventListener('click', () => Quiz.nextQuestion('parent'));
    document.getElementById('btn-parent-submit').addEventListener('click', () => Quiz.submitQuiz('parent'));
    document.getElementById('btn-child-prev').addEventListener('click', () => Quiz.prevQuestion('child'));
    document.getElementById('btn-child-next').addEventListener('click', () => Quiz.nextQuestion('child'));
    document.getElementById('btn-child-submit').addEventListener('click', () => Quiz.submitQuiz('child'));
    
    this.checkUrlParams();
  },
  
  checkUrlParams() {
    const params = new URLSearchParams(window.location.search);
    const parentMbti = params.get('p');
    const childMbti = params.get('c');
    if (parentMbti && childMbti && mbtiTypes[parentMbti] && mbtiTypes[childMbti]) {
      this.state.parentMbti = parentMbti;
      this.state.childMbti = childMbti;
      Quiz.showResult();
    }
  }
};

document.addEventListener('DOMContentLoaded', () => App.init());
