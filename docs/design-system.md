# 태제대학교 디자인 시스템

## 🎨 컬러 시스템

### Primary Colors - Cyan (#00BCD4)

- `primary-50`: #E0F7FA - 가장 연한 cyan
- `primary-100`: #B2EBF2
- `primary-200`: #80DEEA
- `primary-300`: #4DD0E1
- `primary-400`: #26C6DA
- `primary-500`: #00BCD4 - 기본 Primary
- `primary-600`: #00ACC1
- `primary-700`: #0097A7
- `primary-800`: #00838F
- `primary-900`: #006064 - 가장 진한 cyan

### Secondary Colors - Purple (#9C27B0)

- `secondary-50`: #F3E5F5
- `secondary-100`: #E1BEE7
- `secondary-200`: #CE93D8
- `secondary-300`: #BA68C8
- `secondary-400`: #AB47BC
- `secondary-500`: #9C27B0 - 기본 Secondary
- `secondary-600`: #8E24AA
- `secondary-700`: #7B1FA2
- `secondary-800`: #6A1B9A
- `secondary-900`: #4A148C

### Taejae Imperatives (핵심 가치 카드 색상)

1. **Imperative 1**: #00BCD4 (Cyan)
2. **Imperative 2**: #FF6B6B (Coral Red)
3. **Imperative 3**: #4ECDC4 (Teal)
4. **Imperative 4**: #FFD93D (Yellow)
5. **Imperative 5**: #6C5CE7 (Purple)

### Gradients

- **Primary Gradient**: `linear-gradient(135deg, #00BCD4 0%, #9C27B0 100%)`
- **Secondary Gradient**: `linear-gradient(135deg, #667EEA 0%, #764BA2 100%)`
- **Cyan Gradient**: `linear-gradient(135deg, #00BCD4 0%, #0097A7 100%)`
- **Purple Gradient**: `linear-gradient(135deg, #9C27B0 0%, #6A1B9A 100%)`
- **Hero Gradient**: `linear-gradient(180deg, rgba(0, 188, 212, 0.1) 0%, rgba(156, 39, 176, 0.1) 100%)`

### Base Colors

- **White**: #FFFFFF
- **Black**: #000000
- **Background**: #FFFFFF
- **Background Secondary**: #FAFAFA

### Text Colors

- **Text Primary**: #000000
- **Text Secondary**: #4A4A4A
- **Text Tertiary**: #6B6B6B
- **Text Disabled**: #9E9E9E

### Gray Scale

- `gray-50`: #FAFAFA
- `gray-100`: #F3F4F6
- `gray-200`: #E5E7EB
- `gray-300`: #D1D5DB
- `gray-400`: #9CA3AF
- `gray-500`: #6B7280
- `gray-600`: #4B5563
- `gray-700`: #374151
- `gray-800`: #1F2937
- `gray-900`: #111827

### Status Colors

- **Success**: #10B981
- **Warning**: #F59E0B
- **Error**: #EF4444
- **Info**: #3B82F6

---

## 📝 타이포그래피

### Font Family

**Instrument Sans** (Primary)

- Fallback: `system-ui, -apple-system, sans-serif`

### Font Weights

- **Regular**: 400
- **Medium**: 500
- **Semibold**: 600
- **Bold**: 700

### Heading Sizes

#### Desktop

- **H1**: 64px / Line-height: 1.1 / Weight: 500
- **H2**: 48px / Line-height: 1.2 / Weight: 500
- **H3**: 30px / Line-height: 1.3 / Weight: 500
- **H4**: 22px / Line-height: 1.35 / Weight: 500
- **H5**: 18px / Line-height: 1.4 / Weight: 500
- **H6**: 16px / Line-height: 1.5 / Weight: 500

#### Mobile

- **H1 Mobile**: 40px / Line-height: 1.2 / Weight: 500
- **H2 Mobile**: 32px / Line-height: 1.25 / Weight: 500
- **H3 Mobile**: 24px / Line-height: 1.35 / Weight: 500
- **H4 Mobile**: 18px / Line-height: 1.4 / Weight: 500

