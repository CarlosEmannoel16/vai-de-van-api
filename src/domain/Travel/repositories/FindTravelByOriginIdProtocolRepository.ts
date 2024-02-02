import { TravelInterface } from "../entity/travel.interface";

export interface FindTravelByOriginIdProtocolRepository {
  findByCityOrigin(originId: string): Promise<TravelInterface[]>;
}
