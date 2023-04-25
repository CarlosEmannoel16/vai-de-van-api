import { CityModel } from './CityModel';

export type RouteModel = {
  id?: string;
  origin?: CityModel;
  destiny?: CityModel;
  departureTime?: string;
  value?: number;
  km?: number;
  isSubRoute?: boolean;
  idRouteMain?: string;
};
