import { InvalidGenericError } from "@/data/errors/InvalidGenericError";
import { IGetByIdRoutes } from "@/domain/usecases/routes/GetByIdRoutes";
import { IGetByIdRouteProtocolRepository } from "@/infra/protocols/route/GetByIdRouteProtocolRepository";

export class GetByIdRouterUseCase{
    constructor(private readonly getByIdRoute: IGetByIdRouteProtocolRepository){}
    async execute(data: IGetByIdRoutes.Params): Promise<IGetByIdRoutes.Result>{
        if (!data.id) throw new InvalidGenericError('Id é obrigatório');
        const route = await this.getByIdRoute.getById(data);
        if (!route) throw new InvalidGenericError('Routa não encontrado');
        return route
    }
}