import { GraphQLError } from 'graphql';
import { StatusCodes } from 'http-status-codes';

export default (processFunction: (...args: any) => Promise<GraphQLError | object>) =>
  async (...args: any) => {
    try {
      return await processFunction(...args);
    } catch (err: any) {
      throw new GraphQLError(err.message || 'BAD_REQUEST', null, null, null, null, null, { code: err.status || StatusCodes.BAD_REQUEST });
    }
  };
