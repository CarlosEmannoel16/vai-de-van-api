import { Vehicle } from '../Vehicle/Vehicle';
import { TripStop } from './TripStop';
import { v4 } from 'uuid';

export class Route {
  private id: string;
  private name: string;
  private km: number;
  private kmValue: number;
  private stops: TripStop[] = [];
  private vehicle: Vehicle;

  constructor(
    id = v4(),
    name: string,
    km: number,
    kmValue: number,
  ) {
    this.name = name;
    this.km = km;
    this.kmValue = kmValue;
    this.id = id;

    this.validate();
  }

  private validate() {
    const fieldsMessage = [];

    if (!this.name) fieldsMessage.push('name is required');
    if (!this.km) fieldsMessage.push('km is required');
    if (!this.kmValue) fieldsMessage.push('kmValue is required');
    if (!this.id) fieldsMessage.push('id is required');

    if (fieldsMessage.length > 0) {
      throw new Error(fieldsMessage.join(', '));
    }
  }

  setVehicle(vehicle: Vehicle) {
    if (this.vehicle) throw new Error('Vehicle already exists');
    this.vehicle = vehicle;
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
    const lastTripStop = this.LastStop;
    if (!this.stops.length) {
      data.setTripStopOrder(1);
      this.stops.push(data);
      return;
    }

    this.stops.map(stop => {
      if (stop.TripStopOrder === data.TripStopOrder)
        throw new Error('TripStopOrder already exists');
    });

    if (
      data.TripStopOrder + 1 > lastTripStop.TripStopOrder ||
      !data.TripStopOrder
    ) {
      data.setTripStopOrder(lastTripStop.TripStopOrder + 1);
    }
    this.stops.push(data);
  }
  get Id(): string {
    return this.id;
  }

  get Stops(): TripStop[] {
    return this.stops;
  }

  get LastStop(): TripStop {
    let lastStop = this.stops[0];
    this.stops.map(stop => {
      if (stop.TripStopOrder > lastStop.TripStopOrder) lastStop = stop;
    });
    return lastStop;
  }

  get AmountOfStops(): number {
    return this.stops.length;
  }

  get QuantityOfPassengers(): number {
    return 1;
  }


}
