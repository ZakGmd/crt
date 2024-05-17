import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServer } from '@apollo/server';
import { gql } from 'graphql-tag';
import { NextRequest } from 'next/server';

const typeDefs = gql`
  type Query {
      fetchMovies: [Movies]
      fetchSeries: [Series]
  }

type Movies {
 id: ID!
 name: String!
 imageUrl: String!
 description: String! 
}
type Series{
 id: ID!
 name: String!
 imageUrl: String!
 description: String!
}


`;

const server = new ApolloServer({typeDefs});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async req => ({ req }),
});

console.log(handler)
  
export { handler as GET ,handler as POST } ;