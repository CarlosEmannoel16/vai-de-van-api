import { Stop } from '../entity/Stop';
import { StatusStopInterface } from '../interface/StatusStopInterface';
import { StopInterface } from '../interface/StopInterface';

type StopFactoryParams = {
  id: string;
  name: string;
  status: StatusStopInterface;
  coordinates: string;
};

export class StopFactory {
  static create({ id, name, status, coordinates }: StopFactoryParams): StopInterface {
    return new Stop(id, name, status, coordinates);
  }
}
