import { Schema } from 'mongoose';

export interface ICustomErrorClass extends Error {
  status: number;
}

export interface ICompanyInputData {
  name: string;
}

export interface ICompanyData {
  name: string;
  key: string;
}

export interface IConsultantInputData {
  companyKey: string;
  username: string;
}

export interface IAuthToken {
  token: string;
}

export enum MessageUserTypeEnum {
  CONSULTANT = 'consultant',
  CONSUMER = 'consumer'
}

export interface IMessageInputData {
  channelId: string;
  text: string;
  from: MessageUserTypeEnum;
}

export interface IChatInputData {
  consumerName: string;
}

export interface IMessagesInputData {
  channelId: string;
}
