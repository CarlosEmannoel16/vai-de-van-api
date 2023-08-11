import { ISearchTravels } from "@/domain/usecases/travels/SearchTravels";
import { ITravelProtocolRepository } from "@/infra/protocols/travel";
import { Travel } from "@prisma/client";

export class SearchTravelsUseCase implements ISearchTravels{
    constructor(private readonly travelRepository: ITravelProtocolRepository) {}

   async  execute(data: ISearchTravels.Params): Promise<Travel[]> {
       return this.travelRepository.search(data);
    }
}