import { IResponse } from "./responseType";

export interface IWorkScheduleQuery {
  month?: string;
  roleId?: string;
  outletId?: string;
  userId?: string;
}

export interface IGroupedShiftData {
  days: number[];
  shift_name: string;
}

export interface IWorkScheduleByDateResponse {
  uuid: string;
  image: string;
  fullName: string;
  role: string;
  schedule: IGroupedShiftData[];
}

export interface IDateResponse {
  day: string;
  date: number;
}

export interface IWorkScheduleArrayResponse extends IResponse {
  data: IWorkScheduleByDateResponse[];
}

export interface IScheduleResponse extends IResponse {
  data: IDateResponse[];
}
