export class Ticket {
  private id: string;
  private origin: string;
  private destiny: string;

  constructor(id: string, destiny: string, origin: string) {
    this.id = id;
    this.origin = origin;
    this.destiny = destiny;
  }

  get Id(): string {
    return this.id;
  }

  get Origin(): string {
    return this.origin;
  }

  get Destiny(): string {
    return this.destiny;
  }
}