### Body Text

- **Body Large**: 18px / Line-height: 1.6 / Weight: 400
- **Body**: 16px / Line-height: 1.5 / Weight: 400
- **Body Small**: 14px / Line-height: 1.5 / Weight: 400
- **Body X-Small**: 12px / Line-height: 1.5 / Weight: 400

### Special Text

- **Navigation**: 15px / Line-height: 1.2 / Weight: 400
- **Navigation Mobile**: 14px / Line-height: 1.2 / Weight: 400
- **Link**: 16px / Line-height: 1.2 / Weight: 500
- **Link Small**: 14px / Line-height: 1.2 / Weight: 500
- **Button**: 16px / Line-height: 1 / Weight: 500
- **Button Small**: 14px / Line-height: 1 / Weight: 500
- **Caption**: 12px / Line-height: 1.4 / Weight: 400

---

## 📐 Spacing System

### Base Spacing

- **xs**: 4px
- **sm**: 8px
- **md**: 16px
- **lg**: 24px
- **xl**: 32px
- **2xl**: 48px
- **3xl**: 64px
- **4xl**: 96px

### Extended Spacing (Tailwind)

- **18**: 72px (4.5rem)
- **88**: 352px (22rem)
- **120**: 480px (30rem)
- **128**: 512px (32rem)
- **144**: 576px (36rem)

---

## 🔲 Border Radius

- **none**: 0
- **sm**: 4px
- **default**: 8px
- **md**: 12px
- **lg**: 16px
- **xl**: 24px
- **2xl**: 32px
- **full**: 9999px

---

## 🎭 Shadows

### Standard Shadows

- **xs**: `0 1px 2px rgba(0, 0, 0, 0.05)`
- **sm**: `0 2px 4px rgba(0, 0, 0, 0.06)`
- **default**: `0 4px 6px rgba(0, 0, 0, 0.07)`
- **md**: `0 6px 10px rgba(0, 0, 0, 0.08)`
- **lg**: `0 10px 15px rgba(0, 0, 0, 0.1)`
- **xl**: `0 20px 25px rgba(0, 0, 0, 0.1)`
- **2xl**: `0 25px 50px rgba(0, 0, 0, 0.12)`

### Special Shadows

- **inner**: `inset 0 2px 4px rgba(0, 0, 0, 0.06)`
- **cyan**: `0 10px 40px rgba(0, 188, 212, 0.2)`
- **purple**: `0 10px 40px rgba(156, 39, 176, 0.2)`

---

## 📱 반응형 브레이크포인트

### 커스텀 브레이크포인트

- **Mobile**: < 768px
- **Tablet**: 768px - 1919px
- **Desktop**: ≥ 1920px

### Tailwind 기본 브레이크포인트

- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px
- **3xl**: 1920px

---

## 🎬 애니메이션

### Transitions

- **fast**: 150ms
- **base**: 250ms
- **slow**: 350ms
- **slower**: 500ms

### Animations

- `fade-in`: 0.3s ease-in
- `fade-out`: 0.3s ease-out
- `slide-up`: 0.3s ease-out
- `slide-down`: 0.3s ease-out
- `slide-left`: 0.3s ease-out
- `slide-right`: 0.3s ease-out
- `scale-up`: 0.3s ease-out
- `spin-slow`: 3s linear infinite
- `pulse-slow`: 3s cubic-bezier(0.4, 0, 0.6, 1) infinite
- `gradient`: 3s ease infinite

---

## 📊 Z-Index Scale

- **dropdown**: 10
- **modal-backdrop**: 40
- **modal**: 50
- **sticky**: 60
- **fixed**: 70
- **tooltip**: 80
- **notification**: 90
- **max**: 100

---

## 🔧 피그마 변수 설정 가이드

### 1. Color Variables

피그마에서 다음과 같이 Color Variables를 설정하세요:

#### Primary 색상 그룹

