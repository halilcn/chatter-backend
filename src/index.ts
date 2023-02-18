import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { graphqlHTTP } from 'express-graphql';
import graphqlSchema from './graphql/schema';
import graphqlResolver from './graphql/resolvers';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(
  '/graphql',
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true
  })
);

app.get('/', (req: Request, res: Response) => {
  res.send('asd sadas d');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
