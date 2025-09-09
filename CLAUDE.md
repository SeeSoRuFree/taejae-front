# CLAUDE.md

이 파일은 Claude Code (claude.ai/code)가 이 저장소의 코드 작업 시 사용할 가이드를 제공합니다.

## 명령어

### 개발

- `npm run dev` - http://localhost:3000에서 개발 서버 시작
- `npm run build` - 프로덕션 빌드 생성
- `npm run start` - 프로덕션 서버 시작

### 코드 품질

- `npm run lint` - ESLint 검사 실행
- `npm run format` - Prettier로 코드 포맷팅
- `npm run typecheck` - TypeScript 타입 검사 실행

## 아키텍처

### 기술 스택

- **프레임워크**: Next.js 15.4 with App Router
- **언어**: TypeScript (strict mode 활성화)
- **스타일링**: Tailwind CSS v3 (커스텀 디자인 시스템 포함)
- **상태 관리**: Zustand with persist middleware
- **국제화**: locale store를 활용한 커스텀 구현
- **애니메이션**: Framer Motion (복잡한 애니메이션용)
- **UI 컴포넌트**: CVA를 활용한 커스텀 컴포넌트

### 프로젝트 구조

```
app/                    # Next.js App Router 페이지
├── layout.tsx         # 루트 레이아웃 (폰트 및 locale 설정)
├── page.tsx           # 홈페이지 (모든 메인 섹션 포함)
└── globals.css        # 전역 스타일 및 Tailwind 레이어

components/            # 재사용 가능한 React 컴포넌트
├── sections/         # 페이지 섹션 컴포넌트
│   ├── hero.tsx
│   ├── taejae-imperatives.tsx
│   ├── global-campuses.tsx
│   └── voice-of-squad.tsx
└── ui/              # 기본 UI 컴포넌트
    ├── adaptive-carousel.tsx
    └── button.tsx

lib/                  # 핵심 유틸리티
├── store/           # Zustand 스토어
│   └── locale-store.ts
├── translations/    # i18n 유틸리티
└── types/          # TypeScript 타입 정의

messages/            # 번역 JSON 파일
├── ko.json         # 한국어 번역
└── en.json         # 영어 번역
```

### 주요 아키텍처 결정사항

1. **라우팅**: 현재 locale 기반 라우팅 없이 Next.js App Router 사용 중. URL 기반 라우팅 (/ko, /en)은 계획되어 있으나 아직 구현되지 않음.

2. **상태 관리**: 전역 상태에 Zustand 사용, locale 설정은 localStorage에 지속 저장.

3. **스타일링 시스템**:
   - 광범위한 커스텀 설정의 Tailwind CSS
   - 디자인 토큰용 CSS 변수 (opacity 지원을 위한 RGB 형식)
   - 커스텀 브레이크포인트: mobile (<768px), tablet (768-1919px), desktop (≥1920px)
   - 유틸리티 우선 접근법과 커스텀 컴포넌트 클래스

4. **이미지 처리**: localhost:3845 에셋 서버용으로 구성된 Next.js Image 컴포넌트.

5. **코드 스타일** (Prettier 설정):
   - JavaScript/TypeScript에서 세미콜론 없음
   - 문자열에 작은따옴표 사용
   - 2칸 들여쓰기
   - 후행 쉼표 (ES5 스타일)
   - 100자 줄 너비

## 디자인 시스템

### 색상

- **Primary**: Cyan (#00BCD4) 50-900 스케일
- **Secondary**: Purple (#9C27B0) 50-900 스케일
- **Imperatives**: Taejae Imperatives 카드용 5가지 고유 색상
- **그라디언트**: 히어로 섹션용 프라이머리 그라디언트 (cyan to purple)

### 타이포그래피

- **폰트**: Instrument Sans (시스템 폴백 포함)
- **반응형 크기**: 모바일/데스크톱 별도 크기 (예: H1: 데스크톱 64px, 모바일 40px)
- **폰트 굵기**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### 컴포넌트 패턴

- 모바일 우선 반응형 디자인
- 스타일링에 Tailwind 유틸리티 클래스 사용
- 모든 컴포넌트 props에 TypeScript 인터페이스 적용
- 애니메이션용 Framer Motion (설치됨, 패턴은 아직 미확립)

## 프로젝트 컨텍스트

태제대학교 공식 웹사이트입니다. project-plan.md의 주요 요구사항:

- **반응형 디자인**: 데스크톱/태블릿/모바일 3개 브레이크포인트
- **이중언어 지원**: 한국어(기본) 및 영어 토글 지원
- **성능**: Core Web Vitals 준수, 이미지 최적화
- **접근성**: WCAG 2.1 AA 표준

## MCP 서버

### Figma Dev Mode MCP

- Figma 디자인에서 UI 코드와 에셋 제공
- localhost 소스가 반환되면 public/assets에 다운로드하여 저장
- 외부 아이콘 패키지 추가 금지 - Figma 제공 에셋만 사용
- get_code 실패 시 작업 중단하고 사용자에게 알림
- 사용자 요청 없이 get_image로 디자인 해석 금지
- **get_code는 참고용으로만 사용**: 디자인 구조, 스타일, 폰트 등을 파악하는 용도
- **get_code 결과를 그대로 복사/붙여넣기 금지**: 반드시 실제 컴포넌트로 재구현
- **정적 코드를 동적 컴포넌트로 변환**: 상태 관리, props, 인터랙션 추가하여 재사용 가능하게 구현

#### figma-design-analyst 서브에이전트 사용

다음과 같은 경우에 figma-design-analyst 에이전트를 사용해야 합니다:

- **사용자가 "지금 선택해둔 피그마 디자인대로 작업해줘"라고 요청할 때**
- **피그마 선택 항목을 기반으로 구현 지시사항을 받아야 할 때**
- **복잡한 피그마 디자인을 분석하여 구조화된 구현 계획이 필요할 때**
- **다중 컴포넌트로 구성된 피그마 디자인의 전체적인 분석이 필요할 때**

figma-design-analyst는 피그마 디자인을 분석하여 구조화된 구현 지시사항을 제공하므로, 단순한 get_code 호출보다 복잡한 디자인 분석이 필요한 경우에 활용해야 합니다.
