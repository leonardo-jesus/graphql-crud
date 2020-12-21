import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';

function startServer({ typeDefs, resolvers}) {
  const connection = mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });

  const server = new ApolloServer({ typeDefs, resolvers });
  server.listen(2000).then(({ url }) => console.log(`🚀 Server started at ${url}`));
}

export default startServer;