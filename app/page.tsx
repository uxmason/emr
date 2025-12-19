/**
 * Dashboard Page
 *
 * @description 대시보드 파트의 메인 페이지입니다. 전체 현황을 한눈에 볼 수 있는 대시보드입니다.
 *
 * @page
 * @route /
 *
 * @remarks
 * - Aside 컴포넌트를 사용하여 우측 슬라이드 페이지를 관리합니다.
 * - NoteClickHandler와 AlarmClickHandler는 Aside 내부에 렌더링되어야 합니다.
 * - MainContent는 역할 기반 라우팅을 사용하여 직원 일정을 표시합니다.
 */

"use client";

import { useState, useCallback, useRef } from "react";
import Sidebar from "@/components/Sidebar";
import PageHeader from "@/components/PageHeader";
import Aside from "@/components/Aside";
import PersonalSchedule from "@/components/dashboard/PersonalSchedule";
import NoteClickHandler from "@/components/reception/NoteClickHandler";
import AlarmClickHandler from "@/components/reception/AlarmClickHandler";
import ReservationClickHandler from "@/components/dashboard/ReservationClickHandler";

export default function DashboardPage() {
  const [currentPageId, setCurrentPageId] = useState<string | null>(null);
  const [noteClickHandler, setNoteClickHandler] = useState<
    (() => void) | undefined
  >(undefined);
  const [alarmClickHandler, setAlarmClickHandler] = useState<
    (() => void) | undefined
  >(undefined);
  const [reservationClickHandler, setReservationClickHandler] = useState<
    (() => void) | undefined
  >(undefined);

  // 핸들러를 ref로 저장하여 리렌더링 방지
  const noteClickHandlerRef = useRef<(() => void) | undefined>(undefined);
  const alarmClickHandlerRef = useRef<(() => void) | undefined>(undefined);
  const reservationClickHandlerRef = useRef<(() => void) | undefined>(
    undefined
  );

  // setNoteClickHandler를 useCallback으로 감싸서 안정적인 참조 유지
  const handleNoteHandlerReady = useCallback((handler: () => void) => {
    // 핸들러를 ref에 저장하고, PageHeader 리렌더링을 위해 state도 업데이트
    noteClickHandlerRef.current = handler;
    // 즉시 state 업데이트하여 PageHeader 리렌더링
    setNoteClickHandler(() => handler);
  }, []);

  // setAlarmClickHandler를 useCallback으로 감싸서 안정적인 참조 유지
  const handleAlarmHandlerReady = useCallback((handler: () => void) => {
    // 핸들러를 ref에 저장하고, PageHeader 리렌더링을 위해 state도 업데이트
    alarmClickHandlerRef.current = handler;
    // 즉시 state 업데이트하여 PageHeader 리렌더링
    setAlarmClickHandler(() => handler);
  }, []);

  // setReservationClickHandler를 useCallback으로 감싸서 안정적인 참조 유지
  const handleReservationHandlerReady = useCallback((handler: () => void) => {
    // 핸들러를 ref에 저장하고, PageHeader 리렌더링을 위해 state도 업데이트
    reservationClickHandlerRef.current = handler;
    // 즉시 state 업데이트하여 PageHeader 리렌더링
    setReservationClickHandler(() => handler);
  }, []);

  return (
    <>
      <main className="C007">
        <PageHeader
          title="대시보드"
          onNoteClick={noteClickHandler}
          isNoteSelected={currentPageId === "my-notes"}
          onAlarmClick={alarmClickHandler}
          isAlarmSelected={currentPageId === "my-alarms"}
          onReservationClick={reservationClickHandler}
        />
        <Aside
          mainContent={() => <PersonalSchedule />}
          onNavigate={(pageId) => {
            setCurrentPageId(pageId === "main" ? null : pageId);
          }}
        >
          <NoteClickHandler onHandlerReady={handleNoteHandlerReady} />
          <AlarmClickHandler onHandlerReady={handleAlarmHandlerReady} />
          <ReservationClickHandler
            onHandlerReady={handleReservationHandlerReady}
          />
          <CustomerStatusSection />
        </Aside>
      </main>
      <Sidebar />
    </>
  );
}

/**
 * CustomerStatusSection Component
 *
 * @description 대시보드 페이지의 메인 콘텐츠 섹션입니다.
 *
 * @component
 * @internal
 */
function CustomerStatusSection() {
  return (
    <article className="C020">
      <div className="C197 isH200">
        <section className="C198 isOneThird">
          <div className="C199">
            <p className="T084">월별 집도 현황</p>
          </div>
          <div className="C200"></div>
        </section>
        <section className="C198 isOneThird">
          <div className="C199">
            <p className="T084">월별 집도 현황</p>
          </div>
          <div className="C200"></div>
        </section>
        <section className="C198 isOneThird">
          <div className="C199">
            <p className="T084">월별 집도 현황</p>
          </div>
          <div className="C200"></div>
        </section>
      </div>
      <div className="C197 isH860">
        <section className="C198 isTwoThird">
          <div className="C199">
            <p className="T084">월별 집도 현황</p>
          </div>
          <div className="C200"></div>
        </section>
        <section className="C198 isOneThird">
          <div className="C199">
            <p className="T084">월별 집도 현황</p>
          </div>
          <div className="C200"></div>
        </section>
      </div>
    </article>
  );
}
