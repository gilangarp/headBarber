import { IResponse } from "./responseType";

export interface IWorkerLoginResponse {
  token: string;
  uuid: string;
  role: string;
}

export interface ILoginWorkerForm {
  email: string;
  password: string;
}

export interface IWorkerRespone {
  uuid: string;
  fullName: string;
  image: string;
  role: string;
  outletCode: string;
  createdAt: string;
}

export interface IFilterSuperUser {
  roleName?: string;
  outletCode?: string;
}

export interface IAuthWorkerResponse extends IResponse {
  data: IWorkerLoginResponse;
}
export interface IWorkerArrayResponse extends IResponse {
  data: IWorkerRespone[];
}
