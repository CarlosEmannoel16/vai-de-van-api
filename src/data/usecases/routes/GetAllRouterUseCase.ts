import { IGetAllRoutes } from "@/data/protocols/usecases/routes/GetAllRoutes";
import { IGetAllRouteProtocolRepository } from "@/infra/protocols/route/GetAllRouteProtocolRepository";

export class GetAllRoutesUseCase implements IGetAllRoutes{
    constructor(private readonly getAllRoutes: IGetAllRouteProtocolRepository){}
    execute(): Promise<IGetAllRoutes.Result[]> {
        return this.getAllRoutes.getAll();
    };
}
