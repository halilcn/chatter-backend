import { UnAuthorized } from './errors';

export const checkAuth = (auth: undefined | object): UnAuthorized | { [key: string]: any } => {
  if (!auth) throw new UnAuthorized();
  return auth;
};
