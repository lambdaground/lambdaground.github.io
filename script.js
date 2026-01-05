// ==========================================
// 1. Supabase 설정 (본인 키로 변경 필수!)
// ==========================================
const SUPABASE_URL = 'https://rhiaahzaftsfnbaywcby.supabase.co'; 
const SUPABASE_KEY = 'sb_publishable_iDFJ6pJRKCbwaE1SQleLMg_mOHD8Q4z';

const { createClient } = supabase;
const sb = createClient(SUPABASE_URL, SUPABASE_KEY);

// ==========================================
// 2. Translations (다국어 설정)
// ==========================================
const translations = {
  en: {
    "nav.home": "Home",
    "nav.contact": "Contact",
    "nav.guestbook": "Guestbook",
    "nav.about": "About",
    "nav.privacy": "Privacy",
    "hero.subtitle": "Where Code Becomes Play 🚀",
    "app.lotto.title": "Lotto Pick",
    "app.lotto.desc": "Get your lucky numbers for today. Data-driven Lotto Numbers!",
    "app.money.title": "Money Weather",
    "app.money.desc": "Your daily financial forecast.",
    "app.mbti.title": "MBTI Compatibility",
    "app.mbti.desc": "Check compatibility with parent & child animal mascots.",
    "app.engineering.title": "Engineering Tools",
    "app.engineering.desc": "RF Transmission, Magnetic Core, Radio Wave, and Coil calculations.",
    "about.title": "About Lambda Ground",
    "about.intro": "Lambda Ground is a specialized web platform designed for engineers, researchers, and data enthusiasts. We provide web-based simulation tools and real-time data analysis dashboards.",
    "footer.rights": "All rights reserved.",
    "contact.title": "Contact Us",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "privacy.title": "Privacy Policy",
    "privacy.back": "Back to Home",
    "privacy.last_updated": "Last updated: December 14, 2025",
    "privacy.content": "This is a standard privacy policy placeholder.",
    "privacy.section1.title": "1. Information We Collect",
    "privacy.section1.content": "We collect information that you provide directly to us.",
    "privacy.section2.title": "2. How We Use Your Information",
    "privacy.section2.content": "We use the information we collect to operate the Service.",
    "privacy.section3.title": "3. Data Security",
    "privacy.section3.content": "We implement appropriate measures to protect your information.",
    "privacy.section4.title": "4. Contact Us",
    "privacy.section4.content": "If you have any questions, please contact us at:"
  },
  ko: {
    "nav.home": "홈",
    "nav.contact": "문의하기",
    "nav.guestbook": "방명록",
    "nav.about": "소개",
    "nav.privacy": "개인정보처리방침",
    "hero.subtitle": "모두의 놀이터 🚀",
    "app.lotto.title": "Lotto Pick",
    "app.lotto.desc": "오늘의 행운 번호를 뽑아보세요. 통계 기반 로또 번호 생성!",
    "app.money.title": "Money Weather",
    "app.money.desc": "오늘의 경제 날씨를 확인하세요.",
    "app.mbti.title": "MBTI 궁합",
    "app.mbti.desc": "부모와 아이 동물 마스코트로 확인하는 성격 궁합.",
    "app.engineering.title": "공학 도구 모음",
    "app.engineering.desc": "RF 전송선로, 자성 코어, 전파, 코일 계산 등 다양한 공학 앱.",
    "about.title": "서비스 소개",
    "about.intro": "Lambda Ground는 엔지니어와 연구자를 위한 전문 웹 플랫폼입니다. 웹 기반 시뮬레이션 도구와 데이터 분석 대시보드를 제공합니다.",
    "footer.rights": "모든 권리 보유.",
    "contact.title": "문의하기",
    "contact.name": "이름",
    "contact.email": "이메일",
    "contact.subject": "제목",
    "contact.message": "메시지",
    "contact.send": "메시지 보내기",
    "privacy.title": "개인정보처리방침",
    "privacy.back": "홈으로 돌아가기",
    "privacy.last_updated": "최종 업데이트: 2025년 12월 14일",
    "privacy.content": "표준 개인정보처리방침 예시입니다.",
    "privacy.section1.title": "1. 수집하는 정보",
    "privacy.section1.content": "귀하가 직접 제공하는 정보를 수집합니다.",
    "privacy.section2.title": "2. 정보 사용 방법",
    "privacy.section2.content": "수집한 정보는 서비스 운영에 사용됩니다.",
    "privacy.section3.title": "3. 데이터 보안",
    "privacy.section3.content": "개인 정보를 보호하기 위해 적절한 조치를 시행합니다.",
    "privacy.section4.title": "4. 문의하기",
    "privacy.section4.content": "궁금한 점이 있으시면 다음으로 문의해 주십시오:"
  }
};

