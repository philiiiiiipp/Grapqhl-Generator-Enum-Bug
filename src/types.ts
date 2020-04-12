import { USER_STATUS_NOT_OK, UserStatusOk } from './Enums';
export type Maybe<T> = T | null;

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export enum UserStatusNotOk {
  Pending = 'Pending',
  InvitedPending = 'InvitedPending',
  Invited = 'Invited',
  Active = 'Active',
  Inactive = 'Inactive'
}

export enum UserStatusOk {
  Pending = 'Pending',
  InvitedPending = 'InvitedPending',
  Invited = 'Invited',
  Active = 'Active',
  Inactive = 'Inactive'
}

