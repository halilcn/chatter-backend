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
  companyId: string;
  username: string;
}
