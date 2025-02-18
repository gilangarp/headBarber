import { IResponse } from "./responseType";

export interface IRoleResponse {
  id: number;
  name: string;
}

export interface IRoleArrayResponse extends IResponse {
  data: IRoleResponse[];
}
