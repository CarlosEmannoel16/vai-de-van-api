import { v4 } from 'uuid';
import { TripStop } from '../../TripStop/entity/TripStop';
import { Vehicle } from '../../Vehicle/entity/Vehicle';

export class Route {
  private _id: string;
  private _km: number;
  private _name: string;
  private _kmValue: number;
  private _stops: TripStop[] = [];
  private _initialStop: TripStop;
  private _finalStop: TripStop;

  constructor(id = v4(), km: number, name: string, kmValue: number) {
    this._id = id;
    this._km = km;
    this._name = name;
    this._kmValue = kmValue;
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

  addStop(data: TripStop) {
    let lastOrder = 1;
    this.stops?.map(stop => {
      if (stop.tripStopOrder === 1) this._initialStop = stop;
      if (stop.tripStopOrder === this.stops.length) this._finalStop = stop;
      if (stop.tripStopOrder === data.tripStopOrder)
        throw new Error(
          'tripStopOrder already exists: order ' + stop.tripStopOrder,
        );
    });

    this.stops.push(data);

    this.stops?.map(stop => {
      if (stop.tripStopOrder === 1) this._initialStop = stop;
      if (stop.tripStopOrder === this.stops.length) this._finalStop = stop;
    });
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get km(): number {
    return this._km;
  }

  get kmValue(): number {
    return this._kmValue;
  }

  get KmValueInReal(): string {
    return this._kmValue.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  get stops(): TripStop[] {
    return this._stops;
  }

  get amountOfStops(): number {
    return this._stops.length;
  }

  get quantityOfPassengers(): number {
    return 1;
  }

  get initialStop(): TripStop {
    return this._initialStop;
  }

  get finalStop(): TripStop {
    return this._finalStop;
  }
}
