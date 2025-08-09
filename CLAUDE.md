# CLAUDE.md

이 파일은 Claude Code (claude.ai/code)가 이 저장소의 코드 작업 시 사용할 가이드를 제공합니다.

## Commands

### 개발 관련

- `npm run dev` - 개발 서버를 http://localhost:3000 에서 시작
- `npm run build` - 프로덕션 빌드
- `npm run start` - 프로덕션 서버 시작

### 코드 품질 관리

- `npm run lint` - ESLint 검사 실행
- `npm run format` - Prettier로 코드 포맷팅
- `npm run typecheck` - TypeScript 타입 검사 실행

## 아키텍처

### 기술 스택

- **Framework**: Next.js 15.4 with App Router
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS v3
- **State Management**: Zustand with persist middleware
- **Internationalization**: locale store를 활용한 커스텀 구현

### 프로젝트 구조

- `app/` - Next.js App Router 페이지 및 레이아웃
  - 현재 [locale] 디렉토리 없이 루트 레벨 페이지를 사용 중
  - 다국어 구조가 계획되어 있지만 아직 구현되지 않음
- `components/` - 재사용 가능한 React 컴포넌트들
- `lib/` - 핵심 유틸리티와 비즈니스 로직
  - `store/` - Zustand 스토어 (locale 관리)
  - `translations/` - i18n 번역 유틸리티
  - `types/` - TypeScript 타입 정의
- `messages/` - JSON 번역 파일들 (ko.json, en.json)

### 주요 아키텍처 결정사항

1. **Routing**: 아직 locale 기반 라우팅 없이 Next.js App Router를 사용 중. 프로젝트 계획에 따르면 URL 기반 라우팅 (/ko, /en)이 구현되어야 함.

2. **State Management**: 전역 상태 관리에 Zustand를 사용하며, locale 설정은 localStorage에 지속적으로 저장됨.

3. **Path Aliases**: TypeScript가 루트 디렉토리로 매핑되는 `@/*` 별칭으로 구성됨.

4. **Image Handling**: Next.js Image 컴포넌트가 localhost:3845 assets 서버용으로 구성됨.

5. **스타일링 규칙**:
   - JavaScript/TypeScript에서 세미콜론 없음
   - 문자열에 작은따옴표 사용
   - 2칸 들여쓰기
   - 후행 쉼표 (ES5)
   - 100자 줄 너비

## 프로젝트 맥락

태제대학교(Taejae University) 공식 웹사이트 프로젝트입니다. project-plan.md의 주요 요구사항:

- **반응형 디자인**: Desktop (1920px), Tablet (768-1919px), Mobile (<768px)
- **이중언어 지원**: 한국어(기본) 및 영어, 언어 전환 기능
- **디자인 시스템**: Cyan 기본 색상 (#00BCD4), Instrument Sans 타이포그래피
- **주요 섹션**: Hero, Taejae Imperatives, Global Campuses, Voice of Squad, News, Footer

## 개발 노트

- 프로젝트 요구사항에서 모바일 우선 접근 방식이 지정됨
- 컴포넌트 재사용성을 극대화해야 함
- 성능 모니터링과 Core Web Vitals 준수가 우선순위
- WCAG 2.1 AA 접근성 표준을 따라야 함

# MCP 서버

## Figma Dev Mode MCP 규칙

- Figma Dev Mode MCP 서버는 이미지 및 SVG 에셋을 제공할 수 있는 끝점을 제공합니다.
- 중요: Figma Dev Mode MCP 서버가 이미지 또는 SVG에 대한 로컬 호스트 소스를 반환하는 경우 해당 이미지 또는 SVG 소스를 직접 사용하세요.
- 중요: 새로운 아이콘 패키지를 가져오거나 추가하지 마세요. 모든 에셋은 Figma 페이로드에 있어야 합니다.
- 중요: 로컬 호스트 소스가 제공되는 경우 입력 예시를 사용하거나 생성하지 마세요.
- 중요: get_code로 코드를 받아오는데 실패한경우 작업을 중단하고 사용자한테 피드백 하세요.
- 중요: 사용자 요청없이 get_image로 이미지로 읽어 디자인을 해석하지 마세요.
