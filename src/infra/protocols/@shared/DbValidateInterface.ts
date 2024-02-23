export interface DbHandlerValidateInterface {
  handle: (data: DbHandlerValidateInterface.Params) => Promise<any>;
  addNext: (next: DbHandlerValidateInterface) => DbHandlerValidateInterface;
  next: DbHandlerValidateInterface;
}

export namespace DbHandlerValidateInterface {
  export type Params = {
    routeId?: string;
    driverId?: string;
    vehicleId?: string;
  };
  export type Result = any;
}
