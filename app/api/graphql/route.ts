// 서버단 개발 전까지 주석처리
// import { ApolloServer } from '@apollo/server'
// import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { NextRequest } from 'next/server'
// import { typeDefs } from '@/graphql/schema'
// import { resolvers } from '@/graphql/resolvers'

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// })

// const handler = startServerAndCreateNextHandler<NextRequest>(server, {
//   context: async (req) => ({ req }),
// })

export async function GET(request: NextRequest) {
  return new Response(
    JSON.stringify({ message: 'GraphQL API is under development' }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }
  )
}

export async function POST(request: NextRequest) {
  return new Response(
    JSON.stringify({ message: 'GraphQL API is under development' }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }
  )
}

