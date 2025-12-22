// --- Supabase 설정 ---
// ⚠️ 1단계에서 복사한 본인의 값을 여기에 넣으세요
const SUPABASE_URL = 'https://https://rhiaahzaftsfnbaywcby.supabase.co';
const SUPABASE_KEY = 'sb_publishable_iDFJ6pJRKCbwaE1SQleLMg_mOHD8Q4z';

// Supabase 클라이언트 초기화
const { createClient } = supabase;
const sb = createClient(SUPABASE_URL, SUPABASE_KEY);

// --- 방명록 로직 ---
const guestbookForm = document.getElementById('guestbook-form');
const guestbookList = document.getElementById('guestbook-list');

document.addEventListener('DOMContentLoaded', () => {
    // 기존 페이지 로직들...
    
    // 방명록 데이터 불러오기
    loadGuestbook();
});

// 1. 방명록 쓰기 (Insert)
if (guestbookForm) {
    guestbookForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const nameInput = document.getElementById('gb-name');
        const msgInput = document.getElementById('gb-message');
        const btn = guestbookForm.querySelector('button');

        // 버튼 비활성화 (중복 전송 방지)
        btn.disabled = true;
        btn.innerText = '저장 중...';

        try {
            const { error } = await sb
                .from('guestbook')
                .insert({
                    name: nameInput.value,
                    message: msgInput.value
                });

            if (error) throw error;

            // 성공 시 폼 초기화 및 목록 갱신
            guestbookForm.reset();
            loadGuestbook(); 
            
        } catch (err) {
            console.error('Error:', err);
            alert('글 저장에 실패했습니다.');
        } finally {
            btn.disabled = false;
            btn.innerText = 'Post Message';
        }
    });
}

// 2. 방명록 읽기 (Select)
async function loadGuestbook() {
    if (!guestbookList) return;

    try {
        // 최신순으로 데이터 가져오기
        const { data, error } = await sb
            .from('guestbook')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;

        // 화면 그리기
        renderEntries(data);

    } catch (err) {
        console.error('불러오기 실패:', err);
        guestbookList.innerHTML = `<p class="text-muted">글을 불러오지 못했습니다.</p>`;
    }
}

// 3. 화면 렌더링
function renderEntries(entries) {
    guestbookList.innerHTML = '';

    if (!entries || entries.length === 0) {
        guestbookList.innerHTML = `
            <div class="empty-state text-center text-muted">
                <p>아직 작성된 방명록이 없습니다. 첫 번째 글을 남겨보세요!</p>
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

// XSS 방지용 함수
function escapeHtml(text) {
    if (!text) return "";
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// Translations
const translations = {
  en: {
    "nav.home": "Home",
    "nav.contact": "Contact",
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
    "privacy.content": "This is a standard privacy policy placeholder. We respect your privacy and are committed to protecting your personal data.",
    "privacy.section1.title": "1. Information We Collect",
    "privacy.section1.content": "We collect information that you provide directly to us, such as when you create an account, update your profile, or communicate with us.",
    "privacy.section2.title": "2. How We Use Your Information",
    "privacy.section2.content": "We use the information we collect to operate, maintain, and provide you with the features and functionality of the Service.",
    "privacy.section3.title": "3. Data Security",
    "privacy.section3.content": "We implement appropriate technical and organizational measures to protect the security of your personal information.",
    "privacy.section4.title": "4. Contact Us",
    "privacy.section4.content": "If you have any questions about this Privacy Policy, please contact us at:"
  },
  ko: {
    "nav.home": "홈",
    "nav.contact": "문의하기",
    "nav.privacy": "개인정보처리방침",
    "hero.subtitle": "모두의 놀이터 🚀",
    "app.lotto.title": "Lotto Pick",
    "app.lotto.desc": "오늘의 행운 번호를 뽑아보세요. 1등 당첨번호 통계에 기반한 로또 번호 생성!",
    "app.money.title": "Money Weather",
    "app.money.desc": "오늘의 경제 날씨를 확인하세요.",
    "app.mbti.title": "MBTI 궁합",
    "app.mbti.desc": "부모와 아이 동물 마스코트로 확인하는 성격 궁합.",
    "app.engineering.title": "공학 도구 모음",
    "app.engineering.desc": "RF 전송선로, 자성 코어, 전파, 코일 계산 등 다양한 공학 앱.",
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
    "privacy.content": "표준 개인정보처리방침 예시입니다. 우리는 귀하의 개인정보를 존중하며 보호하기 위해 최선을 다합니다.",
    "privacy.section1.title": "1. 수집하는 정보",
    "privacy.section1.content": "계정 생성, 프로필 업데이트, 당사와의 커뮤니케이션 등 귀하가 직접 제공하는 정보를 수집합니다.",
    "privacy.section2.title": "2. 정보 사용 방법",
    "privacy.section2.content": "수집한 정보는 서비스의 기능과 기능을 운영, 유지 및 제공하는 데 사용됩니다.",
    "privacy.section3.title": "3. 데이터 보안",
    "privacy.section3.content": "당사는 귀하의 개인 정보를 보호하기 위해 적절한 기술적 및 관리적 조치를 시행합니다.",
    "privacy.section4.title": "4. 문의하기",
    "privacy.section4.content": "본 개인정보 처리방침에 대해 궁금한 점이 있으시면 다음으로 문의해 주십시오:"
  }
};

// State
let currentLanguage = localStorage.getItem('language') || 'en';
let currentTheme = localStorage.getItem('theme') || 'dark';
let currentPage = 'home';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  initNavigation();
  initMobileMenu();
  initContactForm();
});

// Theme Functions
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

// Language Functions
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

// Navigation Functions
function initNavigation() {
  // Theme toggle buttons
  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
  document.getElementById('theme-toggle-mobile').addEventListener('click', toggleTheme);
  
  // Language toggle buttons
  document.getElementById('lang-toggle').addEventListener('click', toggleLanguage);
  document.getElementById('lang-toggle-mobile').addEventListener('click', toggleLanguage);
  
  // Page navigation
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
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  
  // Show target page
  const targetPage = document.getElementById(`page-${page}`);
  if (targetPage) {
    targetPage.classList.add('active');
    currentPage = page;
    
    // Update nav links
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-page') === page) {
        link.classList.add('active');
      }
    });
    
    // Scroll to top
    window.scrollTo(0, 0);
  }
}

// Mobile Menu Functions
function initMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
      mobileMenu.classList.add('hidden');
    }
  });
}

function closeMobileMenu() {
  document.getElementById('mobile-menu').classList.add('hidden');
}

// Contact Form
function initContactForm() {
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e) => {
    // For Netlify, let the form submit normally
    // For local testing, we can show an alert
    if (!window.location.hostname.includes('netlify')) {
      e.preventDefault();
      alert('Message sent! (This is a demo - in production, Netlify will handle the form)');
      form.reset();
    }
  });
}
