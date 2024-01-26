import { Ticket } from '../entity/Ticket';

interface ParamsTicketFactoryCreate {
  id: string;
  origin: string;
  destiny: string;
}

export class TicketFactory {
  static create(data: ParamsTicketFactoryCreate) {
    return new Ticket(data.id, data.origin, data.destiny);
  }

  static mapCreate(data: ParamsTicketFactoryCreate[]): Ticket[] {
    return data.map(ticket => this.create(ticket));
  }
}
