/**
 * PersonalSchedule Component
 *
 * @description 대시보드 페이지의 Aside에 표시되는 개인 일정 컴포넌트입니다.
 * 사용자가 직접 디자인할 빈 컨테이너입니다.
 *
 * @component
 * @example
 * ```tsx
 * <PersonalSchedule />
 * ```
 *
 * @remarks
 * - Aside 내부에 렌더링되어야 useAside 훅을 사용할 수 있습니다.
 * - 완전히 비어있는 상태로, 사용자가 직접 퍼블리싱할 수 있습니다.
 */

"use client";

import { memo } from "react";

/**
 * 개인 일정 메인 콘텐츠 컴포넌트
 */
const PersonalSchedule = memo(() => {
  // Aside의 MainPageContent가 C075로 감싸므로,
  // 여기서는 C073을 반환하지 않고 빈 fragment를 반환합니다.
  // 실제 C073은 Aside 컴포넌트에서 직접 처리해야 합니다.
  return null;
});

PersonalSchedule.displayName = "PersonalSchedule";

export default PersonalSchedule;
