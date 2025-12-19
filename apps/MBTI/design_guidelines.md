# Design Guidelines: Children's MBTI Test Website

## Design Approach

**Reference-Based Approach**: Drawing inspiration from Duolingo (gamified learning), Khan Academy Kids (age-appropriate UI), and Kahoot (engaging quiz interface). The design prioritizes playfulness, clarity, and age-appropriate interaction patterns.

**Core Principles**:
- Playful engagement without overwhelming young users
- Clear visual hierarchy that guides children through the experience
- Age-appropriate complexity scaling
- Immediate visual feedback for all interactions

## Typography

**Font Stack**:
- Primary: Nunito (rounded, friendly sans-serif for all body text and questions)
- Accent: Fredoka One (bold, playful for headings and personality type titles)

**Type Scale**:
- Hero/Main headings: text-5xl to text-6xl, font-bold
- Section headings: text-3xl to text-4xl, font-bold
- Question text: text-xl (elementary), text-2xl (middle/high school)
- Body text: text-base to text-lg
- Buttons/CTAs: text-lg, font-semibold

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16 for consistent rhythm (p-4, gap-8, mb-12, py-16, etc.)

**Container Strategy**:
- Full-width sections: w-full with max-w-6xl mx-auto for content
- Quiz container: max-w-3xl mx-auto for focused reading
- Result cards: max-w-5xl for comfortable viewing

**Responsive Breakpoints**:
- Mobile-first single column
- Tablet (md:): 2-column grids for feature showcases
- Desktop (lg:): 3-column layouts for personality type grids

## Component Library

### 1. Hero Section (Landing Page)
- Large illustrated header with mascot characters representing different personality types
- Hero image: Colorful illustration of diverse children/cartoon characters in various activities representing different MBTI traits
- Center-aligned heading: "나에 대해 알아볼까요?" with friendly subheading
- Large, rounded CTA button with blurred background overlay on image
- Trust indicator: "이미 50,000명의 친구들이 참여했어요!" below CTA

### 2. Age Selection Interface
- Three large, card-based options in a horizontal grid (stacks on mobile)
- Each card features:
  - Large icon/illustration (school building, backpack, graduation cap)
  - Bold heading: "초등학생" / "중학생" / "고등학생"
  - Subtitle: "12개의 쉬운 질문" / "16개의 질문" / "20개의 질문"
  - Gentle border with rounded corners (rounded-2xl)
- Cards enlarge slightly on hover (transform scale)
- Full-width on mobile, 3-column grid on desktop (grid-cols-1 md:grid-cols-3)

### 3. Quiz Interface
- Fixed header with progress bar spanning full width
  - Progress bar: thick (h-3), rounded, with smooth transition animations
  - Question counter: "질문 3 / 12" in top-right
- Question card: centered, elevated appearance (shadow-lg), maximum width max-w-2xl
  - Large question number badge in top-left corner
  - Question text: generously spaced (leading-relaxed), prominent size
  - Answer options: 2-3 large buttons in vertical stack with gap-4
  - Each button: rounded-xl, text-left alignment, generous padding (px-8 py-6)
- Navigation: "이전" button (subtle, bottom-left) and auto-advance on selection

### 4. Results Page
- Hero section: Large personality type badge with illustrated character mascot
  - Type code (e.g., "ENFP") in oversized text (text-7xl)
  - Nickname: "열정적인 탐험가" with playful typography
- Multi-section layout:
  - Personality overview card (rounded-3xl, p-8)
  - Strengths grid (2-column on desktop): icon + description pairs
  - Famous characters section: 3-4 character cards showing relatable examples
  - Recommendation cards: "이런 활동을 좋아할 거예요" with illustrated suggestions
- Share section: 
  - Large "결과 공유하기" button
  - Social sharing icons in horizontal row (gap-4)
  - Download/screenshot option

### 5. Navigation
- Simple header: logo left, "다시 시작하기" link right
- Sticky positioning on scroll
- Minimal, unobtrusive design

### 6. Footer
- Centered layout with stacked sections
- Quick links: "MBTI란?" / "자주 묻는 질문" / "개인정보처리방침"
- Social media icons
- Fun fact or encouraging message for kids
- Copyright information

## Animations

Use sparingly and purposefully:
- Progress bar: smooth width transition (transition-all duration-300)
- Card selection: gentle scale and elevation change
- Results reveal: fade-in animation for personality description
- Button interactions: subtle scale on tap/click
- NO scroll-triggered animations or parallax effects

## Images

### Hero Section
**Main Image**: Illustration showing 4-6 diverse children/cartoon characters engaged in different activities (one reading, one painting, one playing sports, one solving puzzles). Bright, colorful, flat illustration style. Should convey inclusivity and different personality types visually. Placement: Full-width background with gradient overlay for text readability.

### Age Selection Cards
**Icons/Illustrations**: Simple, friendly icons for each education level:
- Elementary: Colorful backpack or playground illustration
- Middle School: School building or notebook illustration  
- High School: Graduation cap or books illustration

### Results Page
**Character Mascots**: Each of the 16 MBTI types gets a unique illustrated character/animal mascot. Examples:
- ENFP: Excited puppy or cheerful butterfly
- INTJ: Wise owl or thoughtful cat
- ESFJ: Friendly bee or helpful dolphin

Style: Cute, rounded, colorful illustrations with expressive faces. Placement: Large centered illustration (300-400px) above personality type heading.

**Famous Characters Section**: Use placeholder character silhouettes or simple illustrated representations (avoid copyright issues). Can be cartoon-style portraits.

## Accessibility

- All interactive elements minimum 44x44px touch targets
- High contrast text against backgrounds throughout
- Clear focus states on all buttons and interactive elements
- Consistent tab order for keyboard navigation
- Simple, age-appropriate language across all levels