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

## 코드 컨벤션 및 개발 규칙

### 코드 품질 규칙

1. **Critical Issues 우선 해결**: TypeScript 에러 → 성능 → 일관성 순서
2. **3-2-1 규칙**: 3번 이상 반복되는 코드는 즉시 컴포넌트화
3. **컴포넌트 제거 규칙**: 컴포넌트 제거 전 반드시 `grep -r "ComponentName"` 검색
4. **번역 키 우선 확인**: 새 텍스트 추가 전 기존 번역 키 검토
5. **상수화 원칙**: Magic Number 발견 시 즉시 `lib/constants`로 이동
6. **Error Handling 필수**: 모든 비동기 작업과 사용자 입력에 에러 처리 구현
7. **Loading States 필수**: 사용자 경험을 위한 로딩 상태 반드시 구현
8. **Image 최적화**: 모든 이미지는 Next.js Image 컴포넌트 사용 (width/height 명시)
9. **전역 상태 일관성**: Locale 등 전역 상태는 반드시 store를 통해 관리
10. **className 속성 규칙**: 스타일이 필요 없으면 속성 자체를 제거
11. **번역 시스템 fallback**: 사용자 친화적 에러 메시지 (`[Missing: key]`) 제공

### 프로젝트 구성 규칙

#### 컴포넌트 구조

- `components/layout/` - 페이지 레이아웃 (PageLayout 등)
- `components/sections/` - 페이지별 섹션 컴포넌트
- `components/ui/` - 재사용 가능한 기본 UI 컴포넌트
- `components/error/` - Error Boundary 컴포넌트

#### 에러 처리 시스템

- Error Boundaries: Class Component 기반, 개발/프로덕션 환경별 차별화
- PageLayout에 섹션별 Error Boundary 적용 필수

#### Loading 시스템

- `components/ui/loading.tsx` - 다양한 로딩 스피너
- `components/ui/skeleton.tsx` - 스켈레톤 컴포넌트
- `app/loading.tsx` - Next.js Suspense 지원

#### Constants 관리

- `lib/constants/assets.ts` - 이미지 경로 상수화
- `lib/constants/dimensions.ts` - 레이아웃 치수 상수화
- `lib/constants/index.ts` - 애니메이션, z-index, 색상 상수

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

1. **상태 관리**: 전역 상태에 Zustand 사용, locale 설정은 localStorage에 지속 저장.

2. **레이아웃 시스템**: PageLayout wrapper 컴포넌트로 Header/Footer 패턴 통합, 섹션별 Error Boundary 적용.

3. **에러 처리**: Class Component 기반 Error Boundary로 프로덕션급 에러 격리 및 사용자 친화적 fallback 제공.

4. **로딩 상태**: Next.js Suspense와 skeleton 컴포넌트를 활용한 포괄적인 로딩 상태 관리.

5. **국제화 시스템**:
   - 커스텀 번역 시스템 with 한국어 fallback
   - 타입 안전한 번역 키 관리
   - 사용자 친화적 에러 메시지 (`[Missing: key]`)

6. **상수 관리**: assets, dimensions, colors 등 체계적인 상수 관리 시스템.

7. **스타일링 시스템**:
   - 광범위한 커스텀 설정의 Tailwind CSS
   - 디자인 토큰용 CSS 변수 (opacity 지원을 위한 RGB 형식)
   - 커스텀 브레이크포인트: mobile (<768px), tablet (768-1919px), desktop (≥1920px)
   - 유틸리티 우선 접근법과 커스텀 컴포넌트 클래스

8. **이미지 최적화**: 모든 이미지에 Next.js Image 컴포넌트 사용, width/height 명시로 성능 최적화.

9. **코드 스타일** (Prettier 설정):
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

### 타이포그래피 및 폰트 시스템

#### 폰트 패밀리
- **기본 폰트**: Instrument Sans (`font-sans`) - 시스템 폴백 포함
- **serif 폰트**: EB Garamond (`font-eb-garamond`) - 제목 및 강조용
- **디스플레이 폰트**: Bodoni 72 (`font-bodoni`) - 심볼 및 특수 표시용
- **보조 sans 폰트**: Rethink Sans (`font-rethink-sans`) - 본문 보조용
- **기타**: Inter (`font-inter`), Playfair (`font-playfair`)

#### 폰트 사용 규칙
- **✅ 올바른 사용법**: Tailwind 폰트 클래스 사용 (`font-eb-garamond`, `font-bodoni`)
- **❌ 잘못된 사용법**: 직접 폰트명 사용 (`font-['EB_Garamond']`, `font-['Bodoni_72']`)
- **일관성 원칙**: 같은 용도의 텍스트는 동일한 폰트 패밀리 사용
- **폰트 폴백**: 모든 폰트는 적절한 시스템 폴백 포함

#### 반응형 타이포그래피
- **데스크톱/모바일 별도 크기**: 예시 H1 (데스크톱 64px, 모바일 40px)
- **폰트 굵기**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- **라인 하이트**: 제목 1.1-1.3, 본문 1.5-1.6
- **레터 스페이싱**: 큰 제목은 음수 값 사용 (예: -0.02em)

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
