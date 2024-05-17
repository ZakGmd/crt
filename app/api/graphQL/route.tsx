import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServer } from '@apollo/server';
import { gql } from 'graphql-tag';
import { NextRequest } from 'next/server';

const movies = [
    {
      id: 1 ,
      title: 'The little things' ,
      imageUrl: '/dzlWlpr.jpg' ,
      description: '' ,  
    },
    {
      id: 2 ,
      title: 'The Equalizer' ,
      imageUrl: '' ,
      description: '' ,    
    },
    {
      id: 3 ,
      title: 'Her' ,
      imageUrl: '' ,
      description: '' ,    
    },
    {
      id: 4 ,
      title: 'Ip Man' ,
      imageUrl: '' ,
      description: '' ,  
    },
    {
      id: 5 ,
      title: 'The book of Eli ' ,
      imageUrl: '' ,
      description: '' ,  
    }
] ;
const series = [
    {
      id: 1 ,
      title: 'Peaky Blinders' ,
      imageUrl: '' ,
      description: '' ,  
      saisons: 6
    },
    {
      id: 2 ,
      title: 'Blacklist' ,
      imageUrl: '' ,
      description: '' ,
      saisons: 10    
    },
    {
      id: 3 ,
      title: 'Dark' ,
      imageUrl: '' ,
      description: '' ,  
      saisons: 3  
    },
    {
      id: 4 ,
      title: 'Vikings' ,
      imageUrl: '' ,
      description: '' ,  
      saisons: 6
    },
    {
      id: 5 ,
      title: 'Mr. Robot' ,
      imageUrl: '' ,
      description: '' ,  
      saisons: 4
    }
] ;

const typeDefs = gql`
  type Query {
      fetchMovies: [Movies]
      fetchSeries: [Series]
  }

type Movies {
 id: ID!
 title: String!
 imageUrl: String!
 description: String! 
}
type Series{
 id: ID!
 title: String!
 imageUrl: String!
 description: String!
 saisons: Int 
}
`;
const resolvers = {
    Query: {
        
    }
}

const server = new ApolloServer({typeDefs});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async req => ({ req }),
});

console.log(handler)
  
export { handler as GET ,handler as POST } ;