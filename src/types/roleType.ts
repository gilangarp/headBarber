import { IResponse } from "./responseType";

export interface IRoleDto {
  id?: number;
  name: string;
}

export interface IRoleResponse {
  id: number;
  name: string;
}

export interface IRoleArrayResponse extends IResponse {
  data: IRoleResponse[];
}

export interface IRoleResponseApp extends IResponse {
  message: string;
}
