// 서버단 개발 전까지 주석처리
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

// 임시 더미 객체 (타입 에러 방지)
export const prisma = {} as any

