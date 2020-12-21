import { ApolloServer } from 'apollo-server';

function startServer({ typeDefs, resolvers}) {
  const MongoClient = require('mongodb').MongoClient;
  const uri = "mongodb+srv://user:linkapi-graphql@graphql.4my99.mongodb.net/<dbname>?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
  });


  const server = new ApolloServer({ typeDefs, resolvers });
  server.listen(2000).then(({ url }) => console.log(`🚀 Server started at ${url}`));
}

export default startServer;