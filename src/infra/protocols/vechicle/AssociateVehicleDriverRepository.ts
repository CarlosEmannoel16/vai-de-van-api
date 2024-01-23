
export interface IAssociateVehicleDriverRepository {
    associate(data: IAssociateVehicleDriverRepository.Params): Promise<any>;
  }
  export namespace IAssociateVehicleDriverRepository {

    export type Params = {
     idVehicle: string
     idDriver: string
    };
  }
