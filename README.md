# 태제대학교 웹사이트

Taejae University 공식 홈페이지 프로젝트

## 기술 스택

- **Framework**: Next.js 15.4 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **상태 관리**: Zustand with persist middleware
- **다국어화**: locale store를 활용한 커스텀 구현
- **개발 도구**: ESLint, Prettier

## 시작하기

### 의존성 설치

먼저 프로젝트 의존성을 설치합니다:

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

개발 서버가 시작되면 http://localhost:3000 에서 확인할 수 있습니다.

### 프로덕션 빌드

```bash
npm run build
```

### 프로덕션 서버 실행

```bash
npm run start
```

## 사용 가능한 스크립트

- `npm run dev` - 개발 서버 실행 (http://localhost:3000)
- `npm run build` - 프로덕션 빌드 생성
- `npm run start` - 프로덕션 서버 실행
- `npm run lint` - ESLint 코드 검사 실행
- `npm run format` - Prettier로 코드 포맷팅
- `npm run typecheck` - TypeScript 타입 검사 실행

## 프로젝트 구조

```
├── app/
│   ├── layout.tsx       # 루트 레이아웃
│   ├── page.tsx         # 홈페이지
│   └── globals.css      # 전역 스타일
├── components/          # 재사용 가능한 React 컴포넌트
├── lib/                 # 핵심 유틸리티 및 비즈니스 로직
│   ├── store/          # Zustand 상태 관리 스토어
│   ├── translations/   # 다국어 번역 유틸리티
│   └── types/          # TypeScript 타입 정의
├── messages/           # 다국어 메시지 파일
│   ├── ko.json         # 한국어 번역
│   └── en.json         # 영어 번역
└── public/             # 정적 자산 (이미지, 아이콘 등)
```

## 다국어 지원

현재 다음 언어를 지원합니다:

- **한국어** (기본 언어)
- **영어**

언어 전환은 헤더의 언어 토글 버튼을 통해 가능합니다. 사용자의 언어 선택은 localStorage에 저장되어 다음 방문 시에도 유지됩니다.

## 반응형 디자인

프로젝트는 다음 브레이크포인트를 기준으로 반응형으로 설계되었습니다:

- **Desktop**: 1920px 이상
- **Tablet**: 768px - 1919px
- **Mobile**: 768px 미만

## 주요 기능

- **반응형 디자인**: 모든 디바이스에서 최적화된 사용자 경험
- **다국어 지원**: 한국어/영어 실시간 전환
- **성능 최적화**: Next.js Image 컴포넌트 및 최적화 기능 활용
- **접근성**: WCAG 2.1 AA 표준 준수
- **현대적 UI/UX**: Tailwind CSS를 활용한 모던 디자인

## 개발 가이드라인

### 코딩 스타일

- JavaScript/TypeScript에서 세미콜론 사용하지 않음
- 문자열에는 작은따옴표 사용
- 2칸 들여쓰기
- 후행 쉼표 (ES5 스타일)
- 최대 줄 너비 100자

### 컴포넌트 구조

- 재사용성을 고려한 컴포넌트 설계
- TypeScript strict mode 준수
- Props 타입 정의 필수

### 성능 최적화

- Core Web Vitals 지표 모니터링
- 이미지 최적화 및 lazy loading
- 코드 스플리팅 활용

## 프로젝트 정보

이 프로젝트는 태제대학교의 공식 웹사이트로, 대학의 비전과 가치를 전달하고 글로벌 캠퍼스 정보를 제공하는 것을 목표로 합니다.

### 주요 섹션

- **Hero**: 메인 배너 및 핵심 메시지
- **Taejae Imperatives**: 태제대학교의 핵심 가치
- **Global Campuses**: 전 세계 캠퍼스 정보
- **Voice of Squad**: 학생 및 교직원 인터뷰
- **News**: 최신 대학 소식
- **Footer**: 연락처 및 부가 정보

### 디자인 시스템

- **메인 컬러**: Cyan (#00BCD4)
- **타이포그래피**: Instrument Sans
- **모바일 우선** 반응형 디자인 접근
