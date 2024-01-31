import { v4 } from 'uuid';

export class TripStop {
  private _stopId: string;
  private _cityId: string;
  private _cityName: string;
  private _tripStopOrder: number;
  private _distanceFromLast: number;
  private _isFinalStop: boolean = false;
  private _isInitialStop: boolean = false;

  constructor(
    stopId = v4(),
    cityId: string,
    cityName: string,
    tripStopOrder: number,
    distanceFromLast: number,
  ) {
    this._stopId = stopId;
    this._cityId = cityId;
    this._tripStopOrder = tripStopOrder;
    this._distanceFromLast = distanceFromLast;
    this._cityName = cityName;
    this.validate();
  }

  private validate() {
    const fieldsMessage = [];
    if (this._tripStopOrder < 0)
      fieldsMessage.push('tripStopOrder must be greater than 0');
    if (!this._stopId) fieldsMessage.push('stopId is required');
    if (!this._cityId) fieldsMessage.push('cityId is required');
    if (!this._cityName) fieldsMessage.push('cityName is required');
    if (!this._tripStopOrder) fieldsMessage.push('tripStopOrder is required');

    if (fieldsMessage.length > 0) throw new Error(fieldsMessage.join(', '));
  }

  get stopId(): string {
    return this._stopId;
  }

  get tripStopOrder(): number {
    return this._tripStopOrder;
  }

  get distanceFromLast(): number {
    return this._distanceFromLast;
  }

  get cityId(): string {
    return this._cityId;
  }

  get isInitialStop(): boolean {
    return this._isInitialStop;
  }

  get isFinalStop(): boolean {
    return this._isFinalStop;
  }

  get cityName(): string {
    return this._cityName;
  }

  setInitialStop(): void {
    if (this.isFinalStop) throw new Error('Parada final não pode ser inicial');
    const Messages = [];
    if (Messages.length > 0) throw new Error(Messages.join(', '));

    this._isInitialStop = true;
  }

  setFinalStop(): void {
    if (this.isInitialStop)
      throw new Error('Parada inicial não pode ser final');
    const Messages = [];
    if (this.distanceFromLast < 0)
      Messages.push('distanceFromNext must be greater than 0');

    if (Messages.length > 0) throw new Error(Messages.join(', '));
    this._isFinalStop = true;
  }

  setTripStopOrder(tripStopOrder: number): void {
    this._tripStopOrder = tripStopOrder;
  }
}
