import { Schema } from 'mongoose';

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