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

export interface IAuthWorkerResponse extends IResponse {
  data: IWorkerLoginResponse;
}
