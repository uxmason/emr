/**
 * 이벤트 로그 분석 유틸리티
 * 저장된 이벤트 데이터를 분석하여 인사이트 제공
 *
 * TODO: DB 준비 후 주석 해제
 */

// @ts-nocheck
// DB 준비 후 아래 코드의 주석을 해제하세요
/*
import { prisma } from "@/lib/db";

// ============================================
// 분석 함수들
// ============================================

export async function getClickHeatmap(
  pagePath: string,
  startDate: Date,
  endDate: Date
) {
  const batches = await prisma.userEventBatch.findMany({
    where: {
      pagePath,
      createdAt: {
        gte: startDate,
        lte: endDate,
      },
    },
    select: {
      events: true,
    },
  });

  const clicks: Array<{ x: number; y: number; count: number }> = [];
  const clickMap = new Map<string, number>();

  batches.forEach((batch) => {
    const events = batch.events as Array<{
      type: string;
      data: { x: number; y: number };
      timestamp: string;
    }>;

    events
      .filter((e) => e.type === "click")
      .forEach((e) => {
        const gridX = Math.floor(e.data.x / 10) * 10;
        const gridY = Math.floor(e.data.y / 10) * 10;
        const key = `${gridX},${gridY}`;
        clickMap.set(key, (clickMap.get(key) || 0) + 1);
      });
  });

  clickMap.forEach((count, key) => {
    const [x, y] = key.split(",").map(Number);
    clicks.push({ x, y, count });
  });

  return clicks;
}

export async function getUserSessionAnalysis(
  userId: string,
  startDate: Date,
  endDate: Date
) {
  const sessions = await prisma.userEventBatch.groupBy({
    by: ["sessionId"],
    where: {
      userId,
      createdAt: {
        gte: startDate,
        lte: endDate,
      },
    },
    _count: {
      id: true,
    },
    _sum: {
      eventCount: true,
    },
  });

  return sessions.map((session) => ({
    sessionId: session.sessionId,
    batchCount: session._count.id,
    totalEvents: session._sum.eventCount || 0,
  }));
}

export async function getPageEventStats(
  pagePath: string,
  startDate: Date,
  endDate: Date
) {
  const batches = await prisma.userEventBatch.findMany({
    where: {
      pagePath,
      createdAt: {
        gte: startDate,
        lte: endDate,
      },
    },
  });

  const stats = {
    totalBatches: batches.length,
    totalEvents: batches.reduce((sum, b) => sum + b.eventCount, 0),
    eventTypes: {} as Record<string, number>,
    uniqueSessions: new Set<string>(),
    uniqueUsers: new Set<string>(),
  };

  batches.forEach((batch) => {
    stats.uniqueSessions.add(batch.sessionId);
    if (batch.userId) {
      stats.uniqueUsers.add(batch.userId);
    }

    const events = batch.events as Array<{ type: string }>;
    events.forEach((e) => {
      stats.eventTypes[e.type] = (stats.eventTypes[e.type] || 0) + 1;
    });
  });

  return {
    ...stats,
    uniqueSessions: stats.uniqueSessions.size,
    uniqueUsers: stats.uniqueUsers.size,
  };
}

export async function getHourlyEventStats(startDate: Date, endDate: Date) {
  const batches = await prisma.userEventBatch.findMany({
    where: {
      createdAt: {
        gte: startDate,
        lte: endDate,
      },
    },
    select: {
      createdAt: true,
      eventCount: true,
    },
  });

  const hourlyStats: Record<number, number> = {};

  batches.forEach((batch) => {
    const hour = new Date(batch.createdAt).getHours();
    hourlyStats[hour] = (hourlyStats[hour] || 0) + batch.eventCount;
  });

  return hourlyStats;
}
*/
