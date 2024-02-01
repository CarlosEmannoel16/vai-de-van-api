import { v4 } from 'uuid';
import { Ticket } from '../entity/Ticket';

interface ParamsTicketFactoryCreate {
  id?: string;
  origin: string;
  destiny: string;
}

export class TicketFactory {
  static create(data: ParamsTicketFactoryCreate) {
    let idTicket = data.id;
    if (!idTicket) idTicket = v4();
    return new Ticket(idTicket, data.origin, data.destiny);
  }

  static mapCreate(data: ParamsTicketFactoryCreate[]): Ticket[] {
    return data.map(ticket => this.create(ticket));
  }
}
