export interface IDashboardUseCase {
    execute(): Promise<IDashboardUseCase.result>;
}

export namespace IDashboardUseCase{
    export type result = {
        countRoutes: number;
        countVehicle: number;
    }
}