import { TicketStatus } from './TicketStatus';

export interface TicketInterface {
  get id(): string;
  get origin(): string;
  get destiny(): string;
  get status(): TicketStatus;
  changeStatus(status: TicketStatus): void;
}
