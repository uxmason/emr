// TODO: DB 연결 시 주석 해제
// import { PrismaClient } from '@prisma/client'

// const globalForPrisma = globalThis as unknown as {
//   prisma: PrismaClient | undefined
// }

// export const prisma =
//   globalForPrisma.prisma ??
//   new PrismaClient({
//     log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
//   })

// if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

// 임시 더미 객체 (타입 에러 방지용)
export const prisma = {
  patient: {
    findMany: async () => [],
    findUnique: async () => null,
    create: async () => ({ id: '', name: '', registerDate: new Date() }),
    update: async () => ({ id: '', name: '', registerDate: new Date() }),
    delete: async () => ({ id: '', name: '', registerDate: new Date() }),
  },
} as any

