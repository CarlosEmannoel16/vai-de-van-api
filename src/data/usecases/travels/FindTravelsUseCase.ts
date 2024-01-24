import { IListAllTravels } from '@/data/protocols/usecases/travels/LisatAllTravels';
import { ITravelProtocolRepository } from '@/domain/Travel/repositories';
import { Travel } from '@prisma/client';

export class FindAllTravels implements IListAllTravels {
  constructor(private readonly travelRepository: ITravelProtocolRepository) {}
  async execute(): Promise<IListAllTravels.Params[]> {
    const data = await  this.travelRepository.findAll();
    return data.map((travel: Travel) => ({
      amount_of_accents: travel.,
      arrivalDate: travel.arrivalDate,
      created_at: travel.created_at,
      departureDate: travel.departureDate,
      driverId: travel.driverId,
      driverName: travel.driver.name,
      id: travel.id,
      routeId: travel.routeId,
      update_at: travel.update_at,
      vehicleId: travel.vehicleId,
      vehicleName: travel.vehicle.name,
    }));
  }
}
