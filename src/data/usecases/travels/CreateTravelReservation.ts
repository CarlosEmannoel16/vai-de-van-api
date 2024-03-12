import { ICreateReservationUseCase } from '@/data/protocols/usecases/travels/CreateReservation';
import { TicketFactory } from '@/domain/Ticket/factory/TicketFactory';
import { ITravelProtocolRepository } from '@/domain/Travel/repositories';
import { ICustomerProtocolRepository } from '@/infra/protocols/customer/CustomerProtocolRepository';

export class CreateReservationUseCase implements ICreateReservationUseCase {
  constructor(
    private readonly travelProtocolRepository: ITravelProtocolRepository,
    private readonly customerProtocolRepository: ICustomerProtocolRepository,
  ) {}
  async execute({
    idTravel,
    idStopOrigin,
    idStopDestiny,
    idCustomer,
    cpfCustomer,
  }: ICreateReservationUseCase.Params): Promise<ICreateReservationUseCase.Result> {
    const travel = await this.travelProtocolRepository.findById(idTravel);

    if (!travel) throw new Error('Viagem não encontrada');

    const quantity = travel.getQuantitySeatsBetweenStops(
      idStopOrigin,
      idStopDestiny,
    );
    if (!quantity) throw new Error('Não há vagas disponíveis');

    if (idCustomer) {
      const customer = await this.customerProtocolRepository.findById(
        idCustomer,
      );
      if (!customer) throw new Error('Cliente não encontrado');
    }

    const ticket = TicketFactory.create({
      destiny: idStopOrigin,
      origin: idStopOrigin,
    });

    return {
      id: ticket.id,
      idCustomer: idCustomer,
      idStop: idStopOrigin,
      idTravel: idTravel,
      seat: 2,
    };
  }
}
