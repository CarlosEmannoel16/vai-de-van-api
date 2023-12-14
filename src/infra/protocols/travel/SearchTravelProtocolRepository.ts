import { Travel } from '@/domain/Travel/entity/Travel';


export interface ISearchTravelProtocolRepository {
  search(data: ISearchTravelProtocolRepository.Params): Promise<Travel[]>;
}

export namespace ISearchTravelProtocolRepository {
  export type Params = {
    origin: string;
    destiny: string;
    dateOfTravel: Date;
  };


}
