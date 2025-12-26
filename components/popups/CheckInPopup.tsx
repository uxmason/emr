"use client";

import Popup from "@/components/Popup";
import PopupSectionBox from "@/components/PopupSectionBox";
import PopupHeader from "./PopupHeader";

export interface CheckInPopupProps {
  /** 팝업 열림 상태 */
  isOpen: boolean;
  /** 팝업 닫기 핸들러 */
  onClose: () => void;
}

/**
 * 접수하기 팝업 컴포넌트
 *
 * @description ReceptionCheckInButton의 C153 "접수하기" 클릭 시 표시되는 팝업
 * @component
 */
export default function CheckInPopup({ isOpen, onClose }: CheckInPopupProps) {
  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <>
        <PopupSectionBox x={260} y={20} width={1400}>
          <PopupHeader title="접수하기" onClose={onClose} />
        </PopupSectionBox>
        <PopupSectionBox x={260} y={140} width={1400} height={1040}>
          <div className="C180">
            {/* 접수하기 팝업 내용 - 여기에 퍼블리싱 */}
          </div>
        </PopupSectionBox>
      </>
    </Popup>
  );
}
