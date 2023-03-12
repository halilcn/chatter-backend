import { GraphQLError } from 'graphql';
import { StatusCodes } from 'http-status-codes';

export default async (func: any) => {
  try {
    const result = await func();
    return result;
  } catch (err: any) {
    throw new GraphQLError(err.message || 'BAD_REQUEST', null, null, null, null, null, { code: err.status || StatusCodes.BAD_REQUEST });
  }
};
