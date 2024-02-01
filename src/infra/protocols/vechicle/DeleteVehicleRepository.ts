
export interface IDeleteVehicleRepository{
    deleteById(id: string):Promise<boolean>
}
