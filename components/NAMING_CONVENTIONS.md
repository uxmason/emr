# 컴포넌트 명명 규칙 (Component Naming Conventions)

## 기본 원칙

1. **PascalCase 사용**: 모든 컴포넌트는 PascalCase로 명명
2. **기능 기반 명명**: 컴포넌트의 실제 기능과 용도를 명확히 나타내는 이름 사용
3. **명확성 우선**: AI와 개발자가 모두 이해하기 쉬운 명확한 이름 사용
4. **일관성 유지**: 비슷한 기능의 컴포넌트는 비슷한 패턴 사용

## 명명 패턴

### 1. 단일 기능 컴포넌트
- **형식**: `[기능명]`
- **예시**: 
  - `Sidebar` - 사이드바
  - `Tooltip` - 툴팁
  - `Popup` - 팝업

### 2. 복합 기능 컴포넌트
- **형식**: `[주요기능][부가기능]` 또는 `[기능명][타입]`
- **예시**:
  - `PageHeader` - 페이지 헤더
  - `SlidePage` - 슬라이드되는 페이지
  - `ToggleSwitch` - 토글 스위치
  - `TabSelector` - 탭 선택기

### 3. 컨테이너 컴포넌트
- **형식**: `[기능명]Container`
- **예시**:
  - `ScrollableContainer` - 스크롤 가능한 컨테이너
  - `DraggableScrollContainer` - 드래그 가능한 스크롤 컨테이너

### 4. 리스트/아이템 컴포넌트
- **형식**: `[타입]Item` 또는 `[기능명]Item`
- **예시**:
  - `ListItem` - 리스트 아이템

### 5. 캘린더 컴포넌트
- **형식**: `[기간]Calendar`
- **예시**:
  - `WeeklyCalendar` - 주간 캘린더
  - `MonthlyCalendar` - 월간 캘린더

### 6. 텍스트 관련 컴포넌트
- **형식**: `[기능명]Text`
- **예시**:
  - `ExpandableText` - 확장 가능한 텍스트

### 7. Context 컴포넌트
- **형식**: `[기능명]Context` 또는 `[기능명]Provider`
- **예시**:
  - `AsideContext` - Aside 관련 컨텍스트
  - `AsideProvider` - Aside Provider

## 금지 사항

1. ❌ **암호화된 이름 사용 금지**: `C073`, `T014` 같은 의미 없는 코드명 사용 금지
2. ❌ **약어 남용 금지**: `Cmp`, `Cnt` 같은 불명확한 약어 사용 금지
3. ❌ **일관성 없는 패턴**: 비슷한 기능인데 다른 명명 패턴 사용 금지

## 좋은 예시 vs 나쁜 예시

### ✅ 좋은 예시
- `SlidePage` - 슬라이드되는 페이지 (명확하고 기능을 나타냄)
- `PageHeader` - 페이지 헤더 (명확함)
- `ScrollableContainer` - 스크롤 가능한 컨테이너 (기능 명확)

### ❌ 나쁜 예시
- `C073` - 의미 없는 코드명
- `Page` - 너무 일반적이고 모호함
- `Container` - 너무 일반적이고 모호함

## AI 최적화 고려사항

1. **의미 있는 이름**: AI가 컴포넌트의 용도를 추론할 수 있도록 명확한 이름 사용
2. **일관된 패턴**: 비슷한 기능의 컴포넌트는 비슷한 명명 패턴 사용으로 AI가 패턴을 학습하기 쉽게
3. **주석 활용**: 복잡한 컴포넌트는 JSDoc 주석으로 용도 설명 추가

## 현재 컴포넌트 목록

- `Aside` - 사이드바 영역
- `AsideContext` - Aside 관련 컨텍스트
- `DraggableScrollContainer` - 드래그 가능한 스크롤 컨테이너
- `ExpandableText` - 확장 가능한 텍스트
- `ListItem` - 리스트 아이템
- `MonthlyCalendar` - 월간 캘린더
- `PageHeader` - 페이지 헤더
- `Popup` - 팝업
- `ScrollableContainer` - 스크롤 가능한 컨테이너
- `Sidebar` - 사이드바
- `SlidePage` - 슬라이드되는 페이지 (이전: C073)
- `TabSelector` - 탭 선택기
- `ToggleSwitch` - 토글 스위치
- `Tooltip` - 툴팁
- `WeeklyCalendar` - 주간 캘린더

