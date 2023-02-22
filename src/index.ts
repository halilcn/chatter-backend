import express, { Express, Request, Response } from 'express';
import { graphqlHTTP } from 'express-graphql';
import graphqlSchema from './graphql/schema';
import graphqlResolver from './graphql/resolver';

import './bootstrap';

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
