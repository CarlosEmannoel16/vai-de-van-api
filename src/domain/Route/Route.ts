import { v4 } from 'uuid';
import { TripStop } from '../TripStop/entity/TripStop';
import { Vehicle } from '../Vehicle/entity/Vehicle';

export class Route {
  private id: string;
  private km: number;
  private name: string;
  private kmValue: number;
  private stops: TripStop[] = [];

  constructor(id = v4(), km: number, name: string, kmValue: number) {
    this.id = id;
    this.km = km;
    this.name = name;
    this.kmValue = kmValue;
    this.validate();
  }

  private validate() {
    const fieldsMessage = [];

    if (!this.km) fieldsMessage.push('km is required');
    if (!this.id) fieldsMessage.push('id is required');
    if (!this.name) fieldsMessage.push('name is required');
    if (!this.kmValue) fieldsMessage.push('kmValue is required');

    if (fieldsMessage.length > 0) throw new Error(fieldsMessage.join(', '));
  }

  get Name(): string {
    return this.name;
  }

  get Km(): number {
    return this.km;
  }

  get KmValue(): number {
    return this.kmValue;
  }
  get KmValueInReal(): string {
    return this.kmValue.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  addStop(data: TripStop) {

    this.stops.map(stop => {
      if (stop.TripStopOrder === data.TripStopOrder)
        throw new Error('TripStopOrder already exists');
    });

    this.stops.push(data);
  }

  get Id(): string {
    return this.id;
  }

  get Stops(): TripStop[] {
    return this.stops;
  }

  get AmountOfStops(): number {
    return this.stops.length;
  }

  get QuantityOfPassengers(): number {
    return 1;
  }
}
