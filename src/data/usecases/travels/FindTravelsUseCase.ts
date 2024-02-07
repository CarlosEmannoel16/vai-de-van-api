import { IListAllTravels } from '@/data/protocols/usecases/travels/LisatAllTravels';
import { Travel } from '@/domain/Travel/entity/Travel';
import { ITravelProtocolRepository } from '@/domain/Travel/repositories';

export class FindAllTravels implements IListAllTravels {
  constructor(private readonly travelRepository: ITravelProtocolRepository) {}
  async execute(): Promise<IListAllTravels.Result[]> {
    const data = await this.travelRepository.findAll();
    return data.map((travel: Travel) => ({
      amount_of_accents: travel.vehicle.quantitySeats,
      arrivalDate: travel.arrivalDate,
      created_at: travel.created_at,
      departureDate: travel.departureDate,
      driverId: travel.idDriver,
      driverName: travel.nameDriver,
      id: travel.id,
      routeId: travel.idRoute,
      update_at: travel.update_at,
      vehicleId: travel.idVehicle,
      vehicleName: travel.vehicle.description,
      status: travel.status,
      description: travel.description,
      routeDescription: travel.route.name,
    }));
  }
}
