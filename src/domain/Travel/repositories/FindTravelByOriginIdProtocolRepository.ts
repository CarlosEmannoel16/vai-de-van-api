import { TravelInterface } from "../Interfaces/travel.interface";

export interface FindTravelByOriginIdProtocolRepository {
  findByCityOrigin(originId: string): Promise<TravelInterface[]>;
}
