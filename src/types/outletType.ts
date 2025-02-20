import { IResponse } from "./responseType";

export interface IOutletDto {
  outletName: string;
  outletCode: string;
  latitude: string;
  longitude: string;
}

export interface IDbOutlet {
  name: string;
  code: string;
  latitude: string;
  longitude: string;
}

export interface IOutletResponse extends IResponse {
  data: IOutletDto;
}
