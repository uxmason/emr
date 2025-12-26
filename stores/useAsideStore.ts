/**
 * Aside Store (Zustand)
 *
 * @description Aside 컴포넌트의 전역 상태를 관리하는 스토어입니다.
 * 여러 페이지에서 공유되는 Aside 상태를 중앙화하여 관리합니다.
 *
 * @remarks
 * - 페이지 스택 관리: `pages` 배열로 슬라이드 페이지 스택을 관리합니다.
 * - pathname 변경 감지: `lastPathname`을 저장하여 페이지 간 이동 시 Aside를 초기화합니다.
 * - 애니메이션 제어: `isAnimating`으로 애니메이션 중 중복 네비게이션을 방지합니다.
 */

import { create } from "zustand";
import { ReactNode } from "react";

/**
 * Aside 페이지 인터페이스
 */
export interface AsidePage {
  /** 페이지 고유 ID (pageId-timestamp 형식) */
  id: string;
  /** 페이지 콘텐츠 (ReactNode) */
  content: ReactNode;
  /** 타임스탬프 (페이지 생성 시간) */
  timestamp: number;
}

/**
 * Aside Store State
 */
interface AsideStoreState {
  /** Aside 페이지 스택 */
  pages: AsidePage[];
  /** 현재 활성 페이지 인덱스 */
  currentIndex: number;
  /** 애니메이션 진행 중 여부 */
  isAnimating: boolean;
  /** 현재 페이지 ID (PageHeader 선택 상태용) */
  currentPageId: string | null;
  /** 마지막 pathname (pathname 변경 감지용) */
  lastPathname: string | null;
}

/**
 * Aside Store Actions
 */
interface AsideStoreActions {
  /** 페이지 스택 설정 */
  setPages: (pages: AsidePage[] | ((prev: AsidePage[]) => AsidePage[])) => void;
  /** 현재 인덱스 설정 */
  setCurrentIndex: (index: number | ((prev: number) => number)) => void;
  /** 애니메이션 상태 설정 */
  setIsAnimating: (isAnimating: boolean | ((prev: boolean) => boolean)) => void;
  /** 현재 페이지 ID 설정 */
  setCurrentPageId: (pageId: string | null) => void;
  /** 마지막 pathname 설정 */
  setLastPathname: (pathname: string | null) => void;
  /** 페이지로 네비게이션 */
  navigateToPage: (pageId: string, content: ReactNode) => void;
  /** 메인 페이지로 리셋 */
  resetToMain: () => void;
  /** 이전 페이지로 돌아가기 */
  goBack: () => void;
}

/**
 * Aside Store
 */
type AsideStore = AsideStoreState & AsideStoreActions;

/**
 * Aside 전역 상태 스토어
 */
export const useAsideStore = create<AsideStore>((set, get) => ({
  // 초기 상태
  pages: [],
  currentIndex: 0,
  isAnimating: false,
  currentPageId: null,
  lastPathname: null,

  // Actions
  setPages: (updater) =>
    set((state) => ({
      pages: typeof updater === "function" ? updater(state.pages) : updater,
    })),

  setCurrentIndex: (updater) =>
    set((state) => ({
      currentIndex:
        typeof updater === "function" ? updater(state.currentIndex) : updater,
    })),

  setIsAnimating: (updater) =>
    set((state) => ({
      isAnimating:
        typeof updater === "function" ? updater(state.isAnimating) : updater,
    })),

  setCurrentPageId: (pageId) => set({ currentPageId: pageId }),

  setLastPathname: (pathname) => set({ lastPathname: pathname }),

  navigateToPage: (pageId, content) => {
    const state = get();
    console.log("🚀 [useAsideStore] navigateToPage 호출", {
      pageId,
      hasContent: !!content,
      currentPagesLength: state.pages.length,
      currentIndex: state.currentIndex,
      isAnimating: state.isAnimating,
    });

    if (state.isAnimating) {
      console.log("⏸️ [useAsideStore] 애니메이션 중, 네비게이션 무시");
      return;
    }

    set({ isAnimating: true });

    // 함수형 업데이트를 사용하여 항상 최신 pages 상태를 확인
    const existingPageIndex = state.pages.findIndex((page) => {
      if (page.id === "main") return false;
      return page.id.startsWith(`${pageId}-`) || page.id === pageId;
    });

    if (existingPageIndex !== -1) {
      // 동일 분류의 페이지가 이미 열려있으면 해당 페이지로 이동
      console.log("🔄 [useAsideStore] 기존 페이지로 이동", {
        existingPageIndex,
        pageId: state.pages[existingPageIndex].id,
      });
      const newPages = state.pages.slice(0, existingPageIndex + 1);
      newPages[existingPageIndex] = {
        id: newPages[existingPageIndex].id,
        content,
        timestamp: newPages[existingPageIndex].timestamp,
      };
      set({
        pages: newPages,
        currentIndex: existingPageIndex,
        currentPageId: pageId === "main" ? null : pageId,
      });
      setTimeout(() => {
        set({ isAnimating: false });
        console.log("✅ [useAsideStore] 애니메이션 종료 (기존 페이지 이동)");
      }, 300);
    } else {
      // 새로운 페이지 추가
      const timestamp = Date.now();
      const newPage: AsidePage = {
        id: `${pageId}-${timestamp}`,
        content,
        timestamp,
      };
      const newPages = [...state.pages, newPage];
      const newIndex = newPages.length - 1;
      console.log("➕ [useAsideStore] 새 페이지 추가", {
        newPageId: newPage.id,
        newIndex,
        totalPages: newPages.length,
      });
      set({
        pages: newPages,
        currentIndex: newIndex,
        currentPageId: pageId === "main" ? null : pageId,
      });
      setTimeout(() => {
        set({ isAnimating: false });
        console.log("✅ [useAsideStore] 애니메이션 종료 (새 페이지 추가)");
      }, 300);
    }
  },

  resetToMain: () => {
    const state = get();
    if (state.isAnimating) return;

    set({ isAnimating: true, currentIndex: 0 });
    setTimeout(() => {
      const mainPage = state.pages.find((page) => page.id === "main");
      set({
        pages: mainPage ? [mainPage] : [],
        currentPageId: null,
        isAnimating: false,
      });
    }, 300);
  },

  goBack: () => {
    const state = get();
    if (state.isAnimating || state.currentIndex === 0) return;

    set({ isAnimating: true });
    const newIndex = state.currentIndex - 1;
    const newPages = state.pages.slice(0, -1); // 마지막 페이지 제거

    // 이전 페이지의 pageId를 저장
    let prevPageId: string | null = null;
    if (newPages.length > 0 && newIndex >= 0 && newIndex < newPages.length) {
      prevPageId = newPages[newIndex].id.split("-")[0];
    } else {
      prevPageId = "main";
    }

    set({
      pages: newPages,
      currentIndex: newIndex,
    });

    setTimeout(() => {
      set({
        currentPageId: prevPageId === "main" ? null : prevPageId,
        isAnimating: false,
      });
    }, 300);
  },
}));
