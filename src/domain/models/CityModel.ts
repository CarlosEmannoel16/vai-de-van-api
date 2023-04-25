import { StateModel } from './StateModel';

export type CityModel = {
  id: string;
  name: string;
  state: StateModel;
};
