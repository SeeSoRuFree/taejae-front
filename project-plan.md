# 태제대학교 홈페이지 프로젝트 플랜

## 프로젝트 개요

태제대학교(Taejae University) 공식 홈페이지 구축 프로젝트로, 현대적이고 사용자 친화적인 대학 웹사이트를 개발합니다.

## 핵심 기능 및 요구사항

### 1. 반응형 디자인 (3단계)

- **Desktop** (1920px): 풀 레이아웃, 3컬럼 그리드
- **Tablet** (768px - 1919px): 2컬럼 그리드, 조정된 네비게이션
- **Mobile** (< 768px): 단일 컬럼, 햄버거 메뉴

### 2. 다국어 지원

- 한국어 (기본)
- 영어
- 언어 전환 토글 버튼
- URL 기반 라우팅 (/ko, /en)

### 3. 디자인 시스템

#### 컬러 팔레트

- Primary: Cyan (#00BCD4 계열)
- Background: #FFFFFF
- Text Primary: #000000
- Gray: #F3F4F6
- Accent Colors: 그라데이션 효과 (Cyan to Purple)

#### 타이포그래피 (Instrument Sans)

- H1: 64px, Medium (500)
- H3: 30px, Medium (500)
- H4: 22px, Medium (500)
- Body: 16px, Regular (400)
- Nav Link: 15px, Regular (400)
- Text Link: 16px, Medium (500)

### 4. 주요 섹션 구성

#### 헤더

- 로고 (좌측)
- 메인 네비게이션 (중앙)
- 언어 선택 및 검색 (우측)
- 스크롤 시 고정 헤더

#### 히어로 섹션

- "The Next Answer" 메인 슬로건
- 동적 배경 이미지/비디오
- CTA 버튼

#### Taejae Imperatives (핵심 가치)

- 5개 카테고리 카드
- 번호별 색상 코딩 (1-5)
- 호버 애니메이션 효과
- 아이콘 및 설명 텍스트

#### Global Campuses

- 인터랙티브 세계 지도
- 한국 본교 표시
- 캠퍼스 위치 마커
- 클릭 시 상세 정보 모달

#### The Voice of Taejae Squad

- 학생/교직원 인터뷰 콘텐츠
- 이미지 갤러리
- 인용문 및 스토리
- 좌우 스크롤 캐러셀

#### Taejae Now (뉴스/공지)

- 최신 뉴스 카드
- 카테고리별 필터링
- 날짜 및 조회수 표시
- 더보기 페이지네이션

#### 푸터

- 대학 정보
- 빠른 링크
- 연락처 정보
- SNS 링크
- 저작권 정보

### 5. 기술 스택 권장사항

#### Frontend

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **상태관리**: Zustand 또는 Context API
- **애니메이션**: Framer Motion
- **국제화**: next-i18next

#### 개발 도구

- TypeScript
- ESLint & Prettier

### 6. 성능 최적화

- 이미지 최적화 (Next/Image)
- 코드 스플리팅
- Lazy Loading
- SEO 최적화
- Core Web Vitals 준수

### 7. 접근성 (WCAG 2.1 AA)

- 키보드 네비게이션
- 스크린 리더 지원
- 고대비 모드
- 포커스 인디케이터

### 8. 브라우저 지원

- Chrome (최신 2개 버전)
- Firefox (최신 2개 버전)
- Safari (최신 2개 버전)
- Edge (최신 2개 버전)
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 8+)

### 9. 추가 고려사항

- **검색 기능**: 전체 사이트 통합 검색
- **분석 도구**: Google Analytics 4 통합
- **CMS 연동**: Headless CMS 고려 (Strapi, Contentful)
- **폼 처리**: 입학 문의, 연락처 폼

## 주의사항

- 모바일 우선 접근 방식 채택
- 컴포넌트 재사용성 극대화
- 지속적인 성능 모니터링
- 정기적인 코드 리뷰 진행
