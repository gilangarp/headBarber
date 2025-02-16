import { IResponse } from "./responseType";

export interface IWorkerBody {
  firstName: string;
  lastName: string;
  image: string;
  outletsId: string;
  roleId: number;
  email: string;
  password: string;
}

export interface ISuperUser {
  uuid?: string;
  fullName: string;
  role: string;
  outletName?: string;
  outletCode?: string;
  status?: string;
  shift?: string;
  monthsOfService?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface ISuperUserResponse extends IResponse {
  data?: ISuperUser;
}