// ==========================================
// 3. State & Initialization
// ==========================================
let currentLanguage = localStorage.getItem('language') || 'en';
let currentTheme = localStorage.getItem('theme') || 'dark';
let currentPage = 'home';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  initNavigation();
  initMobileMenu();
  initContactForm();
  loadGuestbook();
});

// ==========================================
// 4. Guestbook Logic (Supabase Version)
// ==========================================
const guestbookForm = document.getElementById('guestbook-form');
const guestbookList = document.getElementById('guestbook-list');

if (guestbookForm) {
  guestbookForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('gb-name');
    const msgInput = document.getElementById('gb-message');
    const btn = guestbookForm.querySelector('button');

    btn.disabled = true;
    btn.innerText = 'Sending...';

    try {
      const { error } = await sb
        .from('guestbook')
        .insert({
          name: nameInput.value,
          message: msgInput.value
        });
      if (error) throw error;
      guestbookForm.reset();
      loadGuestbook();
    } catch (err) {
      console.error('Error:', err);
      alert('Failed to post message. Please try again.');
    } finally {
      btn.disabled = false;
      btn.innerText = 'Post Message';
    }
  });
}

async function loadGuestbook() {
  if (!guestbookList) return;
  try {
    const { data, error } = await sb
      .from('guestbook')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) throw error;
    renderEntries(data);
  } catch (err) {
    console.error('Load Error:', err);
    guestbookList.innerHTML = `<p class="text-muted">Failed to load messages.</p>`;
  }
}

function renderEntries(entries) {
  guestbookList.innerHTML = '';
  if (!entries || entries.length === 0) {
    guestbookList.innerHTML = `
      <div class="empty-state text-center text-muted">
        <p>No messages yet. Be the first to leave one!</p>
      </div>`;
    return;
  }
  entries.forEach(entry => {
    const dateStr = new Date(entry.created_at).toLocaleString();
    const div = document.createElement('div');
    div.className = 'guestbook-item';
    div.innerHTML = `
      <div class="guestbook-header">
        <span class="gb-author">${escapeHtml(entry.name)}</span>
        <span class="gb-date">${dateStr}</span>
      </div>
      <p class="gb-content">${escapeHtml(entry.message)}</p>
    `;
    guestbookList.appendChild(div);
  });
}

function escapeHtml(text) {
  if (!text) return "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ==========================================
// 5. General UI Functions
// ==========================================
function initTheme() {
  if (currentTheme === 'dark') {
    document.body.classList.add('dark');
  }
  updateThemeIcons();
}

function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', currentTheme);
  document.body.classList.toggle('dark');
  updateThemeIcons();
}

function updateThemeIcons() {
  const sunIcons = document.querySelectorAll('#icon-sun, #icon-sun-mobile');
  const moonIcons = document.querySelectorAll('#icon-moon, #icon-moon-mobile');
  if (currentTheme === 'dark') {
    sunIcons.forEach(icon => icon.classList.remove('hidden'));
    moonIcons.forEach(icon => icon.classList.add('hidden'));
  } else {
    sunIcons.forEach(icon => icon.classList.add('hidden'));
    moonIcons.forEach(icon => icon.classList.remove('hidden'));
  }
}

function initLanguage() {
  updateLanguageUI();
  updateAllTranslations();
}

function toggleLanguage() {
  currentLanguage = currentLanguage === 'en' ? 'ko' : 'en';
  localStorage.setItem('language', currentLanguage);
  updateLanguageUI();
  updateAllTranslations();
}

function updateLanguageUI() {
  const langButtons = document.querySelectorAll('#lang-toggle, #lang-toggle-mobile');
  langButtons.forEach(btn => {
    btn.textContent = currentLanguage === 'en' ? '🇰🇷' : '🇺🇸';
  });
}

function updateAllTranslations() {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLanguage][key]) {
      el.textContent = translations[currentLanguage][key];
    }
  });
}

function initNavigation() {
  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
  document.getElementById('theme-toggle-mobile').addEventListener('click', toggleTheme);
  document.getElementById('lang-toggle').addEventListener('click', toggleLanguage);
  document.getElementById('lang-toggle-mobile').addEventListener('click', toggleLanguage);
  document.querySelectorAll('[data-page]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.getAttribute('data-page');
      navigateToPage(page);
      closeMobileMenu();
    });
  });
}

function navigateToPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const targetPage = document.getElementById(`page-${page}`);
  if (targetPage) {
    targetPage.classList.add('active');
    currentPage = page;
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-page') === page) {
        link.classList.add('active');
      }
    });
    window.scrollTo(0, 0);
  }
}

function initMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if(menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        mobileMenu.classList.add('hidden');
      }
    });
  }
}

function closeMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if(menu) menu.classList.add('hidden');
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  if(form) {
      form.addEventListener('submit', (e) => {
        if (!window.location.hostname.includes('netlify')) {
          e.preventDefault();
          alert('Message sent! (Demo mode)');
          form.reset();
        }
      });
  }
}
