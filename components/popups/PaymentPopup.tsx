"use client";

import Popup from "@/components/Popup";
import PopupSectionBox from "@/components/PopupSectionBox";
import PopupHeader from "./PopupHeader";

export interface PaymentPopupProps {
  /** 팝업 열림 상태 */
  isOpen: boolean;
  /** 팝업 닫기 핸들러 */
  onClose: () => void;
}

/**
 * 수납등록 팝업 컴포넌트
 *
 * @description ReceptionCheckInButton의 C153 "수납등록" 클릭 시 표시되는 팝업
 * @component
 */
export default function PaymentPopup({ isOpen, onClose }: PaymentPopupProps) {
  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <>
        <PopupSectionBox x={260} y={20} width={1400}>
          <PopupHeader title="수납등록" onClose={onClose} />
        </PopupSectionBox>
        <PopupSectionBox x={260} y={140} width={1400} height={1040}>
          <div className="C180">
            {/* 수납등록 팝업 내용 - 여기에 퍼블리싱 */}
          </div>
        </PopupSectionBox>
      </>
    </Popup>
  );
}
