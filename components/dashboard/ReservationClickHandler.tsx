/**
 * ReservationClickHandler Component
 *
 * @description PageHeader의 C014 버튼 클릭 시 "통합 예약 서비스" 페이지를 표시하는 핸들러를 생성합니다.
 *
 * @component
 * @example
 * ```tsx
 * <ReservationClickHandler onHandlerReady={handleReservationHandlerReady} />
 * ```
 *
 * @remarks
 * - Aside 내부에 렌더링되어야 useAside 훅을 사용할 수 있습니다.
 * - 핸들러는 페이지 전환 시 재등록 가능하도록 구현되었습니다.
 * - 애니메이션 중에는 클릭을 무시합니다.
 */

"use client";

import { useEffect, useRef } from "react";
import { useAside } from "@/components/AsideContext";
import SlidePage from "@/components/SlidePage";

export interface ReservationClickHandlerProps {
  onHandlerReady: (handler: () => void) => void;
}

export default function ReservationClickHandler({
  onHandlerReady,
}: ReservationClickHandlerProps) {
  const { navigateToPage, isAnimating } = useAside();
  const navigateToPageRef = useRef(navigateToPage);
  const onHandlerReadyRef = useRef(onHandlerReady);
  const isAnimatingRef = useRef(isAnimating);

  // ref 업데이트 (항상 최신 값 유지)
  useEffect(() => {
    navigateToPageRef.current = navigateToPage;
    onHandlerReadyRef.current = onHandlerReady;
    isAnimatingRef.current = isAnimating;
  }, [navigateToPage, onHandlerReady, isAnimating]);

  // 핸들러 등록 (페이지 전환 시 재등록 가능하도록)
  useEffect(() => {
    const handler = () => {
      // 애니메이션 중이면 무시
      if (isAnimatingRef.current) {
        return;
      }
      navigateToPageRef.current(
        "reservation-service",
        <SlidePage title="통합 예약 서비스" showToggleSwitch={false} />
      );
    };
    // 다음 틱에 등록하여 무한 루프 방지 및 렌더링 완료 후 실행
    // 컴포넌트가 완전히 마운트된 후에만 등록
    const timeoutId = setTimeout(() => {
      if (onHandlerReadyRef.current) {
        onHandlerReadyRef.current(handler);
      }
    }, 100);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [onHandlerReady]); // onHandlerReady가 준비된 후에만 실행

  return null;
}
