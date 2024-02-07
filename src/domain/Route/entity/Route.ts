import { v4 } from 'uuid';
import { TripStop } from '../../TripStop/entity/TripStop';
import { Stop } from '@/domain/Stop/entity/Stop';
import { TripStopInterface } from '@/domain/TripStop/interface/TripStopInterface';
import { StopInterface } from '@/domain/Stop/interface/StopInterface';

export class Route {
  private _id: string;
  private _km: number;
  private _name: string;
  private _kmValue: number;
  private _tripStops: TripStopInterface[] = [];

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

  addTripStop(data: TripStopInterface[]) {
    let initial = false;
    let final = false;
    let orders = {};

    data.map(tripStop => {
      if (tripStop.isInitialStop && !initial) initial = true;
      if (tripStop.isInitialStop && initial)
        throw new Error('initial stop already exists');

      if (tripStop.isFinalStop) final = true;
      if (tripStop.isFinalStop && final)
        throw new Error('final stop already exists');

      if (orders[tripStop.stopOrder])
        throw new Error(
          'tripStopOrder already exists: order ' + tripStop.stopOrder,
        );
      orders[tripStop.stopOrder] = true;
    });

    this._tripStops = data;
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

  get tripStops(): TripStopInterface[] {
    return this._tripStops;
  }

  get amountOfStops(): number {
    return this._tripStops.length;
  }

  get quantityOfPassengers(): number {
    return 1;
  }

  get initialStop(): TripStopInterface {
    return this._tripStops.filter(tripStop => tripStop.isInitialStop)[0];
  }

  get finalStop(): TripStopInterface {
    return this._tripStops.filter(tripStop => tripStop.isFinalStop)[0];
  }
}
