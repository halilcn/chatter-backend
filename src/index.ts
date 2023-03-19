import express, { Express, Request, Response } from 'express';
import { graphqlHTTP } from 'express-graphql';
import graphqlSchema from './graphql/schema';
import graphqlResolver from './graphql/resolver';
import formatError from './utils/formatError';

import './bootstrap';

const app: Express = express();
const port = process.env.PORT || 3000;

const graphqlOptions = {
  schema: graphqlSchema,
  rootValue: graphqlResolver,
  graphiql: true,
  customFormatErrorFn: formatError
};

app.use('/graphql', graphqlHTTP(graphqlOptions));

app.get('/', (req: Request, res: Response) => {
  res.send('asd sadas d');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
