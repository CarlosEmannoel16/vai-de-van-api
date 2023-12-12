import { Vehicle } from '../Vehicle/Vehicle';
import { TripStop } from './TripStop';
import { v4 } from 'uuid';

export class Route {
  private id: string;
  private name: string;
  private km: number;
  private kmValue: number;
  private destinyId: string;
  private originId: string;
  private stops: TripStop[];
  private vehicle: Vehicle;

  constructor(
    id = v4(),
    name: string,
    km: number,
    kmValue: number,
    destinyId: string,
    originId: string,
  ) {
    this.name = name;
    this.km = km;
    this.kmValue = kmValue;
    this.destinyId = destinyId;
    this.originId = originId;
    this.id = id;

    this.validate();
  }

  private validate() {
    const fieldsMessage = [];

    if (!this.name) fieldsMessage.push('name is required');
    if (!this.km) fieldsMessage.push('km is required');
    if (!this.kmValue) fieldsMessage.push('kmValue is required');
    if (!this.destinyId) fieldsMessage.push('destinyId is required');
    if (!this.originId) fieldsMessage.push('originId is required');
    if (!this.id) fieldsMessage.push('id is required');

    if (fieldsMessage.length > 0) {
      throw new Error(fieldsMessage.join(', '));
    }
  }

  setVehicle(vehicle: Vehicle) {
    if (this.vehicle) throw new Error('Vehicle already exists');
    this.vehicle = vehicle;
  }

  getName(): string {
    return this.name;
  }

  getKm(): number {
    return this.km;
  }

  getKmValue(): number {
    return this.kmValue;
  }
  getKmValueInReal(): string {
    return this.kmValue.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  addStop(data: TripStop) {
    const lastTripStop = this.getLastStop();
    this.stops.map(stop => {
      if (stop.getTripStopOrder() === data.getTripStopOrder())
        throw new Error('TripStopOrder already exists');
    });

    if (
      data.getTripStopOrder() + 1 > lastTripStop.getTripStopOrder() ||
      !data.getTripStopOrder()
    ) {
      data.setTripStopOrder(lastTripStop.getTripStopOrder() + 1);
    }
    this.stops.push(data);
  }

  getStops(): TripStop[] {
    return this.stops;
  }

  getLastStop(): TripStop {
    if (this.stops.length === 0) throw new Error('Stops is empty');
    return this.stops[this.stops.length - 1];
  }
}
