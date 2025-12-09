export const typeDefs = `#graphql
  type Patient {
    id: ID!
    name: String!
    registerDate: String!
  }

  type Query {
    patients: [Patient!]!
    patient(id: ID!): Patient
  }

  type Mutation {
    createPatient(name: String!): Patient!
    updatePatient(id: ID!, name: String): Patient!
    deletePatient(id: ID!): Boolean!
  }
`

