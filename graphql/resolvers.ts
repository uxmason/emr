// TODO: DB 연결 시 주석 해제
// import { prisma } from '@/lib/prisma'
import { GraphQLError } from 'graphql'

export const resolvers = {
  Query: {
    patients: async () => {
      // TODO: DB 연결 시 주석 해제
      // return await prisma.patient.findMany({
      //   orderBy: { registerDate: 'desc' },
      // })
      return []
    },
    patient: async (_: any, { id }: { id: string }) => {
      // TODO: DB 연결 시 주석 해제
      // const patient = await prisma.patient.findUnique({
      //   where: { id },
      // })
      // if (!patient) {
      //   throw new GraphQLError('Patient not found', {
      //     extensions: { code: 'NOT_FOUND' },
      //   })
      // }
      // return patient
      throw new GraphQLError('Patient not found', {
        extensions: { code: 'NOT_FOUND' },
      })
    },
  },
  Mutation: {
    createPatient: async (_: any, { name }: { name: string }) => {
      // TODO: DB 연결 시 주석 해제
      // return await prisma.patient.create({
      //   data: { name },
      // })
      return { id: 'temp-id', name, registerDate: new Date() }
    },
    updatePatient: async (_: any, { id, name }: { id: string; name?: string }) => {
      // TODO: DB 연결 시 주석 해제
      // const patient = await prisma.patient.findUnique({
      //   where: { id },
      // })
      // if (!patient) {
      //   throw new GraphQLError('Patient not found', {
      //     extensions: { code: 'NOT_FOUND' },
      //   })
      // }
      // return await prisma.patient.update({
      //   where: { id },
      //   data: { name },
      // })
      throw new GraphQLError('Patient not found', {
        extensions: { code: 'NOT_FOUND' },
      })
    },
    deletePatient: async (_: any, { id }: { id: string }) => {
      // TODO: DB 연결 시 주석 해제
      // const patient = await prisma.patient.findUnique({
      //   where: { id },
      // })
      // if (!patient) {
      //   throw new GraphQLError('Patient not found', {
      //     extensions: { code: 'NOT_FOUND' },
      //   })
      // }
      // await prisma.patient.delete({
      //   where: { id },
      // })
      // return true
      throw new GraphQLError('Patient not found', {
        extensions: { code: 'NOT_FOUND' },
      })
    },
  },
}

