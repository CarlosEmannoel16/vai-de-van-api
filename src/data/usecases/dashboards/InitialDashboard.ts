import { IDeleteVehicleRepository } from "@/infra/protocols/vechicle/DeleteVehicleRepository";

export interface InitialDashboardUseCaseProtocol {
    execute(): Promise<InitialDashboardUseCaseProtocol.Result>;
}

export namespace InitialDashboardUseCaseProtocol {
    export type Result = {
        totalTravels: number;
        totalTravelsToday: number;
        totalTravelsMonth: number;
        totalTravelsYear: number;
        totalTravelsCanceled: number;
        totalTravelsFinished: number;
        totalTravelsInProgress: number;
    }
}

export class InitialDashboardUseCase {
    constructor(private readonly VehicleRepository: IDeleteVehicleRepository) {}

    async execute() {}
   
}