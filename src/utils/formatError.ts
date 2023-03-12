import { GraphQLError } from 'graphql';

export default (err: GraphQLError) => ({ message: err.message, statusCode: err.extensions.code });
