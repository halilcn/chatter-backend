import { StatusCodes } from 'http-status-codes';
import { ICustomErrorClass } from '../types/index';

export class BadRequest extends Error implements ICustomErrorClass {
  public status: number;

  constructor(message = 'BAD_REQUEST') {
    super(message);
    this.status = StatusCodes.BAD_REQUEST;
  }
}

export class UnAuthorized extends Error implements ICustomErrorClass {
  public status: number;

  constructor(message = 'UNAUTHORIZED') {
    super(message);
    this.status = StatusCodes.UNAUTHORIZED;
  }
}