```
Colors/Primary/50 → #E0F7FA
Colors/Primary/100 → #B2EBF2
Colors/Primary/200 → #80DEEA
Colors/Primary/300 → #4DD0E1
Colors/Primary/400 → #26C6DA
Colors/Primary/500 → #00BCD4
Colors/Primary/600 → #00ACC1
Colors/Primary/700 → #0097A7
Colors/Primary/800 → #00838F
Colors/Primary/900 → #006064
```

#### Secondary 색상 그룹

```
Colors/Secondary/50 → #F3E5F5
Colors/Secondary/100 → #E1BEE7
Colors/Secondary/200 → #CE93D8
Colors/Secondary/300 → #BA68C8
Colors/Secondary/400 → #AB47BC
Colors/Secondary/500 → #9C27B0
Colors/Secondary/600 → #8E24AA
Colors/Secondary/700 → #7B1FA2
Colors/Secondary/800 → #6A1B9A
Colors/Secondary/900 → #4A148C
```

#### Imperatives 색상 그룹

```
Colors/Imperatives/1 → #00BCD4
Colors/Imperatives/2 → #FF6B6B
Colors/Imperatives/3 → #4ECDC4
Colors/Imperatives/4 → #FFD93D
Colors/Imperatives/5 → #6C5CE7
```

### 2. Typography Variables

```
Typography/H1/Desktop → 64px / 500 / 1.1
Typography/H1/Mobile → 40px / 500 / 1.2
Typography/H2/Desktop → 48px / 500 / 1.2
Typography/H2/Mobile → 32px / 500 / 1.25
Typography/H3/Desktop → 30px / 500 / 1.3
Typography/H3/Mobile → 24px / 500 / 1.35
Typography/H4/Desktop → 22px / 500 / 1.35
Typography/H4/Mobile → 18px / 500 / 1.4
Typography/Body → 16px / 400 / 1.5
Typography/Body/Large → 18px / 400 / 1.6
Typography/Body/Small → 14px / 400 / 1.5
Typography/Navigation → 15px / 400 / 1.2
Typography/Link → 16px / 500 / 1.2
Typography/Button → 16px / 500 / 1
```

### 3. Spacing Variables

```
Spacing/xs → 4
Spacing/sm → 8
Spacing/md → 16
Spacing/lg → 24
Spacing/xl → 32
Spacing/2xl → 48
Spacing/3xl → 64
Spacing/4xl → 96
```

### 4. Border Radius Variables

```
Radius/sm → 4
Radius/default → 8
Radius/md → 12
Radius/lg → 16
Radius/xl → 24
Radius/2xl → 32
Radius/full → 9999
```

### 5. Shadow Effect Styles

```
Effects/Shadow/xs → X:0 Y:1 Blur:2 Color:#000000 5%
Effects/Shadow/sm → X:0 Y:2 Blur:4 Color:#000000 6%
Effects/Shadow/md → X:0 Y:4 Blur:6 Color:#000000 7%
Effects/Shadow/lg → X:0 Y:10 Blur:15 Color:#000000 10%
Effects/Shadow/xl → X:0 Y:20 Blur:25 Color:#000000 10%
Effects/Shadow/cyan → X:0 Y:10 Blur:40 Color:#00BCD4 20%
Effects/Shadow/purple → X:0 Y:10 Blur:40 Color:#9C27B0 20%
```

---

## 🎯 사용 예시

### Tailwind CSS에서 사용

```html
<!-- Primary Button -->
<button class="btn-primary">시작하기</button>

<!-- Gradient Text -->
<h1 class="text-gradient">The Next Answer</h1>

<!-- Responsive Card -->
<div class="card card-hover">
  <h3 class="text-h3">카드 제목</h3>
  <p class="text-body">카드 내용</p>
</div>

<!-- Container -->
<div class="container-responsive section-padding">
  <!-- Content -->
</div>
```

### CSS Variables 직접 사용

```css
.custom-element {
  color: rgb(var(--color-primary));
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
}
```
