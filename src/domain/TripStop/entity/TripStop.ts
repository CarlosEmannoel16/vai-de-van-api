import { Ticket } from '@/domain/Ticket/entity/Ticket';
import { PricesBetweenStops } from '@/domain/models/PricesBetweenStops';
import { v4 } from 'uuid';

export class TripStop {
  private stopId: string;
  private cityId: string;
  private cityName: string;
  private tripStopOrder: number;
  private distanceFromLast: number;
  private isFinalStop: boolean = false;
  private isInitialStop: boolean = false;

  constructor(
    stopId = v4(),
    cityId: string,
    cityName: string,
    tripStopOrder: number,
    distanceFromLast: number,
  ) {
    this.stopId = stopId;
    this.cityId = cityId;
    this.tripStopOrder = tripStopOrder;
    this.distanceFromLast = distanceFromLast;
    this.cityName = cityName;
    this.validate();
  }

  private validate() {
    const fieldsMessage = [];
    if (this.tripStopOrder < 0)
      fieldsMessage.push('tripStopOrder must be greater than 0');
    if (!this.stopId) fieldsMessage.push('stopId is required');
    if (!this.cityId) fieldsMessage.push('cityId is required');
    if(!this.cityName) fieldsMessage.push('cityName is required');
    if (!this.tripStopOrder) fieldsMessage.push('tripStopOrder is required');

    if (fieldsMessage.length > 0) throw new Error(fieldsMessage.join(', '));
  }

  get StopId(): string {
    return this.stopId;
  }

  get TripStopOrder(): number {
    return this.tripStopOrder;
  }

  get DistanceFromLast(): number {
    return this.distanceFromLast;
  }

  get CityId(): string {
    return this.cityId;
  }

  get IsInitialStop(): boolean {
    return this.isInitialStop;
  }

  get IsFinalStop(): boolean {
    return this.isFinalStop;
  }

  get CityName(): string {
    return this.cityName;
  }

  setInitialStop(): void {
    if (this.isFinalStop) throw new Error('Parada final não pode ser inicial');
    const Messages = [];
    if (Messages.length > 0) throw new Error(Messages.join(', '));

    this.isInitialStop = true;
  }

  setFinalStop(): void {
    if (this.isInitialStop)
      throw new Error('Parada inicial não pode ser final');
    const Messages = [];
    if (this.distanceFromLast < 0)
      Messages.push('distanceFromNext must be greater than 0');

    if (Messages.length > 0) throw new Error(Messages.join(', '));
    this.isFinalStop = true;
  }

  setTripStopOrder(tripStopOrder: number): void {
    this.tripStopOrder = tripStopOrder;
  }


}
